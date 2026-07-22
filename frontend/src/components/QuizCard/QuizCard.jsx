import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./QuizCard.css";

const QuizCard = () => {
  const navigate = useNavigate();

  const handleStartAssessment = async () => {
    const token = localStorage.getItem("token");

    // 1. Agar user logged in nahi hai toh Login page par bhejein
    if (!token) {
      navigate("/login");
      return;
    }

    try {
      // 2. Check karein ki user ka roadmap already exist karta hai ya nahi
      const res = await axios.get("http://localhost:5000/api/roadmap", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res.data && res.data.roadmap) {
        // Agar roadmap mil gaya toh direct Roadmap page par bhejein
        navigate("/roadmap");
      } else {
        // Agar roadmap nahi mil raha toh Quiz page par bhejein
        navigate("/quiz");
      }
    } catch (error) {
      // Kisi bhi error ya 404 ki surat mein Quiz page par bhej dein
      navigate("/quiz");
    }
  };

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

          <button className="assessment-btn" onClick={handleStartAssessment}>
            Start Career Assessment →
          </button>
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