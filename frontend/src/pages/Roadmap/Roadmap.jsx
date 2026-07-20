import { useEffect, useState } from "react";
import "./Roadmap.css";


const Roadmap = () => {

  const [career, setCareer] = useState("");
  const [skills, setSkills] = useState([]);
  const [description, setDescription] = useState("");
  const [match, setMatch] = useState("");
  const [duration, setDuration] = useState("");


  useEffect(() => {

    const savedAnswers = localStorage.getItem("quizAnswers");


    if(savedAnswers){

      const answers = JSON.parse(savedAnswers);


      const interest = answers[0]?.answer;
      const level = answers[1]?.answer;
      const time = answers[3]?.answer;



      // AI ENGINE LOGIC


      if(
        interest === "Artificial Intelligence" &&
        level === "Beginner"
      ){

        setCareer("AI Engineer 🤖");

        setMatch("88%");

        setDuration("12 Months");


        setDescription(
          "Your profile shows interest in intelligent systems. Start with programming fundamentals and gradually move toward machine learning."
        );


        setSkills([
          "Python Programming",
          "Mathematics Basics",
          "Machine Learning",
          "Deep Learning",
          "AI Projects",
        ]);

      }



      else if(
        interest === "Web Development" &&
        level === "Advanced"
      ){

        setCareer("Full Stack Developer 💻");

        setMatch("95%");

        setDuration("6 Months");


        setDescription(
          "Your advanced skill level makes you suitable for building professional full-stack applications."
        );


        setSkills([
          "React.js",
          "Node.js",
          "Express.js",
          "MongoDB",
          "System Design",
        ]);

      }



      else if(
        interest === "Cyber Security"
      ){

        setCareer("Cyber Security Specialist 🔐");

        setMatch("90%");

        setDuration("9 Months");


        setDescription(
          "Your interest matches security analysis and protecting digital systems."
        );


        setSkills([
          "Networking",
          "Linux",
          "Ethical Hacking",
          "Security Tools",
        ]);

      }



      else if(
        interest === "Data Science"
      ){

        setCareer("Data Scientist 📊");

        setMatch("91%");

        setDuration("10 Months");


        setDescription(
          "Your profile matches data analysis and machine learning fields."
        );


        setSkills([
          "Python",
          "Statistics",
          "Data Analysis",
          "Machine Learning",
        ]);

      }



      else{


        setCareer("Frontend Developer 🌐");

        setMatch("85%");

        setDuration("8 Months");


        setDescription(
          "Your profile is suitable for creating modern user interfaces and web experiences."
        );


        setSkills([
          "HTML",
          "CSS",
          "JavaScript",
          "React",
          "UI Design",
        ]);


      }


    }


  }, []);



  return (

    <section className="roadmap-page">

      <div className="roadmap-container">


        <h1>
          Your AI Career Roadmap 🚀
        </h1>


        <p>
          Personalized recommendation based on your skills and interests
        </p>



        <div className="career-header">


          <div>

            <h2>
              {career}
            </h2>


            <h3>
              Duration: {duration}
            </h3>

          </div>



          <div className="match-score">

            {match}

            <span>
              Match
            </span>

          </div>


        </div>




        <div className="description">

          <h3>
            Why this career?
          </h3>

          <p>
            {description}
          </p>

        </div>





        <h2 className="title">
          Required Skills
        </h2>



        <div className="skills-container">

          {
            skills.map((skill,index)=>(

              <div
                className="skill-card"
                key={index}
              >

                <h3>
                  {skill}
                </h3>

              </div>

            ))
          }

        </div>


      </div>

    </section>

  );

};


export default Roadmap;