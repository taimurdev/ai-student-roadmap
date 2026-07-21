import "./Timeline.css";

const Timeline = ({ roadmap }) => {
  return (
    <div className="timeline-wrapper">

      <h2 className="timeline-title">
        Learning Timeline 📅
      </h2>

      <div className="timeline-container">

        {roadmap.timeline.map((month, index) => (

          <div
            className="timeline-card"
            key={index}
          >

            <h3>{month.month}</h3>

            <ul>

              {month.topics.map((topic, i) => (

                <li key={i}>

                  <input
                    type="checkbox"
                  />

                  <span>
                    {topic}
                  </span>

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