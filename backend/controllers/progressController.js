const Progress = require("../models/Progress");
const Roadmap = require("../models/Roadmap");

// ======================================
// Update User Progress
// ======================================

const updateProgress = async (req, res) => {
  try {
    const { completedTopics } = req.body;

    if (!completedTopics || !Array.isArray(completedTopics)) {
      return res.status(400).json({
        success: false,
        message: "Completed topics are required.",
      });
    }

    const roadmap = await Roadmap.findOne({
      user: req.user.id,
    });

    if (!roadmap) {
      return res.status(404).json({
        success: false,
        message: "Roadmap not found.",
      });
    }

    // Count total topics from timeline
    let totalTopics = 0;

    roadmap.timeline.forEach((month) => {
      totalTopics += month.topics.length;
    });

    const progressPercentage =
      totalTopics === 0
        ? 0
        : Math.round(
            (completedTopics.length / totalTopics) * 100
          );

    const progress = await Progress.findOneAndUpdate(
      {
        user: req.user.id,
      },
      {
        user: req.user.id,
        roadmap: roadmap._id,
        completedTopics,
        progressPercentage,
      },
      {
        returnDocument: 'after', // Updated to remove Mongoose deprecation warning
        upsert: true,
      }
    );

    res.status(200).json({
      success: true,
      message: "Progress Updated Successfully",
      progress,
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
// Get User Progress
// ======================================

const getProgress = async (req, res) => {
  try {
    const progress = await Progress.findOne({
      user: req.user.id,
    });

    if (!progress) {
      return res.status(404).json({
        success: false,
        message: "Progress not found.",
      });
    }

    res.status(200).json({
      success: true,
      progress,
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
  updateProgress,
  getProgress,
};