type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="border-b border-white/10 py-16 sm:py-20">
      <div className="container-shell">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#d6b56d]">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl font-[var(--font-display)] text-4xl font-semibold leading-tight text-balance sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-[#c5d0c1]">{description}</p>
      </div>
    </section>
  );
}
