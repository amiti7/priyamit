import React, {useEffect, useState} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/Home";
import RSVP from "./components/RSVP";
import Locations from "./components/Locations";
import Schedule from "./components/Schedule";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div>
      <Router>
        <Routes>
           {/* <Route path="*" element={<Welcome/>}></Route> */}
           <Route path="/" element={<Home/>}></Route>
           <Route path="/schedule" element={<Schedule/>}></Route>
           <Route path="/locations" element={<Locations/>}></Route>
           <Route path="/rsvp" element={<RSVP/>}></Route>
        </Routes>
      </Router>
      <Welcome/>
    </div>
  );
}

export default App;
