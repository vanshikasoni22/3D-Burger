import './About.css';
import burgerImg from '../assets/burger.jpg';

const pillars = [
  { icon: '🥩', title: 'Premium Beef', desc: 'Only heritage-breed, grain-fed cattle. Dry-aged for 28 days for maximum depth of flavour.' },
  { icon: '🔥', title: 'Live Fire Grill', desc: 'Every patty kissed by open flame on our custom char-grill. No shortcuts, ever.' },
  { icon: '🌿', title: 'Farm to Bun', desc: 'Fresh produce sourced daily from local farms. Our buns are baked in-house every morning.' },
  { icon: '⭐', title: '12 Years of Craft', desc: 'Started in 2013 with one vision — make the most unforgettable burger experience in the city.' },
];

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about__inner">

        {/* Left — Image */}
        <div className="about__visual">
          <div className="about__img-frame">
            <img src={burgerImg} alt="Our Craft" className="about__img" draggable="false" />
            <div className="about__img-overlay" />
          </div>
          {/* Floating badge */}
          <div className="about__badge">
            <div className="about__badge-year">2013</div>
            <div className="about__badge-text">Since</div>
            <div className="about__badge-line" />
            <div className="about__badge-sub">Est. in the heart of the city</div>
          </div>
          {/* Decorative frame lines */}
          <div className="about__frame-tl" />
          <div className="about__frame-br" />
        </div>

        {/* Right — Text */}
        <div className="about__content">
          <span className="section-label">Who We Are</span>
          <div className="divider" />
          <h2 className="about__title">
            Born From a <br />
            <span className="gold-gradient-text">Relentless</span> Obsession
          </h2>
          <p className="about__body">
            At <strong>3D-Burger</strong>, we believe a great burger is an art form. 
            Every layer is intentional, every flavour is earned. We didn't set out to 
            simply feed people — we set out to make them remember.
          </p>
          <p className="about__body">
            Our chefs train for months before they're allowed near our grill. 
            We source our beef within a 200km radius. Our buns are baked at 4am, 
            so they're perfect by the time you walk in. That's the 3D difference.
          </p>

          {/* Pillars */}
          <div className="about__pillars">
            {pillars.map((p, i) => (
              <div key={i} className="about__pillar">
                <span className="about__pillar-icon">{p.icon}</span>
                <div>
                  <h4 className="about__pillar-title">{p.title}</h4>
                  <p className="about__pillar-desc">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="#menu"
            id="about-view-menu"
            className="about__cta"
            onClick={e => { e.preventDefault(); document.getElementById('menu').scrollIntoView({ behavior: 'smooth' }); }}
          >
            Explore Our Menu →
          </a>
        </div>
      </div>
    </section>
  );
}
