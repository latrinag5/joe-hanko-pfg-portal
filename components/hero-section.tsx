"use client";

import { ArrowRight, Phone } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 py-24 overflow-hidden border-b border-[var(--line)]">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 20% 0%, rgba(193,127,71,0.14), transparent 60%), radial-gradient(ellipse 60% 50% at 90% 100%, rgba(184,147,85,0.10), transparent 60%)",
        }}
      />
      <div className="relative max-w-4xl animate-fade-up">
        <div className="flex items-center gap-3 mb-8">
          <span className="h-px w-12 bg-[var(--copper)]" />
          <span className="text-xs tracking-[0.35em] uppercase text-[var(--copper-light)]">
            Confidential Advisory Briefing
          </span>
        </div>

        <h1 className="font-display text-5xl md:text-7xl leading-[1.05] mb-8 text-[var(--ivory)]">
          A Private Review of <em className="italic text-[var(--copper-light)]">Premium Finance</em> for Joe Hanko
        </h1>

        <p className="text-lg md:text-xl text-[var(--ivory-dim)] font-light max-w-2xl mb-6 leading-relaxed">
          Prepared by <span className="text-[var(--ivory)]">LaTrina Gerstberger</span> for a private conversation with the multi-unit owner of The UPS Store (Non-Traditional) — Concord, Pittsburg &amp; Walnut Creek, California.
        </p>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-12 text-sm text-[var(--ivory-dim)]">
          <span className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--copper-light)]" />
            Next Step: Analyst Call — <span className="text-[var(--ivory)]">Thursday, October 1, 2026 · 1:00 PM PT / 3:00 PM CT</span>
          </span>
          <a href="tel:8065726977" className="inline-flex items-center gap-2 text-[var(--copper-light)] hover:text-[var(--ivory)] transition-colors">
            <Phone className="h-3.5 w-3.5" />
            LaTrina Gerstberger · (806) 572-6977
          </a>
        </div>

        <div className="flex flex-wrap gap-5">
          <a
            href="#overview"
            className="group inline-flex items-center gap-2 bg-[var(--copper)] text-[var(--navy-deep)] px-7 py-3.5 text-sm tracking-wide font-medium hover:bg-[var(--copper-light)] transition-colors"
          >
            Begin Briefing
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#call-prep"
            className="inline-flex items-center gap-2 border border-[var(--line)] text-[var(--ivory)] px-7 py-3.5 text-sm tracking-wide hover:border-[var(--copper)]/60 transition-colors"
          >
            Advisor Call Prep
            <Phone className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 right-6 md:right-16 text-right hidden sm:block">
        <p className="text-[11px] tracking-[0.3em] uppercase text-[var(--ivory-dim)]/60">Waypoint 01 of 07</p>
        <p className="font-display text-xl text-[var(--copper-light)] mt-1">The UPS Store — East Bay, CA</p>
      </div>
    </section>
  );
}
