export const Chip = ({ children, variant = "default", className = "" }) => {
  const v = {
    default: "border-border bg-white text-text-secondary",
    amber: "border-amber/40 bg-amber/10 text-amber font-medium",
    orange: "border-orange/40 bg-orange/10 text-orange font-medium",
    pink: "border-pink/40 bg-pink/10 text-pink font-medium",
    purple: "border-purple/40 bg-purple/10 text-purple font-medium",
    cyan: "border-cyan/40 bg-cyan/10 text-cyan font-medium",
    emerald: "border-emerald/40 bg-emerald/10 text-emerald font-medium",
  };
  return <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${v[variant]} ${className}`}>{children}</span>;
};

export const Metric = ({ label, value, tone = "neutral" }) => {
  const t = { 
    green: "text-emerald", 
    amber: "text-amber", 
    neutral: "text-text-primary", 
    orange: "text-orange", 
    cyan: "text-cyan", 
    purple: "text-purple",
    pink: "text-pink"
  };
  return <div className="flex flex-col"><span className="text-xs uppercase tracking-wider text-text-tertiary">{label}</span><span className={`font-display text-xl font-bold ${t[tone]}`}>{value}</span></div>;
};

export const CourseChip = ({ title, subtitle, color = "purple" }) => {
  const c = { 
    purple: "border-purple/30 hover:border-purple/50", 
    cyan: "border-cyan/30 hover:border-cyan/50", 
    orange: "border-orange/30 hover:border-orange/50", 
    pink: "border-pink/30 hover:border-pink/50",
    emerald: "border-emerald/30 hover:border-emerald/50"
  };
  return (
    <div className={`rounded-xl border bg-white p-4 shadow-md transition-all card-hover ${c[color]}`}>
      <p className="font-display text-base font-semibold text-text-primary">{title}</p>
      <p className="text-xs text-text-tertiary">{subtitle}</p>
    </div>
  );
};