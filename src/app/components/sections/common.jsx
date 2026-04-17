export const Chip = ({ children, variant = "default", className = "" }) => {
  const v = {
    default: "border-border-light bg-white text-text-gray",
    gold: "border-gold/30 bg-gold/8 text-gold",
    cyan: "border-cyan-accent/30 bg-cyan-accent/5 text-cyan-accent",
    purple: "border-purple-accent/30 bg-purple-accent/5 text-purple-accent",
    pink: "border-pink-accent/30 bg-pink-accent/5 text-pink-accent",
    emerald: "border-emerald-accent/30 bg-emerald-accent/5 text-emerald-accent",
  };
  return <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium shadow-sm ${v[variant]} ${className}`}>{children}</span>;
};

export const Metric = ({ label, value, tone = "neutral" }) => {
  const t = { green: "text-emerald-accent", amber: "text-orange-accent", neutral: "text-text-dark", gold: "text-gold", cyan: "text-cyan-accent", purple: "text-purple-accent" };
  return <div className="flex flex-col"><span className="text-xs uppercase text-text-light">{label}</span><span className={`text-lg font-semibold ${t[tone]}`}>{value}</span></div>;
};

export const CourseChip = ({ title, subtitle, color = "purple" }) => {
  const c = { purple: "border-purple-accent/20", cyan: "border-cyan-accent/20", gold: "border-gold/20", pink: "border-pink-accent/20" };
  return <div className={`rounded-xl border bg-white p-4 shadow-card-soft transition-all hover:shadow-card-hover hover:-translate-y-1 ${c[color]}`}><p className="text-sm font-semibold text-text-dark">{title}</p><p className="text-xs text-text-light">{subtitle}</p></div>;
};