import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./recources-images/saveme logo 2.png";
import searchIcon from "./recources-images/Icon.png";
import bell from "./recources-images/bell.png";
import portrait from "./recources-images/Portrait of modern man.png";
import frame from "./recources-images/Frame 12.png";
import location from "./recources-images/icons8-location-24.png";
import book from "./recources-images/book.png";
import phone from "./recources-images/phone.png";
import coins from "./recources-images/coin-stack.png";
import login from "./recources-images/log-in copy.png";
import spanner from "./recources-images/icons8-spanner-24.png";
import group26 from "./recources-images/Group 26.png";
import group12 from "./recources-images/Group 12.png";
import group14 from "./recources-images/Group 14.png";
import group13 from "./recources-images/Group 13.png";
import frame2362 from "./recources-images/Frame 2362.png";
import frontBag from "./recources-images/Front view arrangement of medical still life elements (1).png";

function Resources() {
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
              <img id="res-logo" src={logo} alt="" />
            </Link>
          </li>
        </ul>

        <div className="res-search-container">
          <img className="res-search-icon" src={searchIcon} alt="Search" />
          <input
            type="text"
            placeholder="Emergency contact...."
            value={query}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
        </div>

        <div className="res-nav-IMG">
          <img id="res-bell" src={bell} alt="" />
          <a href="">
            <img src={portrait} alt="" />
          </a>
        </div>
      </nav>

      <section>
        <div className="res-quick-section">
          <div className="res-inner-quick-section">
            <ul>
              <li className="res-inner-quick-section-1">
                <Link to="/Home">
                  <img src={frame} alt="" />{" "}
                  <span className="res-inner-quick-section-1-1">Home</span>
                </Link>
              </li>
              <li className="res-inner-quick-section-1">
                <Link to="/Location">
                  <img src={location} alt="" />{" "}
                  <span className="res-inner-quick-section-1-1">
                    My Location
                  </span>
                </Link>
              </li>
              <li className="res-inner-quick-section-1">
                <Link to="/">
                  <img src={book} alt="" />{" "}
                  <span className="res-inner-quick-section-1-1">Resources</span>
                </Link>
              </li>
              <li className="res-inner-quick-section-1">
                <Link to="/Call">
                  <img src={phone} alt="" />{" "}
                  <span className="res-inner-quick-section-1-1">Calls</span>
                </Link>
              </li>
              <li className="res-inner-quick-section-1 bottom-line">
                <Link to="/Donation">
                  <img src={coins} alt="" />{" "}
                  <span className="res-inner-quick-section-1-1">Donations</span>
                </Link>
              </li>
            </ul>
            <span>&nbsp;&nbsp;</span>
            <div>
              <ul>
                {" "}
                {}
                <li className="res-inner-quick-section-1 top-line">
                  <Link to="/">
                    <img src={spanner} alt="" />{" "}
                    <span className="res-inner-quick-section-1-1">
                      Settings
                    </span>
                  </Link>
                </li>
                <li className="res-inner-quick-section-1">
                  <Link to="/">
                    <img src={login} alt="" />{" "}
                    <span className="res-inner-quick-section-1-1">Log Out</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="res-quick-section-1">
            <h1>Most Visited Articles</h1>
            <div className="res-quick-section-2">
              <div className="group26">
                <img className="res-group26" src={group26} alt="" />
                <div id="res-group26">
                  <img className="res-image26" src={frame2362} alt="" />
                  <div className="inner-res-group26">
                    <p>Dr. John</p>
                    <p className="inner-res-view">
                      <span>1001</span> views
                    </p>
                    <Link to="/ResourcesFirstPage">
                      <span className="read-more">read more...</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="group12">
                <img className="res-group12" src={group12} alt="" />
                <div id="res-group12">
                  <img className="res-image12" src={frame2362} alt="" />
                  <div className="inner-res-group26">
                    <p>Dr. John</p>
                    <p className="inner-res-view">
                      <span>1001</span> views
                    </p>
                    <Link to="/ResourcesSecondPage">
                      <span className="read-more">read more...</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="group14">
                <img className="res-group14" src={group14} alt="" />
                <div id="res-group14">
                  <img className="res-image14" src={frame2362} alt="" />
                  <div className="inner-res-group26">
                    <p>Dr. John</p>
                    <p className="inner-res-view">
                      <span>1001</span> views
                    </p>
                    <Link to="/ResourcesThirdPage">
                      <span className="read-more">read more...</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="group1">
                <img className="res-group13" src={group13} alt="" />
                <div id="res-group13">
                  <img className="res-image13" src={frame2362} alt="" />
                  <div className="inner-res-group26">
                    <p>Dr. John</p>
                    <p className="inner-res-view">
                      <span>1001</span> views
                    </p>
                    <Link to="/ResourcesFourthPage">
                      <span className="read-more">read more...</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="res-quick-section-3">
              <div>
                <h2>Major articles</h2>
                <div className="major">
                  <img src={frontBag} alt="" />
                  <div className="stop-bleeding">
                    <p>How to stop bleeding</p>
                    <p className="paul">Dr. Paul</p>
                  </div>
                  <button>Read</button>
                </div>
                <div className="major">
                  <img src={frontBag} alt="" />
                  <div className="stop-bleeding">
                    <p>How to stop bleeding</p>
                    <p className="paul">Dr. Paul</p>
                  </div>
                  <button>Read</button>
                </div>
                <div className="major">
                  <img src={frontBag} alt="" />
                  <div className="stop-bleeding">
                    <p>How to stop bleeding</p>
                    <p className="paul">Dr. Paul</p>
                  </div>
                  <button>Read</button>
                </div>
              </div>
              <div className="Previously">
                <h2>Previously read</h2>
                <img src={group26} alt="" />
                <button>Continue</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Resources;
