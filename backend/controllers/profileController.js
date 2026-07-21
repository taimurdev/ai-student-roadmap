const Profile = require("../models/Profile");

// ==========================
// Create / Update Profile
// ==========================
const updateProfile = async (req, res) => {
  try {
    const { university, degree, semester, cgpa, skills, interests, careerGoal } =
      req.body;

    const profile = await Profile.findOneAndUpdate(
      { user: req.user.id },
      {
        user: req.user.id,
        university,
        degree,
        semester,
        cgpa,
        skills,
        interests,
        careerGoal,
      },
      {
        new: true,
        upsert: true,
      }
    );

    res.status(200).json({
      success: true,
      message: "Profile Saved Successfully",
      profile,
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
// Get Logged-in User Profile
// ==========================
const getProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id });

    if (!profile) {
      return res.status(404).json({
        success: false,
        message: "Profile Not Found",
      });
    }

    res.status(200).json({
      success: true,
      profile,
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
  updateProfile,
  getProfile,
};