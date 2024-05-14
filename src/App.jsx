import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Landing from "./component/landing";
import Home from "./pages/home-page";
import "./App.css";
import "./Home.css";
import './signUp.css'
import './login.css'
import './signIn.css'
import NotFoundPage from "./pages/NotFoundPage";

import Login from "./pagess/logIn";
import Signin from "./pagess/signIn";
import Signup from "./pagess/singUp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/landing" element={<Landing />} />
        <Route path="/Home" element={<Home />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
