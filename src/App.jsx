
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
// import Landing from "./component/landing";
// import Home from "./pages/home-page";
import "./App.css";
import "./Home.css";
import './signUp.css'
import './login.css'
import './signIn.css'
import './location.css'
import Landing from "./component/landing";
import Home from "./pages/home-page";
import Signup from "./pagess/signUp";
import Login from "./pagess/logIn";
import Signin from "./pagess/signIn";
import Location from './location/location';
import NotFoundPage from "./pages/NotFoundPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Home" element={<Home />} /> 
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Location" element={< Location/>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
