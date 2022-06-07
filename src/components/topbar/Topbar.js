import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

import "./Topbar.scss";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="header">
        <Link to="/">
          <h1>The Gym</h1>
        </Link>
      </div>
      <div className="pages">
        <nav>
          <ul>
            <NavLink to="/classes" activeClassName="activeheadpages" className="headpages">
              Classes
            </NavLink>
            <NavLink to="/trainers" activeClassName="activeheadpages" className="headpages">
              Personal Trainers
            </NavLink>
            <NavLink to="/priceplans" activeClassName="activeheadpages" className="headpages">
              Prices & Plans
            </NavLink>
            <NavLink to="/schedule" activeClassName="activeheadpages" className="headpages">
              Schedule
            </NavLink>
            <NavLink to="/signup" activeClassName="activeheadpages" className="headpages">
              Sign Up
            </NavLink>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Topbar;
