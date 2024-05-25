import React from 'react';
import '../settings.css';
import { Link } from "react-router-dom";
import logo from './logo.png';
import frame from './homelogo.png';
import location from './locationlogo.png';
import book from './resourceslogo.png'
import phone from './calllogo.png';
import coins from './donationlogo.png';
import login from './logout.png';
import spanner from './spanner.png';
import bell from './bell.png';
import portrait from './portrait.png';
import searchIcon from './search.png';
import medic from './medicjames.png';

function Settings ()  {
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

      <div className="search-container-1-settings">
        <img className="search-icon-1-settings" src={searchIcon} alt="Search" />
        <input
          type="text"
          placeholder="Find your nearest emergency station or contact"
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
      <div className="location-quick-section-settings">
        <div className="location-inner-quick-section-set">
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
              <li className="location-inner-quick-section-1 location-top-line">
                <Link to="/settings">
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
        <br/>
        <div className="profile-container-settings">
      <div className="profile-header">
        <img src="src/settings/profilepic.png" alt="Profile" className="profile-picture" />
        <button className="edit-profile-button">Edit profile</button>
      </div>
      <div className="personal-info">
        <h2>My Profile</h2>
        <br/>
        <p>James Garner</p>
        <br/>
        <p>jamesgarner@gmail.com</p>
        <br/>
        <p>+2349057673456</p>
        <br/>
          <p>30 years</p>
          <br/>
          <p>Male </p>
          <br/>
        <button className="save-button">Save</button>
      </div>

        </div>

        <div className='details'>

        <div className="stat-item">
        <p>Emergency calls</p>
        <p className="stat-value">10 &nbsp;</p>
        <p className="stat-subtext">calls</p>
      </div>
      <br/>
      <br/>
      <div className="stat-item">
        <p>Articles read</p>
        
        <p className="stat-value">5 &nbsp;</p>
        <p className="stat-subtext">reviewed</p>
      </div>
      <br/>
      <br/>
      <div className="contact-item">
        <p>Most frequented contact</p>
        <p className="medic-container">
  <img src={medic} className="medic-image" />
  Medic James
</p>
      </div>

</div>

<div className='more-details'>
<div className="header">
        <h4>Bookmarked Articles</h4>
        <a className="view-all">view all</a>
      </div>
      <div className="article-grid">
        <div className="article-item">
          <a><img src="/src/settings/cpr.png" alt="Chest Resuscitation"/>
          <p>Chest Resuscitation</p></a>
        </div>
        <div className="article-item">
         <a> <img src="/src/settings/mouthtomouth.png" alt="Mouth to Mouth Resuscitation"/>
          <p>Mouth to Mouth Resuscitation</p></a>
        </div>
        <div className="article-item">
         <a> <img src="/src/settings/stretcher.png" alt="Laying on a stretcher"/>
          <p>Laying on a stretcher</p></a>
        </div>
        <div className="article-item">
         <a> <img src="/src/settings/firstaid.png" alt="Basic First Aid"/>
          <p>Basic First Aid</p></a>
        </div>
      </div>
      </div>
 </div>
        
        </section>

        
        
        </div>
        
          
  );
}

export default Settings;
