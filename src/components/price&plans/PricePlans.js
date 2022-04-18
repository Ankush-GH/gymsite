import React from "react";

import "./PricePlans.scss";

const PricePlans = () => {
  return (
    <div className="priceplans">
      <div className="header">
        <span>PRICE AND PLANS</span>
      </div>
      <div className="plans">
        <div className="left">
          <h1>BASIC $30</h1>
          <h4>INCLUDED:</h4>
          <p>
            • 2x group workouts of your choice
            <br />
            • Unlimited gym access
            <br />• Personal workout
          </p>
        </div>
        <div className="right">
          <h1>UNLIMITED $50</h1>
          <h4>INCLUDED:</h4>
          <p>
            • Unlimited group workouts of your choice
            <br />
            • Unlimited gym access
            <br />
            • 3x personal workouts
            <br />• Personal nutrition plan
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricePlans;
