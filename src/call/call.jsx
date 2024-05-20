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
  const [showAll, setShowAll] = useState(false);
  const [callHistory, setCallHistory] = useState([
    {
      name: "Officer John",
      number: "+2348045679876",
      duration: "00:20:00",
      img: medics,
    },
    {
      name: "Medic James",
      number: "+2349051180952",
      duration: "00:20:00",
      img: pilot2,
    },
    {
      name: "Medic James",
      number: "+2348045679876",
      duration: "00:20:00",
      img: pilot2,
    },
    {
      name: "Medic James",
      number: "+2348077141863",
      duration: "00:20:00",
      img: pilot2,
    },
    {
      name: "Fireman Jake",
      number: "+2348045679877",
      duration: "00:10:00",
      img: male,
    },
    {
      name: "Officer Paul",
      number: "+2348045679878",
      duration: "00:15:00",
      img: pilot1,
    },
    {
      name: "Medic George",
      number: "+2348045679879",
      duration: "00:05:00",
      img: front,
    },
    {
      name: "Security Guard",
      number: "+2348045679880",
      duration: "00:25:00",
      img: securityGuards,
    },
  ]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      console.log("Searching for:", query);
    }
  };

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/Home">
              <img id="call-logo" src={logo} alt="Logo" />
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
          <img id="call-bell-1" src={bell} alt="Bell" />
          <a href="/">
            <img src={portrait} alt="User" />
          </a>
        </div>
      </nav>

      <section>
        <div className="call-location-quick-section">
          <div className="call-location-inner-quick-section">
            <ul>
              <li className="call-location-inner-quick-section-1">
                <Link to="/Home">
                  <img src={frame} alt="Home" />{" "}
                  <span className="call-location-inner-quick-section-1-1">
                    Home
                  </span>
                </Link>
              </li>
              <li className="call-location-inner-quick-section-1">
                <Link to="/Location">
                  <img src={location} alt="Location" />{" "}
                  <span className="call-location-inner-quick-section-1-1">
                    My Location
                  </span>
                </Link>
              </li>
              <li className="call-location-inner-quick-section-1">
                <Link to="/Resources">
                  <img src={book} alt="Resources" />{" "}
                  <span className="call-location-inner-quick-section-1-1">
                    Resources
                  </span>
                </Link>
              </li>
              <li className="call-location-inner-quick-section-1">
                <Link to="/">
                  <img src={phone} alt="Calls" />{" "}
                  <span className="call-location-inner-quick-section-1-1">
                    Calls
                  </span>
                </Link>
              </li>
              <li className="call-location-inner-quick-section-1 location-bottom-line">
                <Link to="/Donation">
                  <img src={coins} alt="Donations" />{" "}
                  <span className="call-location-inner-quick-section-1-1">
                    Donations
                  </span>
                </Link>
              </li>
            </ul>
            <span>&nbsp;&nbsp;</span>
            <div>
              <ul>
                <li className="call-location-inner-quick-section-1 location-top-line">
                  <Link to="/">
                    <img src={spanner} alt="Settings" />{" "}
                    <span className="call-location-inner-quick-section-1-1">
                      Settings
                    </span>
                  </Link>
                </li>
                <li className="call-location-inner-quick-section-1">
                  <Link to="/">
                    <img src={login} alt="Log Out" />{" "}
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
                <img className="guards" src={securityGuards} alt="Security Guards" />
                <img className="guards icons-1" src={icons} alt="Icon" />
                <a href="tel:+1234567890"><button id="guards">Create contact</button></a>
              </div>
              <div>
                <img className="male" src={male} alt="Male Firefighter" />
                <a href="tel:+1234567891"><button id="male">Fireman Jake</button></a>
              </div>
              <div>
                <img className="pilot1" src={pilot1} alt="Pilot 1" />
                <a href="tel:+1234567892"><button id="pilot1">Officer Paul</button></a>
              </div>
              <div>
                <img className="front" src={front} alt="Front View" />
                <a href="tel:+1234567893"><button id="front">Medic George</button></a>
              </div>
            </div>
            <div className="call-history">
              <div>
                <div className="inner-call-history">
                  <span id="history">Call History</span>
                  <span id="view" onClick={toggleShowAll}>
                    {showAll ? "view less" : "view all"}
                  </span>
                </div>
                {callHistory.slice(0, showAll ? callHistory.length : 4).map((call, index) => (
                  <div id="phone-calls" key={index}>
                    <div className="inner-call-history-1">
                      <img src={call.img} alt={call.name} className="contact-img" />
                      <div className="contacts">
                        <p>{call.name}</p>
                        <p className="nums">{call.number}</p>
                      </div>
                      <div className="call-history-contacts">
                        <p>Call Duration</p>
                        <p className="nums">{call.duration}</p>
                      </div>
                      <a href={`tel:${call.number}`}>
                        <img src={phone2} alt="Phone" className="contact-img-1" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Call;

