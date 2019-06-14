import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

const NavBar = props => {
  return (
    <div className="nav-bar-container">
      <div className="nav-bar">
        <NavLink to="/">Smurf Village</NavLink>
        <NavLink to="/smurf-form">Add a Smurf</NavLink>
      </div>
    </div>
  );
};

export default NavBar;
