import './Footer.css';

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer" id="footer">
      {/* Top divider */}
      <div className="footer__top-line" />

      <div className="footer__inner">
        {/* Brand column */}
        <div className="footer__brand">
          <div className="footer__logo">
            <span className="footer__logo-main">3D</span>
            <span className="footer__logo-sep">—</span>
            <span className="footer__logo-sub">BURGER</span>
          </div>
          <p className="footer__tagline">
            Every angle. Every bite. A masterpiece.
          </p>
          <p className="footer__desc">
            Premium craft burgers served with passion since 2013. 
            Mumbai's most iconic burger experience.
          </p>
        </div>

        {/* Quick links */}
        <div className="footer__col">
          <div className="footer__col-title">Explore</div>
          {[
            { label: 'Home', id: 'home' },
            { label: 'Menu', id: 'menu' },
            { label: 'About Us', id: 'about' },
            { label: 'Specials', id: 'specials' },
            { label: 'Reservations', id: 'reservation' },
            { label: 'Contact', id: 'contact' },
          ].map(link => (
            <button key={link.id} className="footer__link" onClick={() => scrollTo(link.id)}>
              {link.label}
            </button>
          ))}
        </div>

        {/* Menu highlights */}
        <div className="footer__col">
          <div className="footer__col-title">Fan Favourites</div>
          {['The 3D Supreme','Smoked Inferno','Tower of Power','The Black Gold','Truffle Royale','Truffle Fries'].map(item => (
            <span key={item} className="footer__item">{item}</span>
          ))}
        </div>

        {/* Contact info */}
        <div className="footer__col">
          <div className="footer__col-title">Visit Us</div>
          <div className="footer__contact-block">
            <div className="footer__contact-label">Address</div>
            <div className="footer__contact-value">42, The Grill Quarter<br />MG Road, Mumbai 400001</div>
          </div>
          <div className="footer__contact-block">
            <div className="footer__contact-label">Phone</div>
            <div className="footer__contact-value">+91 98765 43210</div>
          </div>
          <div className="footer__contact-block">
            <div className="footer__contact-label">Email</div>
            <div className="footer__contact-value">hello@3dburger.in</div>
          </div>
          <div className="footer__contact-block">
            <div className="footer__contact-label">Hours</div>
            <div className="footer__contact-value">Mon–Sun: 12PM – 11PM</div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="footer__bottom-inner">
          <span className="footer__copy">© 2025 3D-Burger. All rights reserved.</span>
          <div className="footer__bottom-links">
            <a href="#" id="footer-privacy">Privacy Policy</a>
            <span className="footer__bottom-dot">·</span>
            <a href="#" id="footer-terms">Terms of Service</a>
            <span className="footer__bottom-dot">·</span>
            <a href="#" id="footer-cookies">Cookies</a>
          </div>
          <span className="footer__made">Crafted with 🍔 & passion</span>
        </div>
      </div>
    </footer>
  );
}
