import Image from "next/image";
import Link from "next/link";
import { company, navItems } from "@/components/company-data";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#06130d]/84 backdrop-blur-xl">
      <div className="container-shell flex min-h-16 items-center justify-between gap-6 py-3">
        <Link href="/" className="group flex items-center gap-3" aria-label="Cactus Company">
          <span className="relative grid size-12 place-items-center overflow-hidden rounded-full border border-[#d6b56d]/35 bg-white shadow-[0_0_32px_rgba(214,181,109,0.14)]">
            <Image
              src="/images/cactus-logo.png"
              alt=""
              width={48}
              height={48}
              className="h-full w-full object-cover"
              priority
            />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-[var(--font-display)] text-base font-semibold tracking-[0.02em]">
              {company.brand}
            </span>
            <span className="mt-1 text-xs text-[#a7b4a3]">Software Studio</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Navegação principal">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-[#dce5d8] transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contato"
          className="hidden rounded-full bg-[#d6b56d] px-4 py-2 text-sm font-semibold text-[#07130d] transition hover:bg-[#f0d58e] sm:inline-flex"
        >
          Fale conosco
        </Link>
      </div>
      <nav
        className="container-shell flex gap-1 overflow-x-auto border-t border-white/8 py-2 md:hidden"
        aria-label="Navegação principal"
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="shrink-0 rounded-full px-3 py-2 text-sm text-[#dce5d8] transition hover:bg-white/10 hover:text-white"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
