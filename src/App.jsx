import { useState } from 'react'

function App() {
  const [isDark, setIsDark] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.setAttribute('data-theme', !isDark ? 'dark' : 'light');
  };

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`page-wrapper ${isDark ? 'dark-mode' : ''}`}>

      <div className="layout-horizontal">
        <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
          <div className="sidebar-brand">
            <img
              src={isDark ? "/Logo-white.png" : "/logo2.png"}
              alt="Agentive Labs Logo"
              className="sidebar-logo"
            />
            <div className="brand-text">
              <div className="brand-the">The</div>
              <div className="brand-main">Agentive</div>
              <div className="brand-main">Labs</div>
            </div>
          </div>

          <nav className="sidebar-nav">
            <a href="#" className="nav-item active">
              <div className="nav-icon">
                <span className="material-symbols-rounded">home</span>
              </div>
              <span>Home</span>
            </a>
            <a href="#" className="nav-item">
              <div className="nav-icon">
                <span className="material-symbols-rounded">account_tree</span>
              </div>
              <span>Workflows</span>
            </a>
            <a href="#" className="nav-item">
              <div className="nav-icon">
                <span className="material-symbols-rounded">terminal</span>
              </div>
              <span>Simulator</span>
            </a>
            <a href="#" className="nav-item">
              <div className="nav-icon">
                <span className="material-symbols-rounded">info</span>
              </div>
              <span>About</span>
            </a>
          </nav>

          <div className="sidebar-footer">
            <button onClick={toggleTheme} className="collapse-toggle" title="Toggle Theme">
              <div className="nav-icon">
                <span className="material-symbols-rounded">
                  {isDark ? 'light_mode' : 'dark_mode'}
                </span>
              </div>
              <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
            <button onClick={toggleSidebar} className="collapse-toggle" title="Toggle Sidebar">
              <div className="nav-icon">
                <span className="material-symbols-rounded">
                  {isCollapsed ? 'side_navigation' : 'keyboard_double_arrow_left'}
                </span>
              </div>
              <span>Collapse</span>
            </button>
          </div>
        </aside>

        <div className="main-content">
          <main>
            <section className="hero">
              <h1 className="hero-title">The Design Library.</h1>
              <p className="subtitle">
                A hands-on library of proven product processes, inspired by frameworks like <strong>Double Diamond</strong>, and designed for <strong>AI-Human Harmony</strong>.
              </p>
              <div className="hero-actions">
                <button className="btn-get-started">
                  Coming Soon
                </button>
              </div>
            </section>



            <section className="features-grid">
              <div className="card card-mission">
                <h3>Our Mission</h3>
                <p style={{ marginTop: '0.8rem' }}>Helping Product builders figure out the right thing to build - before they build it right.</p>
              </div>
              <div className="card card-topic">
                <h3>Our Process Library breaks each stage of Double Diamond into practical, hands-on micro playbooks.</h3>
                <p style={{ marginTop: '0.2rem', marginBottom: '1.5rem' }}>So builders can apply the framework in real workflows - not just theory.</p>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span className="material-symbols-rounded" style={{ color: 'var(--brand-primary-500)', fontSize: '1.2rem' }}>check_circle</span>
                    <span><strong>Clear inputs</strong> (what you need to start)</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span className="material-symbols-rounded" style={{ color: 'var(--brand-primary-500)', fontSize: '1.2rem' }}>check_circle</span>
                    <span><strong>Structured steps</strong> (how the work gets done)</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span className="material-symbols-rounded" style={{ color: 'var(--brand-primary-500)', fontSize: '1.2rem' }}>check_circle</span>
                    <span><strong>Clear outputs</strong> (what you get at the end)</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="productivity">
              <h2>The Future of Product Development is in Harmony</h2>
              <p className="harmony-intro">
                We’re intentional about where AI helps and where humans lead.
              </p>

              <div className="harmony-grid">
                <div className="harmony-card ai">
                  <div className="harmony-icon">
                    <span className="material-symbols-rounded">psychology_alt</span>
                  </div>
                  <h4>AI Excels</h4>
                  <p>Synthesis, pattern detection, structuring information, and speeding up repetitive work.</p>
                </div>

                <div className="harmony-card human">
                  <div className="harmony-icon">
                    <span className="material-symbols-rounded">emoji_objects</span>
                  </div>
                  <h4>Humans Lead</h4>
                  <p>Judgment, trade-offs, intuition, and decision-making where it matters most.</p>
                </div>

                <div className="harmony-result">
                  <p>The result is <strong>AI–human harmony</strong> across the entire product development workflow:
                    less busywork, more clarity, and better decisions at every step.</p>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-grid">
            <div className="footer-col brand-col">
              <div className="footer-brand">
                <img src="/Logo-white.png" alt="Agentive Labs Logo" className="footer-logo" />
                <span>The Agentive Labs</span>
              </div>
              <p className="footer-desc">
                Empowering the next generation of human-AI collaboration.
                Building tools that bridge the gap between human intent and artificial intelligence.
              </p>
            </div>

            <div className="footer-col">
              <h4>Company</h4>
              <a href="#">About Us</a>
              <a href="#">Careers</a>
              <a href="#">Contact</a>
            </div>

            <div className="footer-col">
              <h4>Resources</h4>
              <a href="#">Blog</a>
              <a href="#">Community</a>
              <a href="#">Documentation</a>
            </div>

            <div className="footer-col">
              <h4>Legal</h4>
              <a href="#">Terms & Conditions</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} The Agentive Labs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
