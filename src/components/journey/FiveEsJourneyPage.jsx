import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const PHASES = [
  { title: 'Entice', desc: 'How do users discover your product? What draws them in?' },
  { title: 'Enter', desc: "What's the first-time experience? How do they onboard?" },
  { title: 'Engage', desc: 'How do users accomplish their core goals? What\'s the daily experience?' },
  { title: 'Exit', desc: 'How do users leave (end a session, cancel, churn)? What\'s the offboarding?' },
  { title: 'Extend', desc: 'How do users become advocates? What keeps them coming back?' },
];

export default function FiveEsJourneyPage() {
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
          <span className="journey-tag">Journey Mapping</span>
          <span className="journey-tag">Experience Design</span>
        </div>
        <h1 className="journey-title">5 E's Journey Mapping</h1>
        <p className="journey-purpose">
          Map the complete user experience across five critical engagement phases.
        </p>
      </motion.header>

      {/* ── Five-Phase Flow ── */}
      <motion.div
        className="journey-flow"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        custom={1}
      >
        {PHASES.map((phase, i) => (
          <motion.div
            key={phase.title}
            className="journey-step"
            variants={fadeUp}
            custom={i + 2}
          >
            <h4>{phase.title}</h4>
            <p>{phase.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* ── Learn / Build Split ── */}
      <div className="journey-split">
        {/* Learn Column */}
        <motion.section
          className="journey-section journey-learn"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
          custom={2}
        >
          <h2>Learn</h2>

          <h3>What is 5 E's Journey Mapping?</h3>
          <p>
            The 5 E's framework breaks down the user journey into five distinct phases:{' '}
            <strong>Entice, Enter, Engage, Exit, and Extend</strong>. Unlike traditional
            journey maps that focus on a single interaction, the 5 E's capture the full
            lifecycle—from initial awareness to post-experience advocacy. This holistic view
            helps teams identify friction points and opportunities at every stage.
          </p>

          <h3>Framework &amp; Placement</h3>
          <p>Use 5 E's Journey Mapping during:</p>
          <ul>
            <li>Product strategy planning to identify high-impact areas</li>
            <li>Experience audits to diagnose drop-off or churn</li>
            <li>Post-launch reviews to understand end-to-end user behavior</li>
          </ul>
          <p>
            It's especially powerful when combined with quantitative data (analytics,
            retention metrics) and qualitative insights (user interviews, support tickets).
          </p>

          <h3>Best Practices</h3>
          <ul>
            <li>
              <strong>Start with Data:</strong> Ground each phase in real user behavior—analytics,
              session recordings, interview quotes.
            </li>
            <li>
              <strong>Identify Emotional Highs and Lows:</strong> Map not just actions but
              feelings. Where do users feel frustrated? Delighted? Confused?
            </li>
            <li>
              <strong>Focus on Transitions:</strong> The gaps between phases (e.g., Entice →
              Enter, Engage → Exit) are often where friction occurs.
            </li>
            <li>
              <strong>Make it Cross-Functional:</strong> Involve marketing (Entice), product
              (Enter/Engage), support (Exit), and growth (Extend) teams.
            </li>
            <li>
              <strong>Prioritize Pain Points:</strong> Not all friction is equal. Focus on
              blockers that prevent users from reaching the next phase.
            </li>
          </ul>
        </motion.section>

        {/* Build Column */}
        <motion.section
          className="journey-section journey-build"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
          custom={3}
        >
          <h2>Build</h2>

          <h3>Template: 5 E's Journey Map</h3>
          <p>
            Create a horizontal timeline with five columns (one per phase). For each phase,
            document:
          </p>
          <ul>
            <li><strong>User Actions:</strong> What do users do in this phase?</li>
            <li><strong>Touchpoints:</strong> Where do interactions happen? (Website, app, email, support)</li>
            <li><strong>Emotions:</strong> How do users feel? (Excited, confused, frustrated, satisfied)</li>
            <li><strong>Pain Points:</strong> What friction exists?</li>
            <li><strong>Opportunities:</strong> What could we improve?</li>
          </ul>

          <h3>Step-by-Step Instructions</h3>
          <ol>
            <li><strong>Define Your Scope:</strong> Are you mapping a specific feature, the entire product, or a particular user segment?</li>
            <li><strong>Gather Data:</strong> Pull analytics (conversion funnels, retention), qualitative research (interviews, surveys), and support tickets.</li>
            <li><strong>Map User Actions by Phase:</strong> For each E, list the key actions users take. Use real data—what <em>actually</em> happens, not what you <em>think</em> happens.</li>
            <li><strong>Identify Emotions:</strong> Review user quotes or session recordings. Where do users express joy, confusion, or frustration?</li>
            <li><strong>Highlight Pain Points:</strong> Where do users drop off? Where do they complain? Where do metrics show friction?</li>
            <li><strong>Brainstorm Opportunities:</strong> For each pain point, ask: "How might we improve this?" Prioritize by impact and feasibility.</li>
            <li><strong>Validate with Users:</strong> Share the journey map with 3-5 users. Does it resonate? Are you missing anything?</li>
          </ol>

          <h3>Example: Freelance Invoice App</h3>
          <div className="journey-example-box">
            <p>
              <strong>Entice:</strong> User sees ad on LinkedIn → Clicks "Try Free" → Lands on
              landing page. <em>Emotion: Curious but skeptical.</em> <strong>Pain Point:</strong>{' '}
              Landing page doesn't clearly explain how it's different from competitors.{' '}
              <strong>Opportunity:</strong> Add comparison chart and customer testimonials.
            </p>
            <p>
              <strong>Enter:</strong> User signs up → Prompted to create first invoice.{' '}
              <em>Emotion: Excited to try, but impatient.</em> <strong>Pain Point:</strong>{' '}
              Onboarding asks for too much info upfront (business details, tax ID).{' '}
              <strong>Opportunity:</strong> Allow "skip for now" and let users create a basic
              invoice immediately.
            </p>
            <p>
              <strong>Engage:</strong> User creates invoices, tracks payments, sends reminders.{' '}
              <em>Emotion: Productive and relieved.</em> <strong>Pain Point:</strong> No mobile
              app—users check payment status on laptop only.{' '}
              <strong>Opportunity:</strong> Build mobile app or responsive web version.
            </p>
            <p>
              <strong>Exit:</strong> User completes project, no longer needs app → Cancels
              subscription. <em>Emotion: Neutral, but grateful it worked.</em>{' '}
              <strong>Pain Point:</strong> No way to "pause" subscription for project gaps.{' '}
              <strong>Opportunity:</strong> Offer seasonal/project-based pricing.
            </p>
            <p>
              <strong>Extend:</strong> User recommends app to fellow freelancers → Shares
              referral link. <em>Emotion: Advocate.</em>{' '}
              <strong>Opportunity:</strong> Build a referral program with incentives (free month,
              cash bonus).
            </p>
          </div>
        </motion.section>
      </div>

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
              <li>Empathy to interpret emotional nuances in user behavior</li>
              <li>Contextual judgment to prioritize which pain points matter most</li>
              <li>Ability to connect journey insights to broader product strategy</li>
              <li>Cross-functional collaboration to align teams on opportunities</li>
            </ul>
          </div>
          <div className="journey-comparison-col journey-ai-col">
            <div className="journey-comparison-icon">
              <span className="material-symbols-rounded">psychology_alt</span>
            </div>
            <h4>AI Value</h4>
            <ul>
              <li>Analysis of large-scale behavioral data (clickstreams, session flows)</li>
              <li>Identification of drop-off patterns across user cohorts</li>
              <li>Clustering of common user paths and deviations</li>
              <li>Generation of opportunity hypotheses based on industry benchmarks</li>
            </ul>
          </div>
        </div>

        <h3>Key Considerations</h3>
        <ul>
          <li>
            <strong>AI for Data Analysis:</strong> Use AI to process analytics and identify where
            users drop off in each phase. But humans must interpret <em>why</em> (technical bug?
            confusing UX? lack of value prop?).
          </li>
          <li>
            <strong>Emotion Detection Limits:</strong> AI can analyze sentiment in survey
            responses or reviews, but it struggles with sarcasm, cultural context, and emotional
            subtlety. Always validate with qualitative research.
          </li>
          <li>
            <strong>Opportunity Prioritization:</strong> AI can suggest improvements based on
            patterns, but humans must weigh trade-offs (effort vs. impact, short-term vs.
            long-term).
          </li>
        </ul>

        <h3>"AI in the Loop" Model</h3>
        <ol>
          <li>
            <strong>Behavioral Mapping:</strong> AI analyzes user flows (clickstream data, session
            recordings) to map actual paths through the 5 E's. Humans validate and annotate with
            qualitative context.
          </li>
          <li>
            <strong>Emotion Tagging:</strong> AI scans user feedback (support tickets, reviews,
            survey comments) to tag emotional sentiment by phase. Humans review and refine based
            on deeper interpretation.
          </li>
          <li>
            <strong>Opportunity Generation:</strong> AI proposes potential improvements based on
            industry benchmarks and competitor analysis. Humans evaluate feasibility and alignment
            with product vision.
          </li>
        </ol>

        <h3>Watch-Outs</h3>
        <ul>
          <li>
            AI-driven journey maps can over-index on quantitative data, missing qualitative
            insights. Always balance with user interviews.
          </li>
          <li>
            Don't let AI auto-generate journey maps from data alone—it lacks the empathy and
            strategic context to make them meaningful.
          </li>
          <li>
            Beware of "average user" bias. AI clusters may obscure edge cases or underserved user
            segments. Segment your journey maps intentionally.
          </li>
        </ul>
      </motion.section>
    </div>
  );
}
