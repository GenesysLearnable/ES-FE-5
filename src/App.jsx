
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
// import Landing from "./component/landing";
// import Home from "./pages/home-page";
import "./App.css";
import "./Home.css";
import './signUp.css'
import './login.css'
import './signIn.css'
import Landing from "./component/landing";
import Home from "./pages/home-page";
import Signup from "./pagess/signUp";
import Login from "./pagess/logIn";
import Signin from "./pagess/signIn";
import NotFoundPage from "./pages/NotFoundPage";
import ContactUs from './contactpage/contactus';
import About from './aboutus/about'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Home" element={<Home />} /> 
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/About" element={<About />} />

      </Routes>
    </Router>
  );
}

export default App;
