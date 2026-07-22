const mongoose = require("mongoose");

const roadmapSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    career: {
      type: String,
      default: "Software Development",
    },
    duration: {
      type: String,
      default: "6 Months",
    },
    difficulty: {
      type: String,
      default: "Beginner",
    },
    description: {
      type: String,
      default: "Personalized learning roadmap",
    },
    skills: [String],
    courses: [String],
    projects: [String],
    timeline: [
      {
        month: String,
        topics: [String],
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Roadmap", roadmapSchema);