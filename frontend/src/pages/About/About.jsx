import React from "react";

const About = () => {
  return (
    <div className="min-h-[80vh] bg-slate-950 text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">AI Student Roadmap</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Empowering students and aspiring developers with AI-driven personalized career paths, skill tracking, and structured learning roadmaps.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          <div className="bg-slate-900/60 backdrop-blur-md p-8 rounded-3xl border border-slate-800 shadow-xl">
            <h3 className="text-xl font-bold text-blue-400 mb-3">🎯 Our Mission</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              To bridge the gap between traditional education and industry requirements by providing intelligent, customized roadmaps that guide students step-by-step toward their dream tech careers.
            </p>
          </div>

          <div className="bg-slate-900/60 backdrop-blur-md p-8 rounded-3xl border border-slate-800 shadow-xl">
            <h3 className="text-xl font-bold text-indigo-400 mb-3">🚀 What We Offer</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              AI-powered skill assessments, dynamic timeline tracking, real-world project recommendations, and a seamless dashboard to monitor your professional growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;