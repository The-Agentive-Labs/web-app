import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

/**
 * Renders a single content section (h3 + mixed content blocks).
 * Each block can be: { type: 'p', text }, { type: 'ul'|'ol', items }, { type: 'code', text },
 * or { type: 'custom', element } for page-specific visuals.
 */
function ContentBlocks({ blocks }) {
  if (!blocks) return null;
  return blocks.map((block, i) => {
    switch (block.type) {
      case 'p':
        return <p key={i} dangerouslySetInnerHTML={{ __html: block.text }} />;
      case 'ul':
        return (
          <ul key={i}>
            {block.items.map((item, j) => (
              <li key={j} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>
        );
      case 'ol':
        return (
          <ol key={i}>
            {block.items.map((item, j) => (
              <li key={j} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ol>
        );
      case 'code':
        return (
          <div key={i} className="pattern-code-block">
            <code dangerouslySetInnerHTML={{ __html: block.text }} />
          </div>
        );
      case 'example':
        return (
          <div key={i} className="journey-example-box">
            {block.items.map((item, j) => (
              <p key={j} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </div>
        );
      case 'custom':
        return <div key={i}>{block.element}</div>;
      default:
        return null;
    }
  });
}

function Section({ title, blocks }) {
  return (
    <>
      {title && <h3>{title}</h3>}
      <ContentBlocks blocks={blocks} />
    </>
  );
}

/**
 * PatternPage — shared template for all Research Library methodology pages.
 * Renders a canonical layout from structured data.
 */
export default function PatternPage({ page }) {
  if (!page) return null;

  return (
    <div className="journey-page">
      {/* ── Header ── */}
      <motion.header
        className="journey-header"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <div className="journey-tags">
          {page.tags.map((tag) => (
            <span key={tag} className="journey-tag">{tag}</span>
          ))}
        </div>
        <h1 className="journey-title">{page.title}</h1>
        <p className="journey-purpose">{page.purpose}</p>
      </motion.header>

      {/* ── Learn / Build Split ── */}
      <motion.div
        className="journey-split"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        custom={1}
      >
        {/* Learn Column */}
        <motion.section
          className="journey-section journey-learn"
          variants={fadeUp}
          custom={2}
        >
          <h2>Learn</h2>
          {page.learn.sections.map((section, i) => (
            <Section key={i} title={section.title} blocks={section.blocks} />
          ))}
        </motion.section>

        {/* Build Column */}
        <motion.section
          className="journey-section journey-build"
          variants={fadeUp}
          custom={3}
        >
          <h2>Build</h2>
          {page.build.sections.map((section, i) => (
            <Section key={i} title={section.title} blocks={section.blocks} />
          ))}
        </motion.section>
      </motion.div>

      {/* ── AI + Human Collaboration ── */}
      <motion.section
        className="journey-ai-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={fadeUp}
        custom={2}
      >
        <h2>AI + Human Collaboration</h2>

        <div className="journey-comparison">
          <div className="journey-comparison-col journey-human-col">
            <div className="journey-comparison-icon">
              <span className="material-symbols-rounded">emoji_objects</span>
            </div>
            <h4>Human Value</h4>
            <ul>
              {page.ai.humanValue.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="journey-comparison-col journey-ai-col">
            <div className="journey-comparison-icon">
              <span className="material-symbols-rounded">psychology_alt</span>
            </div>
            <h4>AI Value</h4>
            <ul>
              {page.ai.aiValue.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <h3>Key Considerations</h3>
        <ul>
          {page.ai.considerations.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>

        <h3>"AI in the Loop" Model</h3>
        <ol>
          {page.ai.aiInLoop.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ol>

        <h3>Watch-Outs</h3>
        <ul>
          {page.ai.watchOuts.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>
      </motion.section>
    </div>
  );
}
