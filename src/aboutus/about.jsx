import React, {useState} from 'react';
import { Link } from "react-router-dom";
import '../aboutus.css';
import saveme from './saveme.png'

function About() {
  return (
    <div className="App">
     <nav className="navbar">
      <a href="/Home">
        <img src={saveme}  alt="Home Logo"  />
      </a>
      
      <ul>
      <li><Link to="/" as="a">Home</Link></li>
          <li><Link to="/About" as="a">About</Link></li>
          <li><Link to="/ContactUs" as="a">Contact Us</Link></li>
          <li><Link to="/Login" as="a">Login</Link></li>
          </ul>  
           
        <Link to="/Signup"><button type="submit">Sign Up</button></Link>
      
      </nav>

      <header className="hero">
        <div className='pictures'>
        <img src='src/aboutus/pic1.png' className='picture1'/>
        <img src='src/aboutus/pic2.png' className='picture2'/>
        </div>
      </header>
      <br/>

      <div className="section-container">
      <div className="image-container">
        <img src="src/aboutus/pic4.png" alt="Ambulance" className="ambulance-image" />
        <img src="src/aboutus/pic3.png" alt="Healthcare Logo" className="logo-image" />
      </div>
      <div className="text-container">
        <h1>Welcome to SaveMe</h1>
        <br/>
        <p>
          We are your trusted partner in times of crisis. With a dedicated team of professionals and state-of-the-art resources,
           we're committed to providing swift and reliable assistance whenever you need it most. Your safety and well-being are our top priorities, 
           and we're here to ensure that help is just a call away.
        </p>
      </div>
    </div>
    <br/>

      <section className="info-section">
        <div className="info-column">
          <h2>Our Vision</h2>
          <p>"Our vision at Save Me is to provide swift, reliable, and compassionate emergency assistance to all in need,
             ensuring the safety and well-being of our communities."</p>
        </div>
        <div className="info-column">
          <h2>Our Mission</h2>
          <p>"Our mission is to provide rapid, reliable, and compassionate emergency assistance to all in need."</p>
        </div>
        <div className="info-column">
          <h2>Motto</h2>
          <p>"Responding with care, courage, and speed."</p>
        </div>
      </section>

      <div className="contact-form">
        <h2>Get in Touch</h2>
      <form >
        <div className="form-group">
          <input
            type="text"
            id="name"
            name="name"
            placeholder='Name'
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            id="name"
            name="number"
            placeholder='Phone Number'
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            id="email"
            name="email"
            placeholder='Enter a valid email address'
          />
        </div>
        <div className="form-group">
          <textarea
            id="message"
            name="message"
            placeholder='Enter Message'
          ></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>

    <br/>

      <footer className="footer">
      <div className="footer-content">
        <div className="footer-section logo-text">
          <h1>Save!Me</h1>
          <p>Save Me echo’s the urgency of the human spirit in times of crisis. It is a cry that transcends language barriers and societal divides, 
            resonating with anyone who has ever faced adversity and sought solace in the embrace of assistance.</p>
        </div>
        <div className="footer-section links">
          <h3>Links</h3>
          <ul>
          <li><Link to="/" as="a">Home</Link></li>
          <li><Link to="/About" as="a">About</Link></li>
          <li><Link to="/ContactUs" as="a">Contact Us</Link></li>
          <li><Link to="/Login" as="a">Login</Link></li>
          <li><Link to="/Signup" as="a">Register</Link></li>
          </ul>
        </div>
    
        <div className="footer-section connect">
          <h3>Connect with Us</h3>
          <ul class="social-icons">
  <li>
    <img src='src/aboutus/map.png' />
    &nbsp;No 11 Otigba Close, Enugu State,
  </li>
  <li>
    <img src='src/aboutus/mail.png' />
    &nbsp;info@gmail.com
  </li>
  <li>
    <img src='src/aboutus/call.png' />
    &nbsp;+23480500000000
  </li>
</ul>
        </div>
      </div>
      <div className="copyright">
        © {new Date().getFullYear()} SaveMe  Emergency Services. All rights reserved.
      </div>
    </footer>
    </div>
  );
}

export default About;
