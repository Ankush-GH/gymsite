import React from "react";
import { Link } from "react-router-dom";

import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="home">
      <div className="head1">
        <span>Are You Ready To Achieve Your Dream Physique? </span>
        <Link className="slideIn" to="/classes">
          LETS CHECK IN
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
