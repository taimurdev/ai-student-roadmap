import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Roadmap = () => {
  const [roadmap, setRoadmap] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [completedTopics, setCompletedTopics] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    // 1. Load saved checkmarks from LocalStorage
    const savedProgress = localStorage.getItem("roadmap_progress");
    if (savedProgress) {
      try {
        setCompletedTopics(JSON.parse(savedProgress));
      } catch (e) {
        console.error("Error parsing saved progress", e);
      }
    }

    // 2. Fetch Roadmap Data
    const fetchRoadmap = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/login");
        return;
      }

      try {
        const res = await axios.get("http://localhost:5000/api/roadmap", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (res.data && res.data.roadmap) {
          setRoadmap(res.data.roadmap);
        } else {
          setError("No roadmap data found.");
        }
      } catch (err) {
        console.error("Fetch Roadmap Error:", err);
        setError("No existing roadmap found. Please take the assessment quiz first!");
      } finally {
        setLoading(false);
      }
    };

    fetchRoadmap();
  }, [navigate]);

  // Toggle Checkbox & Save to LocalStorage
  const toggleTopic = (phaseIndex, topicIndex) => {
    const key = `${phaseIndex}-${topicIndex}`;
    const updatedState = {
      ...completedTopics,
      [key]: !completedTopics[key],
    };
    setCompletedTopics(updatedState);
    localStorage.setItem("roadmap_progress", JSON.stringify(updatedState));
  };

  // Calculate Progress
  const calculateProgress = () => {
    if (!roadmap || !roadmap.timeline) return 0;
    let total = 0;
    let done = 0;
    roadmap.timeline.forEach((phase, pIdx) => {
      phase.topics?.forEach((_, tIdx) => {
        total++;
        if (completedTopics[`${pIdx}-${tIdx}`]) done++;
      });
    });
    return total > 0 ? Math.round((done / total) * 100) : 0;
  };

  if (loading) {
    return (
      <div className="min-h-[80vh] flex flex-col justify-center items-center bg-slate-950 text-white">
        <div className="relative flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin"></div>
          <span className="absolute text-2xl">🚀</span>
        </div>
        <p className="mt-4 text-slate-400 font-medium animate-pulse">
          Loading roadmap...
        </p>
      </div>
    );
  }

  if (error || !roadmap) {
    return (
      <div className="min-h-[80vh] flex flex-col justify-center items-center px-4 bg-slate-950 text-center">
        <div className="bg-slate-900/60 backdrop-blur-xl p-8 rounded-3xl max-w-md w-full border border-slate-800 shadow-2xl">
          <div className="w-16 h-16 bg-blue-500/10 text-blue-400 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
            🧭
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">No Active Roadmap</h2>
          <p className="text-slate-400 text-sm mb-6">{error || "You haven't generated a career roadmap yet."}</p>
          <Link
            to="/quiz"
            className="inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold py-3.5 px-6 rounded-xl transition shadow-lg shadow-blue-500/25"
          >
            Start Assessment Quiz 🚀
          </Link>
        </div>
      </div>
    );
  }

  const progress = calculateProgress();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Top Banner Card */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 p-8 sm:p-10 border border-slate-800 shadow-2xl">
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wider uppercase mb-4">
              ✨ AI-Tailored Learning Path
            </div>
            
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              {roadmap.career} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Roadmap</span>
            </h1>

            <p className="mt-3 text-slate-400 text-base sm:text-lg max-w-2xl">
              {roadmap.description}
            </p>

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-3 mt-6">
              <div className="flex items-center gap-2 bg-slate-800/80 backdrop-blur-md px-4 py-2 rounded-xl border border-slate-700/60 text-sm font-medium text-slate-200">
                <span className="text-blue-400">⏱</span>
                <span>Duration: <strong>{roadmap.duration}</strong></span>
              </div>
              <div className="flex items-center gap-2 bg-slate-800/80 backdrop-blur-md px-4 py-2 rounded-xl border border-slate-700/60 text-sm font-medium text-slate-200">
                <span className="text-emerald-400">🎯</span>
                <span>Level: <strong>{roadmap.difficulty}</strong></span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-8 pt-6 border-t border-slate-800/80">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-slate-300">Path Completion</span>
                <span className="text-sm font-bold text-blue-400">{progress}%</span>
              </div>
              <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden p-0.5 border border-slate-700/50">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Grid: Skills & Projects */}
        <div className="grid md:grid-cols-2 gap-6">
          {roadmap.skills && roadmap.skills.length > 0 && (
            <div className="bg-slate-900/60 backdrop-blur-md p-6 rounded-2xl border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <span>⚡</span> Key Skills to Master
              </h3>
              <div className="flex flex-wrap gap-2">
                {roadmap.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-slate-800 text-slate-300 border border-slate-700/60 px-3.5 py-1.5 rounded-xl text-xs font-semibold hover:border-blue-500/50 hover:text-blue-300 transition cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {roadmap.projects && roadmap.projects.length > 0 && (
            <div className="bg-slate-900/60 backdrop-blur-md p-6 rounded-2xl border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <span>🛠</span> Real-World Projects
              </h3>
              <ul className="space-y-2">
                {roadmap.projects.map((proj, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <span className="text-blue-400 font-bold mt-0.5">✦</span>
                    <span>{proj}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Timeline */}
        <div className="bg-slate-900/40 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-slate-800">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <span>🗺</span> Timeline & Learning Milestones
          </h2>

          <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-800 space-y-10">
            {roadmap.timeline?.map((item, pIdx) => (
              <div key={pIdx} className="relative group">
                <div className="absolute -left-[31px] sm:-left-[39px] top-0 w-8 h-8 rounded-full bg-slate-900 border-2 border-blue-500 flex items-center justify-center text-xs font-bold text-blue-400 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition">
                  {pIdx + 1}
                </div>

                <div className="bg-slate-900/90 border border-slate-800 hover:border-slate-700 rounded-2xl p-6 transition duration-200 shadow-xl">
                  <h3 className="text-lg font-bold text-blue-400 mb-4">
                    {item.month}
                  </h3>

                  <div className="space-y-3">
                    {item.topics?.map((topic, tIdx) => {
                      const isChecked = !!completedTopics[`${pIdx}-${tIdx}`];
                      return (
                        <label
                          key={tIdx}
                          onClick={() => toggleTopic(pIdx, tIdx)}
                          className={`flex items-start gap-3 p-3 rounded-xl border transition cursor-pointer select-none ${
                            isChecked
                              ? "bg-blue-950/30 border-blue-500/30 text-slate-400 line-through"
                              : "bg-slate-800/40 border-slate-800 hover:border-slate-700 text-slate-200"
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={isChecked}
                            readOnly
                            className="mt-1 w-4 h-4 rounded border-slate-700 bg-slate-800 text-blue-600 focus:ring-blue-500 focus:ring-offset-slate-900"
                          />
                          <span className="text-sm font-medium leading-relaxed">
                            {topic}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Roadmap;