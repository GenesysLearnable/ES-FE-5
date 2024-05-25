import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
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
import security from "./home-image/Security guards .png";
import firefighter from "./home-image/Firefighter.png";
import british from "./home-image/British.png";
import ems from "./home-image/Ems paramedics .png";
import ambStaff from "./home-image/Ambulance staff member emerges from the back of an ambulance with his emergency backpack and vital signs monitor.png";
import pilot from "./home-image/Pilot at the airport terminal.png";
import phoneCall from "./home-image/phone (1).png";
import bag from "./home-image/Front view arrangement of medical still life elements.png";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

// Custom hook to update the map center
const UpdateMapCenter = ({ center }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(center);
  }, [center, map]);
  return null;
};

function Home() {
  const [query, setQuery] = useState("");
  const [mapCenter, setMapCenter] = useState([6.5244, 7.5186]);
  const [searchResult, setSearchResult] = useState(null);
  const [showAllContacts, setShowAllContacts] = useState(true);

  // Fetch user's current location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log("User's position:", latitude, longitude); 
          setMapCenter([latitude, longitude]);
        },
        (error) => {
          console.error("Error fetching user location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  const toggleContacts = (event) => {
    event.preventDefault();
    setShowAllContacts(!showAllContacts);
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = async () => {
    if (query.trim() === "") return;

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${query} Enugu`
      );
      const data = await response.json();
      if (data.length > 0) {
        const { lat, lon } = data[0];
        setMapCenter([parseFloat(lat), parseFloat(lon)]);
        setSearchResult({
          lat: parseFloat(lat),
          lon: parseFloat(lon),
          display_name: data[0].display_name,
        });

      }
    } catch (error) {
      console.error("Error fetching geolocation:", error);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const emergencyServices = [
    {
      position: [6.5244, 7.5186],
      name: "Central Police Station",
      type: "Police Station",
    },
    {
      position: [6.5053, 7.5104],
      name: "Enugu Fire Station",
      type: "Fire Station",
    },
    {
      position: [6.4942, 7.5293],
      name: "University of Nigeria Teaching Hospital",
      type: "Hospital",
    },
    {
      position: [6.4331, 7.523],
      name: "New Haven Police Station",
      type: "Police Station",
    },
    {
      position: [6.4361, 7.4965],
      name: "GRA Fire Station",
      type: "Fire Station",
    },
    {
      position: [6.4525, 7.5101],
      name: "National Orthopaedic Hospital",
      type: "Hospital",
    },
    { position: [6.444, 7.5107], name: "Parklane Hospital", type: "Hospital" },
    {
      position: [6.4475, 7.505],
      name: "Abakpa Police Station",
      type: "Police Station",
    },
  ];

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <img id="logo" src={logo} alt="Logo" />
            </Link>
          </li>
        </ul>

        <a className="home-search-container" href="#" onClick={handleSearch}>
          <div className="search-container">
            <img className="search-icon" src={searchIcon} alt="Search" />
            <input
              type="text"
              placeholder="Emergency contact...."
              value={query}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
          </div>
        </a>

        <div className="nav-IMG">
          <img id="bell" src={bell} alt="Bell" />
          <a href="#">
            <img src={portrait} alt="Portrait" />
          </a>
        </div>
      </nav>

      <section>
        <div className="quick-section">
          <div className="inner-quick-section">
            <ul>
              <li className="inner-quick-section-1">
                <Link to="/Home">
                  <img src={frame} alt="Home" />{" "}
                  <span className="inner-quick-section-1-1">Home</span>
                </Link>
              </li>
              <li className="inner-quick-section-1">
                <Link to="/Location">
                  <img src={location} alt="Location" />{" "}
                  <span className="inner-quick-section-1-1">My Location</span>
                </Link>
              </li>
              <li className="inner-quick-section-1">
                <Link to="/Resources">
                  <img src={book} alt="Resources" />{" "}
                  <span className="inner-quick-section-1-1">Resources</span>
                </Link>
              </li>
              <li className="inner-quick-section-1">
                <Link to="/Call">
                  <img src={phone} alt="Calls" />{" "}
                  <span className="inner-quick-section-1-1">Calls</span>
                </Link>
              </li>
              <li className="inner-quick-section-1 bottom-line">
                <Link to="/Donation">
                  <img src={coins} alt="Donations" />{" "}
                  <span className="inner-quick-section-1-1">Donations</span>
                </Link>
              </li>
            </ul>
            <span>&nbsp;&nbsp;</span>
            <div>
              <ul>
                {" "}
                {}
                <li className="inner-quick-section-1 top-line">
                  <Link to="/">
                    <img src={spanner} alt="Settings" />{" "}
                    <span className="inner-quick-section-1-1">Settings</span>
                  </Link>
                </li>
                <li className="inner-quick-section-1">
                  <Link to="/">
                    <img src={login} alt="Log Out" />{" "}
                    <span className="inner-quick-section-1-1">Log Out</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="quick-section-1">
            <h1>Quick call contacts</h1>
            <div className="quick-section-2">
              <div>
                <img className="police" src={security} alt="" />
                <a href="tel:1234567890">
                  <button id="police">Call the police</button>
                </a>
              </div>
              <div>
                <img className="fire" src={firefighter} alt="" />
                <a href="tel:0987654321">
                  <button id="fire">Call fire service</button>
                </a>
              </div>
              <div>
                <img className="ambluance" src={british} alt="" />
                <a href="tel:1122334455">
                  <button id="ambluance">Call an ambulance</button>
                </a>
              </div>
              <div>
                <img className="medic" src={ems} alt="" />
                <a href="tel:5566778899">
                  <button id="medic">Call a medic</button>
                </a>
              </div>
            </div>

            {/* Map container */}
            <MapContainer
              className="map-container"
              center={mapCenter}
              zoom={9}
              style={{ height: "350px", width: "90%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <UpdateMapCenter center={mapCenter} />

              {emergencyServices.map((service, index) => (
                <Marker key={index} position={service.position}>
                  <Popup>
                    {service.name} - {service.type}
                  </Popup>
                </Marker>
              ))}

              {searchResult &&(
                <Marker position={[searchResult.lat, searchResult.lon]}>
                  <Popup>{searchResult.display_name}</Popup>
                </Marker>
              )}

              <Marker position={mapCenter}>
                <Popup>Your current location</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </section>

      <footer>
        <h2 id="contact-h2">Your emergency contacts</h2>
        <div className="contact-01">
          <div>
            <div className="contact-1">
              <div className="inner-contact-1 ambstaff">
                <img
                  className="inner-contact-1-image"
                  src={ambStaff}
                  alt="Ambulance Staff"
                />
                <div>
                  <p>Medic James</p>
                  <p id="number">+2348045679876</p>
                </div>
                <a href="tel:+2348045679876">
                  <button>
                    <img src={phoneCall} alt="" />
                  </button>
                </a>
              </div>
            </div>
            <div className="contact-1">
              <div className="inner-contact-1">
                <img
                  className="inner-contact-1-image"
                  src={pilot}
                  alt="Pilot"
                />
                <div>
                  <p>Officer Paul</p>
                  <p id="number">+2348045679876</p>
                </div>
                <a href="tel:+2348045679876">
                  <button>
                    <img src={phoneCall} alt="" />
                  </button>
                </a>
              </div>
            </div>
            {showAllContacts && (
              <>
                <div className="contact-1">
                  <div className="inner-contact-1">
                    <img
                      className="inner-contact-1-image"
                      src={pilot}
                      alt="Pilot"
                    />
                    <div>
                      <p>Fireman Jake</p>
                      <p id="number">+2348045679876</p>
                    </div>
                    <a href="tel:+2348045679876">
                      <button>
                        <img src={phoneCall} alt="" />
                      </button>
                    </a>
                  </div>
                </div>
                <div className="contact-1">
                  <div className="inner-contact-1">
                    <img
                      className="inner-contact-1-image"
                      src={pilot}
                      alt="Pilot"
                    />
                    <div>
                      <p>Ambulance</p>
                      <p id="number">+2348045679876</p>
                    </div>
                    <a href="tel:+2348045679876">
                      <button>
                        <img src={phoneCall} alt="" />
                      </button>
                    </a>
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="bag">
            <div>
              <a id="bag-p" href="#" onClick={toggleContacts}>
                {showAllContacts ? "Hide" : "View all"}
              </a>
            </div>

            <img src={bag} alt="Bag" />
            <a id="bag-p-a" href="#">
              Click Here
            </a>

            <p id="bag-p-1">Basic First Aid</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;


