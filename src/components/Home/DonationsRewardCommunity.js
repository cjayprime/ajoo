import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

export default class DonationsRewardCommunity extends PureComponent {
  render() {
    return (
      <div className="heading_container">
        <div className="heading_left">
          <div className="heading_title">
            <h2>
              Donations. Reward. <br />
              Community
            </h2>
          </div>
          <div className="heading_text">
            We are building a community where people with critical financial
            needs get the necessary assistance from well meaning Nigerians.
          </div>
          <div className="heading_button">
            <Link to="/campaigns">
              <p className="heading_button_text">explore campaigns</p>
            </Link>
          </div>
        </div>
        <div className="heading_right">
          <div className="heading_right_image_1"></div>
          <div className="heading_right_image_2_container">
            <div className="heading_right_image_2"></div>
          </div>
          <div className="heading_right_image_3"></div>
          <div className="heading_right_image_4"></div>
          <div className="heading_right_image_5"></div>
          <div className="heading_right_image_6"></div>
          <div className="heading_right_image_7_container">
            <div className="heading_right_image_7"></div>
          </div>
        </div>
      </div>
    );
  }
}
