import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

import ellipse from "../../assets/images/Ellipse_2.png";
import volunteerImg from "../../assets/images/non_volunteer.svg";
import starImg from "../../assets/images/star.svg";
import Polygon from "../../assets/images/Polygon.svg"

export default class NonVolunteer extends PureComponent {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.state = {
      active: "campaigns"
    };
  }

  componentDidMount() {
    this._isMounted = true;
  }

  _safelySetState = (newState, prevState = null) => {
    if (this._isMounted)
      return this.setState(state => ({
        [prevState]: !state[prevState],
        ...newState
      }));
  };

  render() {
    return (
      <>
        <div className="profile">
          <div className="edit_profile">
            <div className="profile_name">
              <h3>Theophilus Dickson</h3>
              <Link to="/profile_setting/individual">Edit Profile</Link>
            </div>
            <img src={ellipse} alt="ellipse" />
          </div>

          <div className="profile_tab">
            <div className="profileTab_button">
              <button
                className="profile_tablinks"
                onClick={() => this.setState({ active: "campaigns" })}
              >
                Campaigns
              </button>
              <button
                className="profile_tablinks"
                onClick={() => this.setState({ active: "donations" })}
              >
                Donations
              </button>
              <button
                className="profile_tablinks"
                onClick={() => this.setState({ active: "No Rewards" })}
              >
                Rewards
              </button>
              <button
                className="profile_tablinks"
                onClick={() => this.setState({ active: "volunteering" })}
                id="defaultOpen"
              >
                Volunteering
              </button>
            </div>

            {this.state.active === "campaigns" && (
              <div
                id="Campaigns"
                className="tabcontent"
                style={{ display: "block" }}
              >
                <div className="campaigns_div">
                  <div className="tab_content1">
                    <div className="tabContent_card">
                      <div className="tabContent_cardColumn1">
                        <div className="tabContent_column1"></div>
                        <div className="tabContent_column2">
                          <h3>Fintech Startup</h3>
                          <h6 className="tabContent_h6">
                            I need help to set up my Fintech startup and I need
                            help with initial funding something something.
                          </h6>
                          <h6>
                            72% Complete<span>₦3,384,892.00 Funded</span>
                          </h6>
                          <div className="myProgress">
                            <div className="myBar"></div>
                          </div>
                          <div className="tabContent_button">
                            <button className="button_delete">
                              Delete Campaign
                            </button>
                            <button className="button_edit">Edit</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tabContent_card">
                      <div className="tabContent_cardColumn1">
                        <div className="tabContent_column1"></div>
                        <div className="tabContent_column2">
                          <h3>Fintech Startup</h3>
                          <h6 className="tabContent_h6">
                            I need help to set up my Fintech startup and I need
                            help with initial funding something something.
                          </h6>
                          <h6>
                            72% Complete<span>₦3,384,892.00 Funded</span>
                          </h6>
                          <div className="myProgress">
                            <div className="myBar"></div>
                          </div>
                          <div className="tabContent_button">
                            <button className="button_delete">
                              Delete Campaign
                            </button>
                            <button className="button_edit">Edit</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tabContent_card">
                      <div className="tabContent_cardColumn1">
                        <div className="tabContent_column1"></div>
                        <div className="tabContent_column2">
                          <h3>Fintech Startup</h3>
                          <h6 className="tabContent_h6">
                            I need help to set up my Fintech startup and I need
                            help with initial funding something something.
                          </h6>
                          <h6>
                            72% Complete<span>₦3,384,892.00 Funded</span>
                          </h6>
                          <div className="myProgress">
                            <div className="myBar"></div>
                          </div>
                          <div className="tabContent_button">
                            <button className="button_delete">
                              Delete Campaign
                            </button>
                            <button className="button_edit">Edit</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab_content2">
                    <div className="tabContent_label">
                      <label>
                        TOTAL CAMPAIGNS<span>9</span>
                      </label>
                    </div>
                    <div className="tabContent_label">
                      <label>
                        DONATIONS<span>0</span>
                      </label>
                    </div>
                    <div className="tabContent_label">
                      <label>
                        COMMENTS<span>83</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {this.state.active === "donations" && (
              <div id="" className="">
                <div className="campaigns_div">
                  <div className="tab_content1">
                    <div className="tabContent_card_desc">
                      <span className="tabContent_card_campaign">Campaign</span>
                      <span className="tabContent_card_date">Date</span>
                      <span className="tabContent_card_time">Time</span>
                      <span className="tabContent_card_amount">Amount</span>
                    </div>
                    {Array.apply(null, Array(6)).map((a, i) => (
                      <div key={i} class="tabContent_card">
                        <div className="donations_column1">
                          <h5>Hospital Reasons I need medical care ASAP</h5>
                        </div>
                        <div className="donations_column2">
                          <h5>September 19, 2018</h5>
                        </div>
                        <div className="donations_column3">
                          <h5>08:39 pm</h5>
                        </div>
                        <div className="donations_column4">
                          <h5>N 12,000.00</h5>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="tab_content2">
                    <div className="tabContent_label">
                      <label>
                        TOTAL CAMPAIGNS<span>9</span>
                      </label>
                    </div>
                    <div className="tabContent_label">
                      <label>
                        DONATIONS<span>0</span>
                      </label>
                    </div>
                    <div className="tabContent_label">
                      <label>
                        COMMENTS<span>83</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {this.state.active === "No Rewards" && (
              <div id="" className="">
                <div class="campaigns_div">
                  <div className="tab_content1">
                    <div className="no_reward">
                      <h1>No Reward</h1>
                    </div>
                  </div>
                  <div className="tab_content2">
                    <div className="tabContent_label">
                      <label>
                        RANK
                        <span>
                          <img src={Polygon} alt="polygon" />
                        </span>
                      </label>
                    </div>
                    <div className="tabContent_label">
                      <label>
                        VERIFIED CAMPAIGNS<span>0</span>
                      </label>
                    </div>
                    <div className="tabContent_label">
                      <label>
                        ASSIGNED CAMPAIGNS<span>0</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {this.state.active === "volunteering" && (
              <div
                id="Volunteering"
                className="tabcontent"
                style={{ display: "block" }}
              >
                <div className="campaigns_div">
                  <div className="tab_content1">
                    <div className="tab_nonVolunteer">
                      <img src={volunteerImg} alt="volunteerImg" />
                      <h3>
                        You’re not a volunteer. <a href="/">Click here</a> to learn more
                        <br />
                        about Ajoo Volunteers.
                      </h3>
                    </div>
                  </div>
                  <div className="tab_content2">
                    <div className="tabContent_label">
                      <label>
                        RANK
                        <span>
                          <img src={starImg} alt="starImg" />
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
            )}
          </div>
        </div>

        <div className="clearfix"></div>
      </>
    );
  }
}
