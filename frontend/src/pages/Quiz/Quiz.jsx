import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const questions = [
  {
    id: 1,
    question: "What primary domain are you interested in?",
    options: [
      "Full Stack Development",
      "Artificial Intelligence & Machine Learning",
      "Cyber Security",
      "Data Science",
      "Cloud Computing",
      "Mobile App Development",
    ],
  },
  {
    id: 2,
    question: "What is your current skill level?",
    options: ["Beginner", "Intermediate", "Advanced"],
  },
  {
    id: 3,
    question: "How much time can you commit daily?",
    options: ["1 - 2 Hours / day", "3 - 5 Hours / day", "Full Time (6+ Hours / day)"],
  },
  {
    id: 4,
    question: "What is your primary learning goal?",
    options: [
      "Land a Job / Internship",
      "Build Side Projects",
      "Upskill / Career Switch",
    ],
  },
];

const Quiz = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();

  const handleSelectOption = (option) => {
    const updatedAnswers = {
      ...answers,
      [questions[currentStep].id]: option,
    };
    setAnswers(updatedAnswers);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSubmitQuiz(updatedAnswers);
    }
  };

  const handleSubmitQuiz = async (finalAnswers) => {
    setLoading(true);
    setErrorMsg("");

    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/quiz",
        { answers: finalAnswers },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (res.status === 200 || res.status === 201) {
        navigate("/roadmap");
      }
    } catch (err) {
      console.error("Quiz Submission Error:", err);
      setErrorMsg(
        err.response?.data?.message ||
          "Failed to submit quiz. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-[85vh] flex flex-col justify-center items-center bg-slate-950 text-white px-4">
        <div className="relative flex items-center justify-center">
          <div className="w-20 h-20 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin"></div>
          <span className="absolute text-3xl">🤖</span>
        </div>
        <h3 className="text-xl font-bold mt-6 text-white tracking-tight">
          Saving Quiz & Generating Path...
        </h3>
        <p className="text-slate-400 text-sm mt-2 animate-pulse text-center max-w-sm">
          Please wait while we set up your customized roadmap.
        </p>
      </div>
    );
  }

  const currentQ = questions[currentStep];
  const progressPercent = Math.round(((currentStep + 1) / questions.length) * 100);

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 bg-slate-950 text-slate-100 py-12">
      <div className="max-w-xl w-full bg-slate-900/80 backdrop-blur-xl p-8 sm:p-10 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden">
        
        {/* Glow Element */}
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Header Badge & Step Progress */}
        <div className="flex items-center justify-between mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <span>🚀</span> Career Assessment
          </span>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            Question {currentStep + 1} of {questions.length}
          </span>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-1.5 bg-slate-800 rounded-full mb-8 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>

        {errorMsg && (
          <div className="bg-red-500/10 text-red-400 p-3.5 rounded-xl text-sm mb-6 border border-red-500/20 text-center font-medium">
            {errorMsg}
          </div>
        )}

        {/* Question Title */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-8">
          {currentQ.question}
        </h2>

        {/* Options List */}
        <div className="space-y-3">
          {currentQ.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleSelectOption(option)}
              className="w-full flex items-center justify-between p-4 bg-slate-800/50 hover:bg-slate-800 border border-slate-700/60 hover:border-blue-500/50 rounded-2xl text-slate-200 hover:text-white font-medium text-left transition duration-200 group shadow-sm"
            >
              <span className="text-sm sm:text-base">{option}</span>
              <span className="text-slate-500 group-hover:text-blue-400 group-hover:translate-x-1 transition duration-200 text-lg">
                →
              </span>
            </button>
          ))}
        </div>

        {/* Back Button */}
        {currentStep > 0 && (
          <div className="mt-8 pt-6 border-t border-slate-800 flex justify-start">
            <button
              onClick={() => setCurrentStep(currentStep - 1)}
              className="text-xs font-semibold text-slate-400 hover:text-white transition flex items-center gap-1"
            >
              ← Previous Question
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default Quiz;