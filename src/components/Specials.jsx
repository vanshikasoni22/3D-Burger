import './Specials.css';
import burgerImg from '../assets/burger.jpg';

const specials = [
  {
    id: 1,
    tag: 'Weekend Only',
    name: 'The Black Gold',
    subtitle: 'Our most theatrical burger',
    desc: 'Activated charcoal bun, wagyu patty, black garlic aioli, gold flaked cheese, caramelised figs',
    price: '₹1,299',
    highlight: true,
  },
  {
    id: 2,
    tag: 'Chef\'s Table',
    name: 'Truffle Royale',
    subtitle: 'An elevated classic',
    desc: 'Black truffle shavings, 60-day dry-aged beef, Gruyère fondue, microgreens, brioche bun',
    price: '₹1,099',
    highlight: false,
  },
  {
    id: 3,
    tag: 'Season Special',
    name: 'Summer Mango Blaze',
    subtitle: 'Sweet heat in every bite',
    desc: 'Fried chicken, mango habanero glaze, coconut slaw, crispy shallots, sesame brioche',
    price: '₹749',
    highlight: false,
  },
];

export default function Specials() {
  return (
    <section id="specials" className="specials">
      {/* Background brand text */}
      <div className="specials__bg-text">SPECIALS</div>

      <div className="specials__inner">
        {/* Header */}
        <div className="specials__header">
          <span className="section-label">This Week's Specials</span>
          <div className="divider-center" />
          <h2 className="specials__title">
            <span className="gradient-text">Limited</span> Edition Drops
          </h2>
          <p className="specials__subtitle">
            These aren't on the regular menu. Available for a limited time — get them while they last.
          </p>
        </div>

        {/* Cards */}
        <div className="specials__grid">
          {specials.map((item) => (
            <div key={item.id} className={`specials__card ${item.highlight ? 'specials__card--hero' : ''}`}>
              {/* Glow border */}
              <div className="specials__card-border" />

              {/* Image */}
              <div className="specials__card-img-wrap">
                <img src={burgerImg} alt={item.name} className="specials__card-img" />
                <div className="specials__card-img-overlay" />
                <div className="specials__card-tag">{item.tag}</div>
                {item.highlight && (
                  <div className="specials__card-crown">
                    <span>★</span> Featured
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="specials__card-body">
                <div className="specials__card-subtitle">{item.subtitle}</div>
                <h3 className="specials__card-name">{item.name}</h3>
                <p className="specials__card-desc">{item.desc}</p>
                <div className="specials__card-footer">
                  <span className="specials__card-price">{item.price}</span>
                  <button id={`special-order-${item.id}`} className="specials__card-btn">
                    Grab It →
                  </button>
                </div>
              </div>

              {/* Shimmer on hero card */}
              {item.highlight && <div className="specials__card-shimmer" />}
            </div>
          ))}
        </div>

        {/* Timer strip */}
        <div className="specials__timer-strip">
          <div className="specials__timer-dot" />
          <span className="specials__timer-text">
            Specials refreshed every Sunday — new drops every week
          </span>
          <div className="specials__timer-dot" />
        </div>
      </div>
    </section>
  );
}
