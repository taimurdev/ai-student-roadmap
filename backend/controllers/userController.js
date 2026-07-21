const getProfile = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Profile Fetched Successfully",
      user: req.user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = {
  getProfile,
};