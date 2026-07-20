import "./RoadmapPreview.css";

function RoadmapPreview() {
  return (
    <section className="roadmap-preview">

      <h2>Career Roadmap Preview</h2>

      <p>
        Explore how your personalized AI career roadmap will look.
      </p>


      <div className="roadmap-container">

        <div className="roadmap-card">

          <div className="roadmap-badge">
            Step 01
          </div>

          <h3>Learn Fundamentals</h3>

          <span>
            Build strong basics and understand core concepts required for your career.
          </span>

        </div>


        <div className="roadmap-card">

          <div className="roadmap-badge">
            Step 02
          </div>

          <h3>Build Projects</h3>

          <span>
            Apply your skills by creating real-world projects and improving experience.
          </span>

        </div>


        <div className="roadmap-card">

          <div className="roadmap-badge">
            Step 03
          </div>

          <h3>Career Growth</h3>

          <span>
            Prepare for jobs, interviews and professional opportunities.
          </span>

        </div>


      </div>

    </section>
  );
}

export default RoadmapPreview;