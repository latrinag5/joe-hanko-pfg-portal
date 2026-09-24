import { WaypointLabel } from "@/components/waypoint-label";
import { Shield, Home, Users, DollarSign, ArrowRight } from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Capital Preservation",
    body: "Keep working capital available across all three UPS Store locations — leases, staffing, and equipment — rather than directing it toward a large financial protection program.",
  },
  {
    icon: Home,
    title: "Estate Liquidity",
    body: "A financial protection program funded through a Premium Finance arrangement can provide liquidity for Joe Hanko's family without requiring a forced sale of the home or franchise assets.",
  },
  {
    icon: Shield,
    title: "Business Continuity",
    body: "Key-person structures protect all three locations from disruption, supporting the business Joe Hanko has built across Concord, Pittsburg, and Walnut Creek.",
  },
  {
    icon: Users,
    title: "Room to Grow",
    body: "A liquidity cushion supports Joe Hanko's networking and print-margin growth plans without competing with day-to-day operating cash needs.",
  },
  {
    icon: ArrowRight,
    title: "Flexibility at Exit",
    body: "A well-structured program can serve as a deferred compensation vehicle or a source of liquidity — giving Joe Hanko options as he grows, diversifies, or eventually transitions out of the business.",
  },
];

export function BenefitsSection() {
  return (
    <section className="px-6 md:px-16 py-24 md:py-32 border-b border-[var(--line)] bg-[var(--navy)]/30">
      <WaypointLabel number="04" label="Owner Benefits" />
      <h2 className="font-display text-4xl md:text-5xl mb-8 max-w-2xl">
        Why This Conversation Matters Now
      </h2>
      <p className="text-[var(--ivory-dim)] max-w-2xl mb-16 leading-relaxed">
        After 19 years in retail sales and operations and 8 years building a three-location
        franchise territory, Joe Hanko has built real operating equity across Concord, Pittsburg,
        and Walnut Creek. A Premium Finance arrangement, if it fits, can support his next stage of
        growth and diversification — without requiring him to redirect working capital away from
        any of his three locations or make irreversible decisions before he is ready.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--line)] border border-[var(--line)]">
        {benefits.map((b) => (
          <div key={b.title} className="bg-[var(--navy-deep)] p-8">
            <b.icon className="h-5 w-5 text-[var(--copper-light)] mb-4" />
            <h3 className="font-display text-xl mb-3">{b.title}</h3>
            <p className="text-sm text-[var(--ivory-dim)] leading-relaxed">{b.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
