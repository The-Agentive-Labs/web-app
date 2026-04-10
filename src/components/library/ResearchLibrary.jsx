import { useState } from 'react';
import { Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LIBRARY_CATEGORIES, PAGE_DATA } from './pageRegistry';
import PatternPage from './PatternPage';

/**
 * Library index / landing shown at /library
 */
function LibraryIndex() {
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
          includes a Learn section (theory & best practices), a Build section
          (templates & step-by-step instructions), and an AI + Human collaboration guide.
        </p>
      </motion.header>

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
 * ResearchLibrary — wrapper with collapsible sidebar + nested routes.
 */
export default function ResearchLibrary() {
  const location = useLocation();
  const [openCategories, setOpenCategories] = useState(() => {
    // Auto-open the category that contains the current page
    const slug = location.pathname.split('/library/')[1];
    const idx = LIBRARY_CATEGORIES.findIndex((cat) =>
      cat.pages.some((p) => p.slug === slug)
    );
    return idx >= 0 ? { [idx]: true } : { 0: true };
  });

  const toggleCategory = (idx) => {
    setOpenCategories((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const currentSlug = location.pathname.split('/library/')[1] || '';

  return (
    <div className="library-layout">
      {/* ── Library Sidebar ── */}
      <aside className="library-sidebar">
        <Link to="/library" className="library-sidebar-title">Research Library</Link>

        {LIBRARY_CATEGORIES.map((cat, ci) => (
          <nav key={cat.title} className="library-nav-section">
            <button
              className={`library-nav-section-title ${openCategories[ci] ? 'open' : ''}`}
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
                    >
                      {page.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </nav>
        ))}
      </aside>

      {/* ── Library Content ── */}
      <div className="library-content">
        <Routes>
          <Route index element={<LibraryIndex />} />
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
