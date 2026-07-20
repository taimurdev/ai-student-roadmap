import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h2>AI Student Roadmap</h2>
          <p>
            Your personalized AI-powered platform to discover career paths,
            learn new skills, and achieve your professional goals.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Resources</h3>
          <ul>
            <li>Career Roadmaps</li>
            <li>Skill Assessment</li>
            <li>Learning Paths</li>
            <li>AI Recommendations</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: support@aistudentroadmap.com</p>
          <p>Phone: +92 300 1234567</p>
          <p>Pakistan</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 AI Student Roadmap. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;