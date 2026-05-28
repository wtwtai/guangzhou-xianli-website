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
          className="relative rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
        >
          <div className="mb-4 flex size-9 items-center justify-center rounded-md bg-[#0B1F3A] text-sm font-semibold text-white">
            {String(index + 1).padStart(2, "0")}
          </div>
          <h3 className="font-semibold text-[#0B1F3A]">{step.title}</h3>
          {step.description ? (
            <p className="mt-2 text-sm leading-7 text-slate-600">{step.description}</p>
          ) : null}
        </article>
      ))}
    </div>
  );
}
