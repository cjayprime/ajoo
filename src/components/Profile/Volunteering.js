import React, { Component } from "react";

const Volunteering = ({ profile_tab1, starImg }) => {
  return (
    <div id="" className="">
      <div class="tabContent_a">
        <a href="#">
          <i class="fas fa-arrow-left"></i>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BACK
        </a>
      </div>
      <div class="campaigns_div">
        <div class="tab_content1_volunteer">
          {/* first */}
          <div className="tabContent_cardColumn1">
            <div class="tabContent_card_volunteer">
              <div class="tabContent_column1">
                <img src={profile_tab1} />
              </div>
              <div class="tabContent_column2">
                <h3>Fintech Startup</h3>
                <h6 class="tabContent_h6">
                  I need help to set up my Fintech startup and I need help with
                  initial funding something something.
                </h6>
                <h6>
                  72% Complete<span>₦3,384,892.00 Funded</span>
                </h6>
                <div class="myProgress">
                  <div class="myBar"></div>
                </div>
                <div class="tabContent_button">
                  <button class="button_delete">Delete Campaign</button>
                  <button class="button_edit">Edit</button>
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
                    The Campaigner must be able to provide so and so information
                  </h6>
                </li>
                <li>
                  <h6>
                    The Campaigner must be able to provide so and so information
                  </h6>
                </li>
                <li>
                  <h6>
                    The Campaigner must be able to provide so and so information
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
                  I live somewhere near the inside of my house under the bridge.
                </span>
              </h6>
            </div>
          </div>
        </div>
        <div className="tab_content2">
          <div className="tabContent_label">
            <label>
              RANK
              <span>
                <img src={starImg} />
              </span>
            </label>
          </div>
          <div className="tabContent_label">
            <label>
              VERIFIED CAMPAIGNS<span>6</span>
            </label>
          </div>
          <div className="tabContent_label">
            <label>
              ASSIGNED CAMPAIGNS<span>13</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Volunteering;
