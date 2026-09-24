const sources = [
  {
    label: "Discovery Call (September 24, 2026)",
    status: "Client-Provided",
    body: "Joe Hanko's estimated net worth (~$2M) and combined annual revenue (~$1.3M across three stores) were shared directly during the introductory call with LaTrina Gerstberger. These are his own estimates and have not been independently verified against a formal balance sheet.",
  },
  {
    label: "LinkedIn Profile (linkedin.com/in/joe-hanko)",
    status: "Confirmed",
    body: "Joe Hanko's role as Owner of The UPS Store since July 2018, 19+ years of prior sales/retail management experience, specific career accomplishments, Walnut Creek CA location, and education (BA Classical Humanities, Xavier University) were confirmed directly from his public profile.",
  },
  {
    label: "Franchise Directory (franchisefasttrack.io)",
    status: "Confirmed",
    body: "Joe Hanko's status as a multi-unit franchisee operating three The UPS Store (Non-Traditional) locations — Concord, Pittsburg, and Walnut Creek, California — was confirmed directly from this franchise operator directory listing.",
  },
  {
    label: "Market Definition",
    status: "Confirmed",
    body: "The market was narrowed to the East Bay Area, California — specifically Contra Costa County (Concord, Pittsburg, Walnut Creek) — based on franchise directory and LinkedIn location data.",
  },
  {
    label: "Franchise Agreement & Ownership Structure",
    status: "Not Confirmed",
    body: "Details of Joe Hanko's franchise agreement terms, lease terms, or any co-ownership structure were not confirmed. Recommendations referencing growth and continuity are based on general possibility, not confirmed structure.",
  },
  {
    label: "Tax Caveat",
    status: "Not Confirmed",
    body: "No tax analysis was performed for this portal. References to tax efficiency and deferred compensation are general in nature and should not be relied upon. All tax-related items must be reviewed by a qualified CPA or tax attorney before any recommendation is finalized.",
  },
];

const statusColor: Record<string, string> = {
  Confirmed: "text-emerald-400/80 border-emerald-400/30",
  "Client-Provided": "text-sky-400/80 border-sky-400/30",
  "Not Confirmed": "text-[var(--ivory-dim)] border-[var(--line)]",
};

export function SourcesSection() {
  return (
    <section className="px-6 md:px-16 py-24 md:py-32">
      <div className="flex items-center gap-4 mb-10">
        <div className="flex items-center gap-3">
          <span className="text-[11px] tracking-[0.3em] uppercase text-[var(--copper-light)]">
            Waypoint 07
          </span>
          <span className="h-px w-10 bg-[var(--copper)]/50" />
        </div>
        <span className="text-[11px] tracking-[0.3em] uppercase text-[var(--ivory-dim)]">
          Notes &amp; Sources
        </span>
      </div>

      <h2 className="font-display text-4xl md:text-5xl mb-14 max-w-2xl">
        What Was Confirmed and What Was Not
      </h2>

      <div className="space-y-0 border-t border-[var(--line)] max-w-4xl">
        {sources.map((s) => (
          <div key={s.label} className="grid md:grid-cols-[1fr_auto] gap-4 py-6 border-b border-[var(--line)]">
            <div>
              <p className="text-[var(--ivory)] font-medium mb-2">{s.label}</p>
              <p className="text-sm text-[var(--ivory-dim)] leading-relaxed">{s.body}</p>
            </div>
            <span
              className={`h-fit text-xs tracking-wide px-3 py-1 border rounded-full whitespace-nowrap ${statusColor[s.status]}`}
            >
              {s.status}
            </span>
          </div>
        ))}
      </div>

      <div className="max-w-4xl mt-14 border border-[var(--line)] bg-[var(--navy)]/60 p-8">
        <p className="text-[11px] tracking-[0.25em] uppercase text-[var(--copper-light)] mb-4">
          Advisor Note — LaTrina Gerstberger
        </p>
        <p className="text-sm text-[var(--ivory-dim)] leading-relaxed">
          This portal was prepared as a private advisory briefing for a conversation with Joe Hanko
          about whether Premium Finance may be worth discussing. It is not a formal financial plan,
          a tax opinion, a legal document, or a product recommendation. Nothing in this portal
          should be presented to Joe Hanko as a commitment or a guarantee. Before any formal
          recommendation is made, LaTrina should review Joe Hanko's current financial documents,
          confirm the details noted above, and ensure that Joe Hanko has had the opportunity to
          involve his own advisors.
        </p>
      </div>

      <p className="mt-10 text-xs tracking-wide text-[var(--ivory-dim)]/60">
        Prepared: September 2026 · Advisor: LaTrina Gerstberger · Client: Joe Hanko, The UPS Store (Non-Traditional) · Next Step: October 1, 2026, 1:00 PM PT / 3:00 PM CT
      </p>
    </section>
  );
}
