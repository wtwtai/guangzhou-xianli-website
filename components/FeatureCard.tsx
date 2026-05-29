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
      ? "bg-[#C9A24A]/12 text-[#D8BE75] ring-[#C9A24A]/25"
      : accent === "navy"
        ? "bg-[#18150F] text-[#D8BE75] ring-[#C9A24A]/20"
        : "bg-[#C9A24A]/10 text-[#D8BE75] ring-[#C9A24A]/25";

  return (
    <article className="subtle-shadow h-full rounded-lg border border-[#C9A24A]/20 bg-[#12100C] p-6 transition duration-200 hover:-translate-y-1 hover:border-[#D8BE75]/50">
      <div className={`mb-5 flex size-11 items-center justify-center rounded-md ring-1 ${accentClass}`}>
        <Icon className="size-5" aria-hidden="true" />
      </div>
      <h3 className="text-lg font-semibold text-[#D8BE75]">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-[#CFC6B8]">{description}</p>
    </article>
  );
}
