import React, { Component } from "react";

import Vectorstep1 from "../../assets/images/Vectorstep1.svg";
import Vectorstep2 from "../../assets/images/Vectorstep2.svg";
import Vectorstep3 from "../../assets/images/Vectorstep3.svg";
import Vectorstep4 from "../../assets/images/Vectorstep4.svg";

class HowItWorksBody extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="how_it_works_body">
        <h1 className="how_it_works_body-head">How it Works</h1>
        {/* rewards and donation */}
        <div className="how_it_works-rewards-donation">
          <div className="how_it_works-donation">
            <h1>Donations</h1>
            <p>
              Individual / organisations can support or back projects of interest
              here by offering non-equity based funding.
            </p>
          </div>
          <div className="how_it_works-rewards">
            <h1>Rewards</h1>
            <p>
              Individual / organisations can support or back projects of interest
              here by offering non-equity based funding.
            </p>
          </div>
        </div>
        {/* how to get started */}
        <div className="how_to_get_started-head">How to Get Started</div>
        <div className="how_to_get_started">
          <div className="how_to_get_started-one">
            {/* first step */}
            <div className="how_to_get_started-steps">
              <h1 className="how_to_get_started-step">Step One:</h1>
              <div className="how_to_get_started_image">
                <img src={Vectorstep1} alt="step one" />
              </div>
              <p className="how_to_get_started-desc">
                Submit Campaign Title, Picture, and Story
              </p>
            </div>
            {/* second step */}
            <div className="how_to_get_started-steps">
              <h1 className="how_to_get_started-step">Step Two:</h1>
              <div className="how_to_get_started_image">
                <img src={Vectorstep2} alt="step two" />
              </div>
              <p className="how_to_get_started-desc">
                Share Campaign link with friends and family.
              </p>
            </div>
          </div>
          <div className="how_to_get_started-two">
            {/* third step */}
            <div className="how_to_get_started-steps">
              <h1 className="how_to_get_started-step">Step Three:</h1>
              <div className="how_to_get_started_image">
                <img src={Vectorstep3} alt="step three" />
              </div>
              <p className="how_to_get_started-desc">
                Get vetted by Volunteers
              </p>
            </div>
            {/* forth step */}
            <div className="how_to_get_started-steps">
              <h1 className="how_to_get_started-step">Step Four:</h1>
              <div className="how_to_get_started_image">
                <img src={Vectorstep4} alt="step four" />
              </div>
              <p className="how_to_get_started-desc">
                Accept donations and appreciate donors
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HowItWorksBody;
