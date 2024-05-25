import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import paramedic from "./sing-up-images/Ems paramedics team provide medical help to injured patient on the way to hospital emergency care assistants using a defibrillator and ventilation mask to bring the man back to life in an ambulance.png";
import rectangle from "./sing-up-images/Rectangle 148.png";
import logo from "./sing-up-images/saveme logo 1.png";

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      console.log("Sending data to API:", formData);
      const response = await axios.post('https://es-be-5-save-me.onrender.com/api/v1/user/login', formData);
      console.log("API response:", response); 
      if (response.data.success) {
        setSuccess('Login successful!');
         navigate('/landing'); 
      } else {
        setError(response.data.message || 'Login failed');
      }
    } catch (error) {
      console.error("API error:", error); 
      if (error.response) {
        setError(`Error: ${error.response.status} - ${error.response.data}`);
      } else if (error.request) {
        setError('Network error: No response received');
      } else {
        setError('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div>
      <div className="log-in">
        <div className="inner-log-in">
          <div className="log-in-image-section">
            <img id="para-1" src={paramedic} alt="" />
            <img id="rect-1" src={rectangle} alt="" />
            <img id="log-1" src={logo} alt="" />
            <h2>Save!me</h2>
          </div>
          <div className="log-in-details">
            <h1>Hello Welcome Back</h1>
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <p id="forgot-password">Forgot password?</p>
              
              <button className="sign-up-button" type="submit">Log In</button>
              {error && <p className="error-message">{error}</p>}
              {success && <p className="success-message">{success}</p>}

              <p>
                Don't have an account? <Link to="/signup"><span id="here-1">Sign up here</span></Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
