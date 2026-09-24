"use client";

import { useState } from "react";
import { WaypointLabel } from "@/components/waypoint-label";
import { ChevronDown, Phone, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = [
  {
    title: "Owner Priorities",
    items: [
      "How does Joe Hanko currently think about the difference between protecting his family's wealth and growing his three UPS Store locations — and where does Premium Finance fit in that picture?",
      "What does Joe Hanko consider his top financial priority in the next three to five years — expanding to more units, diversifying into a new venture, or personal liquidity?",
      "What does he see as the next stage for his three locations — continued ownership, a fourth location, or a change in focus?",
    ],
  },
  {
    title: "Business Cash Needs",
    items: [
      "What does the typical capital cycle look like across all three locations — equipment refreshes, lease renewals, staffing costs?",
      "Are there near-term plans (a fourth location, renovations, expanded services, new ventures) that would benefit from additional liquidity?",
      "How much working capital does Joe Hanko consider a comfortable floor across the three-unit operation?",
    ],
  },
  {
    title: "Risk Comfort",
    items: [
      "How does Joe Hanko think about interest-rate risk — is he comfortable with a structure where the net benefit depends on rate spreads?",
      "Is he willing to pledge assets as collateral for a funding arrangement, and if so, what would he consider?",
      "Has he used outside financing structures before as a franchise owner, and what was his experience?",
    ],
  },
  {
    title: "Exit & Succession",
    items: [
      "Does Joe Hanko have any long-term plan for his three locations — continued ownership, a family transition, or an eventual sale?",
      "What is his target timeline for reducing day-to-day involvement across his locations, if any?",
    ],
  },
  {
    title: "Tax & Legal Assumptions",
    items: [
      "Has Joe Hanko worked with a CPA or estate planning attorney recently, and are there existing structures that would affect program design?",
      "Note: No tax advice is provided in this portal. All tax-related items must be reviewed by a qualified tax advisor before any recommendation is finalized.",
    ],
  },
];

const mustReview = [
  "Current balance sheet — personal and business — to confirm liquidity and collateral availability across all three locations.",
  "Existing financial protection programs already in place, if any.",
  "Franchise agreement terms, lease terms, and any co-ownership or partnership structure across the three units.",
  "Joe Hanko's personal estate plan, including any existing trusts or beneficiary designations.",
  "Independent review by Joe Hanko's CPA and/or attorney before any formal commitment.",
];

export function CallPrepSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="call-prep" className="px-6 md:px-16 py-24 md:py-32 border-b border-[var(--line)]">
      <WaypointLabel number="05" label="Advisor Call Preparation" />
      <h2 className="font-display text-4xl md:text-5xl mb-6 max-w-2xl">
        LaTrina Gerstberger's Call Guide
      </h2>

      <div className="flex items-start gap-4 border border-[var(--copper)]/40 bg-[var(--navy)]/60 p-6 max-w-2xl mb-14">
        <Calendar className="h-5 w-5 text-[var(--copper-light)] shrink-0 mt-0.5" />
        <div>
          <p className="text-sm tracking-[0.15em] uppercase text-[var(--copper-light)] mb-1">Next Step Scheduled</p>
          <p className="text-[var(--ivory)]">
            Analyst call with Joe Hanko — <strong>Thursday, October 1, 2026, 1:00 PM Pacific / 3:00 PM Central</strong>
          </p>
        </div>
      </div>

      <p className="text-[var(--ivory-dim)] max-w-2xl mb-14 leading-relaxed">
        The following items are designed to help LaTrina Gerstberger have a productive, practical
        conversation with Joe Hanko. These are not sales talking points — they are the questions
        that must be answered before any formal recommendation can be made.
      </p>

      <div className="max-w-3xl border-t border-[var(--line)]">
        {categories.map((cat, i) => (
          <div key={cat.title} className="border-b border-[var(--line)]">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between py-6 text-left gap-4"
            >
              <span className="font-display text-xl md:text-2xl">{cat.title}</span>
              <ChevronDown
                className={cn(
                  "h-5 w-5 shrink-0 text-[var(--copper-light)] transition-transform",
                  open === i && "rotate-180"
                )}
              />
            </button>
            {open === i && (
              <ul className="pb-6 space-y-3">
                {cat.items.map((item) => (
                  <li key={item} className="text-sm text-[var(--ivory-dim)] leading-relaxed pl-5 relative">
                    <span className="absolute left-0 top-2 h-1 w-1 rounded-full bg-[var(--copper)]" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <div className="mt-16 border border-[var(--line)] bg-[var(--navy)]/60 p-8 max-w-3xl">
        <p className="text-[11px] tracking-[0.25em] uppercase text-[var(--copper-light)] mb-5">
          What Must Be Reviewed Before Any Recommendation
        </p>
        <ul className="space-y-3">
          {mustReview.map((item) => (
            <li key={item} className="text-sm text-[var(--ivory-dim)] leading-relaxed pl-5 relative">
              <span className="absolute left-0 top-2 h-1 w-1 rounded-full bg-[var(--copper)]" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-16 max-w-3xl">
        <p className="font-display text-2xl mb-2">Ready to have this conversation?</p>
        <p className="text-sm text-[var(--ivory-dim)] mb-6 leading-relaxed">
          This call is a private conversation, not a sales presentation. The goal is to determine
          whether Premium Finance is worth a closer look — nothing more.
        </p>
        <a href="tel:8065726977" className="inline-flex items-center gap-2 text-[var(--copper-light)] hover:text-[var(--ivory)] transition-colors">
          <Phone className="h-4 w-4" />
          <span className="text-sm tracking-wide">LaTrina Gerstberger, Advisor · (806) 572-6977</span>
        </a>
      </div>
    </section>
  );
}
