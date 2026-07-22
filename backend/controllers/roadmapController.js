const { GoogleGenerativeAI } = require("@google/generative-ai");
const Roadmap = require("../models/Roadmap.js");
const Quiz = require("../models/Quiz.js");

// Helper: Calculate dynamic duration and period label based on hours
const calculateDurationConfig = (hoursPerWeek) => {
  const timeStr = (hoursPerWeek || "").toLowerCase();

  if (timeStr.includes("1 hour") || timeStr.includes("1h")) {
    return { duration: "12 Months", label: "Month", count: 12 };
  } else if (timeStr.includes("4-5") || timeStr.includes("5 hours")) {
    return { duration: "4 Months", label: "Month", count: 4 };
  } else if (timeStr.includes("full time") || timeStr.includes("fulltime")) {
    return { duration: "2 Months", label: "Month", count: 2 };
  }
  
  // Default for 2-3 hours
  return { duration: "6 Months", label: "Month", count: 6 };
};

// Fallback generator handling dynamic fields and custom durations
const getFallbackRoadmap = (interest, skillLevel, workType, hoursPerWeek) => {
  const field = (interest || "").toLowerCase();
  const level = (skillLevel || "Beginner");
  const { duration } = calculateDurationConfig(hoursPerWeek);

  // 1. Cyber Security
  if (field.includes("cyber") || field.includes("security")) {
    return {
      career: "Cyber Security",
      duration: duration,
      difficulty: level,
      description: `${duration} step-by-step ${level} roadmap for Cyber Security (${workType} focus, ${hoursPerWeek} availability).`,
      skills: ["Networking Fundamentals", "Linux Administration", "Ethical Hacking", "SIEM Tools", "Cryptography", "Web Application Security"],
      courses: ["CompTIA Security+ Certification", "Practical Ethical Hacking (TCM)"],
      projects: ["Vulnerability Assessment Lab", "Active Directory Security Architecture"],
      timeline: [
        { month: "Phase 1: Computer Networking & Linux", topics: ["TCP/IP, Subnetting & OSI Model", "Linux CLI & Shell Scripting", "Network Scanning with Nmap"] },
        { month: "Phase 2: Security Principles & Web Tech", topics: ["OWASP Top 10 Security Risks", "SQL Injection & Cross-Site Scripting (XSS)", "Burp Suite Essentials"] },
        { month: "Phase 3: Ethical Hacking & Exploitation", topics: ["Metasploit Framework", "Privilege Escalation Techniques", "Wireshark Packet Analysis"] },
        { month: "Phase 4: Defensive Security & SIEM", topics: ["SOC Operations & Log Analysis", "SIEM (Splunk/Elastic)", "Incident Response Basics"] },
        { month: "Phase 5: Advanced Security Topics", topics: ["Active Directory Penetration Testing", "Cloud Security (AWS/Azure)", "Malware Analysis Basics"] },
        { month: "Phase 6: Practical Labs & Cert Prep", topics: ["Hands-on CTF Challenges", "Security+ / EJPT Exam Prep", "Portfolio & Writeups"] }
      ]
    };
  }

  // 2. Data Science
  if (field.includes("data science") || field.includes("data analytics")) {
    return {
      career: "Data Science",
      duration: duration,
      difficulty: level,
      description: `${duration} step-by-step ${level} roadmap for Data Science (${workType} focus, ${hoursPerWeek} availability).`,
      skills: ["Python for Data Science", "SQL & Database Queries", "Pandas & NumPy", "Data Visualization", "Machine Learning", "Statistical Analysis"],
      courses: ["IBM Data Science Professional Certificate", "Complete SQL & ML Masterclass"],
      projects: ["Exploratory Data Analysis (EDA) Project", "End-to-End Predictive Analytics Pipeline"],
      timeline: [
        { month: "Phase 1: Python & SQL Fundamentals", topics: ["Python Syntax & Data Structures", "Relational Databases & Advanced SQL", "Git & Version Control"] },
        { month: "Phase 2: Data Wrangling & Analysis", topics: ["Pandas Data Cleaning", "NumPy Vectorized Calculations", "Exploratory Data Analysis (EDA)"] },
        { month: "Phase 3: Data Visualization & BI Tools", topics: ["Matplotlib & Seaborn", "Tableau / PowerBI Dashboards", "Statistical Hypothesis Testing"] },
        { month: "Phase 4: Machine Learning Core", topics: ["Supervised Algorithms (Regression, Trees)", "Classification Metrics", "Scikit-Learn Workflows"] },
        { month: "Phase 5: Advanced Analytics & Unsupervised ML", topics: ["Clustering (K-Means/PCA)", "Feature Engineering", "Big Data Concepts"] },
        { month: "Phase 6: Interactive Apps & Deployment", topics: ["Building Dashboards with Streamlit", "Model Deployment", "Portfolio Showcase"] }
      ]
    };
  }

  // 3. Artificial Intelligence
  if (field.includes("ai") || field.includes("artificial") || field.includes("machine learning")) {
    return {
      career: "Artificial Intelligence",
      duration: duration,
      difficulty: level,
      description: `${duration} step-by-step ${level} roadmap for Artificial Intelligence (${workType} focus, ${hoursPerWeek} availability).`,
      skills: ["Python Programming", "Linear Algebra & Probability", "PyTorch / TensorFlow", "Neural Networks", "NLP & LLMs", "Computer Vision"],
      courses: ["Deep Learning Specialization (Andrew Ng)", "PyTorch for Deep Learning"],
      projects: ["Computer Vision Object Detector", "Fine-tuned LLM Chat Application"],
      timeline: [
        { month: "Phase 1: Math Foundations & Python", topics: ["Linear Algebra & Matrix Operations", "Calculus & Probability", "Python OOP & Data Structures"] },
        { month: "Phase 2: Data Handling & ML Basics", topics: ["NumPy & Pandas Pipelines", "Scikit-Learn Machine Learning", "Model Evaluation Metrics"] },
        { month: "Phase 3: Deep Learning Frameworks", topics: ["Neural Networks Architecture", "PyTorch Fundamentals", "Convolutional Neural Networks (CNN)"] },
        { month: "Phase 4: Natural Language Processing (NLP)", topics: ["Sequence Models (RNN/LSTM)", "Transformers Architecture", "Embeddings & Tokenization"] },
        { month: "Phase 5: Modern Generative AI & LLMs", topics: ["Prompt Engineering & RAG", "Fine-Tuning Open Source LLMs", "LangChain & Vector Databases"] },
        { month: "Phase 6: AI Deployment & Capstone", topics: ["FastAPI Integration", "Model Optimization (Quantization)", "AI Portfolio Project"] }
      ]
    };
  }

  // 4. Web Development (Default)
  return {
    career: "Web Development",
    duration: duration,
    difficulty: level,
    description: `${duration} step-by-step ${level} roadmap for Web Development (${workType} focus, ${hoursPerWeek} availability).`,
    skills: ["HTML5 & CSS3", "JavaScript (ES6+)", "React.js", "Node.js", "Express.js", "MongoDB"],
    courses: ["The Complete Web Development Bootcamp", "Full-Stack React & Node Masterclass"],
    projects: ["Interactive Web Application", "Full-Stack SaaS Platform with Auth & Payments"],
    timeline: [
      { month: "Phase 1: Responsive UI & Modern CSS", topics: ["HTML5 & CSS Grid/Flexbox", "Tailwind CSS Styling", "Git & GitHub Collaboration"] },
      { month: "Phase 2: JavaScript & Async Logic", topics: ["ES6+ Modern Syntax", "DOM Manipulation", "Promises, Async/Await & APIs"] },
      { month: "Phase 3: Frontend Mastery (React)", topics: ["React Components & State", "Hooks & Context API", "React Router Navigation"] },
      { month: "Phase 4: Backend REST APIs", topics: ["Node.js & Express Architecture", "RESTful Routing", "Authentication & JWT Security"] },
      { month: "Phase 5: Database & Full-Stack Integration", topics: ["MongoDB & Mongoose Schemas", "Connecting Frontend to Backend", "State Management (Zustand/Redux)"] },
      { month: "Phase 6: Capstone Project & Cloud Deployment", topics: ["Building Production SaaS App", "Deployment (Vercel & Render)", "Resume & Portfolio Prep"] }
    ]
  };
};

// Main Controller
exports.generateRoadmap = async (req, res) => {
  try {
    const userId = req.user._id || req.user.id;

    if (!userId) {
      return res.status(400).json({
        success: false,
        message: "User ID not found in token",
      });
    }

    const userQuiz = await Quiz.findOne({ user: userId }).sort({ createdAt: -1 });

    let interest = "Web Development";
    let skillLevel = "Beginner";
    let workType = "Building applications";
    let hoursPerWeek = "2-3 hours";

    if (userQuiz && Array.isArray(userQuiz.answers) && userQuiz.answers.length > 0) {
      userQuiz.answers.forEach((item, idx) => {
        if (!item) return;
        const qText = (item.question || "").toLowerCase();
        const ansVal = item.answer || item;

        if (qText.includes("field") || qText.includes("technology") || idx === 0) {
          interest = ansVal;
        } else if (qText.includes("skill") || qText.includes("level") || idx === 1) {
          skillLevel = ansVal;
        } else if (qText.includes("work") || qText.includes("enjoy") || idx === 2) {
          workType = ansVal;
        } else if (qText.includes("time") || qText.includes("daily") || qText.includes("spend") || idx === 3) {
          hoursPerWeek = ansVal;
        }
      });
    }

    const durationConfig = calculateDurationConfig(hoursPerWeek);
    let roadmapData = null;

    // Call Gemini AI if API Key exists
    if (process.env.GEMINI_API_KEY) {
      try {
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({
          model: "gemini-1.5-flash",
          generationConfig: { responseMimeType: "application/json" }
        });

        const prompt = `
          Act as an expert tech career mentor. Generate a personalized learning roadmap based on these user choices:
          - Field: ${interest}
          - Skill Level: ${skillLevel}
          - Work Interest: ${workType}
          - Daily Time Commitment: ${hoursPerWeek}

          IMPORTANT: Calculate the total course duration realistically based on the daily commitment (${hoursPerWeek}). 
          For example: 1 hour/day = 12 Months, 2-3 hours/day = 6 Months, 4-5 hours/day = 4 Months, Full time = 2 Months.

          Return ONLY a valid JSON object matching this exact schema:
          {
            "career": "${interest}",
            "duration": "${durationConfig.duration}",
            "difficulty": "${skillLevel}",
            "description": "Customized ${durationConfig.duration} ${skillLevel} roadmap for ${interest}.",
            "skills": ["Skill 1", "Skill 2", "Skill 3", "Skill 4", "Skill 5"],
            "courses": ["Course 1", "Course 2"],
            "projects": ["Project 1", "Project 2"],
            "timeline": [
              { "month": "Phase 1: Foundations", "topics": ["Topic 1", "Topic 2"] },
              { "month": "Phase 2: Core Concepts", "topics": ["Topic 3", "Topic 4"] },
              { "month": "Phase 3: Intermediate Skills", "topics": ["Topic 5", "Topic 6"] },
              { "month": "Phase 4: Advanced Concepts", "topics": ["Topic 7", "Topic 8"] },
              { "month": "Phase 5: Practical Applications", "topics": ["Topic 9", "Topic 10"] },
              { "month": "Phase 6: Portfolio & Career Prep", "topics": ["Topic 11", "Topic 12"] }
            ]
          }
        `;

        const result = await model.generateContent(prompt);
        roadmapData = JSON.parse(result.response.text());
      } catch (aiErr) {
        console.error("AI Generation Warning (Using Domain Fallback):", aiErr.message);
      }
    }

    // Dynamic Fallback
    if (!roadmapData) {
      roadmapData = getFallbackRoadmap(interest, skillLevel, workType, hoursPerWeek);
    }

    // Save to Database
    const updatedRoadmap = await Roadmap.findOneAndUpdate(
      { user: userId },
      { ...roadmapData, user: userId },
      { new: true, upsert: true }
    );

    return res.status(200).json({
      success: true,
      message: "Roadmap generated successfully",
      roadmap: updatedRoadmap
    });

  } catch (error) {
    console.error("Generate Roadmap Error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to generate roadmap"
    });
  }
};

// Fetch Roadmap Controller
exports.getRoadmap = async (req, res) => {
  try {
    const userId = req.user._id || req.user.id;

    const roadmap = await Roadmap.findOne({ user: userId }).sort({ updatedAt: -1 });

    if (!roadmap) {
      return res.status(404).json({
        success: false,
        message: "No Roadmap Found"
      });
    }

    return res.status(200).json({
      success: true,
      roadmap
    });
  } catch (error) {
    console.error("Get Roadmap Error:", error);
    return res.status(500).json({
      success: false,
      message: "Server Error fetching roadmap"
    });
  }
};