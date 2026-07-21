const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  updateProgress,
  getProgress,
} = require("../controllers/progressController");

// Update Progress
router.post("/", protect, updateProgress);

// Get Progress
router.get("/", protect, getProgress);

module.exports = router;