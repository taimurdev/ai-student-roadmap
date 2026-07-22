import { useEffect, useState } from "react";
import axios from "axios";
import "./Timeline.css";

const Timeline = ({ roadmap }) => {
  const [completedTopics, setCompletedTopics] = useState([]);

  useEffect(() => {
    fetchProgress();
  }, []);

  const fetchProgress = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get("http://localhost:5000/api/progress", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setCompletedTopics(res.data?.progress?.completedTopics || []);
    } catch (error) {
      console.log("No previous progress found.");
    }
  };

  const handleCheckbox = async (topic) => {
    const previousState = [...completedTopics];
    let updatedTopics = [];

    if (completedTopics.includes(topic)) {
      updatedTopics = completedTopics.filter((item) => item !== topic);
    } else {
      updatedTopics = [...completedTopics, topic];
    }

    // Optimistic UI Update
    setCompletedTopics(updatedTopics);

    try {
      const token = localStorage.getItem("token");

      await axios.post(
        "http://localhost:5000/api/progress",
        {
          completedTopics: updatedTopics,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      console.error(error);
      // Rollback to previous state if API call fails
      setCompletedTopics(previousState);
      alert("Failed to save progress. Please try again.");
    }
  };

  if (!roadmap?.timeline) {
    return null;
  }

  return (
    <div className="timeline-wrapper">
      <h2 className="timeline-title">Learning Timeline 📅</h2>

      <div className="timeline-container">
        {roadmap.timeline.map((month, index) => (
          <div className="timeline-card" key={index}>
            <h3>{month.month}</h3>

            <ul>
              {month.topics?.map((topic, i) => (
                <li key={i}>
                  <label style={{ display: "flex", alignItems: "center", gap: "14px", width: "100%", cursor: "pointer" }}>
                    <input
                      type="checkbox"
                      checked={completedTopics.includes(topic)}
                      onChange={() => handleCheckbox(topic)}
                    />
                    <span>{topic}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;