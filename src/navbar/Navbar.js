import React from 'react';
import './Navbar.css';
import {NavLink} from 'react-router-dom';


const Navbar = () => {
  return (
    <div style={{position:'absolute', zIndex:3, width:'100%'}}>
        <nav class="navbar">
            <ul style={{paddingLeft:'20%'}}>
                
                <li><NavLink to="/">Invitation</NavLink></li>
                <li><NavLink to="/info">Information</NavLink></li>
                <li><NavLink to="/rsvp">RSVP</NavLink></li>
            </ul>
            </nav>
    </div>
  )
}

export default Navbar