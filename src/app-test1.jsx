import { useState, useRef } from 'react';
import { motion, useAnimate } from 'framer-motion';
import LandingHero from './components/landing/LandingHero';
import GooeyDoubleDiamondSection from './components/landing/GooeyDoubleDiamondSection';
import { DOUBLE_DIAMOND_PHASES } from './components/landing/doubleDiamondConstants';
import { useLandingIntroAnimation } from './hooks/useLandingIntroAnimation';

const NAV_ITEMS = [
  { key: 'home', label: 'Home', icon: 'home' },
  { key: 'workflows', label: 'Workflows', icon: 'account_tree' },
  { key: 'company', label: 'Company', icon: 'domain' },
  { key: 'faq', label: 'FAQ', icon: 'quiz' },
];

function AppTest1() {
  const [scope, animate] = useAnimate();
  const [isDark, setIsDark] = useState(false);
  const [activeNav, setActiveNav] = useState('home');
  const [activePhase, setActivePhase] = useState(null);
  const gooeyWrapRef = useRef(null);

  useLandingIntroAnimation(scope, gooeyWrapRef, animate);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.setAttribute('data-theme', next ? 'dark' : 'light');
  };

  const scrollToDiamonds = () => {
    gooeyWrapRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  };

  return (
    <div ref={scope} className="dd-page">
      <div className="dd-logo-stage" aria-hidden="true">
        <motion.img
          src="/logo2.png"
          alt=""
          className="dd-logo"
          initial={{ opacity: 1, scale: 1, rotate: 0 }}
        />
      </div>

      <motion.nav className="dd-nav" initial={{ opacity: 0, y: -20 }}>
        <div className="dd-nav-brand">
          <img
            src={isDark ? '/Logo-white.png' : '/logo2.png'}
            alt="Agentive Labs"
            className="dd-nav-logo-img"
          />
          <div className="dd-nav-brand-text">
            <span className="dd-nav-the">The</span>
            <div className="dd-nav-name" aria-label="Agentive Labs">
              <span className="dd-nav-name-line">Agentive</span>
              <span className="dd-nav-name-line">Labs</span>
            </div>
          </div>
        </div>
        <div className="dd-nav-pill">
          {NAV_ITEMS.map(({ key, label, icon }) => (
            <a
              key={key}
              href="#"
              className={`dd-nav-link${activeNav === key ? ' active' : ''}`}
              aria-current={activeNav === key ? 'page' : undefined}
              onClick={(e) => {
                e.preventDefault();
                setActiveNav(key);
              }}
            >
              <span className="material-symbols-rounded dd-nav-link-icon" aria-hidden="true">
                {icon}
              </span>
              <span className="dd-nav-link-label">{label}</span>
            </a>
          ))}
        </div>
        <button
          type="button"
          onClick={toggleTheme}
          className="dd-nav-theme"
          title="Toggle theme"
        >
          <span className="material-symbols-rounded">
            {isDark ? 'light_mode' : 'dark_mode'}
          </span>
        </button>
      </motion.nav>

      <div className="dd-hero-content">
        <LandingHero
          title={(
            <>
              AI Product
              <br />
              Development Library
            </>
          )}
          subtitle="A hands-on library of proven product processes, inspired by frameworks like Double Diamond, and designed for AI-Human Harmony."
          ctaLabel="Get Started"
          onCtaClick={scrollToDiamonds}
        />
        <GooeyDoubleDiamondSection
          ref={gooeyWrapRef}
          phases={DOUBLE_DIAMOND_PHASES}
          activePhase={activePhase}
          onPhaseHoverChange={setActivePhase}
          onPhaseClick={(key) => console.log(key)}
        />
      </div>
    </div>
  );
}

export default AppTest1;
