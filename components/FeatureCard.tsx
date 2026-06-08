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
      ? "bg-[#C8A96A]/12 text-[#9B7330] ring-[#C8A96A]/25"
      : accent === "navy"
        ? "bg-[#101010] text-[#C8A96A] ring-[#C8A96A]/20"
        : "bg-[#C8A96A]/10 text-[#9B7330] ring-[#C8A96A]/25";

  return (
    <article className="subtle-shadow h-full rounded-lg border border-[#C8A96A]/24 bg-white/95 p-6 transition duration-200 hover:-translate-y-1 hover:border-[#C8A96A]/55">
      <div className={`mb-5 flex size-11 items-center justify-center rounded-md ring-1 ${accentClass}`}>
        <Icon className="size-5" aria-hidden="true" />
      </div>
      <h3 className="text-lg font-semibold text-[#202020]">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-[#64615C]">{description}</p>
    </article>
  );
}
