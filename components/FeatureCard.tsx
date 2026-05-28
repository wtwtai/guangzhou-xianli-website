import type { LucideIcon } from "lucide-react";

export function FeatureCard({
  icon: Icon,
  title,
  description,
  accent = "green",
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  accent?: "green" | "copper" | "navy";
}) {
  const accentClass =
    accent === "copper"
      ? "bg-amber-50 text-[#B7791F] ring-amber-100"
      : accent === "navy"
        ? "bg-slate-100 text-[#0B1F3A] ring-slate-200"
        : "bg-emerald-50 text-[#2F855A] ring-emerald-100";

  return (
    <article className="subtle-shadow h-full rounded-lg border border-slate-200 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-emerald-100">
      <div className={`mb-5 flex size-11 items-center justify-center rounded-md ring-1 ${accentClass}`}>
        <Icon className="size-5" aria-hidden="true" />
      </div>
      <h3 className="text-lg font-semibold text-[#0B1F3A]">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
    </article>
  );
}
