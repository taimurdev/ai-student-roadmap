import "./HowItWorks.css";

function HowItWorks() {
  return (
    <section className="how-it-works">

      <div className="section-header">
        <h2>How It Works</h2>
        <p>
          Our AI analyzes your goals, skills and interests to create your
          personalized career roadmap.
        </p>
      </div>


      <div className="steps-container">

        <div className="step-card">

          <div className="step-number">
            01
          </div>

          <h3>Select Your Goal</h3>

          <p>
            Choose your desired career path and tell us about your interests
            and current skills.
          </p>

        </div>


        <div className="step-card">

          <div className="step-number">
            02
          </div>

          <h3>AI Analysis</h3>

          <p>
            Our AI evaluates your profile and generates a personalized
            learning strategy.
          </p>

        </div>


        <div className="step-card">

          <div className="step-number">
            03
          </div>

          <h3>Follow Roadmap</h3>

          <p>
            Follow your step-by-step roadmap, build projects and achieve your
            career goals.
          </p>

        </div>


      </div>

    </section>
  );
}

export default HowItWorks;