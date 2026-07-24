import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { company } from "../data";
import { useLibrary } from "../LibraryContext";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/services", label: "Services" },
  { to: "/work", label: "Past Work" },
  { to: "/shop", label: "Buy Books" },
  { to: "/book", label: "Book a Service", cta: true },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { unlockedIds } = useLibrary();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`}>
      <div className="container-wide header-inner">
        <Link to="/" className="brand" aria-label={`${company.name} home`}>
          <img src="/logo.png" alt="" width={52} height={52} />
          <span className="brand-text">
            <span className="brand-name">Deyounge Publications</span>
            <span className="brand-tag">Tarkwa, Ghana</span>
          </span>
        </Link>

        <nav className="nav-desktop" aria-label="Primary">
          {links.map((link) =>
            link.cta ? (
              <NavLink key={link.to} to={link.to} className="nav-cta">
                {link.label}
              </NavLink>
            ) : (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                {link.label}
              </NavLink>
            ),
          )}
          {unlockedIds.length > 0 && (
            <Link
              to={`/read/${unlockedIds[unlockedIds.length - 1]}`}
              className="btn-ghost"
              aria-label={`${unlockedIds.length} unlocked books`}
            >
              Library ({unlockedIds.length})
            </Link>
          )}
        </nav>

        <button
          type="button"
          className={`hamburger${open ? " open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`nav-mobile${open ? " open" : ""}`}
        onClick={() => setOpen(false)}
      >
        <nav
          className="nav-mobile-panel"
          aria-label="Mobile"
          onClick={(e) => e.stopPropagation()}
        >
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `${link.cta ? "nav-cta" : ""}${isActive && !link.cta ? " active" : ""}`.trim()
              }
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          {unlockedIds.length > 0 && (
            <Link
              to={`/read/${unlockedIds[unlockedIds.length - 1]}`}
              onClick={() => setOpen(false)}
            >
              My library ({unlockedIds.length})
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
