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
import frame2352 from "./recources-images/Frame 2362.png";
import frontView from "./recources-images/Front view arrangement of medical still life elements (2).png";

function ResourcesThirdPage() {
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
              <img id="logo-1" src={logo} alt="" />
            </Link>
          </li>
        </ul>

        <div className="search-container-1">
          <img className="search-icon-1" src={searchIcon} alt="Search" />
          <input
            type="text"
            placeholder="Find your nearest emergency station or contact"
            value={query}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
        </div>

        <div className="nav-IMG-1">
          <img id="bell-1" src={bell} alt="" />
          <a href="">
            <img src={portrait} alt="" />
          </a>
        </div>
      </nav>

      <section>
        <div className="location-quick-section">
          <div className="location-inner-quick-section">
            <ul>
              <li className="location-inner-quick-section-1">
                <Link to="/Home">
                  <img src={frame} alt="" />{" "}
                  <span className="location-inner-quick-section-1-1">Home</span>
                </Link>
              </li>
              <li className="location-inner-quick-section-1">
                <Link to="/location">
                  <img src={location} alt="" />{" "}
                  <span className="location-inner-quick-section-1-1">
                    My Location
                  </span>
                </Link>
              </li>
              <li className="location-inner-quick-section-1">
                <Link to="/Resources">
                  <img src={book} alt="" />{" "}
                  <span className="location-inner-quick-section-1-1">
                    Resources
                  </span>
                </Link>
              </li>
              <li className="location-inner-quick-section-1">
                <Link to="/Call">
                  <img src={phone} alt="" />{" "}
                  <span className="location-inner-quick-section-1-1">
                    Calls
                  </span>
                </Link>
              </li>
              <li className="location-inner-quick-section-1 location-bottom-line">
                <Link to="/donations">
                  <img src={coins} alt="" />{" "}
                  <span className="location-inner-quick-section-1-1">
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
                <li className="location-inner-quick-section-1 location-top-line">
                  <Link to="/settings">
                    <img src={spanner} alt="" />{" "}
                    <span className="location-inner-quick-section-1-1">
                      Settings
                    </span>
                  </Link>
                </li>
                <li className="location-inner-quick-section-1">
                  <Link to="/landing">
                    <img src={login} alt="" />{" "}
                    <span className="location-inner-quick-section-1-1">
                      Log Out
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="ResourcesFirstPage-1">
            <img className="firstpage-image" src={frontView} alt="" />
            <div className="firstpage">
              <img id="firstpage-image" src={frame2352} alt="" />
              <div className="inner-ResourcesFirstPage">
                <p>Dr. John</p>
                <p className="inner-firstpage">
                  <span>1001</span> views
                </p>
              </div>
            </div>
            <div className="firstpage-Article">
              <p>What is basic first aid?</p>
              <br />
              <p>
                Basic first aid refers to the initial assistance given to a
                person who is injured or suddenly becomes ill. It aims to
                preserve life, prevent the condition from worsening, and promote
                recovery. Here are the steps for basic first aid:
              </p>
              <br />
              <p>
                1. Assess the situation: Check for any dangers to yourself and
                the injured person before approaching.
              </p>
              <br />
              <p>
                2. Check the person's responsiveness: Tap the person gently and
                ask if they are okay. Look for any signs of consciousness or
                response.
              </p>
              <br />
              <p>
                3. Call for help: If the person is seriously injured or
                unconscious, call emergency services or ask someone nearby to do
                so.
              </p>
              <br />
              <p>
                {" "}
                4. Control bleeding: If there is bleeding, apply firm pressure
                with a clean cloth or bandage to the wound to stop or slow down
                the bleeding.
              </p>
              <br />
              <p>
                5. Treat for shock: If the person is in shock (pale, cold,
                clammy skin, rapid heartbeat), help them lie down, elevate their
                legs slightly, and keep them warm and calm.
              </p>
              <br />
              <p>
                6. Provide CPR if needed: If the person is not breathing
                normally or has no pulse, start CPR (cardiopulmonary
                resuscitation) immediately following the steps for
                mouth-to-mouth resuscitation and chest compressions.
              </p>
              <br />
              <p>
                7. Immobilize injuries: If there are suspected broken bones or
                spinal injuries, avoid moving the person unnecessarily and
                support the injured area using splints or cushions.
              </p>
              <br />
              <p>
                8. Provide comfort: Reassure the person, keep them calm, and
                stay with them until medical help arrives.
              </p>
              <br />
              <p>
                Remember, basic first aid skills can make a big difference in
                emergencies, so it's good to be familiar with these steps and
                consider taking a first aid training course for more in-depth
                knowledge.
              </p>
              <br />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ResourcesThirdPage;
