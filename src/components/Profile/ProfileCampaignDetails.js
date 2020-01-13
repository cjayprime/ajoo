import React, { PureComponent } from "react";

import profile_tab1 from "../../assets/images/profile_tab1.svg";

class ProfileCampaignDetails extends PureComponent {
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <div>
        <div>
          <div className="tabContent_span">
            <span onClick={this.back}>
              <i className="fas fa-arrow-left"></i>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BACK
            </span>
          </div>
        </div>
        <div>
          <div className="tab_content1_volunteer">
            {/* first */}
            <div className="tabContent_cardColumn1">
              <div className="tabContent_card_volunteer">
                <div className="tabContent_column1">
                  <img src={profile_tab1} />
                </div>
                <div className="tabContent_column2">
                  <h3>Fintech Startup</h3>
                  <h6 class="tabContent_h6">
                    I need help to set up my Fintech startup and I need help
                    with initial funding something something.
                  </h6>
                  <h6>
                    72% Complete<span>₦3,384,892.00 Funded</span>
                  </h6>
                  <div className="myProgress">
                    <div class="myBar"></div>
                  </div>
                  <div className="volunteerContent_button">
                    <button className="volunteer_report">
                      Report Campaign
                    </button>
                    <button class="volunteer_verify">Verify</button>
                  </div>
                </div>
              </div>
            </div>
            {/* second */}
            <div className="tabContent_cardColumn2">
              <div className="tabContent_column3">
                <h3>Verification Requirements</h3>
                <ol>
                  <li>
                    <h6>
                      The Campaigner must be able to provide so and so
                      information
                    </h6>
                  </li>
                  <li>
                    <h6>
                      The Campaigner must be able to provide so and so
                      information
                    </h6>
                  </li>
                  <li>
                    <h6>
                      The Campaigner must be able to provide so and so
                      information
                    </h6>
                  </li>
                </ol>
              </div>
              <div className="tabContent_column4">
                <h3>Contact information</h3>
                <h6>
                  Phone Number:<span>+234999999999</span>
                </h6>
                <h6>
                  Email Address:<span>iamcampaigning@gmail.com</span>
                </h6>
                <h6>
                  Address:
                  <span>
                    I live somewhere near the inside of my house under the
                    bridge.
                  </span>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileCampaignDetails;
