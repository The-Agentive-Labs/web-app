import { motion } from 'framer-motion';

/**
 * Compact Double Diamond navigation strip.
 * Renders an inline SVG with two diamond shapes split into 4 clickable phase zones.
 * The `activePhase` (0–3 or null) highlights the corresponding quadrant.
 */

const PHASES = [
  { key: 'discover', label: 'Discover', short: 'D1' },
  { key: 'define',   label: 'Define',   short: 'D2' },
  { key: 'develop',  label: 'Develop',  short: 'D3' },
  { key: 'deliver',  label: 'Deliver',  short: 'D4' },
];

/* Colours */
const FILL_INACTIVE  = 'rgba(150, 59, 247, 0.08)';
const FILL_ACTIVE    = 'rgba(150, 59, 247, 0.22)';
const STROKE_INACTIVE = 'rgba(150, 59, 247, 0.18)';
const STROKE_ACTIVE   = 'rgba(150, 59, 247, 0.6)';
const LABEL_INACTIVE  = 'var(--color-text-body)';
const LABEL_ACTIVE    = 'var(--brand-primary-500)';

/**
 * Build the SVG path for one diamond half (left or right).
 * Each diamond is 120×100 with rounded corners created by quadratic arcs.
 * cx,cy = centre of the diamond. "left" means the left half, "right" the right half.
 */
function diamondHalfPath(cx, cy, halfW, halfH, side, r) {
  // Full diamond corners: top, right, bottom, left
  const top    = { x: cx,          y: cy - halfH };
  const right  = { x: cx + halfW,  y: cy };
  const bottom = { x: cx,          y: cy + halfH };
  const left   = { x: cx - halfW,  y: cy };

  if (side === 'left') {
    // Left half: top → left → bottom, with a straight vertical line to close at centre
    return `
      M ${cx} ${top.y + r}
      Q ${top.x} ${top.y}, ${top.x - r} ${top.y + r}
      L ${left.x + r} ${left.y - r}
      Q ${left.x} ${left.y}, ${left.x + r} ${left.y + r}
      L ${bottom.x - r} ${bottom.y - r}
      Q ${bottom.x} ${bottom.y}, ${bottom.x} ${bottom.y - r}
      Z
    `;
  }
  // Right half: top → right → bottom, straight vertical to close
  return `
    M ${cx} ${top.y + r}
    Q ${top.x} ${top.y}, ${top.x + r} ${top.y + r}
    L ${right.x - r} ${right.y - r}
    Q ${right.x} ${right.y}, ${right.x - r} ${right.y + r}
    L ${bottom.x + r} ${bottom.y - r}
    Q ${bottom.x} ${bottom.y}, ${bottom.x} ${bottom.y - r}
    Z
  `;
}

export default function DoubleDiamondNav({ activePhase, onPhaseClick }) {
  // SVG viewBox: 520 × 120 — two diamonds side by side
  const vw = 520;
  const vh = 110;
  const dHalfW = 60;   // half-width of one diamond
  const dHalfH = 48;   // half-height of one diamond
  const r = 10;         // corner radius for Q curves
  const cy = vh / 2;

  // Diamond 1 centre, Diamond 2 centre
  const d1cx = 130;
  const d2cx = 390;

  // Dashed guide lines at 25%, 50%, 75%
  const guides = [d1cx, (d1cx + d2cx) / 2, d2cx];

  // Phase quadrants: [diamond1-left, diamond1-right, diamond2-left, diamond2-right]
  const quadrants = [
    { cx: d1cx, side: 'left',  labelX: d1cx - dHalfW / 2 - 4 },
    { cx: d1cx, side: 'right', labelX: d1cx + dHalfW / 2 + 4 },
    { cx: d2cx, side: 'left',  labelX: d2cx - dHalfW / 2 - 4 },
    { cx: d2cx, side: 'right', labelX: d2cx + dHalfW / 2 + 4 },
  ];

  return (
    <div className="dd-nav-strip">
      <svg
        viewBox={`0 0 ${vw} ${vh}`}
        className="dd-nav-svg"
        aria-label="Double Diamond progress indicator"
      >
        {/* Defs: glow filter for active phase */}
        <defs>
          <filter id="dd-nav-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          {/* Subtle gooey merge for diamond overlap */}
          <filter id="dd-nav-gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
            />
          </filter>
        </defs>

        {/* Dashed vertical guides */}
        {guides.map((gx, i) => (
          <line
            key={i}
            x1={gx} y1={8} x2={gx} y2={vh - 8}
            stroke="var(--color-border-primary)"
            strokeWidth="1"
            strokeDasharray="4 3"
            opacity="0.4"
          />
        ))}

        {/* Diamond shapes merged (background layer) */}
        <g filter="url(#dd-nav-gooey)" opacity="0.5">
          {[d1cx, d2cx].map((cx, i) => (
            <rect
              key={i}
              x={cx - dHalfW * 0.72}
              y={cy - dHalfH * 0.72}
              width={dHalfW * 1.44}
              height={dHalfH * 1.44}
              rx={dHalfW * 0.22}
              transform={`rotate(45 ${cx} ${cy})`}
              fill="var(--dd-nav-diamond-bg, #e8e0f0)"
              className="dd-nav-diamond-bg"
            />
          ))}
        </g>

        {/* Clickable phase quadrants */}
        {quadrants.map((q, i) => {
          const isActive = activePhase === i;
          const path = diamondHalfPath(q.cx, cy, dHalfW, dHalfH, q.side, r);
          return (
            <g key={i} className="dd-nav-quadrant" onClick={() => onPhaseClick?.(i)}>
              <motion.path
                d={path}
                fill={isActive ? FILL_ACTIVE : FILL_INACTIVE}
                stroke={isActive ? STROKE_ACTIVE : STROKE_INACTIVE}
                strokeWidth={isActive ? 1.8 : 1}
                filter={isActive ? 'url(#dd-nav-glow)' : 'none'}
                initial={false}
                animate={{
                  fill: isActive ? FILL_ACTIVE : FILL_INACTIVE,
                  strokeWidth: isActive ? 1.8 : 1,
                }}
                transition={{ duration: 0.35 }}
                style={{ cursor: 'pointer' }}
              />
            </g>
          );
        })}

        {/* Progress dot on the horizontal centre line */}
        {activePhase !== null && activePhase >= 0 && (
          <motion.circle
            cx={quadrants[activePhase].labelX}
            cy={cy}
            r={4}
            fill="var(--brand-primary-500)"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          />
        )}

        {/* Horizontal centre guide */}
        <line
          x1={d1cx - dHalfW - 15} y1={cy}
          x2={d2cx + dHalfW + 15} y2={cy}
          stroke="var(--color-border-primary)"
          strokeWidth="1"
          strokeDasharray="3 4"
          opacity="0.25"
        />
      </svg>

      {/* Phase labels below */}
      <div className="dd-nav-labels">
        {PHASES.map((p, i) => (
          <button
            key={p.key}
            className={`dd-nav-label ${activePhase === i ? 'active' : ''}`}
            onClick={() => onPhaseClick?.(i)}
            type="button"
          >
            <span className="dd-nav-label-full">{p.label}</span>
            <span className="dd-nav-label-short">{p.short}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
