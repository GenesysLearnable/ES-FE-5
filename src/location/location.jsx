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
  const [selectedCategory, setSelectedCategory] = useState("All");

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
      position: [6.50597, 7.23426],
      name: "Bishop Shanahan Hospital - Nsukka",
      type: "Hospital",
    },
    {
      position: [6.27002, 7.30168],
      name: "Alpha Hospital-Trans Ekulu-6-8 3rd Avenue-Enugu",
      type: "Hospital",
    },
    {
      position: [6.27096, 7.30372],
      name: "Balm of Gilead Specialist Hospital-Maryland,12-Prince-Okam-Street,Enugu",
      type: "Hospital",
    },
    {
      position: [6.27048, 7.31265],
      name: "Neo Hospital & Dialysis Centre-27 Nza Street,Enugu,00000",
      type: "Hospital",
    },
    {
      position: [6.26359, 7.30493],
      name: "Niger Foundation Hospital-5 Presidential Close,Enugu,",
      type: "Hospital",
    },
    {
      position: [6.28249, 7.30207],
      name: "Memfys HospitalPlot 13 Trans-Ekulu Pocket Layout,Enugu-Onitsha Expressway,Enugu, 00000",
      type: "Hospital",
    },
    {
      position: [6.27533, 7.29343],
      name: "The Eye Specialists Hospital (TESH) 11 Church View, Umuomanta Avenue, Enugu, 00000",
      type: "Hospital",
    },
    {
      position: [6.27291, 7.31237],
      name: "Childlife Hospital-163 Upper Chime Avenue,Enugu",
      type: "Hospital",
    },
    {
      position: [6.26449, 7.31526],
      name: "Eastside Hospital Enugu-26 Ezillo Avenue,Enugu",
      type: "Hospital",
    },
    {
      position: [6.28262, 7.30031],
      name: "Hilltop Orthopaedic Hospital Enugu-Onitsha Expy, Enugu",
      type: "Hospital",
    },
    {
      position: [6.4475, 7.505],
      name: "Abakpa Police Station",
      type: "Police Station",
    },
  ];

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
          (service) =>
            service.type.toLowerCase() === selectedCategory.toLowerCase()
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
                <Link to="/Calls">
                  <img src={phone} alt="" />{" "}
                  <span className="location-inner-quick-section-1-1">
                    Calls
                  </span>
                </Link>
              </li>
              <li className="location-inner-quick-section-1 location-bottom-line">
                <Link to="/Donations">
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
              <button
                className="location-BTN-1"
                onClick={() => handleCategoryChange("All")}
              >
                All
              </button>
              <button
                className="location-BTN-2"
                onClick={() => handleCategoryChange("Hospital")}
              >
                Ambulance
              </button>
              <button
                className="location-BTN-3"
                onClick={() => handleCategoryChange("Fire Station")}
              >
                Fire Service
              </button>
              <button
                className="location-BTN-4"
                onClick={() => handleCategoryChange("Police Station")}
              >
                Police stations
              </button>
              <button
                className="location-BTN-5"
                onClick={() => handleCategoryChange("Hospital")}
              >
                Medic
              </button>
            </div>
            {/* Map container */}
            <MapContainer
              className="map-container"
              center={mapCenter}
              zoom={13}
              style={{ height: "540px", width: "91%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <UpdateMapCenter center={mapCenter} />

              {filteredServices.map((service, index) => (
                <Marker key={index} position={service.position}>
                  <Popup>
                    {service.name} - {service.type}
                  </Popup>
                </Marker>
              ))}

              {/* User's current location marker */}
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
