type Step = {
  title: string;
  description?: string;
};

export function ProcessSteps({ steps }: { steps: Step[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {steps.map((step, index) => (
        <article
          key={step.title}
          className="relative rounded-lg border border-[#C8A96A]/24 bg-white/95 p-5 shadow-sm"
        >
          <div className="mb-4 flex size-9 items-center justify-center rounded-md border border-[#C8A96A]/25 bg-[#C8A96A]/10 text-sm font-semibold text-[#9B7330]">
            {String(index + 1).padStart(2, "0")}
          </div>
          <h3 className="font-semibold text-[#202020]">{step.title}</h3>
          {step.description ? (
            <p className="mt-2 text-sm leading-7 text-[#64615C]">{step.description}</p>
          ) : null}
        </article>
      ))}
    </div>
  );
}
