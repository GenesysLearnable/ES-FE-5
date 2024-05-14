import { useState } from "react";
import { Link } from 'react-router-dom';
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
          <Link to="/Home"><img id="logo" src={logo} alt="" /></Link>
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
        <div>
          <ul>
            <li>
              <Link to="/Home">
                <img src={frame} alt="" /> Home
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src={location} alt="" /> My Location
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src={book} alt="" /> Resources
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src={phone} alt="" /> Calls
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src={coins} alt="" /> Donations
              </Link>
            </li>
          </ul>
          <div>
            <ul> {}
              <li>
                <Link to="/">
                  <img src={spanner} alt="" /> Settings
                </Link>
              </li>
              <li>
                <Link to="/">
                  <img src={login} alt="" /> Log Out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>

  );
}

export default Home;
