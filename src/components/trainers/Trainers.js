import React from "react";

import T1 from "../../assets/trainer1.jpg";
import T2 from "../../assets/trainer2.jpeg";
import T3 from "../../assets/trainer3.jpg";
import "./Trainers.scss";

const Trainers = () => {
  return (
    <div className="trainers">
      <div className="header">
        <span>PERSONAL TRAINERS</span>
      </div>
      <div className="trainer_details">
        <div className="trainer1">
          <span>
            <h1>MATTHEW HERON</h1>
            <p>
              Mathew is the expert to talk to if your fitness goal is to lose
              weight or tone up. Working clients through high-intensity workouts
              and tailored fitness plans, Mat doesn’t take no for an answer when
              it comes to your goals. With a background in sports psychology and
              physical therapy, Matt understands how the mind and body need to
              work together for you to achieve success.
            </p>
          </span>
          <img id="t1" src={T1} alt="coach" />
        </div>

        <div className="trainer2">
          <img id="t2" src={T2} alt="coach" />
          <span>
            <h1>JOHN HEERON</h1>
            <p>
              Whether you’re new to boxing or a seasoned fighter, John can teach
              you a thing or two about keeping fit for the ring and
              understanding your opponent. While he comes from the world of
              professional boxing, John takes a holistic approach to fitness,
              and is just as likely to throw you into a yoga class as he is to
              throw you around the boxing ring.
            </p>
          </span>
        </div>

        <div className="trainer3">
          <span>
            <h1>INNA GEBROW</h1>
            <p>
              Are you looking to improve your and joint strength? Then you
              should get in touch within Inna for a consultation. A highly
              trained instructor for both yoga and pilates, Inna can help you
              better understand your own body, and will help guide you towards
              your goals in a way that works with your body instead of against
              it.
            </p>
          </span>
          <img id="t3" src={T3} alt="coach" />
        </div>
      </div>
    </div>
  );
};

export default Trainers;
