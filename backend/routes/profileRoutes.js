const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  updateProfile,
  getProfile,
} = require("../controllers/profileController");

// Create / Update Profile
router.post("/", protect, updateProfile);

// Get Logged-in User Profile
router.get("/", protect, getProfile);

module.exports = router;