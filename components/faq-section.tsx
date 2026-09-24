"use client";

import { useState } from "react";
import { WaypointLabel } from "@/components/waypoint-label";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "Is this just another way to sell me a financial product?",
    a: "No. This portal exists to lay out whether a funding arrangement is worth discussing at all — not to move Joe Hanko toward a decision before it makes sense. The goal is not to sell Joe Hanko a program. The goal is to determine whether having somebody else help pay for a financial protection program makes sense, given the capital needs of his three active locations and his personal financial picture. If the numbers do not work, the honest answer is to walk away, and that answer is treated as a success, not a failure.",
  },
  {
    q: "Why would I have somebody else fund this program?",
    a: "Because Joe Hanko's own capital has better uses right now — supporting leases, staffing, and equipment across three active UPS Store locations, plus room to invest in growth. If a funding partner can cover the cost of a financial protection program instead, that capital stays working in the business.",
  },
  {
    q: "What is the biggest risk?",
    a: "The arrangement typically depends on interest-rate spreads and may require collateral. Those terms are reviewed in full before any recommendation, including what happens if rates move against the arrangement or if the program needs to be unwound early.",
  },
  {
    q: "What if I need cash for the business later?",
    a: "That is one of the first questions this design process answers — how much working capital needs to stay untouched across all three locations, and how the arrangement is structured so it does not compete with those needs.",
  },
  {
    q: "Can this help my family and my company at the same time?",
    a: "That is the core premise worth testing. A single financial protection program funded this way can be designed to support both family liquidity and continuity across Joe Hanko's three UPS Store locations — the question is whether the specific numbers make that work for his situation.",
  },
  {
    q: "How do I know if I can trust the recommendation?",
    a: "Nothing in this portal is a final recommendation. Every number should be reviewed against Joe Hanko's actual balance sheet, and any tax-related item must be confirmed independently by his own CPA or attorney before anything is finalized.",
  },
];

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="px-6 md:px-16 py-24 md:py-32 border-b border-[var(--line)] bg-[var(--navy)]/30">
      <WaypointLabel number="06" label="Frequently Asked Questions" />
      <h2 className="font-display text-4xl md:text-5xl mb-14 max-w-2xl">
        Plain Answers to Likely Questions
      </h2>

      <div className="max-w-3xl border-t border-[var(--line)]">
        {faqs.map((f, i) => (
          <div key={f.q} className="border-b border-[var(--line)]">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between gap-6 py-6 text-left"
            >
              <span className="font-display text-lg md:text-xl">{f.q}</span>
              <Plus
                className={cn(
                  "h-5 w-5 shrink-0 text-[var(--copper-light)] transition-transform",
                  open === i && "rotate-45"
                )}
              />
            </button>
            {open === i && (
              <p className="pb-6 text-sm text-[var(--ivory-dim)] leading-relaxed max-w-2xl">{f.a}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
