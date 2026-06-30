import Link from "next/link";
import { CactusMark } from "@/components/cactus-mark";
import { company, navItems } from "@/components/company-data";

export function Header() {
  return (
    <header className="site-header">
      <div className="container-shell header-inner">
        <Link href="/" className="brand-lockup" aria-label="Cactus Company">
          <span className="brand-icon">
            <CactusMark size={44} body="#24b83d" />
          </span>
          <span>
            <strong>{company.brand}</strong>
            <small>software studio</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Navegação principal">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/contato" className="header-cta" data-magnetic>
          Fale conosco
        </Link>
      </div>

      <nav className="mobile-nav" aria-label="Navegação principal mobile">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
