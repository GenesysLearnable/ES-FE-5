import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
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

L.Marker.prototype.options.icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const UpdateMapCenter = ({ center }) => {
  const map = useMap();
  useEffect(() => {
    if (center) {
      map.setView(center, map.getZoom());
    }
  }, [center, map]);
  return null;
};

function Location() {
  const [query, setQuery] = useState("");
  const [mapCenter, setMapCenter] = useState([6.4403026, 7.5276011]);
  const [emergencyServices, setEmergencyServices] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
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

  useEffect(() => {
    const fetchEmergencyServices = async () => {
      try {
        const response = await fetch("");
        const data = await response.json();
        setEmergencyServices(data.services);
      } catch (error) {
        console.error("Error fetching emergency services:", error);
      }
    };

    fetchEmergencyServices();
  }, []);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleKeyDown = async (event) => {
    if (event.key === "Enter") {
      console.log("Searching for:", query);
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${query}`
        );
        const data = await response.json();
        if (data.length > 0) {
          const { lat, lon } = data[0];
          setMapCenter([parseFloat(lat), parseFloat(lon)]);
        } else {
          console.log("No results found");
        }
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredServices =
    selectedCategory === "All"
      ? emergencyServices
      : emergencyServices.filter(
          (service) => service.type.toLowerCase() === selectedCategory.toLowerCase()
        );

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

                <Link to="/Donation">
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
                  <Link to="/Settings">

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
          <div>
            <div className="location-BTN">
              <button className="location-BTN-1" onClick={() => handleCategoryChange("All")}>All</button>
              <button className="location-BTN-2" onClick={() => handleCategoryChange("Ambulance")}>Ambulance</button>
              <button className="location-BTN-3" onClick={() => handleCategoryChange("Fire Service")}>Fire Service</button>
              <button className="location-BTN-4" onClick={() => handleCategoryChange("Police")}>Police stations</button>
              <button className="location-BTN-5" onClick={() => handleCategoryChange("Medic")}>Medic</button>
            </div>
            {/* Map container */}
            <MapContainer
              className="map-container"
              center={mapCenter}
              zoom={9} 
              style={{ height: "540px", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <UpdateMapCenter center={mapCenter} />

              {filteredServices.map((service, index) => (
                <Marker
                  key={index}
                  position={[service.latitude, service.longitude]}
                >
                  <Popup>
                    {service.name} - {service.type}
                  </Popup>
                </Marker>
              ))}

              <Marker position={mapCenter}>
                <Popup>Your current location</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Location;
