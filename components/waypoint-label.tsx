interface WaypointLabelProps {
  number: string;
  label: string;
}

export function WaypointLabel({ number, label }: WaypointLabelProps) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <div className="flex items-center gap-3">
        <span className="text-[11px] tracking-[0.3em] uppercase text-[var(--copper-light)]">
          Waypoint {number}
        </span>
        <span className="h-px w-10 bg-[var(--copper)]/50" />
      </div>
      <span className="text-[11px] tracking-[0.3em] uppercase text-[var(--ivory-dim)]">
        {label}
      </span>
    </div>
  );
}
