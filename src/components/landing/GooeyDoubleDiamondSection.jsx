import { useEffect, useRef, forwardRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { DOUBLE_DIAMOND_CURSOR_TRAIL_COUNT } from './doubleDiamondConstants';
import { hasIntroPlayed } from '../../hooks/useLandingIntroAnimation';

/**
 * SVG gooey filter + two diamonds, dashed guides, phase buttons, and the orange glow cursor trail.
 * Expects global styles for `.dd-gooey-*` in index.css. Ref attaches to the outer wrap (for scroll + intro).
 */
const GooeyDoubleDiamondSection = forwardRef(function GooeyDoubleDiamondSection(
  {
    phases,
    activePhase,
    onPhaseHoverChange,
    onPhaseClick,
    filterId = 'gooey',
  },
  ref,
) {
  const played = hasIntroPlayed();
  const cursorRef = useRef(null);
  const trailRefs = useRef([]);
  const wrapRef = useRef(null);

  const setWrapRef = useCallback(
    (node) => {
      wrapRef.current = node;
      if (ref == null) return;
      if (typeof ref === 'function') ref(node);
      else ref.current = node;
    },
    [ref],
  );

  useEffect(() => {
    const area = wrapRef.current?.querySelector('.dd-phase-row');
    if (!area) return;

    let hovering = false;
    let mouseX = 0;
    let mouseY = 0;
    const trail = Array.from({ length: DOUBLE_DIAMOND_CURSOR_TRAIL_COUNT }, () => ({ x: 0, y: 0 }));
    let rafId;

    const tick = () => {
      if (hovering) {
        trail[0].x += (mouseX - trail[0].x) * 0.55;
        trail[0].y += (mouseY - trail[0].y) * 0.55;
        for (let i = 1; i < DOUBLE_DIAMOND_CURSOR_TRAIL_COUNT; i++) {
          trail[i].x += (trail[i - 1].x - trail[i].x) * 0.4;
          trail[i].y += (trail[i - 1].y - trail[i].y) * 0.4;
        }

        if (cursorRef.current) {
          cursorRef.current.style.left = `${mouseX}px`;
          cursorRef.current.style.top = `${mouseY}px`;
        }
        trailRefs.current.forEach((el, i) => {
          if (el) {
            el.style.left = `${trail[i].x}px`;
            el.style.top = `${trail[i].y}px`;
          }
        });
      }
      rafId = requestAnimationFrame(tick);
    };

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const onEnter = () => {
      hovering = true;
      trail.forEach((t) => { t.x = mouseX; t.y = mouseY; });
      cursorRef.current?.classList.add('dd-cursor--on');
      trailRefs.current.forEach((el) => el?.classList.add('dd-cursor-trail--on'));
    };

    const onLeave = () => {
      hovering = false;
      cursorRef.current?.classList.remove('dd-cursor--on');
      trailRefs.current.forEach((el) => el?.classList.remove('dd-cursor-trail--on'));
    };

    document.addEventListener('mousemove', onMove);
    area.addEventListener('mouseenter', onEnter);
    area.addEventListener('mouseleave', onLeave);
    rafId = requestAnimationFrame(tick);

    return () => {
      document.removeEventListener('mousemove', onMove);
      area.removeEventListener('mouseenter', onEnter);
      area.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <svg className="dd-svg-filters" aria-hidden="true">
        <defs>
          <filter id={filterId}>
            <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
            />
          </filter>
        </defs>
      </svg>

      <motion.div ref={setWrapRef} className="dd-gooey-wrap">
        <div className="dd-gooey">
          <motion.div
            className="dd-d1 dd-diamond"
            initial={played ? { opacity: 1, scale: 1, rotate: 45 } : { opacity: 0, scale: 0, rotate: 45 }}
          />
          <motion.div
            className="dd-d2 dd-diamond"
            initial={played ? { opacity: 1, scale: 1, rotate: 45 } : { opacity: 0, scale: 0, rotate: 45 }}
          />
        </div>

        <motion.div className="dd-dashed-lines" initial={played ? { opacity: 1 } : { opacity: 0 }}>
          <div className="dd-dashed-line" />
          <div className="dd-dashed-line" />
          <div className="dd-dashed-line" />
        </motion.div>

        <motion.div className="dd-phase-row" initial={played ? { opacity: 1 } : { opacity: 0 }}>
          {phases.map(({ key, label }) => (
            <button
              key={key}
              type="button"
              className={`dd-phase-label${activePhase === key ? ' active' : ''}`}
              onMouseEnter={() => onPhaseHoverChange?.(key)}
              onMouseLeave={() => onPhaseHoverChange?.(null)}
              onClick={() => onPhaseClick?.(key)}
            >
              {label}
            </button>
          ))}
        </motion.div>
      </motion.div>

      <div ref={cursorRef} className="dd-cursor" aria-hidden="true" />
      {Array.from({ length: DOUBLE_DIAMOND_CURSOR_TRAIL_COUNT }, (_, i) => (
        <div
          key={i}
          ref={(el) => { trailRefs.current[i] = el; }}
          className="dd-cursor-trail"
          style={{ '--ti': i }}
          aria-hidden="true"
        />
      ))}
    </>
  );
});

export default GooeyDoubleDiamondSection;
