import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Login
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData
      );
       
      console.log("Response:", response.data);

localStorage.setItem("token", response.data.token);
localStorage.setItem("user", JSON.stringify(response.data.user));

console.log("Token Saved:", localStorage.getItem("token"));
console.log("User Saved:", localStorage.getItem("user"));
      

      // Save Token
      localStorage.setItem("token", response.data.token);

      // Save User Data
      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      alert(response.data.message);

      // Redirect to Quiz
      navigate("/quiz");

    } catch (error) {
      alert(
        error.response?.data?.message || "Login Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="login">
      <div className="login-container">
        <div className="login-card">

          <h1>Welcome Back</h1>

          <p>
            Login to continue your AI Student Roadmap journey.
          </p>

          <form onSubmit={handleSubmit}>

            <div className="input-group">
              <label>Email Address</label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label>Password</label>

              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="login-btn"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>

          </form>

          <div className="register-link">
            <p>
              Don't have an account?{" "}
              <Link to="/register">Register</Link>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Login;