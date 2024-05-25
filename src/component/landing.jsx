import { useState } from 'react';
import { Link } from 'react-router-dom';
import saveme from '../image/saveme logo 2.png';
import paramedic from '../image/from paramedic.png';
import Ellipse from '../image/Ellipse 1.png';
import Ellipses from '../image/Ellipse 2.png';
import material from '../image/Vector (7).png';
import victor from '../image/Vector (6).png';
import police from '../image/Vector (8).png';
import hospital from '../image/Vector (9).png';
import ambluance from '../image/Vector (10).png';
import rectangle from '../image/Rectangle 158.png';
import rectangles from '../image/Rectangle 153.png';
import imagee from '../image/image 27.png';
import imagees from '../image/image 25.png';
import multiethnic from '../image/multiethnic.png';
import international from '../image/international.png';
import angle from '../image/Rectangle 159.png';
import imagess from '../image/image 26.png';
import icons from '../image/icons8-search-24.png';
import iconss from '../image/icons8-dropdown-30.png';
import location from '../image/icons8-location-24.png';
import person from '../image/icons8-person-64.png';

function Landing() {
  const [email, setEmail] = useState('');
  const [showParamedicInfo, setShowParamedicInfo] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Subscribed with ${email}`);
    setEmail('');
  };

  const toggleParamedicInfo = () => {
    setShowParamedicInfo(!showParamedicInfo);
  };

  return (
    <div className="home">
      <div className="nav-bar">
        <a href="#"><img src={saveme} alt="" /></a>
        <div className="nav-bar-1">
          <ul>
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/ContactUs">Contact Us</Link></li>
            <li><Link to="/Login">Login</Link></li>
          </ul>
        </div>
        <span className="BTN">
          <Link to="/Signup"><button type="submit">Sign Up</button></Link>
        </span>
      </div>

      <div className="hero-section">
        <div className="inner-section">
          <h1>
            Swift Response Is The <span className="hallmark">Hallmark Of Efficiency.</span>
          </h1>
          <br />
          <p>
            Locate the nearest emergency service in Enugu, chat with a doctor,
            track your journey, visit hospitals, all can be done with SAVE ME!
          </p>
          <br />
          <div className="paramedic">
            <span id="medics" onClick={toggleParamedicInfo}>
              <img src={person} alt="" /> Find a Paramedic <img src={iconss} alt="" />
            </span>
            {showParamedicInfo && (
              <div className="paramedic-info">
              <button > <Link className='paramedi-info-1' to="/Call">Call</Link> </button>
              <button> <Link className='paramedi-info-1' to="/Location">Location</Link></button>
              <button> <Link className='paramedi-info-1' to="/Home">Home</Link></button>
            </div>
            )
            
            }
            <span id="location">
              <img src={location} alt="" />
              <a href="https://www.google.com/maps/@9.0338725,8.677457,6z?entry=ttu">Location</a>
              <img src={iconss} alt="" />
            </span>
            <button id="btn">
              <img src={icons} alt="" />
            </button>
          </div>
          <button className="BTN-1">
            <Link to="/GetStarted">Get Started</Link>
          </button>
        </div>
        <div className="hero-section-1">
          <div className="hero-section-2">
            <img width={100} src={Ellipse} alt="" />
            <img width={200} src={Ellipses} alt="" />
            <img width={200} src={paramedic} alt="" />
          </div>
        </div>
      </div>

      <div className="online-details">
        <div className="online-details-1">
          <h6>24/7</h6>
          <p>Online Support</p>
        </div>
        <div className="online-details-1">
          <h6>100+</h6>
          <p>Paramedic Online</p>
        </div>
        <div className="online-details-1">
          <h6>1M+</h6>
          <p>Customer Active</p>
        </div>
      </div>

      <section>
        <div className="section-1">
          <h2>Our Services</h2>
          <div className="top-3">
            <div className="services">
              <img src={material} alt="" />
              <h3>Fire Department</h3>
              <p>We provide fire suppression, rescue operations, and emergency medical services.</p>
            </div>
            <div className="services services-1">
              <img src={victor} alt="" className="color-change" />
              <h3>First Aid</h3>
              <p>
                First aid offers immediate care and basic medical assistance to
                individuals in need, aiming to stabilize injuries and preserve
                life until professional medical help arrives.
              </p>
            </div>
            <div className="services">
              <img src={police} alt="" />
              <h3>Police Station</h3>
              <p>Police stations provide law enforcement, crime investigation, and public safety services to communities.</p>
            </div>
          </div>
          <div className="bottom-2">
            <div className="services">
              <img src={hospital} alt="" />
              <h3>Clinics/Hospitals</h3>
              <p>
                Clinics and hospitals offer medical care, diagnosis, treatment,
                and sometimes emergency services to patients.
              </p>
            </div>
            <div className="services">
              <img src={ambluance} alt="" />
              <h3>Patient Transportation</h3>
              <p>
                Patient transportation services offer safe and efficient medical
                transport.
              </p>
            </div>
          </div>
        </div>

        <div className="section-2">
          <div className="container">
            <div className="container-image">
              <img className="image image-1" src={rectangle} alt="" />
              <img className="image" src={imagee} alt="" />
              <img className="image image-3" src={rectangles} alt="" />
              <img className="image image-4" src={imagees} alt="" />
            </div>
            <div className="container-image">
              <img className="image image-5" src={multiethnic} alt="" />
              <img className="image image-6" src={international} alt="" />
            </div>
            <div className="container-image">
              <img className="image image-7" src={angle} alt="" />
              <img className="image image-8" src={imagess} alt="" />
            </div>
          </div>

          <div className="section-3">
            <div className="inner-section-3">
              <h2>
                Why You Should Choose <span id="save-me">Save!me</span>
              </h2>
              <p>
                Choosing an emergency service ensures prompt assistance during
                critical situations, potentially saving lives and minimizing
                damage or harm.
              </p>
            </div>
          </div>
        </div>

        <div className="section-4">
          <h2>SOS</h2>
          <p>
            In distress and urgently requiring assistance, Situation critical,
            Immediate aid essential. Please respond promptly to provide
            necessary help. Time is of the essence.
          </p>

          <div id="emergency">
            <span id="line">
              Call our <span id="call">emergency</span> line
            </span>
            <button className='underline'>
            <li><Link to="/Call"><span id="underline">222</span></Link></li>
            </button>
          </div>
        </div>

        <div className="section-5">
          <div className="inner-section-5">
            <div>
              <h2>
                Subscribe To Our <span id="newsletter"> Newsletter</span>
              </h2>
              <p>
                Ensure continuous access to critical assistance and support by
                subscribing to emergency services today. Dont wait until its too
                late.
              </p>
            </div>

            <div className="subscribe">
              <form onSubmit={handleSubscribe}>
                <input
                  type="email"
                  placeholder="Enter a valid email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-1">
          <div className="inner-footer">
            <form>
              <input
                type="text"
                placeholder="Your Name"
                className="input-form"
              />
              <input
                type="email"
                placeholder="Email"
                className="input-form"
              />
              <input
                type="text"
                placeholder="Message"
                id="message"
                className="input-form"
              />
            </form>
          </div>
          <div className="contact">
            <h2>CONTACT INFO</h2>
            <p className="contact-1">203 Fake St. Mountain View, San Francisco, California, USA</p>
            <p>+23480500000000</p>
            <p> saveme@yourdomain.com</p>
            <p>Monday — Friday 8:00am - 5:00pm</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Landing;
