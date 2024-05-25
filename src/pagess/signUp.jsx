import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import paramedic from "./sing-up-images/Ems paramedics team provide medical help to injured patient on the way to hospital emergency care assistants using a defibrillator and ventilation mask to bring the man back to life in an ambulance.png";
import rectangle from "./sing-up-images/Rectangle 148.png";
import logo from "../pagess/sing-up-images/saveme logo 1.png";

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    admin: false
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!validateEmail(formData.email)) {
      setError('Invalid email format');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      console.log("Sending data to API:", formData);

      const response = await axios.post('https://es-be-5-save-me.onrender.com/api/v1/user/signup', {
        username: formData.name,
        useremail: formData.email,
        phoneNumber: formData.phoneNumber,
        password: formData.password
      });

      console.log("API response:", response.data);
      setSuccess('Sign up successful. Redirecting to login page...');
      
      navigate('/login', { state: { name: formData.name, email: formData.email } });
      
    } catch (error) {
      console.error("Error during signup:", error);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="sign-up">
      <div className="inner-sign-up">
        <div className="image-section">
          <img id="para" src={paramedic} alt="" />
          <img id="rect" src={rectangle} alt="" />
          <img id="log" src={logo} alt="" />
          <h2>Save!me</h2>
        </div>
        <div className="sign-up-details">
          <h1>Sign Up</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
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
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Phone number"
                value={formData.phoneNumber}
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
            <div>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
            {error && <p className="error-message">{error}</p>}
            {success && <p className="success-message">{success}</p>}
            <button className="sign-up-button" type="submit">Continue</button>
            <p>
              Already have an account,{" "}
              <Link to="/login">
                <span id="here-2">click here</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
