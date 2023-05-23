import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

const NavBar = (props) => {
  return (
    <nav className={classes.navbar}>
      <NavLink className={classes.icon} to="/Home">
        HOME
      </NavLink>
      <NavLink className={classes.icon} to="/Store">
        STORE
      </NavLink>
      <NavLink className={classes.icon} to="/About">
        ABOUT
      </NavLink>
      <NavLink className={classes.icon} to="/Login">
        LOGIN
      </NavLink>
      <NavLink className={classes.icon} to="/Contact">
        CONTACT US
      </NavLink>
     
    
     
    </nav>
  );
};

export default NavBar;
