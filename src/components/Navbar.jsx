import { useState, useEffect } from 'react';
import './Navbar.css';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'About', href: '#about' },
  { label: 'Specials', href: '#specials' },
  { label: 'Reserve', href: '#reservation' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);

      const sections = ['home','menu','about','specials','reservation','contact'];
      for (let id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom > 120) {
            setActive(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const id = href.replace('#','');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        {/* Logo */}
        <a href="#home" className="navbar__logo" onClick={e => handleNav(e, '#home')}>
          <span className="navbar__logo-main">3D</span>
          <span className="navbar__logo-sep">—</span>
          <span className="navbar__logo-sub">BURGER</span>
        </a>

        {/* Desktop Links */}
        <ul className="navbar__links">
          {navLinks.map(link => (
            <li key={link.label}>
              <a
                href={link.href}
                id={`nav-${link.label.toLowerCase()}`}
                className={`navbar__link ${active === link.href.replace('#','') ? 'navbar__link--active' : ''}`}
                onClick={e => handleNav(e, link.href)}
              >
                {link.label}
                <span className="navbar__link-underline" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#reservation"
          id="nav-cta-reserve"
          className="navbar__cta"
          onClick={e => handleNav(e, '#reservation')}
        >
          Book a Table
        </a>

        {/* Hamburger */}
        <button
          id="nav-hamburger"
          className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(v => !v)}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
        {navLinks.map(link => (
          <a
            key={link.label}
            href={link.href}
            className="navbar__mobile-link"
            onClick={e => handleNav(e, link.href)}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#reservation"
          className="navbar__mobile-cta"
          onClick={e => handleNav(e, '#reservation')}
        >
          Book a Table
        </a>
      </div>
    </nav>
  );
}
