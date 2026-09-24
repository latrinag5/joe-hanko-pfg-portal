import { WaypointLabel } from "@/components/waypoint-label";
import { Package, TrendingUp, MapPin } from "lucide-react";

const stats = [
  { label: "Name", value: "Joe Hanko" },
  { label: "Title", value: "Owner / Multi-Unit Franchisee" },
  { label: "Business", value: "The UPS Store (Non-Traditional)" },
  { label: "Industry", value: "Franchise — Retail / Professional Services" },
  { label: "Market", value: "East Bay Area, CA (Concord, Pittsburg, Walnut Creek)" },
  { label: "Business Ownership Tenure", value: "8 Years (since July 2018)" },
  { label: "Locations", value: "3 Units" },
  { label: "Estimated Net Worth", value: "~$2 Million" },
  { label: "Estimated Combined Revenue", value: "~$1.3M / year" },
  { label: "Advisor", value: "LaTrina Gerstberger" },
];

export function OverviewSection() {
  return (
    <section id="overview" className="px-6 md:px-16 py-24 md:py-32 border-b border-[var(--line)]">
      <WaypointLabel number="01" label="Client Overview" />

      <h2 className="font-display text-4xl md:text-5xl mb-8 max-w-2xl">Who Is Joe Hanko</h2>

      <div className="grid md:grid-cols-3 gap-16">
        <div className="md:col-span-2 space-y-5 text-[var(--ivory-dim)] leading-relaxed">
          <p>
            Joe Hanko is a 19-year retail sales and operations veteran who has owned The UPS Store
            (Non-Traditional) since July 2018. He operates three locations across the East Bay —
            Concord, Pittsburg, and Walnut Creek, California — with an estimated net worth around $2
            million and combined annual revenue in the range of $1.3 million across all three
            stores.
          </p>
          <p>
            Earlier in his career, Joe Hanko built two campus bookstore locations from zero to a
            combined $3.8 million in revenue, and led a flagship Berkeley store to $9 million in
            annual sales at UC Berkeley's CAL Student Store. That operating and growth track record
            carries directly into how he thinks about his current business.
          </p>
          <p>
            Today, Joe Hanko is thinking seriously about how to make his capital work harder — both
            growing the print and business-services side of his stores through stronger local
            networking, and exploring diversification into additional ventures over time. He is
            practical and numbers-driven, and values understanding exactly how a strategy works
            before moving forward with it.
          </p>
        </div>

        <div className="border border-[var(--line)] bg-[var(--navy)]/60 p-8">
          <p className="text-[11px] tracking-[0.25em] uppercase text-[var(--copper-light)] mb-6">
            Client at a Glance
          </p>
          <dl className="space-y-4">
            {stats.map((s) => (
              <div key={s.label} className="flex justify-between gap-4 border-b border-[var(--line)] pb-3 last:border-0 last:pb-0">
                <dt className="text-sm text-[var(--ivory-dim)]">{s.label}</dt>
                <dd className="text-sm text-right text-[var(--ivory)]">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-6 mt-16">
        <div className="border-t border-[var(--copper)]/40 pt-5">
          <Package className="h-5 w-5 text-[var(--copper-light)] mb-3" />
          <h3 className="font-display text-xl mb-2">Multi-Unit Franchise</h3>
          <p className="text-sm text-[var(--ivory-dim)] leading-relaxed">
            Joe Hanko operates three The UPS Store locations across the East Bay, giving him scale
            most single-location owners don't have.
          </p>
        </div>
        <div className="border-t border-[var(--copper)]/40 pt-5">
          <TrendingUp className="h-5 w-5 text-[var(--copper-light)] mb-3" />
          <h3 className="font-display text-xl mb-2">Growth-Minded Operator</h3>
          <p className="text-sm text-[var(--ivory-dim)] leading-relaxed">
            A track record of turning stores around and growing revenue from scratch shapes how Joe
            Hanko approaches new opportunities.
          </p>
        </div>
        <div className="border-t border-[var(--copper)]/40 pt-5">
          <MapPin className="h-5 w-5 text-[var(--copper-light)] mb-3" />
          <h3 className="font-display text-xl mb-2">East Bay Concentration</h3>
          <p className="text-sm text-[var(--ivory-dim)] leading-relaxed">
            All three of Joe Hanko's locations sit within Contra Costa County — a market he knows
            deeply.
          </p>
        </div>
      </div>
    </section>
  );
}
