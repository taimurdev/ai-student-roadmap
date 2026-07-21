const Quiz = require("../models/Quiz");

// ==========================
// Submit / Update Quiz
// ==========================
const submitQuiz = async (req, res) => {
  try {
    const { answers } = req.body;

    // Validation
    if (!answers || !Array.isArray(answers) || answers.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Please submit quiz answers.",
      });
    }

    const quiz = await Quiz.findOneAndUpdate(
      { user: req.user.id },
      {
        user: req.user.id,
        answers,
      },
      {
        new: true,
        upsert: true,
      }
    );

    res.status(200).json({
      success: true,
      message: "Quiz Submitted Successfully",
      quiz,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// ==========================
// Get Logged-in User Quiz
// ==========================
const getQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.findOne({ user: req.user.id });

    if (!quiz) {
      return res.status(404).json({
        success: false,
        message: "Quiz Not Found",
      });
    }

    res.status(200).json({
      success: true,
      quiz,
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
  submitQuiz,
  getQuiz,
};