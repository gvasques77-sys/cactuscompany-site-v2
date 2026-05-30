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
            <p className="text-sm font-[var(--font-mono)] uppercase tracking-[0.22em] text-[#7fd8a8] text-xs">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="mt-4 font-[var(--font-display)] text-3xl font-semibold leading-tight text-balance sm:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-base leading-7 text-[#bcd1c6] sm:text-lg">{description}</p>
          ) : null}
        </div>
        {children ? <div className="mt-9">{children}</div> : null}
      </div>
    </section>
  );
}
