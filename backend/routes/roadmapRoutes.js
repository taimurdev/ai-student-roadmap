const express = require("express");
const router = express.Router();
const { generateRoadmap, getRoadmap } = require("../controllers/roadmapController");
const authMiddleware = require("../middleware/authMiddleware");

// Generate Roadmap Routes
router.post("/generate", authMiddleware, generateRoadmap);
router.post("/", authMiddleware, generateRoadmap);

// Fetch Saved Roadmap Route
router.get("/", authMiddleware, getRoadmap);

module.exports = router;