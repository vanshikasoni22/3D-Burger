import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact__inner">

        <div className="contact__header">
          <span className="section-label">Get In Touch</span>
          <div className="divider-center" />
          <h2 className="contact__title">
            Come Find <span className="gold-gradient-text">Us</span>
          </h2>
        </div>

        <div className="contact__grid">
          {/* Map embed / placeholder */}
          <div className="contact__map">
            <div className="contact__map-placeholder">
              <div className="contact__map-pin">📍</div>
              <div className="contact__map-address">
                <strong>3D-Burger</strong>
                <span>42, The Grill Quarter</span>
                <span>MG Road, Mumbai — 400001</span>
              </div>
              <div className="contact__map-lines">
                {[...Array(8)].map((_,i) => (
                  <div key={i} className="contact__map-line" style={{ '--i': i }} />
                ))}
              </div>
            </div>
          </div>

          {/* Info cards */}
          <div className="contact__info-col">
            {[
              {
                icon: '📞',
                label: 'Call Us',
                lines: ['+91 98765 43210', '+91 87654 32100'],
              },
              {
                icon: '✉️',
                label: 'Email',
                lines: ['hello@3dburger.in', 'events@3dburger.in'],
              },
              {
                icon: '🕐',
                label: 'Hours',
                lines: ['Mon–Thu: 12PM – 10PM', 'Fri–Sun: 11AM – 11:30PM'],
              },
              {
                icon: '📍',
                label: 'Location',
                lines: ['42, The Grill Quarter', 'MG Road, Mumbai 400001'],
              },
            ].map(card => (
              <div key={card.label} className="contact__card">
                <div className="contact__card-icon">{card.icon}</div>
                <div className="contact__card-text">
                  <div className="contact__card-label">{card.label}</div>
                  {card.lines.map(l => <div key={l} className="contact__card-value">{l}</div>)}
                </div>
              </div>
            ))}

            {/* Social */}
            <div className="contact__social">
              {['Instagram','Facebook','Twitter','TikTok'].map(s => (
                <a key={s} href="#" id={`social-${s.toLowerCase()}`} className="contact__social-btn">
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
