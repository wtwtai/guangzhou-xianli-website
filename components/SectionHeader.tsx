export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
  titleClassName = "",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
}) {
  return (
    <div
      className={`fade-up max-w-3xl ${
        align === "center" ? "mx-auto text-center" : ""
      } ${className}`}
    >
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold tracking-[0.18em] text-[#C8A96A] uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`luxury-heading text-3xl font-semibold tracking-normal text-[#202020] sm:text-4xl ${titleClassName}`}
      >
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
