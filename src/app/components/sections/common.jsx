export const Chip = ({ children, variant = "default", className = "" }) => {
  const v = {
    default: "border-gray-200 bg-white text-gray-600",
    gold: "border-gold/30 bg-amber-50 text-gold",
  };
  return <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${v[variant]} ${className}`}>{children}</span>;
};

export const Metric = ({ label, value, tone = "neutral" }) => {
  const t = { green: "text-emerald-600", amber: "text-amber-600", neutral: "text-gray-900", gold: "text-gold" };
  return <div className="flex flex-col"><span className="text-xs uppercase tracking-wider text-gray-500">{label}</span><span className={`text-xl font-bold ${t[tone]}`} style={{ fontFamily: "var(--font-reem-kufi)" }}>{value}</span></div>;
};