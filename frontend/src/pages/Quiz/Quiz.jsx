import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Quiz.css";

const questions = [
  {
    question: "Which technology field interests you the most?",
    options: [
      "Web Development",
      "Artificial Intelligence",
      "Data Science",
      "Cyber Security",
    ],
  },
  {
    question: "What is your current skill level?",
    options: [
      "Beginner",
      "Intermediate",
      "Advanced",
      "Expert",
    ],
  },
  {
    question: "What type of work do you enjoy?",
    options: [
      "Building applications",
      "Solving problems with data",
      "Research and innovation",
      "Protecting systems",
    ],
  },
  {
    question: "How much time can you spend learning daily?",
    options: [
      "1 hour",
      "2-3 hours",
      "4-5 hours",
      "Full time",
    ],
  },
];


const Quiz = () => {

  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [selectedAnswer, setSelectedAnswer] = useState("");

  const [answers, setAnswers] = useState([]);


  const question = questions[currentQuestion];


  const handleNext = () => {

    if (!selectedAnswer) {
      alert("Please select an option first");
      return;
    }


    const updatedAnswers = [
      ...answers,
      {
        question: question.question,
        answer: selectedAnswer,
      },
    ];


    setAnswers(updatedAnswers);


    if (currentQuestion < questions.length - 1) {

      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");

    } else {


      localStorage.setItem(
        "quizAnswers",
        JSON.stringify(updatedAnswers)
      );


      navigate("/roadmap");

    }

  };


  return (
    <section className="quiz">

      <div className="quiz-container">


        <h1>
          Career Assessment 🚀
        </h1>


        <div className="progress">

          <div
            className="progress-bar"
            style={{
              width:
              `${((currentQuestion + 1) / questions.length) * 100}%`
            }}
          ></div>

        </div>


        <p>
          Question {currentQuestion + 1} of {questions.length}
        </p>



        <div className="quiz-card">


          <h2>
            {question.question}
          </h2>


          <div className="options">

            {question.options.map((option,index)=>(

              <button

                key={index}

                className={
                  selectedAnswer === option
                  ? "selected"
                  : ""
                }

                onClick={() =>
                  setSelectedAnswer(option)
                }

              >

                {option}

              </button>

            ))}


          </div>


        </div>



        <button
          className="next-btn"
          onClick={handleNext}
        >

          {
            currentQuestion === questions.length - 1
            ? "Generate Roadmap 🚀"
            : "Next →"
          }

        </button>


      </div>

    </section>
  );
};


export default Quiz;