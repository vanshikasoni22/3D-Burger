import { useEffect, useRef, useState } from 'react';
import burgerImg from '../assets/burger.jpg';
import './Hero.css';

const LAYERS = [
  { label: 'Sesame Bun Top', delay: 0.2 },
  { label: 'Special Sauce', delay: 0.6 },
  { label: 'Crispy Lettuce', delay: 1.0 },
  { label: 'Aged Cheddar', delay: 1.4 },
  { label: 'Beef Patty', delay: 1.8 },
  { label: 'Caramelised Onion', delay: 2.2 },
  { label: 'Toasted Bun Base', delay: 2.6 },
];

export default function Hero() {
  const [phase, setPhase] = useState('intro');   // intro → assemble → rotate → reveal → done
  const [layerIndex, setLayerIndex] = useState(-1);
  const [showTitle, setShowTitle] = useState(false);
  const [showTagline, setShowTagline] = useState(false);
  const [showScroll, setShowScroll] = useState(false);
  const timerRefs = useRef([]);

  const addTimer = (fn, delay) => {
    const t = setTimeout(fn, delay);
    timerRefs.current.push(t);
  };

  useEffect(() => {
    // Phase 1: Intro flash (0s)
    addTimer(() => setPhase('assemble'), 800);

    // Phase 2: Layer labels appear one by one
    LAYERS.forEach((_, i) => {
      addTimer(() => setLayerIndex(i), 800 + i * 500);
    });

    // Phase 3: Rotate phase starts (after all layers assembled)
    addTimer(() => setPhase('rotate'), 800 + LAYERS.length * 500 + 400);

    // Phase 4: Title reveal
    addTimer(() => {
      setPhase('reveal');
      setShowTitle(true);
    }, 800 + LAYERS.length * 500 + 2400);

    // Phase 5: Tagline
    addTimer(() => setShowTagline(true), 800 + LAYERS.length * 500 + 3400);

    // Phase 6: Done + scroll cue
    addTimer(() => {
      setPhase('done');
      setShowScroll(true);
    }, 800 + LAYERS.length * 500 + 4600);

    return () => timerRefs.current.forEach(clearTimeout);
  }, []);

  return (
    <section id="home" className="hero">
      {/* Ambient light rings */}
      <div className="hero__ambient hero__ambient--1" />
      <div className="hero__ambient hero__ambient--2" />

      {/* Background brand text (behind burger) */}
      <div className={`hero__bg-brand ${showTitle ? 'hero__bg-brand--visible' : ''}`}>
        3D-BURGER
      </div>

      {/* Stage */}
      <div className="hero__stage">
        {/* Burger container with rotation */}
        <div className={`hero__burger-wrap 
          ${phase === 'assemble' ? 'burger-wrap--assemble' : ''}
          ${phase === 'rotate'   ? 'burger-wrap--rotate'   : ''}
          ${phase === 'reveal'   ? 'burger-wrap--reveal'   : ''}
          ${phase === 'done'     ? 'burger-wrap--done'     : ''}
        `}>
          {/* Spotlight */}
          <div className="hero__spotlight" />

          {/* Burger image */}
          <div className={`hero__burger-img-wrap 
            ${phase !== 'intro' ? 'burger-visible' : ''}`}>
            <img
              src={burgerImg}
              alt="3D Burger"
              className="hero__burger-img"
              draggable="false"
            />
            {/* Reflection */}
            <div className="hero__reflection">
              <img
                src={burgerImg}
                alt=""
                className="hero__burger-img hero__burger-img--reflect"
                draggable="false"
              />
            </div>
          </div>

          {/* Cinematic Preparation Video */}
          <div className={`hero__video-wrap ${phase === 'assemble' || phase === 'rotate' || phase === 'reveal' || phase === 'done' ? 'video--visible' : ''}`}>
            <video
              className="hero__video"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="https://v.pexels.com/video-files/3811802/3811802-uhd_1440_2160_24fps.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="hero__video-overlay" />
          </div>

          {/* Layer labels */}
          <div className="hero__layers">
            {LAYERS.map((layer, i) => (
              <div
                key={layer.label}
                className={`hero__layer-label ${i <= layerIndex && phase === 'assemble' ? 'layer-label--visible' : ''}`}
                style={{ '--layer-i': i }}
              >
                <span className="hero__layer-dot" />
                <span className="hero__layer-line" />
                <span className="hero__layer-name">{layer.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Text reveal */}
        <div className="hero__content">
          <div className={`hero__eyebrow ${showTitle ? 'text--visible' : ''}`}>
            PREMIUM CRAFT BURGERS
          </div>

          <h1 className={`hero__title ${showTitle ? 'text--visible' : ''}`}>
            <span className="hero__title-top">3D</span>
            <span className="hero__title-dash">—</span>
            <span className="hero__title-main">BURGER</span>
          </h1>

          <p className={`hero__tagline ${showTagline ? 'text--visible' : ''}`}>
            Every angle. Every bite. A masterpiece.
          </p>

          <div className={`hero__actions ${showTagline ? 'text--visible' : ''}`}>
            <a href="#menu" id="hero-view-menu" className="hero__btn hero__btn--primary"
              onClick={e => { e.preventDefault(); document.getElementById('menu').scrollIntoView({ behavior: 'smooth' }); }}>
              View Menu
            </a>
            <a href="#reservation" id="hero-reserve" className="hero__btn hero__btn--outline"
              onClick={e => { e.preventDefault(); document.getElementById('reservation').scrollIntoView({ behavior: 'smooth' }); }}>
              Reserve a Table
            </a>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className={`hero__stats ${showScroll ? 'stats--visible' : ''}`}>
        {[
          { num: '120+', label: 'Signature Burgers' },
          { num: '98%', label: 'Happy Customers' },
          { num: '12', label: 'Years of Craft' },
          { num: '5★', label: 'Rated Experience' },
        ].map(s => (
          <div key={s.label} className="hero__stat">
            <span className="hero__stat-num">{s.num}</span>
            <span className="hero__stat-label">{s.label}</span>
          </div>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className={`hero__scroll-indicator ${showScroll ? 'scroll--visible' : ''}`}>
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-wheel" />
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}
