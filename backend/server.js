const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const profileRoutes = require("./routes/profileRoutes");
const quizRoutes = require("./routes/quizRoutes");
const roadmapRoutes = require("./routes/roadmapRoutes");
const progressRoutes = require("./routes/progressRoutes");

dotenv.config();

console.log("MONGO_URI =", process.env.MONGO_URI);

const app = express();

// Database Connection
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/quiz", quizRoutes);
app.use("/api/roadmap", roadmapRoutes);
app.use("/api/progress", progressRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("🚀 AI Student Roadmap Backend Running");
});

// Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});