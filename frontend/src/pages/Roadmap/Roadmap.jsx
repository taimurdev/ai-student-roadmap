import { useEffect, useState } from "react";
import axios from "axios";
import "./Roadmap.css";
import Timeline from "../../components/Timeline/Timeline";

const Roadmap = () => {
  const [roadmap, setRoadmap] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRoadmap();
  }, []);

  const fetchRoadmap = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:5000/api/roadmap",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setRoadmap(res.data.roadmap);
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
          "Failed to load roadmap."
      );
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="roadmap-container">
        <h1>Loading Roadmap...</h1>
      </div>
    );
  }

  if (!roadmap) {
    return (
      <div className="roadmap-container">
        <h1>No Roadmap Found</h1>
      </div>
    );
  }

  return (
    <section className="roadmap-page">
      <div className="roadmap-container">

        <h1>Your AI Career Roadmap 🚀</h1>

        <p>
          Personalized roadmap generated from your quiz answers.
        </p>

        {/* Career */}

        <div className="career-header">

          <div>
            <h2>{roadmap.career}</h2>

            <h3>Duration: {roadmap.duration}</h3>

            <h3>Difficulty: {roadmap.difficulty}</h3>
          </div>

          <div className="match-score">
            100%
            <span>Match</span>
          </div>

        </div>

        {/* Description */}

        <div className="description">

          <h2>Why this Career?</h2>

          <p>{roadmap.description}</p>

        </div>

        {/* Skills */}

        <h2 className="title">
          Skills You'll Learn
        </h2>

        <div className="skills-container">

          {roadmap.skills.map((skill, index) => (

            <div
              className="skill-card"
              key={index}
            >

              <h3>{skill}</h3>

            </div>

          ))}

        </div>

        {/* Courses */}

        <h2 className="title">
          Recommended Courses
        </h2>

        <div className="skills-container">

          {roadmap.courses.map((course, index) => (

            <div
              className="skill-card"
              key={index}
            >

              <h3>{course}</h3>

            </div>

          ))}

        </div>

        {/* Projects */}

        <h2 className="title">
          Projects To Build
        </h2>

        <div className="skills-container">

          {roadmap.projects.map((project, index) => (

            <div
              className="skill-card"
              key={index}
            >

              <h3>{project}</h3>

            </div>

          ))}

        </div>

        {/* Timeline Component */}

        <Timeline roadmap={roadmap} />

      </div>
    </section>
  );
};

export default Roadmap;