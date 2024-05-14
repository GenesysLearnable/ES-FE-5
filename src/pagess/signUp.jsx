import React from "react";
import { Link } from "react-router-dom";
import paramedic from "./sing-up-images/Ems paramedics team provide medical help to injured patient on the way to hospital emergency care assistants using a defibrillator and ventilation mask to bring the man back to life in an ambulance.png";
import rectangle from "./sing-up-images/Rectangle 148.png";
import logo from "../pagess/sing-up-images/saveme logo 1.png";

function Signup() {
  return (
    <div>
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
            <form>
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Full name"
                  //   value="text"
                  //   onChange=""
                  required
                />
              </div>
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
              <div>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm password"
                  //   value=""
                  //   onChange=""
                  required
                />
              </div>
              <Link to="/login"><button className="sign-up-button" type="submit">Log In</button></Link>
              <p>
                {" "}
                Already have an account,{" "}
                <Link to="/login">
                  <span id="here-2">click Here</span>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
