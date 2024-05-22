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
import chest from "./recources-images/Group 74.png";
import frame2352 from "./recources-images/Frame 2362.png";

function ResourcesFirstPage() {
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
            <img className="firstpage-image" src={chest} alt="" />
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
              Performing chest compressions (also known as cardiopulmonary
              resuscitation or CPR) is a critical skill that can help save
              someone's life in an emergency situation. Here are the steps to
              carry out chest compressions:
            </p>
            <br />
            <p>
              1. Assess the Scene: Ensure that the area is safe for both you and
              the victim. Check for any potential hazards or dangers before
              approaching the person needing help.
            </p>
            <br />
            <p>
              2. Check Responsiveness: Gently shake the person and shout, "Are
              you okay?" Check for any response, such as movement or verbal
              response.
            </p>
            <br />
            <p>
              3. Call for Help: If there is no response, or if the person is not
              breathing normally, immediately call emergency services (911 or
              your local emergency number) for assistance. If there's someone
              nearby, ask them to call while you begin CPR.
            </p>
            <br />
            <p>
              4. Positioning: Carefully position the person on their back on a
              firm surface, such as the floor. Ensure their airway is clear and
              their head is tilted back slightly to open the airway.
            </p>
            <br />
            <p>
              5. Check for Breathing: Place your ear close to the person's mouth
              and nose, while looking at their chest, and watch for signs of
              breathing (chest rising and falling), for no more than 10 seconds.
              If they're not breathing normally, or you're unsure, it's time to
              start CPR.
            </p>
            <br />
            <p>
              6. Perform Chest Compressions: <br /> - Interlock your fingers and
              place the heel of one hand on the center of the person's chest
              (usually between the nipples). <br /> - Place your other hand on
              top of the first hand, keeping your elbows straight. <br /> -
              Position yourself directly over the person's chest, and with your
              shoulders directly above your hands, begin chest compressions.{" "}
              <br /> - Press down firmly and quickly, allowing the chest to rise
              back to its normal position between compressions. <br /> - Aim for
              a depth of at least 2 inches (about 5 centimeters) for adults, and
              about 1/3 the depth of the chest for infants and children. <br />{" "}
              - Perform chest compressions at a rate of 100 to 120 compressions
              per minute. You can mentally count "1 and 2 and 3 and..." to
              maintain the correct rhythm.
            </p>
            <br />
            <p>
              7. Continue Compressions: Continue chest compressions at the
              specified rate until help arrives, or until the person shows signs
              of responsiveness or begins breathing normally.
            </p>
            <br />
            <p>
              8. Coordinate with Rescue Breaths**: If you're trained and
              comfortable with rescue breaths, you can alternately administer
              rescue breaths after every 30 compressions. This helps to
              oxygenate the person's body along with the chest compressions.
            </p>
            <br />
            <p>
              9. Don't Stop Until Help Arrives: If you're alone and unable to
              leave the person to call for help, perform CPR for about 2 minutes
              before leaving to call emergency services. Then return to continue
              CPR until help arrives.
            </p>
            <br />
            <p>
              Remember, CPR is a life-saving skill, but it's essential to get
              proper training and certification to perform it effectively and
              confidently.
            </p>
            <br />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ResourcesFirstPage;
