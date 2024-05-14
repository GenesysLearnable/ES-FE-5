import React from "react";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import paramedic from "./sing-up-images/Ems paramedics team provide medical help to injured patient on the way to hospital emergency care assistants using a defibrillator and ventilation mask to bring the man back to life in an ambulance.png";
import rectangle from "./sing-up-images/Rectangle 148.png";
import logo from "../pagess/sing-up-images/saveme logo 1.png";

function Login() {

//     const history = useHistory();

//   const handleNavigateToSignUp = () => {
//     // Perform any necessary form validation or data processing here
//     // Then navigate to the sign-up page
//     history.push("/signup");
//   };

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
            <form>
              
              <div>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  placeholder="Phone number"
                  //   value=""
                  //   onChange=""
                  required
                />
              </div>
              <div>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  //   value=""
                  //   onChange=""
                  required
                />
              </div>

              <p id="forgot-password">Forgot password?</p>
              
              <Link to="/signin"><button className="sign-up-button" type="submit">Log In</button></Link>
        
              <p>
              <Link to="/login">Already have an account, <span id="here-1">click Here</span></Link>
                
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
