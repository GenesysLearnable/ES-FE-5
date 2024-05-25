import React from "react";
import { Link } from "react-router-dom";
import "../contactus.css";
import saveme from "./saveme.png";
function ContactUs() {
  return (
    <div className="App">
      <nav className="navbar">
        <a href="/Home">
          <img src={saveme} alt="Home Logo" />
        </a>

        <ul>
          <li>
            <Link to="/" as="a">
              Home
            </Link>
          </li>
          <li>
            <Link to="/About" as="a">
              About
            </Link>
          </li>
          <li>
            <Link to="/ContactUs" as="a">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/Login" as="a">
              Login
            </Link>
          </li>
        </ul>

        <Link to="/Signup">
          <button type="submit">Sign Up</button>
        </Link>
      </nav>

      <header className="header">
        <h1>Contact Our Friendly Team</h1>
        <br />
        <p>Let us know how we can help.</p>
      </header>
      <section className="cards">
        <div className="card">
          <img src="src/contactpage/world.png" alt="Documentation Icon" />
          <br />
          <h3> Documentation</h3>
          <br />
          <p>We are here to help.</p>
          <br />
          <h3>See document</h3>
        </div>

        <div className="card">
          <img src="src/contactpage/chat.png" alt="Chat Icon" />
          <br />
          <br />
          <h3>Chat with Us</h3>
          <br />
          <p>Our emergency service is here to help: </p>
          <br />
          <p>support@untitled.com</p>
        </div>

        <div className="card">
          <img src="src/contactpage/find.png" alt="Location Icon" />
          <br />
          <br />
          <h3>Visit Us</h3>
          <br />
          <p>Visit our office HQ.</p>
          <br />
          <p>
            <a href="#maps">View on Google Maps</a>
          </p>
        </div>

        <div className="card">
          <img src="src/contactpage/pick.png" alt="Phone Icon" />
          <br />
          <br />
          <h3>Call Us</h3>
          <br />
          <p>Mon - Sun from 8am to 11:59pm: </p>
          <br />
          <p>+2348060000000</p>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
