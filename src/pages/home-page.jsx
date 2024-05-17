import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./home-image/saveme logo 2.png";
import searchIcon from "./home-image/Icon.png";
import bell from "./home-image/bell.png";
import portrait from "./home-image/Portrait of modern man.png";
import frame from "./home-image/Frame 12.png";
import location from "./home-image/icons8-location-24.png";
import book from "./home-image/book.png";
import phone from "./home-image/phone.png";
import coins from "./home-image/coin-stack.png";
import login from "./home-image/log-in.png";
import spanner from "./home-image/icons8-spanner-24.png";
import security from "./home-image/Security guards .png";
import firefighter from "./home-image/Firefighter.png";
import british from "./home-image/British.png";
import ems from "./home-image/Ems paramedics .png";
import ambStaff from "./home-image/Ambulance staff member emerges from the back of an ambulance with his emergency backpack and vital signs monitor.png";
import pilot from "./home-image/Pilot at the airport terminal.png";
import phoneCall from "./home-image/phone (1).png";
import bag from "./home-image/Front view arrangement of medical still life elements.png";

function Home() {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      console.log("Searching for:", query);
    }
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <img id="logo" src={logo} alt="" />
            </Link>
          </li>
        </ul>

        <div className="search-container">
          <img className="search-icon" src={searchIcon} alt="Search" />
          <input
            type="text"
            placeholder="Emergency contact...."
            value={query}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
        </div>

        <div className="nav-IMG">
          <img id="bell" src={bell} alt="" />
          <a href="">
            <img src={portrait} alt="" />
          </a>
        </div>
      </nav>

      <section>
        <div className="quick-section">
          <div className="inner-quick-section">
            <ul>
              <li className="inner-quick-section-1">
                <Link to="/Home">
                  <img src={frame} alt="" />{" "}
                  <span className="inner-quick-section-1-1">Home</span>
                </Link>
              </li>
              <li className="inner-quick-section-1">
                <Link to="/Location">
                  <img src={location} alt="" />{" "}
                  <span className="inner-quick-section-1-1">My Location</span>
                </Link>
              </li>
              <li className="inner-quick-section-1">
                <Link to="/">
                  <img src={book} alt="" />{" "}
                  <span className="inner-quick-section-1-1">Resources</span>
                </Link>
              </li>
              <li className="inner-quick-section-1">
                <Link to="/Call">
                  <img src={phone} alt="" />{" "}
                  <span className="inner-quick-section-1-1">Calls</span>
                </Link>
              </li>
              <li className="inner-quick-section-1 bottom-line">
                <Link to="/">
                  <img src={coins} alt="" />{" "}
                  <span className="inner-quick-section-1-1">Donations</span>
                </Link>
              </li>
            </ul>
            <span>&nbsp;&nbsp;</span>
            <div>
              <ul>
                {" "}
                {}
                <li className="inner-quick-section-1 top-line">
                  <Link to="/">
                    <img src={spanner} alt="" />{" "}
                    <span className="inner-quick-section-1-1">Settings</span>
                  </Link>
                </li>
                <li className="inner-quick-section-1">
                  <Link to="/">
                    <img src={login} alt="" />{" "}
                    <span className="inner-quick-section-1-1">Log Out</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="quick-section-1">
            <h1>Quick call contacts</h1>
            <div className="quick-section-2">
              <div>
                <img className="police" src={security} alt="" />
                <button id="police">Call the police</button>
              </div>
              <div>
                <img className="fire" src={firefighter} alt="" />
                <button id="fire">Call fire service</button>
              </div>
              <div>
                <img className="ambluance" src={british} alt="" />
                <button id="ambluance">Call an ambulance</button>
              </div>
              <div>
                <img className="medic" src={ems} alt="" />
                <button id="medic">Call a medic</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <h2 id="contact-h2">Your emergency contacts</h2>
        <div className="contact-01">
          <div>
            <div className="contact-1">
              <div className="inner-contact-1 ambstaff">
                <img src={ambStaff} alt="" />
                <div>
                  <p>Medic James</p>
                  <p id="number">+2348045679876</p>
                </div>
                <button>
                  <img src={phoneCall} alt="" />
                </button>
              </div>
            </div>
            <div className="contact-1">
              <div className="inner-contact-1">
                <img src={pilot} alt="" />
                <div>
                  <p>Officer Paul</p>
                  <p id="number">+2348045679876</p>
                </div>
                <button>
                  <img src={phoneCall} alt="" />
                </button>
              </div>
            </div>
          </div>

          <div className="bag">
            <a id="bag-p" href="">view all</a>
            <img src={bag} alt="" />
            <a id="bag-p-a" href="">Click Here</a>
            <p id="bag-p-1">Basic  First Aid</p> 
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
