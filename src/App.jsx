import { useState } from "react";
import { portfolio } from "./data/portfolio";
import "./index.css";

const Arrow = () => <span aria-hidden="true">↗</span>;

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const year = new Date().getFullYear();

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span>Fredrick</span><b> Cyprian</b>
        </a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
          {menuOpen ? "Close" : "Menu"}
        </button>
        <nav className={menuOpen ? "nav open" : "nav"} aria-label="Primary navigation">
          {['about', 'skills', 'projects', 'experience', 'education', 'contact'].map((item) => (
            <a key={item} href={`#${item}`} onClick={closeMenu}>{item}</a>
          ))}
          <a className="nav-cta" href={portfolio.cv} download>Download CV</a>
        </nav>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-copy">
            <p className="eyebrow">Business optimisation · Data · AI · Automation</p>
            <h1>Hi, I'm <span>{portfolio.firstName}</span>.</h1>
            <p className="hero-role">{portfolio.title}</p>
            <p className="role-line">{portfolio.roles.join(" · ")}</p>
            <p className="hero-summary">{portfolio.summary}</p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">View my work <Arrow /></a>
              <a className="button secondary" href={`mailto:${portfolio.email}`}>Let's connect</a>
            </div>
            <div className="social-row">
              <a href={portfolio.linkedin} target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
              <a href={portfolio.github} target="_blank" rel="noreferrer">GitHub <Arrow /></a>
              <span>{portfolio.location}</span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="portrait-frame">
              <img src={portfolio.profilePhoto} alt={`${portfolio.name} professional portrait`} onError={(event) => { event.currentTarget.style.display = 'none'; event.currentTarget.nextElementSibling.style.display = 'grid'; }} />
              <div className="portrait-placeholder" aria-hidden="true">OF</div>
            </div>
            <div className="floating-card code-card">
              <span>focus.py</span>
              <code>strategy + data + AI</code>
            </div>
            <div className="floating-card impact-card">
              <span>My focus</span>
              <strong>Insight Into Impact</strong>
              <small>Optimise · Automate · Transform</small>
            </div>
          </div>
        </section>

        <section className="section about" id="about">
          <header className="section-heading">
            <p className="eyebrow">About me</p>
            <h2>Connecting strategy, insight and execution.</h2>
          </header>
          <div className="about-grid">
            <div className="about-copy">
              {portfolio.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <aside className="principles-card">
              <p className="eyebrow">How I work</p>
              <ul>
                <li><b>Understand</b><span>Clarify the real business problem.</span></li>
                <li><b>Analyse</b><span>Use data to uncover patterns and gaps.</span></li>
                <li><b>Build</b><span>Translate insight into practical solutions.</span></li>
                <li><b>Improve</b><span>Measure outcomes and iterate continuously.</span></li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="section" id="skills">
          <header className="section-heading split-heading">
            <div><p className="eyebrow">Capabilities</p><h2>Skills that move from analysis to impact.</h2></div>
            <p>Technical delivery grounded in business context and operational reality.</p>
          </header>
          <div className="skill-grid">
            {portfolio.skillGroups.map((group, index) => (
              <article className="skill-card" key={group.title}>
                <span className="card-number">0{index + 1}</span>
                <h3>{group.title}</h3>
                <div className="tag-list">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <header className="section-heading split-heading">
            <div><p className="eyebrow">Selected projects</p><h2>Solutions built around real problems.</h2></div>
            <a href={portfolio.github} target="_blank" rel="noreferrer">View GitHub profile <Arrow /></a>
          </header>
          <div className="project-list">
            {portfolio.projects.map((project, index) => (
              <article className="project-card" key={project.name}>
                <div className="project-image">
                  <img src={project.image} alt={`${project.name} project preview`} onError={(event) => { event.currentTarget.style.display = 'none'; event.currentTarget.parentElement.classList.add('image-fallback'); }} />
                  <span className="project-index">0{index + 1}</span>
                </div>
                <div className="project-content">
                  <div className="project-meta"><span>{project.type}</span><b>{project.achievement}</b></div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="tag-list compact">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noreferrer">Source code <Arrow /></a>
                    {project.live && <a href={project.live} target="_blank" rel="noreferrer">Live project <Arrow /></a>}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="experience">
          <header className="section-heading"><p className="eyebrow">Experience</p><h2>A career built on continuous improvement.</h2></header>
          <div className="timeline">
            {portfolio.experience.map((item) => (
              <article className="timeline-item" key={item.role}>
                <div className="timeline-period">{item.period}</div>
                <div className="timeline-content">
                  <h3>{item.role}</h3>
                  <p className="company">{item.company} · {item.location}</p>
                  <ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section learning" id="education">
          <div>
            <header className="section-heading"><p className="eyebrow">Education</p><h2>Business foundation. Data-driven future.</h2></header>
            <div className="learning-stack">{portfolio.education.map((item) => <article key={item.qualification}><h3>{item.qualification}</h3><p>{item.institution}</p><span>{item.detail}</span></article>)}</div>
          </div>
          <div>
            <header className="section-heading"><p className="eyebrow">Certifications</p><h2>Continuous professional development.</h2></header>
            <div className="learning-stack">{portfolio.certifications.map((item) => <article key={item.name}><h3>{item.name}</h3><p>{item.issuer}</p><span>{item.date} · {item.credential}</span></article>)}</div>
          </div>
        </section>

        <section className="section interests">
          <p className="eyebrow">Areas of interest</p>
          <div className="interest-track">{portfolio.interests.map((interest) => <span key={interest}>{interest}</span>)}</div>
        </section>

        <section className="section contact" id="contact">
          <p className="eyebrow">Let's build something valuable</p>
          <h2>Have a business challenge that data, AI or automation could solve?</h2>
          <p>{portfolio.tagline}</p>
          <div className="hero-actions centered">
            <a className="button primary" href={`mailto:${portfolio.email}`}>Send an email <Arrow /></a>
            <a className="button secondary" href={portfolio.linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn</a>
            <a className="button secondary" href={portfolio.cv} download>Download CV</a>
          </div>
        </section>
      </main>

      <footer>
        <span>© {year} {portfolio.name}</span>
        <span>Built with React and deployed on GitHub Pages.</span>
      </footer>
    </div>
  );
}

export default App;
