import React, { Component } from "react";

import campaign_2 from "../../assets/images/campaign_2.svg";
import profile_tab1 from "../../assets/images/profile_tab1.svg";
import plantain from "../../assets/images/plantain.png";

class ProfileCampaign extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { userCampaigns } = this.props;
    const images = [
      {
        photo: campaign_2,
        alt: "Group meeting"
      },
      {
        photo: profile_tab1,
        alt: "woman happy"
      },
      {
        photo: plantain,
        alt: "woman frying plantain"
      }
    ];
    return (
      <div>
        {userCampaigns.map(c => (
          <div key={c._id} className="volunteerContent_card">
            <div className="tabContent_column1">
              <img src={images[0].photo} alt={images[0].photo} />
            </div>
            <div className="volunteerContent_column2">
              <h3>{c.title}</h3>
              <h6 className="tabContent_h6">{c.summary}</h6>
              <h6>
                72% Complete<span>₦3,384,892.00 Funded</span>
              </h6>
              <div className="myProgress">
                <div className="myBar"></div>
              </div>
              <div className="tabContent_button">
                <button className="volunteer_report">Report Campaign</button>
                <button onClick={this.continue} className="volunteer_verify">
                  view
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default ProfileCampaign;
