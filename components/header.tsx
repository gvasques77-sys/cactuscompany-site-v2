import Link from "next/link";
import { CactusMark } from "@/components/cactus-mark";
import { company, navItems } from "@/components/company-data";

export function Header() {
  return (
    <header className="site-header sticky top-0 z-50 border-b border-[#7fd8a8]/12 bg-[#0a1612]/85 backdrop-blur-xl">
      <div className="site-bar container-shell flex min-h-16 items-center justify-between gap-6 py-3">
        <Link href="/" className="group flex items-center gap-3" aria-label="Cactus Company">
          <span className="site-logo grid size-11 place-items-center rounded-2xl bg-[#1f6e54] shadow-[0_10px_24px_rgba(31,110,84,0.35)] transition group-hover:bg-[#1b6149]">
            <CactusMark size={26} body="#c8efd9" showBase={false} />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-[var(--font-display)] text-base font-semibold tracking-[-0.01em]">
              {company.brand}
            </span>
            <span className="mt-1.5 font-[var(--font-mono)] text-[10px] uppercase tracking-[0.28em] text-[#7fd8a8]/75">
              Software Studio
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Navegação principal">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-[#cdddd3] transition hover:bg-[#7fd8a8]/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contato"
          data-magnetic
          className="hidden rounded-full bg-[#7fd8a8] px-4 py-2 text-sm font-semibold text-[#0a1612] transition hover:bg-[#9be7bf] sm:inline-flex"
        >
          Fale conosco
        </Link>
      </div>
      <nav
        className="container-shell flex gap-1 overflow-x-auto border-t border-[#7fd8a8]/10 py-2 md:hidden"
        aria-label="Navegação principal"
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="shrink-0 rounded-full px-3 py-2 text-sm text-[#cdddd3] transition hover:bg-[#7fd8a8]/10 hover:text-white"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
