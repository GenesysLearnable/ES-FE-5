import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./recources-images/log-in.png";
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
                  <span className="res-inner-quick-section-1-1">My Location</span>
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
                <Link to="/">
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
                    <span className="res-inner-quick-section-1-1">Settings</span>
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

          <div className="res-uick-section-1">
            <h1>Most Visited Articles</h1>
            <div className="res-quick-section-2">
              <div>
                <img className="res-police" src={group26} alt="" />
                
              </div>
              <div>
                <img className="res-fire" src={group12} alt="" />
                
              </div>
              <div>
                <img className="res-ambluance" src={group14} alt="" />
                
              </div>
              <div>
                <img className="res-medic" src={group13} alt="" />
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Resources;
