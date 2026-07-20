import { Link } from "react-router-dom";
import "./QuizCard.css";

const QuizCard = () => {
  return (
    <section className="assessment-section">
      <div className="assessment-container">

        <div className="assessment-content">
          <h2>
            Discover Your Perfect Career Path 🚀
          </h2>

          <p>
            Take our AI-powered career assessment quiz. 
            Analyze your interests, skills, and goals to get a personalized
            student roadmap.
          </p>

          <Link to="/quiz">
            <button className="assessment-btn">
              Start Career Assessment →
            </button>
          </Link>
        </div>

        <div className="assessment-info">
          <div className="info-box">
            <h3>🤖 AI Analysis</h3>
            <p>Smart recommendations based on your answers.</p>
          </div>

          <div className="info-box">
            <h3>🎯 Career Match</h3>
            <p>Find fields that match your skills.</p>
          </div>

          <div className="info-box">
            <h3>📈 Roadmap</h3>
            <p>Get a step-by-step learning plan.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default QuizCard;