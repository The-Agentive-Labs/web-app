import { motion } from 'framer-motion';

/**
 * DoubleDiamondNav — compact replica of the homepage gooey Double Diamond.
 *
 * Uses the EXACT same CSS approach as GooeyDoubleDiamondSection:
 *   • Two rotated rounded-square divs inside a gooey-filtered container
 *   • Three dashed divider lines overlaying the diamond
 *   • Four phase label buttons overlaying the quadrants
 *
 * The only differences from the homepage version:
 *   • Smaller scale (--dd-mini-size)
 *   • No cursor trail / hover effects
 *   • Active phase highlighting based on current page
 */

const PHASES = [
  { key: 'discover', label: 'DISCOVER' },
  { key: 'define',   label: 'DEFINE' },
  { key: 'develop',  label: 'DEVELOP' },
  { key: 'deliver',  label: 'DELIVER' },
];

export default function DoubleDiamondNav({ activePhase, onPhaseClick }) {
  return (
    <div className="dd-mini-wrap">
      {/* SVG gooey filter — same values as homepage */}
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

      {/* Gooey diamond container — same structure as homepage .dd-gooey */}
      <div className="dd-mini-gooey">
        <div className="dd-mini-diamond dd-mini-d1" />
        <div className="dd-mini-diamond dd-mini-d2" />
      </div>

      {/* Dashed vertical dividers — same as homepage .dd-dashed-lines */}
      <div className="dd-mini-dashed">
        <div className="dd-mini-dashed-line" />
        <div className="dd-mini-dashed-line" />
        <div className="dd-mini-dashed-line" />
      </div>

      {/* Phase labels — same as homepage .dd-phase-row */}
      <div className="dd-mini-phase-row">
        {PHASES.map(({ key, label }, i) => (
          <button
            key={key}
            type="button"
            className={`dd-mini-phase-label ${activePhase === i ? 'active' : ''}`}
            onClick={() => onPhaseClick?.(i)}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
