import Link from "next/link";
import { CactusMark } from "@/components/cactus-mark";
import { company, navItems, demoMailto } from "@/components/company-data";

export function Header() {
  return (
    <header className="site-header">
      <div className="container-wide header-inner">
        <Link href="/" className="brand-lockup" aria-label="Cactus Company — início">
          <span className="brand-icon">
            <CactusMark size={40} />
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
          <a href={demoMailto} className="header-cta" data-magnetic style={{ marginLeft: 10 }}>
            Agendar demonstração
          </a>
        </nav>
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
