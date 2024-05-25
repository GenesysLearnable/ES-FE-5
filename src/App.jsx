import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import "./Home.css";
import './signUp.css';
import './login.css';
import './signIn.css';
import './location.css';
import './call.css';
import './resources.css';
import './ResourcesFirstPage.css';
import './donation.css';

import Landing from "./component/landing";
import Home from "./pages/home-page";
import Signup from "./pagess/signUp";
import Login from "./pagess/logIn";
import Location from './location/location';
import ContactUs from './contactpage/contactus';
import About from './aboutus/about';
import Call from './call/call';
import NotFoundPage from "./pages/NotFoundPage";
import Resources from './recourcespage/resources';
import ResourcesFirstPage from './recourcespage/resourcesFirstPage';
import ResourcesSecondPage from './recourcespage/resourcesSecondPage';
import ResourcesThirdPage from './recourcespage/resourcesThirdPage';
import ResourcesFourthPage from './recourcespage/resourcesFourthPage';
import Donation from './donationpage/donation';
import Settings from './settings/settings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Location" element={<Location />} />
        <Route path="/Call" element={<Call />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Resources" element={<Resources />} />
        <Route path="/ResourcesFirstPage" element={<ResourcesFirstPage />} />
        <Route path="/ResourcesSecondPage" element={<ResourcesSecondPage />} />
        <Route path="/ResourcesThirdPage" element={<ResourcesThirdPage />} />
        <Route path="/ResourcesFourthPage" element={<ResourcesFourthPage />} />
        <Route path="/Donation" element={<Donation />} />
        <Route path="/About" element={<About />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
