import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Landing from "./component/landing";
import Home from "./pages/home-page";
import "./App.css";
import "./Home.css";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/notfoundpage" element={<NotFoundPage />} />
{/* <Route path="/home" element={<Navigate to="/home" />} />  */}

      </Routes>
    </Router>
  );
}

export default App;
