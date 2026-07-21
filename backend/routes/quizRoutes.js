const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  submitQuiz,
  getQuiz,
} = require("../controllers/quizController");

// Submit Quiz
router.post("/", protect, submitQuiz);

// Get Logged-in User Quiz
router.get("/", protect, getQuiz);

module.exports = router;