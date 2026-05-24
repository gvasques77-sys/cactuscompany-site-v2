type SectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
};

export function Section({ eyebrow, title, description, children }: SectionProps) {
  return (
    <section className="py-14 sm:py-20">
      <div className="container-shell">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#d6b56d]">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="mt-4 font-[var(--font-display)] text-3xl font-semibold leading-tight text-balance sm:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-base leading-7 text-[#c5d0c1] sm:text-lg">{description}</p>
          ) : null}
        </div>
        {children ? <div className="mt-9">{children}</div> : null}
      </div>
    </section>
  );
}
