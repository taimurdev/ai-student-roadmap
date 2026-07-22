import React from "react";
import { Link } from "react-router-dom";
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
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            {/* <li><Link to="/roadmap">My Roadmap</Link></li> */}
            {/* <li><Link to="/quiz">Assessment Quiz</Link></li> */}
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Resources</h3>
          <ul>
            <li><span>Career Roadmaps</span></li>
            <li><span>Skill Assessment</span></li>
            <li><span>Learning Paths</span></li>
            <li><span>AI Recommendations</span></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: taimurayaz09@gmail.com</p>
          <p>Phone: +92 3233444677</p>
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