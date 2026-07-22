import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Always check token directly from LocalStorage
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("roadmap_progress"); // Clear progress on logout
    navigate("/login");
  };

  return (
    <nav className="bg-slate-950 border-b border-slate-800/80 sticky top-0 z-50 backdrop-blur-md bg-slate-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-xl font-black text-white tracking-wider">
            <span className="text-2xl">🗺</span>
            <span>RoadMap<span className="text-blue-500">AI</span></span>
          </Link>

          {/* Nav Links */}
          <div className="flex items-center gap-4 sm:gap-6">
            <Link
              to="/"
              className={`text-sm font-medium transition ${
                location.pathname === "/" ? "text-blue-400" : "text-slate-300 hover:text-white"
              }`}
            >
              Home
            </Link>

            {token ? (
              <>
                <Link
                  to="/roadmap"
                  className={`text-sm font-medium transition ${
                    location.pathname === "/roadmap" ? "text-blue-400" : "text-slate-300 hover:text-white"
                  }`}
                >
                  My Roadmap
                </Link>

                <button
                  onClick={handleLogout}
                  className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700/60 px-4 py-2 rounded-xl text-xs font-semibold transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-sm font-medium text-slate-300 hover:text-white transition"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-4 py-2 rounded-xl text-xs font-semibold transition shadow-md shadow-blue-500/20"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;