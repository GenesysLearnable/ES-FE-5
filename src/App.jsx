import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import "./App.css";
import "./Home.css";
import './signUp.css'
import './login.css'
import './signIn.css'
import './location.css'
import './call.css'
import './resources.css'
import './donation.css'
import Landing from "./component/landing";
import Home from "./pages/home-page";
import Signup from "./pagess/signUp";
import Login from "./pagess/logIn";
import Signin from "./pagess/signIn";
import Location from './location/location';
import ContactUs from './contactpage/contactus';
import About from './aboutus/about';
import Call from './call/call';
import NotFoundPage from "./pages/NotFoundPage";
import Resources from './recourcespage/resources';
import Donation from './donationpage/donation';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Home" element={<Home />} /> 
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Location" element={<Location />} />
        <Route path="/Call" element={<Call />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Resources" element={<Resources />} />
        <Route path="/Donation" element={<Donation />} />
        <Route path="/About" element={<About />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
