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
import fourthGroup25 from "./recources-images/Group 25.png";

function ResourcesFourthPage() {
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
                <Link to="/donation">
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
            <img className="firstpage-image" src={fourthGroup25} alt="" />
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
                Laying a stretcher refers to the process of preparing and
                positioning a stretcher to safely transport an injured or ill
                person. Here are the steps for laying a stretcher:
              </p>
              <br />
              <p>
                1. Prepare the stretcher: Ensure the stretcher is unfolded and
                ready for use. Check for any damage or defects.
              </p>
              <br />
              <p>
                2. Position the stretcher: Place the stretcher near the person
                who needs to be transported, ensuring there is enough space
                around to maneuver.
              </p>
              <br />
              <p>
                3. Secure the area: Clear any obstacles or hazards around the
                stretcher to prevent accidents during movement.
              </p>
              <br />
              <p>
                {" "}
                4. Assess the person: Determine the best way to move the person
                onto the stretcher based on their condition and any injuries
                they may have.
              </p>
              <br />
              <p>
                5. Position the person: Carefully lift or roll the person onto
                the stretcher, making sure to support their head and neck if
                there are suspected spinal injuries.
              </p>
              <br />
              <p>
                6. Secure the person: Use straps or restraints on the stretcher
                to secure the person in place, especially if there is a risk of
                movement during transport.
              </p>
              <br />
              <p>
                7. Check comfort and safety: Ensure the person is comfortable
                and that the stretcher is stable and balanced before moving.
              </p>
              <br />
              <p>
                8. Transport the person: With the help of others, lift and carry
                the stretcher using proper lifting techniques to avoid strain or
                injuries.
              </p>
              <br />
              <p>
                9. Communicate: Coordinate with your team to move the stretcher
                smoothly and safely, especially around corners or obstacles.
              </p>
              <br />
              <p>
                10. Monitor the person: Continuously assess the person's
                condition during transport and make any necessary adjustments to
                ensure their well-being.
              </p>
              <br />
              <p>
                By following these steps, you can effectively lay a stretcher
                and transport a person safely, minimizing further harm and
                providing necessary care until they reach medical professionals.
              </p>
              <br />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ResourcesFourthPage;
