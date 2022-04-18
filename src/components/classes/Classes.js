import React from "react";

import yoga from "../../assets/yoga.jpg";
import lifting from "../../assets/lifting.jpg";
import cardio from "../../assets/cardio.png";
import calisthenics from "../../assets/calisthenics.jpg";
import boxing from "../../assets/boxing.webp";
import bodybuilding from "../../assets/bodybuilding.jpg";
import "./Classes.scss";

const Classes = () => {
  return (
    <div className="classes">
      <div className="header">
        <span>CLASSES</span>
      </div>
      <div className="classes_details">

        <div className="class1">
          <img  src={bodybuilding} alt="body builder" />
          <h1>BODYBUILDING</h1>
        </div>

        <div className="class2">
          <img  src={boxing} alt="body builder" />
          <h1>BOXING</h1>
        </div>

        <div className="class3">
          <img  src={calisthenics} alt="body builder" />
          <h1>CALISTHENICS</h1>
        </div>

        <div className="class4">
          <img  src={cardio} alt="body builder" />
          <h1>CARDIO</h1>
        </div>

        <div className="class5">
          <img  src={lifting} alt="body builder" />
          <h1>LIFTING</h1>
        </div>
        
        <div className="class6">
          <img  src={yoga} alt="body builder" />
          <h1>YOGA</h1>
        </div>
      </div>
    </div>
  );
};

export default Classes;
