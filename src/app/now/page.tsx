import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Now — Alex Vovchuk",
  description: "What I'm focused on this month.",
};

export default function NowPage() {
  return (
    <main className="bg-bg text-ink">
      <div className="mx-auto w-full max-w-2xl px-6 sm:px-8 lg:px-12">
        <nav className="pt-10 sm:pt-14 pb-12">
          <Link
            href="/"
            className="font-mono text-xs uppercase tracking-widest text-muted hover:text-accent transition-colors"
          >
            ← Alex Vovchuk
          </Link>
        </nav>

        <article className="pb-24">
          <header className="mb-12">
            <p className="font-mono text-xs uppercase tracking-widest text-muted mb-4">
              Now · May 2026 · Denver
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl leading-tight tracking-tight font-medium">
              What I&rsquo;m focused on this month.
            </h1>
          </header>

          <div className="space-y-6 text-lg leading-relaxed text-ink/90">
            <p>
              Leading the UI for AI Screening inside LinkedIn&rsquo;s Hiring
              Assistant. The interesting work lives in the seams — how to make
              the model&rsquo;s confidence legible without overselling it, how
              to give recruiters a clean way to disagree with it, how to fail
              honestly when the model isn&rsquo;t sure.
            </p>
            <p>
              Reading more about evals for LLM-based product features. Lots of
              opinions in the space, less consensus than you&rsquo;d expect.
            </p>
            <p>
              Off the keyboard: shoulder season. Too late for skis, too early
              for the bike legs to feel right. Trying to fix the second part
              with discipline.
            </p>
          </div>

          <hr className="border-rule my-12" />

          <p className="text-sm text-muted leading-relaxed">
            This is a{" "}
            <a
              href="https://nownownow.com/about"
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-accent/40 hover:border-accent transition-colors"
            >
              /now page ↗
            </a>
            — what I&rsquo;m up to as of the date above, updated every couple
            of months.
          </p>
        </article>
      </div>
    </main>
  );
}
