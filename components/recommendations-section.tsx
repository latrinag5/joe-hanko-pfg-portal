import { WaypointLabel } from "@/components/waypoint-label";

const recs = [
  {
    n: "01",
    tag: "Personal Estate & Family Protection",
    title: "Owner-Funded Protection Strategy",
    body: "Joe Hanko's net worth is concentrated across real estate and business equity — both valuable, but not the most liquid assets. A Premium Finance arrangement may allow a funding partner to help cover the cost of a meaningful program, preserving personal liquidity while establishing a wealth transfer resource for his family that doesn't depend on selling the home or the business.",
  },
  {
    n: "02",
    tag: "Business Protection",
    title: "Key-Person Continuity Across Three Locations",
    body: "Joe Hanko's hands-on leadership across all three stores is central to how the business runs. A key-person financial protection program ensures the business has a financial resource available to support continuity across all three units, whatever the future holds.",
  },
  {
    n: "03",
    tag: "Business Growth & Networking",
    title: "Capital-Efficient Growth Strategy",
    body: "Joe Hanko is exploring stronger local networking to grow the higher-margin print and business-services side of his stores. A Premium Finance arrangement that frees up working capital gives him more room to invest in that growth without pulling cash from day-to-day operations.",
  },
  {
    n: "04",
    tag: "Business Cash Flow",
    title: "Multi-Site Working Capital Efficiency",
    body: "Running three retail locations means recurring capital demands — equipment refreshes, staffing across sites, and lease renewals that don't happen on the same schedule. A Premium Finance arrangement that shifts the cost of a financial protection program to an outside funding partner frees working capital for those ongoing multi-site needs, letting Joe Hanko's own capital keep working inside the business.",
  },
  {
    n: "05",
    tag: "Diversification & Future Liquidity",
    title: "Deferred Compensation or Diversification Liquidity",
    body: "Joe Hanko has an entrepreneurial eye toward diversifying into new ventures down the road. A Premium Finance program with a cash-value component can serve as a deferred compensation vehicle or a future liquidity source — funding a future venture or a phased step back from day-to-day store coverage without triggering a taxable event today.",
  },
];

export function RecommendationsSection() {
  return (
    <section className="px-6 md:px-16 py-24 md:py-32 border-b border-[var(--line)]">
      <WaypointLabel number="03" label="Tailored Recommendations" />
      <h2 className="font-display text-4xl md:text-5xl mb-6 max-w-2xl">Five Areas Worth Discussing</h2>
      <p className="text-[var(--ivory-dim)] max-w-2xl mb-16 leading-relaxed">
        Each of the following represents a potential application of Premium Finance relevant to Joe
        Hanko's situation as a multi-unit franchise owner operating The UPS Store across the East
        Bay. None of these are formal recommendations — they are conversation starters for the
        October 1st advisory call.
      </p>

      <div className="space-y-0">
        {recs.map((r, i) => (
          <div
            key={r.n}
            className={`grid md:grid-cols-[100px_1fr] gap-6 md:gap-12 py-10 ${
              i !== recs.length - 1 ? "border-b border-[var(--line)]" : ""
            }`}
          >
            <div>
              <span className="font-display text-4xl text-[var(--copper)]/70">{r.n}</span>
            </div>
            <div>
              <p className="text-xs tracking-[0.25em] uppercase text-[var(--copper-light)] mb-2">{r.tag}</p>
              <h3 className="font-display text-2xl md:text-3xl mb-4">{r.title}</h3>
              <p className="text-[var(--ivory-dim)] leading-relaxed max-w-3xl">{r.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
