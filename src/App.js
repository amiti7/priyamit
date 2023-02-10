import React, {useEffect, useState} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/Home";
import RSVP from "./components/RSVP";
import Locations from "./components/Locations";
import Welcome from "./components/Welcome";
import Navbar from "./navbar/Navbar";

function App() {
  const [welcomComponent, setWelcomeComponent] = useState(true);
  return (
    <div>
      <Router>
      <Navbar></Navbar>
        <Routes>
           {/* <Route path="*" element={<Welcome/>}></Route> */}
           <Route path="/info" element={<Locations/>}></Route>
           <Route path="/rsvp" element={<RSVP/>}></Route>
           <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
      {welcomComponent?<Welcome setWelcomeComponent={setWelcomeComponent} />: null}
    </div>
  );
}

export default App;
