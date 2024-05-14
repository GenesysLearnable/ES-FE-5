import React from "react";
import { Link } from "react-router-dom";
import paramedic from "./sing-up-images/Ems paramedics team provide medical help to injured patient on the way to hospital emergency care assistants using a defibrillator and ventilation mask to bring the man back to life in an ambulance.png";
import rectangle from "./sing-up-images/Rectangle 148.png";
import logo from "../pagess/sing-up-images/saveme logo 1.png";

function Signin() {
  return (
    <div>
      <div className="sign-in">
        <div className="inner-sign-in">
          <div className="image-section-sign-in">
            <img id="para-2" src={paramedic} alt="" />
            <img id="rect-2" src={rectangle} alt="" />
            <img id="log-2" src={logo} alt="" />
            <h2>Save!me</h2>
          </div>
          <div className="sign-in-details">
            <h1>
              Provide the following details to ge better services on our app
            </h1>
            <form>
              <div>
                <input
                  type="email"
                  id="name"
                  name="name"
                  placeholder="Email address"
                  //   value="text"
                  //   onChange=""
                  required
                />
              </div>
              <div>
                <input
                  type="number"
                  id="age"
                  name="age"
                  min="1"
                  max="120"
                  placeholder="Age"
                  //   value=""
                  //   onChange=""
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  id="gender"
                  name="gender"
                  placeholder="gender"
                  //   value=""
                  //   onChange=""
                  required
                />
              </div>

              <Link to="/login">
                <button className="sign-in-button" type="submit">
                  Continue
                </button>
              </Link>

              <Link to="/"></Link>
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

export default Signin;
