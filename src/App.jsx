import "./App.css";

function App() {
  return (
    <div className="portfolio">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">BH.</div>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>


      {/* HERO */}
      <section className="hero">

        <div className="hero-content">

          <p className="small-title">HELLO, I'M</p>

          <h1>
            Bachala <span>Hemasri</span>
          </h1>

          <h2>AI & Data Science Student</h2>

          <p className="hero-description">
            Passionate about Artificial Intelligence, Generative AI,
            Agentic AI and building practical technology solutions.
          </p>

            <div className="hero-buttons">

              <a
                href="/Hemasri-Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="button primary"
              >
                View Resume ↗
              </a>

              <a
                href="/Hemasri-Resume.pdf"
                download
                className="button secondary"
              >
                Download Resume ↓
              </a>

            </div>

        </div>


        <div className="profile-section">

          <div className="profile-frame">

            <img
              src="/profile.jpeg"
              alt="Bachala Hemasri"
              className="profile-image"
            />

          </div>

          <h3>AI & Data Science</h3>

          <p>Student • Developer • AI Enthusiast</p>

        </div>

      </section>


      {/* ABOUT */}
      <section id="about" className="section">

        <p className="section-label">ABOUT ME</p>

        <h2>Building with AI & curiosity.</h2>

        <div className="about-content">

          <p>
            I am a B.Tech student specializing in Artificial Intelligence
            and Data Science at Prathyusha Engineering College.
          </p>

          <p>
            I enjoy exploring Artificial Intelligence, Generative AI,
            LLMs and modern development tools while building practical
            projects.
          </p>

          <p>
            I have hands-on experience with rapid prototyping,
            UI/UX, APIs, testing, debugging and AI-assisted development.
          </p>

        </div>

      </section>


      {/* SKILLS */}
      <section id="skills" className="section">

        <p className="section-label">SKILLS</p>

        <h2>What I work with.</h2>

        <div className="skills-grid">

          <div className="skill-card">
            <div className="skill-icon">AI</div>
            <h3>AI & Generative AI</h3>
            <p>
              Artificial Intelligence, Generative AI, Agentic AI,
              LLMs and Prompt Engineering
            </p>
          </div>


          <div className="skill-card">
            <div className="skill-icon">PY</div>
            <h3>Programming</h3>
            <p>
              Python, Java, JavaScript, HTML5 and CSS3
            </p>
          </div>


          <div className="skill-card">
            <div className="skill-icon">API</div>
            <h3>Backend & APIs</h3>
            <p>
              FastAPI, REST APIs and Gemini API
            </p>
          </div>


          <div className="skill-card">
            <div className="skill-icon">✦</div>
            <h3>AI Tools</h3>
            <p>
              Gemini, ChatGPT, Claude, Google AI Studio,
              Lovable and Antigravity
            </p>
          </div>


          <div className="skill-card">
            <div className="skill-icon">DEV</div>
            <h3>Development Tools</h3>
            <p>
              Git, GitHub, VS Code, Android Studio, Docker and n8n
            </p>
          </div>


          <div className="skill-card">
            <div className="skill-icon">UX</div>
            <h3>Product Skills</h3>
            <p>
              UI/UX, Rapid Prototyping, Product Development,
              Testing and Debugging
            </p>
          </div>

        </div>

      </section>


      {/* PROJECTS */}
      <section id="projects" className="section">

        <p className="section-label">PROJECTS</p>

        <h2>Things I've built.</h2>

        <div className="projects-grid">


          {/* PROJECT 1 */}

          <div className="project-card featured-project">

            <div className="project-top">
              <span className="project-number">01</span>
              <span className="project-type">AI PRODUCT</span>
            </div>

            <h3>
              Agentic AI Personalized Startup Mentor
            </h3>

            <p>
              An Agentic AI product that converts startup ideas
              and founder profiles into personalized startup guidance.
            </p>

            <div className="tags">
              <span>Agentic AI</span>
              <span>Gemini</span>
              <span>FastAPI</span>
              <span>REST APIs</span>
            </div>

          </div>


          {/* PROJECT 2 */}

          <div className="project-card">

            <div className="project-top">
              <span className="project-number">02</span>
              <span className="project-type">MOBILE APP</span>
            </div>

            <h3>
              Rise & Shine
            </h3>

            <p>
              AI-powered smart alarm and productivity application
              designed to improve morning routines through personalized
              interactions and wake-up challenges.
            </p>

            <div className="tags">
              <span>AI</span>
              <span>Vite</span>
              <span>Capacitor</span>
              <span>Android</span>
            </div>

          </div>


          {/* PROJECT 3 */}

          <div className="project-card">

            <div className="project-top">
              <span className="project-number">03</span>
              <span className="project-type">DATA SCIENCE</span>
            </div>

            <h3>
              Data Science Projects
            </h3>

            <p>
              Worked with Kaggle datasets, data preprocessing,
              exploratory analysis and visualization during my
              Data Science internship.
            </p>

            <div className="tags">
              <span>Python</span>
              <span>Data Science</span>
              <span>Matplotlib</span>
              <span>Seaborn</span>
            </div>

          </div>

        </div>

      </section>


      {/* EXPERIENCE */}
      <section id="experience" className="section">

        <p className="section-label">EXPERIENCE</p>

        <h2>My journey so far.</h2>

        <div className="experience-list">


          <div className="experience-card">

            <div className="experience-date">
              JUN 2026 — JUL 2026
            </div>

            <h3>
              Data Science Intern
            </h3>

            <h4>
              Young Minds Technology Solutions Pvt. Ltd.
            </h4>

            <p>
              Cleaned and analyzed 15+ Kaggle datasets using
              preprocessing techniques including missing-value
              handling and normalization.
            </p>

            <p>
              Created 10+ visualizations using Matplotlib and
              Seaborn to identify trends and communicate insights.
            </p>

          </div>


          <div className="experience-card">

            <div className="experience-date">
              DEC 2025 — FEB 2026
            </div>

            <h3>
              Web Development Intern
            </h3>

            <h4>
              The Skybrisk
            </h4>

            <p>
              Built 5+ responsive web pages using HTML5, CSS3
              and JavaScript with focus on usability and UI.
            </p>

            <p>
              Worked with Git-based workflows and tested webpages
              across multiple browsers.
            </p>

          </div>

        </div>

      </section>


      {/* EDUCATION */}
      <section className="section">

        <p className="section-label">EDUCATION</p>

        <h2>Education.</h2>

        <div className="education-card">

          <div>

            <p className="education-year">
              2023 — PRESENT
            </p>

            <h3>
              Bachelor of Technology
            </h3>

            <h4>
              Artificial Intelligence and Data Science
            </h4>

            <p>
              Prathyusha Engineering College
            </p>

          </div>


          <div className="cgpa">

            <span>CGPA</span>

            <strong>8.28</strong>

          </div>

        </div>

      </section>


      {/* CERTIFICATIONS & ACHIEVEMENTS */}
      <section className="section">

        <p className="section-label">
          ACHIEVEMENTS & CERTIFICATIONS
        </p>

        <h2>Milestones.</h2>

        <div className="achievement-grid">


          <div className="achievement-card">

            <span>🏆</span>

            <h3>
              Smart India Hackathon
            </h3>

            <p>
              Selected at college level based on innovative
              problem-solving and project presentation.
            </p>

          </div>


          <div className="achievement-card">

            <span>⚡</span>

            <h3>
              24-Hour Hackathon
            </h3>

            <p>
              Participated and contributed to developing
              an innovative technical solution.
            </p>

          </div>


          <div className="achievement-card">

            <span>📜</span>

            <h3>
              NPTEL IoT
            </h3>

            <p>
              Elite Category — 71%.
            </p>

          </div>


          <div className="achievement-card">

            <span>🤖</span>

            <h3>
              Robotics & AR/VR
            </h3>

            <p>
              Completed hands-on training in Robotics and
              AR/VR Technologies.
            </p>

          </div>

        </div>

      </section>


      {/* CONTACT */}
      <section id="contact" className="contact-section">

        <p className="section-label">
          CONTACT
        </p>

        <h2>
          Let's connect.
        </h2>

        <p>
          Open to internships, entry-level opportunities
          and interesting AI projects.
        </p>

        <a
          href="mailto:bachala.hemasri@gmail.com"
          className="email-link"
        >
          bachala.hemasri@gmail.com
        </a>

        <div className="contact-buttons">

          <a
            href="https://github.com/Bachala746"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/in/bachala-hemasri-35a204295"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>

        </div>

      </section>


      {/* FOOTER */}
      <footer>

        <span>
          © 2026 Bachala Hemasri
        </span>

        <span>
          AI & Data Science Student
        </span>

      </footer>

    </div>
  );
}

export default App;