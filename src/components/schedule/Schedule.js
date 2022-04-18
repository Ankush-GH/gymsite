import React from "react";

import "./Schedule.scss";

const Schedule = () => {
  return (
    <div className="schedule">
      <div className="header">
        <span>SCHEDULE</span>
      </div>
      <div className="days">
        <div className="monday">
          <h1>MONDAY</h1>
          <p>
            8:00-8:50am
            <br />
            Yoga
          </p>
          <p>
            7:00-7:45pm
            <br />
            Body buildiing
          </p>
        </div>
        <div className="tuesday">
          <h1>TUESDAY</h1>
          <p>
            9:00-9:50am
            <br />
            Boxing
          </p>
          <p>
            7:00-7:45pm
            <br />
            Body buildiing
          </p>
        </div>
        <div className="wednesday">
          <h1>WEDNESDAY</h1>
          <p>
            8:00-8:50am
            <br />
            Yoga
          </p>
          <p>
            7:00-7:45pm
            <br />
            Body buildiing
          </p>
        </div>
        <div className="thursday">
          <h1>THURSDAY</h1>
          <p>
            9:00-9:50am
            <br />
            Boxing
          </p>
          <p>
            7:00-7:45pm
            <br />
            Body buildiing
          </p>
        </div>
        <div className="friday">
          <h1>FRIDAY</h1>
          <p>
            8:00-8:50am
            <br />
            Yoga
          </p>
          <p>
            7:00-7:45pm
            <br />
            Body buildiing
          </p>
        </div>
        <div className="saturday">
          <h1>SATURDAY</h1>
          <p>
            9:00-9:50am
            <br />
            Boxing
          </p>
          <p>
            7:00-7:45pm
            <br />
            Body buildiing
          </p>
        </div>
        <div className="sunday">
          <h1>SUNDAY</h1>
          <p>
            8:00-8:50am
            <br />
            Cardio
          </p>
          <p>
            11:00-11:45am
            <br />
            Body buildiing
          </p>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
