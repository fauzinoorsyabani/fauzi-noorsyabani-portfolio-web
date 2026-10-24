"""One-off: convert site images to WebP, add new certificates, back up originals outside public/."""
import re
import shutil
from pathlib import Path

from PIL import Image, ImageChops

ROOT = Path(r"d:\Code\fauzi-noorsyabani-portfolio-web")
PUBLIC = ROOT / "client" / "public"
SRC = ROOT / "client" / "src"
SRC_CERTS = ROOT / "doc-fauzi" / "certificate"
BACKUP = ROOT / "doc-fauzi" / "originals-backup"

NEW_CERTS = {
    "gemini-certified-student": ("Gemini Certified University Student_page-0001.jpg", False),
    "ibm-granite-learning-path": (
        "Completion Certificate _ SkillsBuild_Data Classification and Summarization Using IBM Granite_page-0001 (1).jpg",
        True,
    ),
    "libsos-siliwangi": ("Sertifikat Liga Bisni Sosial Siliwangi_Fauzi Noorsyabani.jpeg", False),
}


def autocrop_white(img: Image.Image) -> Image.Image:
    bg = Image.new(img.mode, img.size, (255, 255, 255))
    bbox = ImageChops.difference(img, bg).getbbox()
    return img.crop(bbox) if bbox else img


def save_webp(img: Image.Image, dest: Path, max_w: int) -> None:
    img = img.convert("RGB")
    if img.width > max_w:
        img = img.resize((max_w, round(img.height * max_w / img.width)), Image.LANCZOS)
    dest.parent.mkdir(parents=True, exist_ok=True)
    img.save(dest, "WEBP", quality=80, method=6)


# 1. New certificates
for name, (fname, crop) in NEW_CERTS.items():
    img = Image.open(SRC_CERTS / fname).convert("RGB")
    if crop:
        img = autocrop_white(img)
    save_webp(img, PUBLIC / "certificates" / f"{name}.webp", 1100)

# 2. Convert every raster in public/ and back up originals
converted = {}
for p in list(PUBLIC.rglob("*")):
    if p.suffix.lower() in {".png", ".jpg", ".jpeg"}:
        rel = p.relative_to(PUBLIC)
        dest = p.with_suffix(".webp")
        max_w = 600 if "foto" in p.name else 1400
        save_webp(Image.open(p), dest, max_w)
        converted[rel.as_posix()] = dest.relative_to(PUBLIC).as_posix()
        target = BACKUP / rel
        target.parent.mkdir(parents=True, exist_ok=True)
        shutil.move(str(p), str(target))

# 3. Rewrite references in source
pattern = re.compile(r"(/[\w\-/\.]+)\.(?:png|jpe?g)\b")
for f in SRC.rglob("*"):
    if f.suffix in {".ts", ".tsx", ".css", ".html"}:
        t = f.read_text(encoding="utf-8")
        n = pattern.sub(lambda m: m.group(1) + ".webp", t)
        if n != t:
            f.write_text(n, encoding="utf-8")
            print("updated", f.name)

print(len(converted), "converted")
