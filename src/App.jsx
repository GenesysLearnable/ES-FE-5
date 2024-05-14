import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
// import Landing from "./component/landing";
// import Home from "./pages/home-page";
import "./App.css";
import "./Home.css";
import './signUp.css'
import './login.css'
import './signIn.css'
import NotFoundPage from "./pages/NotFoundPage";
import Signup from "./pagess/signUp";
import Login from "./pagess/logIn";
import Signin from "./pagess/signIn";


function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/landing" element={<Landing />} />
        <Route path="/Home" element={<Home />} /> */}
        <Route path="/" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
