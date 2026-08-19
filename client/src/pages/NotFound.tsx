/** Signal Ledger 404 page — minimal, navigable, and consistent with the portfolio. */
import { ArrowLeft } from "lucide-react";
import { assetUrls } from "@/data/portfolio";

export default function NotFound() {
  return (
    <main className="paper-grain flex min-h-screen items-center justify-center bg-[#faf9f5] px-6 text-[#101c3d]">
      <div className="max-w-md text-center"><img src={assetUrls.logo} alt="FN signal mark" className="mx-auto h-16 w-16" /><p className="mono-type mt-8 text-xs font-semibold tracking-[0.15em] text-primary">404 / SIGNAL LOST</p><h1 className="display-type mt-4 text-5xl font-semibold tracking-[-0.07em]">This page isn’t in the ledger.</h1><p className="mt-5 text-base leading-8 text-slate-600">The address may have changed, or the page has not been indexed yet.</p><a href="/" className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-bold text-white transition hover:bg-[#175bdd] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"><ArrowLeft className="h-4 w-4" />Return to portfolio</a></div>
    </main>
  );
}
