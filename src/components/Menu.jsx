import './Menu.css';
import burgerImg from '../assets/burger.jpg';

const categories = ['All', 'Signatures', 'Classics', 'Loaded', 'Sides'];

const menuItems = [
  {
    id: 1, name: 'The 3D Supreme', category: 'Signatures',
    desc: 'Double wagyu patty, truffle aioli, crispy shallots, gold leaf bun',
    price: '₹899', tag: 'Chef\'s Pick', spicy: true,
  },
  {
    id: 2, name: 'Smoked Inferno', category: 'Signatures',
    desc: 'Hickory-smoked patty, ghost pepper sauce, pickled jalapeños, habanero slaw',
    price: '₹799', tag: 'Bestseller', spicy: true,
  },
  {
    id: 3, name: 'Golden Classic', category: 'Classics',
    desc: 'Heritage beef patty, aged cheddar, house pickles, secret burger sauce',
    price: '₹599', tag: null, spicy: false,
  },
  {
    id: 4, name: 'Mushroom Crown', category: 'Classics',
    desc: 'Portobello mushrooms, Swiss cheese, truffle mayo, arugula',
    price: '₹649', tag: null, spicy: false,
  },
  {
    id: 5, name: 'Tower of Power', category: 'Loaded',
    desc: 'Triple patty, 3 cheese blend, crispy bacon, fried egg, BBQ caramelised onion',
    price: '₹1099', tag: 'Fan Favourite', spicy: false,
  },
  {
    id: 6, name: 'Steel Grey Brisket', category: 'Loaded',
    desc: '14-hour slow smoked brisket, beer-braised onions, horseradish cream',
    price: '₹999', tag: 'Limited', spicy: false,
  },
  {
    id: 7, name: 'Truffle Fries', category: 'Sides',
    desc: 'Hand-cut fries, black truffle oil, parmesan, chive cream dip',
    price: '₹349', tag: null, spicy: false,
  },
  {
    id: 8, name: 'Onion Ring Tower', category: 'Sides',
    desc: 'Beer-battered onion rings, smoked paprika salt, chipotle aioli',
    price: '₹299', tag: null, spicy: false,
  },
];

import { useState } from 'react';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="menu">
      <div className="menu__inner">
        {/* Header */}
        <div className="menu__header">
          <span className="section-label">Our Menu</span>
          <div className="divider-center" />
          <h2 className="menu__title">
            Crafted With <span className="gold-gradient-text">Passion</span>
          </h2>
          <p className="menu__subtitle">
            Every burger tells a story. Premium ingredients, bold flavours, legendary bites.
          </p>
        </div>

        {/* Categories */}
        <div className="menu__categories" role="tablist">
          {categories.map(cat => (
            <button
              key={cat}
              id={`menu-cat-${cat.toLowerCase()}`}
              role="tab"
              aria-selected={activeCategory === cat}
              className={`menu__cat-btn ${activeCategory === cat ? 'menu__cat-btn--active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="menu__grid">
          {filtered.map((item, i) => (
            <div
              key={item.id}
              className="menu__card"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              {/* Image area */}
              <div className="menu__card-img-wrap">
                <img src={burgerImg} alt={item.name} className="menu__card-img" draggable="false" />
                <div className="menu__card-img-overlay" />
                {item.tag && (
                  <div className="menu__card-tag">{item.tag}</div>
                )}
                {item.spicy && (
                  <div className="menu__card-spicy" title="Spicy">🌶</div>
                )}
              </div>

              {/* Info */}
              <div className="menu__card-body">
                <div className="menu__card-cat">{item.category}</div>
                <h3 className="menu__card-name">{item.name}</h3>
                <p className="menu__card-desc">{item.desc}</p>
                <div className="menu__card-footer">
                  <span className="menu__card-price">{item.price}</span>
                  <button id={`order-${item.id}`} className="menu__card-btn">
                    Order Now
                  </button>
                </div>
              </div>

              {/* Hover glow */}
              <div className="menu__card-glow" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
