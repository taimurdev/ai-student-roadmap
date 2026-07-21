const mongoose = require("mongoose");

const roadmapSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },

    career: {
      type: String,
      required: true,
    },

    duration: {
      type: String,
      default: "",
    },

    difficulty: {
      type: String,
      default: "",
    },

    description: {
      type: String,
      default: "",
    },

    skills: [
      {
        type: String,
      },
    ],

    courses: [
      {
        type: String,
      },
    ],

    projects: [
      {
        type: String,
      },
    ],

    timeline: [
      {
        month: {
          type: String,
        },

        topics: [
          {
            type: String,
          },
        ],
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Roadmap", roadmapSchema);