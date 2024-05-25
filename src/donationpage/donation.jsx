import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import detectEthereumProvider from '@metamask/detect-provider';
import Web3 from 'web3';
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
import paramedic from "./donationImages/Paramedic giving oxygen to injured girl.png";
import sickgirl from "./donationImages/sick giel.png";
import burnthouse from "./donationImages/burnt house.png";
import naleandfemale from "./donationImages/Male and female firefighters working together in suits and helmets.png";

function Donation() {
  const [query, setQuery] = useState("");
  const [donationAmount, setDonationAmount] = useState(5000);
  const [account, setAccount] = useState(null);
  const [error, setError] = useState('');
  const donationGoal = 10000;
  const donationPercentage = (donationAmount / donationGoal) * 100;

  useEffect(() => {
    const checkMetaMask = async () => {
      const provider = await detectEthereumProvider();
      if (provider) {
        console.log('MetaMask provider detected');
      } else {
        setError('MetaMask not detected. Please install MetaMask.');
      }
    };

    checkMetaMask();
  }, []);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      console.log("Searching for:", query);
    }
  };

  const connectMetaMask = async () => {
    if (window.ethereum) {
      const provider = window.ethereum;
      try {
        await provider.request({ method: 'eth_requestAccounts' });
        const web3 = new Web3(provider);
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);
        setError(''); 
      } catch (error) {
        console.error("MetaMask connection error:", error);
        setError('Failed to connect MetaMask. Please try again.');
      }
    } else {
      console.error('MetaMask not detected. Please install MetaMask.');
      setError('MetaMask not detected. Please install MetaMask.');
    }
  };

  const handleDonate = async () => {
    const provider = await detectEthereumProvider();
    if (provider) {
      try {
        const web3 = new Web3(provider);
        const accounts = await web3.eth.getAccounts();

        
        const amountInEther = '1000.00';
        const amountInWei = web3.utils.toWei(amountInEther, 'ether');

        await web3.eth.sendTransaction({
          from: accounts[0],
          to: 'YOUR_RECEIVER_ADDRESS', 
          value: amountInWei
        });

        setDonationAmount(donationAmount + parseFloat(amountInEther) * 10000); 

      } catch (error) {
        console.error("Donation transaction error:", error);
        setError('Failed to process the donation. Please try again.');
      }
    } else {
      setError('MetaMask not detected. Please install MetaMask.');
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
          <div>
            <div className="donation-content">
              <div className="donation-info">
                <img src={paramedic} alt="Paramedic" />
                <p>
                  Discreet funding for{" "}
                  <span id="donation-info-1">accident</span>{" "}
                  <span id="donation-info-2">patients</span>
                </p>
              </div>
              <div className="donation-details">
                <h4>
                  {" "}
                  <span id="dontion-details-donate">Donate</span> with your
                  favourite cryptocurrency
                </h4>
                <p>
                  This is mainly for transparency and can be monitored on the
                  blockscan.
                </p>
                <div className="donation-bar-container">
                  <div className="donation-bar">
                    <div
                      className="donation-progress"
                      style={{ width: `${donationPercentage}%` }}
                    ></div>
                    <div className="money-figure">${donationAmount}</div>
                    <div className="money-figure-1">${donationGoal}</div>
                  </div>
                </div>
                <div>
                  <div className="donation-stats">
                    <div className="donation-stats-1">
                      <div id="donated">
                        {" "}
                        <span id="donated-1">{donationPercentage}%</span>{" "}
                        <span> Donated</span>
                      </div>
                    </div>
                    <div className="donation-stats-2">
                      <div id="different">
                        {" "}
                        <span id="different-1">150</span> Different{" "}
                        <span id="D-people">people</span>
                      </div>
                    </div>
                    <div className="donation-stats-3">
                      {" "}
                      <span id="donation-five">5</span>{" "}
                      <span id="accepted">Major currencies</span>{" "}
                      <span id="accepted-1">accepted</span>
                    </div>
                  </div>
                </div>
                {account ? (
                  <button className="donate-now" onClick={handleDonate}>
                    Donate Now
                  </button>
                ) : (
                  <button className="donate-now" onClick={connectMetaMask}>
                    MetaMask
                  </button>
                )}
                {account && (
                  <div>
                    <p>Connected Account: {account}</p>
                  </div>
                )}
                {error && <p style={{ color: 'red' }}>{error}</p>}
              </div>
            </div>
            <div className="crowdfunding-content">
              <div className="crowdfunding">
                <h5>Completed crowdfundings</h5>
                <p>Goal reached !</p>
              </div>
              <div className="goal-reached">
                <div className="goal-reached-image">
                  <img src={burnthouse} alt="" />
                  <p id="burnt-house">Funding for Burnt houses</p>
                  <p id="more-info">more info...</p>
                </div>
                <div className="goal-reached-image">
                  <img src={sickgirl} alt="" />
                  <p id="Bed-ridden">Funding for Bed-ridden children</p>
                  <p className="more-info">more info...</p>
                </div>
                <div className="goal-reached-image">
                  <img src={naleandfemale} alt="" />
                  <p id="Fire-fighters">Funding for honest Fire-fighters</p>
                  <p className="more-info">more info...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Donation;