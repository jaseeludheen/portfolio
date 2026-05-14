import { useState } from "react";
import "./Header.css";

const NAV_ITEMS = ["about", "projects", "skills", "contact"];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="header">
        {/* Logo */}
        <button className="header__logo" onClick={() => scrollTo("about")}>
          <span className="header__logo-bracket">&lt;</span>
          Jaseel
          <span className="header__logo-bracket">/&gt;</span>
        </button>

        {/* Desktop nav */}
        <div className="header__nav">
          {NAV_ITEMS.map((s) => (
            <button key={s} className="nav-link" onClick={() => scrollTo(s)}>
              {s}
            </button>
          ))}
          <a
            href="mailto:jaseeludheenputhooli@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="header__hire-btn"
          >
            Hire Me
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="header__hamburger"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div className={`header__mobile-menu ${menuOpen ? "open" : ""}`}>
        {NAV_ITEMS.map((s) => (
          <button key={s} className="header__mobile-link" onClick={() => scrollTo(s)}>
            {s}
          </button>
        ))}
        <a
          href="mailto:jaseeludheenputhooli@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="header__hire-btn"
          style={{ alignSelf: "flex-start" }}
        >
          Hire Me
        </a>
      </div>
    </>
  );
}