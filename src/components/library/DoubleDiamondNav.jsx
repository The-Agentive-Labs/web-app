import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { LIBRARY_CATEGORIES, PAGE_DATA } from './pageRegistry';

/**
 * DoubleDiamondNav — interactive navigation hub.
 *
 * Features:
 *   • Two gooey-filtered CSS diamond shapes (exact homepage replica)
 *   • Active phase quadrant gets a darker fill to show "you are here"
 *   • Hovering a phase label shows a popover bubble with page links
 *   • Clicking a link in the popover navigates to that page
 */

const PHASES = [
  { key: 'discover', label: 'DISCOVER' },
  { key: 'define',   label: 'DEFINE' },
  { key: 'develop',  label: 'DEVELOP' },
  { key: 'deliver',  label: 'DELIVER' },
];

export default function DoubleDiamondNav({ activePhase, currentSlug }) {
  const [hoveredPhase, setHoveredPhase] = useState(null);
  const [clickedPhase, setClickedPhase] = useState(null);
  const timeoutRef = useRef(null);
  const wrapRef = useRef(null);

  // Delay hide so user can move mouse from label → popover
  const handleMouseEnter = (phaseIndex) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHoveredPhase(phaseIndex);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHoveredPhase(null);
    }, 200);
  };

  const handlePopoverEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const handlePopoverLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHoveredPhase(null);
    }, 150);
  };

  // Close popover on navigation
  const handleLinkClick = () => {
    setHoveredPhase(null);
    setClickedPhase(null);
  };

  // Toggle popover on click (mobile-friendly)
  const handlePhaseToggle = (phaseIndex) => {
    if (clickedPhase === phaseIndex) {
      setClickedPhase(null);
      setHoveredPhase(null);
    } else {
      setClickedPhase(phaseIndex);
      setHoveredPhase(phaseIndex);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    }
  };

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) {
        setClickedPhase(null);
        setHoveredPhase(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, []);

  // Active phase is whichever is hovered, clicked, or neither
  const visiblePhase = hoveredPhase !== null ? hoveredPhase : clickedPhase;

  // Get pages for the hovered phase
  const hoveredPages = visiblePhase !== null ? LIBRARY_CATEGORIES[visiblePhase]?.pages || [] : [];
  const hoveredTitle = visiblePhase !== null ? LIBRARY_CATEGORIES[visiblePhase]?.title || '' : '';

  return (
    <div className="dd-mini-wrap" ref={wrapRef}>
      {/* SVG gooey filter */}
      <svg className="dd-svg-filters" aria-hidden="true">
        <defs>
          <filter id="gooey-mini">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
            />
          </filter>
        </defs>
      </svg>

      {/* Gooey diamond container */}
      <div className="dd-mini-gooey">
        <div className={`dd-mini-diamond dd-mini-d1 ${activePhase === 0 || activePhase === 1 ? 'dd-mini-diamond--active' : ''}`} />
        <div className={`dd-mini-diamond dd-mini-d2 ${activePhase === 2 || activePhase === 3 ? 'dd-mini-diamond--active' : ''}`} />
      </div>

      {/* Dashed vertical dividers */}
      <div className="dd-mini-dashed">
        <div className="dd-mini-dashed-line" />
        <div className="dd-mini-dashed-line" />
        <div className="dd-mini-dashed-line" />
      </div>

      {/* Phase label overlays — positioned over the diamond shapes */}
      <div className="dd-mini-overlay-row">
        {PHASES.map(({ key, label }, i) => (
          <div
            key={key}
            className={`dd-mini-overlay-zone ${activePhase === i ? 'active' : ''} ${visiblePhase === i ? 'hovered' : ''}`}
            onMouseEnter={() => handleMouseEnter(i)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handlePhaseToggle(i)}
          >
            <span className="dd-mini-overlay-label">{label}</span>
          </div>
        ))}
      </div>

      {/* Phase labels below the diamond */}
      <div className="dd-mini-phase-row">
        {PHASES.map(({ key, label }, i) => (
          <button
            key={key}
            type="button"
            className={`dd-mini-phase-label ${activePhase === i ? 'active' : ''} ${visiblePhase === i ? 'hovered' : ''}`}
            onMouseEnter={() => handleMouseEnter(i)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handlePhaseToggle(i)}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Hover popover bubble */}
      <AnimatePresence>
        {visiblePhase !== null && (
          <motion.div
            className={`dd-mini-popover dd-mini-popover--phase-${visiblePhase}`}
            initial={{ opacity: 0, y: -6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.97 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            onMouseEnter={handlePopoverEnter}
            onMouseLeave={handlePopoverLeave}
            ref={popoverRef}
          >
            <div className="dd-mini-popover-arrow" />
            <div className="dd-mini-popover-title">{hoveredTitle}</div>
            <ul className="dd-mini-popover-links">
              {hoveredPages.map((page) => {
                const isAvailable = !!PAGE_DATA[page.slug] || page.slug === '5es-journey';
                const linkTo = page.slug === '5es-journey' ? '/5es-journey' : `/library/${page.slug}`;
                const isActive = currentSlug === page.slug;
                return (
                  <li key={page.slug}>
                    {isAvailable ? (
                      <Link
                        to={linkTo}
                        className={`dd-mini-popover-link ${isActive ? 'active' : ''}`}
                        onClick={handleLinkClick}
                      >
                        {isActive && <span className="dd-mini-popover-dot" />}
                        {page.label}
                      </Link>
                    ) : (
                      <span className="dd-mini-popover-link dd-mini-popover-link--disabled">
                        {page.label}
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
