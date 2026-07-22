import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-500 selection:text-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wider uppercase mb-6">
            ✨ AI-Powered Career Guidance
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            Your Personalized AI <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
              Career Journey
            </span> Starts Here 🚀
          </h1>

          <p className="mt-6 text-slate-400 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Discover the right career path, identify your skill gaps, and receive a personalized learning roadmap powered by AI.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/quiz"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold py-3.5 px-8 rounded-xl transition shadow-lg shadow-blue-500/25"
            >
              Get Started 🚀
            </Link>
            <a
              href="#how-it-works"
              className="bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 font-semibold py-3.5 px-8 rounded-xl transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* 2. WHY CHOOSE SECTION */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-900">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-white">Why Choose RoadMapAI?</h2>
          <p className="text-slate-400 text-sm mt-2">Everything you need to plan your career journey.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: "🤖", title: "AI Guidance", desc: "Receive personalized career recommendations tailored to your goals." },
            { icon: "🗺", title: "Roadmaps", desc: "Follow step-by-step learning paths generated instantly." },
            { icon: "📈", title: "Progress Tracking", desc: "Monitor your milestone achievements and topic completions." },
            { icon: "📚", title: "Curated Resources", desc: "Discover top-tier learning materials and project ideas." },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-900/60 backdrop-blur-md p-6 rounded-2xl border border-slate-800 hover:border-slate-700 transition"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. EXPLORE CAREER PATHS */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-white">Explore Career Paths</h2>
          <p className="text-slate-400 text-sm mt-2">Choose a path or let AI craft a personalized strategy for you.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: "💻", title: "Full Stack Development", desc: "Become a modern web developer with MERN & modern tools." },
            { icon: "🤖", title: "Artificial Intelligence", desc: "Learn Machine Learning, Deep Learning, and GenAI." },
            { icon: "📊", title: "Data Science", desc: "Master data analysis, visualization, and predictive modeling." },
            { icon: "🔐", title: "Cybersecurity", desc: "Protect networks, applications, and cloud infrastructures." },
            { icon: "☁️", title: "Cloud Computing", desc: "Learn AWS, Azure, Docker, and Kubernetes deployment." },
            { icon: "📱", title: "Mobile Development", desc: "Build iOS and Android applications with React Native & Flutter." },
          ].map((path, idx) => (
            <Link
              to="/quiz"
              key={idx}
              className="group bg-slate-900/80 p-6 rounded-2xl border border-slate-800 hover:border-blue-500/50 hover:bg-slate-900 transition duration-200"
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition duration-200">{path.icon}</div>
              <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition">{path.title}</h3>
              <p className="text-slate-400 text-sm mt-2">{path.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. HOW IT WORKS */}
      <section id="how-it-works" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-900">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-white">How It Works</h2>
          <p className="text-slate-400 text-sm mt-2">Simple 3-step process to launch your targeted learning.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { step: "01", title: "Select Your Goal", desc: "Tell us about your target domain, experience level, and available time." },
            { step: "02", title: "AI Analysis", desc: "Our AI evaluates your profile and compiles a tailored timeline." },
            { step: "03", title: "Follow & Track", desc: "Execute step-by-step milestones, check off topics, and build real projects." },
          ].map((item, idx) => (
            <div key={idx} className="relative bg-slate-900/40 p-8 rounded-2xl border border-slate-800 text-center">
              <span className="inline-block px-4 py-1 rounded-full bg-blue-500/10 text-blue-400 font-bold text-sm mb-4">
                Step {item.step}
              </span>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CALL TO ACTION BANNER */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative rounded-3xl bg-gradient-to-r from-blue-900/60 to-indigo-900/60 p-8 sm:p-12 border border-blue-500/30 text-center overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Discover Your Perfect Career Path 🚀
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mt-3">
              Take our AI-powered assessment quiz now to get a tailor-made roadmap designed around your schedule.
            </p>
            <div className="mt-8">
              <Link
                to="/quiz"
                className="inline-block bg-white text-slate-950 font-bold py-3.5 px-8 rounded-xl hover:bg-slate-100 transition shadow-lg"
              >
                Start Assessment Quiz →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-900 bg-slate-950 py-12 text-slate-500 text-sm">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© 2026 RoadMapAI. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
};

export default Home;