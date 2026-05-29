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
          className="relative rounded-lg border border-[#D6B46A]/20 bg-[#0E0C09] p-5 shadow-sm"
        >
          <div className="mb-4 flex size-9 items-center justify-center rounded-md border border-[#D6B46A]/25 bg-[#D6B46A]/10 text-sm font-semibold text-[#D6B46A]">
            {String(index + 1).padStart(2, "0")}
          </div>
          <h3 className="font-semibold text-[#D6B46A]">{step.title}</h3>
          {step.description ? (
            <p className="mt-2 text-sm leading-7 text-[#CFC6B8]">{step.description}</p>
          ) : null}
        </article>
      ))}
    </div>
  );
}
