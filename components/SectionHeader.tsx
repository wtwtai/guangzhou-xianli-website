export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={`fade-up max-w-3xl ${
        align === "center" ? "mx-auto text-center" : ""
      }`}
    >
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold tracking-[0.18em] text-[#C8A96A] uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="luxury-heading text-3xl font-semibold tracking-normal text-[#202020] sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-8 text-[#64615C] sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
