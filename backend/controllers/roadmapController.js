const Quiz = require("../models/Quiz");
const Roadmap = require("../models/Roadmap");

// ======================================
// Generate Personalized Roadmap
// ======================================

const generateRoadmap = async (req, res) => {
  try {
    const quiz = await Quiz.findOne({ user: req.user.id });

    if (!quiz) {
      return res.status(404).json({
        success: false,
        message: "Quiz not found",
      });
    }

    let career = "";
    let duration = "";
    let difficulty = "";
    let description = "";

    let skills = [];
    let courses = [];
    let projects = [];
    let timeline = [];

    const firstAnswer = quiz.answers[0]?.answer || "";

    // ==========================
    // AI Engineer
    // ==========================

    if (firstAnswer === "Artificial Intelligence") {
      career = "AI Engineer";
      duration = "8 Months";
      difficulty = "Intermediate";

      description =
        "Become an AI Engineer by learning Python, Machine Learning, Deep Learning and deploying AI applications.";

      skills = [
        "Python",
        "Machine Learning",
        "Deep Learning",
        "TensorFlow",
        "PyTorch",
        "Prompt Engineering",
      ];

      courses = [
        "Python Programming",
        "Machine Learning",
        "Deep Learning",
        "Generative AI",
      ];

      projects = [
        "AI Chatbot",
        "Image Classifier",
        "Resume Analyzer",
        "Recommendation System",
      ];

      timeline = [
        {
          month: "Month 1",
          topics: [
            "Python Basics",
            "Variables",
            "Loops",
            "Functions",
          ],
        },
        {
          month: "Month 2",
          topics: [
            "NumPy",
            "Pandas",
            "Data Visualization",
          ],
        },
        {
          month: "Month 3",
          topics: [
            "Machine Learning",
            "Regression",
            "Classification",
          ],
        },
        {
          month: "Month 4",
          topics: [
            "Deep Learning",
            "Neural Networks",
          ],
        },
        {
          month: "Month 5",
          topics: [
            "TensorFlow",
            "PyTorch",
          ],
        },
        {
          month: "Month 6",
          topics: [
            "Build AI Chatbot",
          ],
        },
        {
          month: "Month 7",
          topics: [
            "Resume Project",
            "Portfolio",
          ],
        },
        {
          month: "Month 8",
          topics: [
            "Interview Preparation",
            "Apply for Jobs",
          ],
        },
      ];
    }

    // ==========================
    // Full Stack
    // ==========================

    else if (firstAnswer === "Web Development") {
      career = "Full Stack Developer";
      duration = "6 Months";
      difficulty = "Beginner";

      description =
        "Learn frontend and backend technologies to become a professional Full Stack Developer.";

      skills = [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
      ];

      courses = [
        "HTML & CSS",
        "JavaScript",
        "React",
        "Node.js",
      ];

      projects = [
        "Portfolio Website",
        "Student Management System",
        "E-Commerce Website",
        "Social Media App",
      ];

      timeline = [
        {
          month: "Month 1",
          topics: [
            "HTML",
            "CSS",
            "Responsive Design",
          ],
        },
        {
          month: "Month 2",
          topics: [
            "JavaScript",
            "DOM",
            "ES6",
          ],
        },
        {
          month: "Month 3",
          topics: [
            "React",
            "React Router",
            "Axios",
          ],
        },
        {
          month: "Month 4",
          topics: [
            "Node.js",
            "Express.js",
            "REST APIs",
          ],
        },
        {
          month: "Month 5",
          topics: [
            "MongoDB",
            "JWT",
            "Authentication",
          ],
        },
        {
          month: "Month 6",
          topics: [
            "Final Project",
            "Portfolio",
            "Interview Preparation",
          ],
        },
      ];
    }

    // ==========================
    // Data Science
    // ==========================

    else if (firstAnswer === "Data Science") {
      career = "Data Scientist";
      duration = "7 Months";
      difficulty = "Intermediate";

      description =
        "Learn data analysis, visualization and predictive modeling.";

      skills = [
        "Python",
        "Pandas",
        "NumPy",
        "SQL",
        "Power BI",
        "Machine Learning",
      ];

      courses = [
        "Python",
        "SQL",
        "Data Analysis",
        "Machine Learning",
      ];

      projects = [
        "Sales Dashboard",
        "Prediction Model",
        "Movie Recommendation",
      ];

      timeline = [
        {
          month: "Month 1",
          topics: [
            "Python",
            "Statistics",
          ],
        },
        {
          month: "Month 2",
          topics: [
            "NumPy",
            "Pandas",
          ],
        },
        {
          month: "Month 3",
          topics: [
            "SQL",
            "Data Cleaning",
          ],
        },
        {
          month: "Month 4",
          topics: [
            "Power BI",
            "Visualization",
          ],
        },
        {
          month: "Month 5",
          topics: [
            "Machine Learning",
          ],
        },
        {
          month: "Month 6",
          topics: [
            "Prediction Project",
          ],
        },
        {
          month: "Month 7",
          topics: [
            "Portfolio",
            "Interview Preparation",
          ],
        },
      ];
    }

    // ==========================
    // Cyber Security
    // ==========================

    else {
      career = "Cyber Security Engineer";
      duration = "8 Months";
      difficulty = "Intermediate";

      description =
        "Protect systems from cyber threats using ethical hacking and security tools.";

      skills = [
        "Networking",
        "Linux",
        "Ethical Hacking",
        "Kali Linux",
        "Penetration Testing",
      ];

      courses = [
        "Networking",
        "Cyber Security",
        "Ethical Hacking",
      ];

      projects = [
        "Network Scanner",
        "Password Checker",
        "Security Audit Tool",
      ];

      timeline = [
        {
          month: "Month 1",
          topics: [
            "Networking Basics",
            "OSI Model",
          ],
        },
        {
          month: "Month 2",
          topics: [
            "Linux",
            "Terminal Commands",
          ],
        },
        {
          month: "Month 3",
          topics: [
            "Kali Linux",
            "Nmap",
          ],
        },
        {
          month: "Month 4",
          topics: [
            "Ethical Hacking",
          ],
        },
        {
          month: "Month 5",
          topics: [
            "Web Security",
          ],
        },
        {
          month: "Month 6",
          topics: [
            "Penetration Testing",
          ],
        },
        {
          month: "Month 7",
          topics: [
            "Security Project",
          ],
        },
        {
          month: "Month 8",
          topics: [
            "Certification Preparation",
          ],
        },
      ];
    }

    const roadmap = await Roadmap.findOneAndUpdate(
      { user: req.user.id },
      {
        user: req.user.id,
        career,
        duration,
        difficulty,
        description,
        skills,
        courses,
        projects,
        timeline,
      },
      {
        new: true,
        upsert: true,
      }
    );

    res.status(200).json({
      success: true,
      message: "Roadmap Generated Successfully",
      roadmap,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// ======================================
// Get Logged-in User Roadmap
// ======================================

const getRoadmap = async (req, res) => {
  try {
    const roadmap = await Roadmap.findOne({
      user: req.user.id,
    });

    if (!roadmap) {
      return res.status(404).json({
        success: false,
        message: "Roadmap not found",
      });
    }

    res.status(200).json({
      success: true,
      roadmap,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = {
  generateRoadmap,
  getRoadmap,
};