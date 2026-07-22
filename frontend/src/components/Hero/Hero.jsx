import { useNavigate } from "react-router-dom";
import axios from "axios";

const Hero = () => {
  const navigate = useNavigate();

  // Smart Navigation Handler
  const handleGetStarted = async () => {
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
      // Kisi bhi error/404 ki surat mein Quiz page par bhej dein
      navigate("/quiz");
    }
  };

  // Smooth Scroll for Learn More
  const handleLearnMore = () => {
    const nextSection = document.getElementById("how-it-works") || document.getElementById("features");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-[90vh] bg-slate-50 flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side */}
          <div>
            <span className="text-blue-600 font-semibold">
              AI Powered Career Guidance
            </span>

            <h1 className="text-5xl font-bold text-slate-900 mt-4 leading-tight">
              Your Personalized AI Career Journey Starts Here 🚀
            </h1>

            <p className="text-gray-600 text-lg mt-6">
              Discover the right career path, identify your skill gaps,
              and receive a personalized learning roadmap powered by AI.
            </p>

            <div className="flex gap-4 mt-8">
              <button 
                onClick={handleGetStarted}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-medium shadow-md hover:shadow-lg active:scale-95"
              >
                Get Started
              </button>

              <button 
                onClick={handleLearnMore}
                className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100 transition font-medium text-gray-700"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex justify-center">
            <div className="w-96 h-96 bg-blue-100 rounded-3xl flex items-center justify-center shadow-inner">
              <span className="text-7xl">🤖</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;