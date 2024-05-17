import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../pages/home-image/saveme logo 2.png";
import searchIcon from "../pages/home-image/Icon.png";
import bell from "../pages/home-image/bell.png";
import portrait from "../pages/home-image/Portrait of modern man.png";
import frame from "../pages/home-image/Frame 12.png";
import location from "../pages/home-image/icons8-location-24.png";
import book from "../pages/home-image/book.png";
import phone from "../pages/home-image/phone.png";
import coins from "../pages/home-image/coin-stack.png";
import login from "../pages/home-image/log-in.png";
import spanner from "../pages/home-image/icons8-spanner-24.png";
import front from "./call-image/Front view of male paramedic with crossed arms.png";
import icons from "./call-image/Icon (1).png";
import male from "./call-image/Male firefighter at station equipped with suit and safety helmet.png";
import pilot1 from "./call-image/Pilot at the airport terminal (1).png";
import securityGuards from "./call-image/Security guards at workspace (1).png";
import phone2 from "./call-image/Frame 2344.png";
import pilot2 from "./call-image/Pilot at the airport terminal (2).png";
import medics from "./call-image/Ambulance staff member emerges from the back of an ambulance with his emergency backpack and vital signs monitor (1).png";

function Call() {
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
              <img id="call-logo" src={logo} alt="" />
            </Link>
          </li>
        </ul>

        <div className="call-search-container-1">
          <img className="call-search-icon-1" src={searchIcon} alt="Search" />
          <input
            type="text"
            placeholder="Find your nearest emergency station or contact"
            value={query}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
        </div>

        <div className="call-nav-IMG-1">
          <img id="call-bell-1" src={bell} alt="" />
          <a href="">
            <img src={portrait} alt="" />
          </a>
        </div>
      </nav>

      <section>
        <div className="call-location-quick-section">
          <div className="call-location-inner-quick-section">
            <ul>
              <li className="call-location-inner-quick-section-1">
                <Link to="/Home">
                  <img src={frame} alt="" />{" "}
                  <span className="call-location-inner-quick-section-1-1">
                    Home
                  </span>
                </Link>
              </li>
              <li className="call-location-inner-quick-section-1">
                <Link to="/Location">
                  <img src={location} alt="" />{" "}
                  <span className="call-location-inner-quick-section-1-1">
                    My Location
                  </span>
                </Link>
              </li>
              <li className="call-location-inner-quick-section-1">
                <Link to="/">
                  <img src={book} alt="" />{" "}
                  <span className="call-location-inner-quick-section-1-1">
                    Resources
                  </span>
                </Link>
              </li>
              <li className="call-location-inner-quick-section-1">
                <Link to="/">
                  <img src={phone} alt="" />{" "}
                  <span className="call-location-inner-quick-section-1-1">
                    Calls
                  </span>
                </Link>
              </li>
              <li className="call-location-inner-quick-section-1 location-bottom-line">
                <Link to="/">
                  <img src={coins} alt="" />{" "}
                  <span className="call-location-inner-quick-section-1-1">
                    Donations
                  </span>
                </Link>
              </li>
            </ul>
            <span>&nbsp;&nbsp;</span>
            <div>
              <ul>
                {" "}
                {}
                <li className="call-location-inner-quick-section-1 location-top-line">
                  <Link to="/">
                    <img src={spanner} alt="" />{" "}
                    <span className="call-location-inner-quick-section-1-1">
                      Settings
                    </span>
                  </Link>
                </li>
                <li className="call-location-inner-quick-section-1">
                  <Link to="/">
                    <img src={login} alt="" />{" "}
                    <span className="call-location-inner-quick-section-1-1">
                      Log Out
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="call-quick-section-1">
            <h1>Emergency service contacts</h1>
            <div className="call-quick-section-2">
              <div>
                <img className="guards" src={securityGuards} alt="" />
                <img className="guards icons-1" src={icons} alt="" />
                <button id="guards">Create contact</button>
              </div>
              <div>
                <img className="male" src={male} alt="" />
                <button id="male">Fireman Jake</button>
              </div>
              <div>
                <img className="pilot1" src={pilot1} alt="" />
                <button id="pilot1">Officer Paul</button>
              </div>
              <div>
                <img className="front" src={front} alt="" />
                <button id="front">Medic George</button>
              </div>
            </div>
            <div className="call-history">
              <div>
                <div className="inner-call-history">
                  <span id="history">Call History</span>
                  <span id="view">view all</span>
                </div>
                <div id="amaka">
                  <div className="inner-call-history-1">
                    <img src={medics} alt="" className="contact-img" />
                    <div className="contacts">
                      <p>Officer John</p>
                      <p className="nums">+2348045679876</p>
                    </div>
                    <div className="call-history-contacts">
                      <p>Call Duration</p>
                      <p className="nums">00:20:00</p>
                    </div>
                    <img src={phone2} alt="" className="contact-img-1" />
                  </div>
                </div>
                <div id="amaka">
                  <div className="inner-call-history-1">
                    <img src={pilot2} alt="" className="contact-img" />
                    <div className="contacts">
                      <p>Medic James</p>
                      <p className="nums">+2348045679876</p>
                    </div>
                    <div className="call-history-contacts">
                      <p>Call Duration</p>
                      <p className="nums">00:20:00</p>
                    </div>
                    <img src={phone2} alt="" className="contact-img-1" />
                  </div>
                </div>
                <div>
                  <div className="inner-call-history-1">
                    <img src={pilot2} alt="" className="contact-img" />
                    <div className="contacts">
                      <p>Medic James</p>
                      <p className="nums">+2348045679876</p>
                    </div>
                    <div className="call-history-contacts">
                      <p>Call Duration</p>
                      <p className="nums">00:20:00</p>
                    </div>
                    <img src={phone2} alt="" className="contact-img-1" />
                  </div>
                </div>
                <div>
                  <div className="inner-call-history-1">
                    <img src={pilot2} alt="" className="contact-img" />
                    <div className="contacts">
                      <p>Medic James</p>
                      <p className="nums">+2348045679876</p>
                    </div>
                    <div className="call-history-contacts">
                      <p>Call Duration</p>
                      <p className="nums">00:20:00</p>
                    </div>
                    <img src={phone2} alt="" className="contact-img-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Call;
