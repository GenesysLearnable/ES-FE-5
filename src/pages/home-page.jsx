import { useState } from "react";
// <<<<<<< feat/homepages
// =======
// import { Link } from 'react-router-dom';
// >>>>>>> develop
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
            <Link to="/Home">
              <img id="logo" src={logo} alt="" />
            </Link>
          </li>
        </ul>

        <div className="search-container">
          <img className="search-icon" src={searchIcon} alt="Search" />
          <input
            type="text"
            placeholder="Emergency contact..."
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
                  <img src={frame} alt="" /> <span className="inner-quick-section-1-1" >Home</span>
                </Link>
              </li>
              <li className="inner-quick-section-1">
                <Link to="/">
                  <img src={location} alt="" /> <span className="inner-quick-section-1-1">My Location</span>
                </Link>
              </li>
              <li className="inner-quick-section-1">
                <Link to="/">
                  <img src={book} alt="" /> <span className="inner-quick-section-1-1">Resources</span>
                </Link>
              </li>
              <li className="inner-quick-section-1">
                <Link to="/">
                  <img src={phone} alt="" /> <span className="inner-quick-section-1-1">Calls</span>
                </Link>
              </li>
              <li className="inner-quick-section-1 bottom-line">
                <Link to="/">
                  <img src={coins} alt="" /> <span className="inner-quick-section-1-1">Donations</span>
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
                    <img src={spanner} alt="" /> <span className="inner-quick-section-1-1">Settings</span>
                  </Link>
                </li>
                <li className="inner-quick-section-1">
                  <Link to="/">
                    <img src={login} alt="" /> <span className="inner-quick-section-1-1">Log Out</span>
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
    </div>
  );
}

export default Home;
