export const Chip = ({ children, variant = "default", className = "" }) => {
  const v = {
    default: "border-border-light bg-white text-text-gray",
    gold: "border-gold/30 bg-amber-50 text-gold",
    cyan: "border-cyan-accent/30 bg-cyan-50 text-cyan-accent",
    purple: "border-purple-accent/30 bg-purple-50 text-purple-accent",
    pink: "border-pink-accent/30 bg-pink-50 text-pink-accent",
  };
  return <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${v[variant]} ${className}`}>{children}</span>;
};

export const Metric = ({ label, value, tone = "neutral" }) => {
  const t = { green: "text-emerald-accent", amber: "text-amber-600", neutral: "text-text-dark", gold: "text-gold", cyan: "text-cyan-accent", purple: "text-purple-accent", pink: "text-pink-accent" };
  return <div className="flex flex-col"><span className="text-[10px] uppercase tracking-wider text-text-light xl:text-xs">{label}</span><span className={`text-base font-bold xl:text-lg ${t[tone]}`}>{value}</span></div>;
};