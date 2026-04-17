export const Chip = ({ children, variant = "default", className = "" }) => {
  const v = {
    default: "border-border-light bg-white text-text-gray shadow-sm",
    gold: "border-gold/50 bg-gold/12 text-gold font-medium shadow-sm",
    cyan: "border-cyan-accent/50 bg-cyan-accent/8 text-cyan-accent font-medium shadow-sm",
    purple: "border-purple-accent/50 bg-purple-accent/8 text-purple-accent font-medium shadow-sm",
    pink: "border-pink-accent/50 bg-pink-accent/8 text-pink-accent font-medium shadow-sm",
    emerald: "border-emerald-accent/50 bg-emerald-accent/8 text-emerald-accent font-medium shadow-sm",
  };
  return <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs ${v[variant]} ${className}`}>{children}</span>;
};

export const Metric = ({ label, value, tone = "neutral" }) => {
  const t = { 
    green: "text-emerald-accent", 
    amber: "text-orange-accent", 
    neutral: "text-text-dark", 
    gold: "text-gold", 
    cyan: "text-cyan-accent", 
    purple: "text-purple-accent" 
  };
  return <div className="flex flex-col"><span className="text-xs uppercase tracking-wider text-text-light">{label}</span><span className={`text-lg font-bold ${t[tone]}`}>{value}</span></div>;
};

export const CourseChip = ({ title, subtitle, color = "purple" }) => {
  const c = { 
    purple: "border-purple-accent/30 hover:border-purple-accent/50", 
    cyan: "border-cyan-accent/30 hover:border-cyan-accent/50", 
    gold: "border-gold/30 hover:border-gold/50", 
    pink: "border-pink-accent/30 hover:border-pink-accent/50",
    emerald: "border-emerald-accent/30 hover:border-emerald-accent/50"
  };
  return <div className={`rounded-xl border bg-white p-4 shadow-md transition-all hover:shadow-lg hover:-translate-y-1 ${c[color]}`}><p className="text-sm font-semibold text-text-dark">{title}</p><p className="text-xs text-text-light">{subtitle}</p></div>;
};