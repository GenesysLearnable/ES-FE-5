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
import resustation from "./recources-images/Group 74 (1).png";

function ResourcesSecondPage() {
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
                <Link to="/">
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
                <Link to="/">
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
                  <Link to="/">
                    <img src={spanner} alt="" />{" "}
                    <span className="location-inner-quick-section-1-1">
                      Settings
                    </span>
                  </Link>
                </li>
                <li className="location-inner-quick-section-1">
                  <Link to="/">
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
            <img className="firstpage-image" src={resustation} alt="" />
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
              <p>
                Mouth-to-mouth resuscitation is an emergency first aid technique
                used to help someone who is not breathing or is unconscious. It
                involves blowing air into their lungs to keep them oxygenated.
              </p>
              <br />
              <p>Here are the steps for mouth-to-mouth resuscitation:</p>
              <br />
              <p>
                1. Check the scene: Make sure it's safe for you and the person
                needing help.
              </p>
              <br />
              <p>
                2. Check for responsiveness: Gently tap or shake the person and
                ask if they are okay. If they don't respond, they need help.
              </p>
              <br />
              <p>
                3. Open the airway: Tilt their head back slightly and lift their
                chin to open the airway.
              </p>
              <br />
              <p>
                {" "}
                4. Check for breathing: Look, listen, and feel for breathing for
                about 5-10 seconds. If they are not breathing normally, proceed
                with rescue breaths.
              </p>
              <br />
              <p>
                5. Give rescue breaths: <br /> - Pinch the person's nose shut.{" "}
                <br /> - Take a normal breath and make a tight seal over their
                mouth. <br /> - Blow steadily into their mouth for about 1
                second, watching for their chest to rise. <br /> - Repeat this
                process to give 2 rescue breaths.
              </p>
              <br />
              <p>
                6. Check for pulse: If you don't feel a pulse, start CPR. If you
                feel a pulse but no normal breathing, continue rescue breaths.
              </p>
              <br />
              <p>
                These steps are meant to keep oxygen flowing into the person's
                lungs until professional medical help arrives. Practice and
                training in first aid are valuable skills to have in
                emergencies.
              </p>
              <br />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ResourcesSecondPage;
