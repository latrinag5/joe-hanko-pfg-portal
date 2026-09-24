import { WaypointLabel } from "@/components/waypoint-label";

const steps = [
  {
    n: "01",
    title: "Design the Program First",
    body: "Before any funding discussion, the financial protection program is designed around Joe Hanko's actual goals: family protection, continuity across his three UPS Store locations, and long-term liquidity.",
  },
  {
    n: "02",
    title: "Evaluate the Funding Arrangement",
    body: "A Premium Finance arrangement is then modeled — showing what a funding partner would cover, what collateral would be required, and what the net benefit looks like under conservative, base, and stress scenarios.",
  },
  {
    n: "03",
    title: "Review the Risks Honestly",
    body: "Interest-rate risk, collateral requirements, and exit provisions are reviewed in full. No arrangement is recommended unless the risk-adjusted benefit is clear and the exit path is defined.",
  },
  {
    n: "04",
    title: "Decide with Full Information",
    body: "Joe Hanko decides whether the arrangement fits — with no pressure and no obligation. If the numbers do not work, that is a clear answer. If they do, the next step is a formal design review with the analyst on October 1st.",
  },
];

export function ExplanationSection() {
  return (
    <section className="px-6 md:px-16 py-24 md:py-32 border-b border-[var(--line)] bg-[var(--navy)]/30">
      <WaypointLabel number="02" label="What Is Premium Finance" />
      <h2 className="font-display text-4xl md:text-5xl mb-8 max-w-2xl">Understanding the Arrangement</h2>

      <div className="grid md:grid-cols-2 gap-16">
        <div className="space-y-5 text-[var(--ivory-dim)] leading-relaxed">
          <p className="text-sm tracking-[0.2em] uppercase text-[var(--copper-light)] mb-2">
            Why Joe Hanko Is Exploring This
          </p>
          <p>
            As a multi-unit franchise owner, Joe Hanko's capital is best used growing and supporting
            three active storefronts — not tied up in a large upfront cost for a protection program.
          </p>
          <p>
            <strong className="text-[var(--ivory)]">Premium Finance</strong> is a financial
            arrangement in which a third-party funding partner helps pay for the cost of a large
            financial protection program — rather than the owner paying those costs out of pocket
            or out of business cash flow.
          </p>
          <p>
            The core question it answers is simple: <em className="italic text-[var(--ivory)]">Why
            would I have somebody else fund this program?</em> The answer, for a business owner
            like Joe Hanko, is that his working capital has better uses — supporting three active
            locations and future growth plans. If a funding partner can help cover the cost of a
            financial protection program that serves Joe Hanko's family and his franchise business,
            while that capital stays available across his stores, the arrangement may be worth
            examining.
          </p>
        </div>

        <div className="relative border-l-2 border-[var(--copper)]/40 pl-8 space-y-10">
          {steps.map((s) => (
            <div key={s.n} className="relative">
              <span className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[var(--copper)] flex items-center justify-center" />
              <p className="text-xs tracking-[0.2em] text-[var(--copper-light)] mb-1">{s.n}</p>
              <h3 className="font-display text-xl mb-2">{s.title}</h3>
              <p className="text-sm text-[var(--ivory-dim)] leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
