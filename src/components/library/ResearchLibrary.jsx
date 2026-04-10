import { useState, useMemo } from 'react';
import { Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LIBRARY_CATEGORIES, PAGE_DATA } from './pageRegistry';
import PatternPage from './PatternPage';
import DoubleDiamondNav from './DoubleDiamondNav';

/**
 * Library index / landing shown at /library
 */
function LibraryIndex({ onPhaseClick, activePhase }) {
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
      <DoubleDiamondNav activePhase={activePhase} onPhaseClick={onPhaseClick} />

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
 * ResearchLibrary — wrapper with collapsible sidebar + nested routes.
 */
export default function ResearchLibrary() {
  const location = useLocation();
  const currentSlug = location.pathname.split('/library/')[1] || '';
  const activePhaseIndex = useMemo(() => getPhaseIndex(currentSlug), [currentSlug]);

  const [openCategories, setOpenCategories] = useState(() => {
    // Auto-open the category that contains the current page
    const idx = activePhaseIndex;
    return idx != null && idx >= 0 ? { [idx]: true } : { 0: true };
  });

  // Mobile sidebar collapse state
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleCategory = (idx) => {
    setOpenCategories((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  // Auto-close sidebar on route change (mobile)
  const handleNavClick = () => {
    setSidebarOpen(false);
  };

  // When a phase is clicked on the diamond, expand that category in the sidebar
  const handlePhaseClick = (phaseIndex) => {
    setOpenCategories((prev) => {
      const newState = { ...prev };
      // Toggle: if already open, close it; otherwise open it (and keep others as-is)
      newState[phaseIndex] = !prev[phaseIndex];
      // On mobile, also open the sidebar
      return newState;
    });
    setSidebarOpen(true);
  };

  return (
    <div className="library-layout">
      {/* ── Library Sidebar ── */}
      <aside className={`library-sidebar ${sidebarOpen ? 'mobile-open' : ''}`}>
        <div className="library-sidebar-header">
          <Link to="/library" className="library-sidebar-title" onClick={handleNavClick}>
            Research Library
          </Link>
          <button
            className="library-sidebar-toggle"
            onClick={() => setSidebarOpen((v) => !v)}
            aria-label="Toggle library navigation"
          >
            {sidebarOpen ? '✕' : '☰'}
          </button>
        </div>

        <div className={`library-sidebar-nav ${sidebarOpen ? 'show' : ''}`}>
          {LIBRARY_CATEGORIES.map((cat, ci) => (
            <nav key={cat.title} className="library-nav-section">
              <button
                className={`library-nav-section-title ${openCategories[ci] ? 'open' : ''} ${activePhaseIndex === ci ? 'phase-active' : ''}`}
                onClick={() => toggleCategory(ci)}
              >
                {cat.title}
                <span className="library-expand-icon">▸</span>
              </button>

              {openCategories[ci] && (
                <ul className="library-nav-links">
                  {cat.pages.map((page) => (
                    <li key={page.slug}>
                      <Link
                        to={page.slug === '5es-journey' ? '/5es-journey' : `/library/${page.slug}`}
                        className={`library-nav-link ${currentSlug === page.slug ? 'active' : ''}`}
                        onClick={handleNavClick}
                      >
                        {page.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </nav>
          ))}
        </div>
      </aside>

      {/* ── Library Content ── */}
      <div className={`library-content ${currentSlug ? 'library-content--has-strip' : ''}`}>
        {/* Sticky Double Diamond strip — shown on individual pages */}
        {currentSlug && (
          <div className="dd-nav-strip-sticky">
            <DoubleDiamondNav activePhase={activePhaseIndex} onPhaseClick={handlePhaseClick} />
          </div>
        )}

        <Routes>
          <Route index element={<LibraryIndex onPhaseClick={handlePhaseClick} activePhase={activePhaseIndex} />} />
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
