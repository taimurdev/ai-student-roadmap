const Quiz = require("../models/Quiz");

// Submit Quiz & Create/Update
exports.submitQuiz = async (req, res) => {
  try {
    const { answers } = req.body;

    if (!answers) {
      return res.status(400).json({ message: "Please submit valid quiz answers." });
    }

    // Safely extract User ID from Auth Middleware
    const userId = req.user?._id || req.user?.id || req.user;

    if (!userId) {
      return res.status(401).json({ message: "User identification failed. Please re-login." });
    }

    // Save or Update Quiz entry in MongoDB
    let quiz = await Quiz.findOne({ user: userId });

    if (quiz) {
      quiz.answers = answers;
      await quiz.save();
    } else {
      quiz = await Quiz.create({
        user: userId,
        answers: answers,
      });
    }

    return res.status(200).json({
      success: true,
      message: "Quiz submitted successfully!",
      quiz,
    });
  } catch (error) {
    console.error("Quiz Submission Error Details:", error);
    return res.status(500).json({
      message: "Server error while saving quiz answers.",
      error: error.message,
    });
  }
};

// Get Logged-in User Quiz
exports.getQuiz = async (req, res) => {
  try {
    const userId = req.user?._id || req.user?.id || req.user;
    const quiz = await Quiz.findOne({ user: userId });

    if (!quiz) {
      return res.status(404).json({ message: "No quiz answers found." });
    }

    return res.status(200).json({ quiz });
  } catch (error) {
    return res.status(500).json({ message: "Server error fetching quiz." });
  }
};