import { useMemo } from 'react';
import { Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LIBRARY_CATEGORIES, PAGE_DATA } from './pageRegistry';
import PatternPage from './PatternPage';
import DoubleDiamondNav from './DoubleDiamondNav';

/**
 * Library index / landing shown at /library
 */
function LibraryIndex({ activePhase, currentSlug }) {
  return (
    <div className="journey-page">
      <motion.header
        className="journey-header"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="journey-tags">
          <span className="journey-tag">Research</span>
          <span className="journey-tag">Design</span>
          <span className="journey-tag">AI + Human</span>
        </div>
        <h1 className="journey-title">Research Library</h1>
        <p className="journey-purpose">
          A hands-on library of proven product research processes. Each methodology
          includes a Learn section (theory &amp; best practices), a Build section
          (templates &amp; step-by-step instructions), and an AI + Human collaboration guide.
        </p>
      </motion.header>

      {/* Double Diamond Visual — index view */}
      <DoubleDiamondNav activePhase={activePhase} currentSlug={currentSlug} />

      <div className="library-index-grid">
        {LIBRARY_CATEGORIES.map((cat, ci) => (
          <motion.div
            key={cat.title}
            className="library-index-category"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: ci * 0.1, duration: 0.45 }}
          >
            <h3>{cat.title}</h3>
            <ul>
              {cat.pages.map((page) => {
                const isAvailable = !!PAGE_DATA[page.slug];
                const linkTo = page.slug === '5es-journey' ? '/5es-journey' : `/library/${page.slug}`;
                const is5Es = page.slug === '5es-journey';
                return (
                  <li key={page.slug}>
                    {(isAvailable || is5Es) ? (
                      <Link to={linkTo}>{page.label}</Link>
                    ) : (
                      <span className="library-coming-soon">{page.label} <em>— coming soon</em></span>
                    )}
                  </li>
                );
              })}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/**
 * Renders a page from the registry by slug, or shows not-found.
 */
function PageFromRegistry({ slug }) {
  const page = PAGE_DATA[slug];
  if (!page) {
    return (
      <div className="journey-page" style={{ textAlign: 'center', paddingTop: '20vh' }}>
        <h2>Coming Soon</h2>
        <p>This page is being ported to the new design system.</p>
        <Link to="/library" style={{ color: 'var(--brand-primary-500)' }}>← Back to Library</Link>
      </div>
    );
  }
  return <PatternPage page={page} />;
}

/**
 * Determine which phase index (0–3) a slug belongs to, or null.
 */
function getPhaseIndex(slug) {
  if (!slug) return null;
  for (let i = 0; i < LIBRARY_CATEGORIES.length; i++) {
    if (LIBRARY_CATEGORIES[i].pages.some((p) => p.slug === slug)) {
      return i;
    }
  }
  return null;
}

/**
 * ResearchLibrary — DD nav strip + nested page routes (no sidebar).
 */
export default function ResearchLibrary() {
  const location = useLocation();
  const currentSlug = location.pathname.split('/library/')[1] || '';
  const activePhaseIndex = useMemo(() => getPhaseIndex(currentSlug), [currentSlug]);

  return (
    <div className="library-layout library-layout--no-sidebar">
      {/* ── Library Content ── */}
      <div className={`library-content ${currentSlug ? 'library-content--has-strip' : ''}`}>
        {/* Fixed Double Diamond strip — shown on individual pages */}
        {currentSlug && (
          <div className="dd-nav-strip-sticky">
            <DoubleDiamondNav activePhase={activePhaseIndex} currentSlug={currentSlug} />
          </div>
        )}

        <Routes>
          <Route index element={<LibraryIndex activePhase={activePhaseIndex} currentSlug={currentSlug} />} />
          {/* Dynamic route for all pages */}
          {LIBRARY_CATEGORIES.flatMap((cat) =>
            cat.pages.map((page) => (
              <Route
                key={page.slug}
                path={page.slug}
                element={<PageFromRegistry slug={page.slug} />}
              />
            ))
          )}
        </Routes>
      </div>
    </div>
  );
}
