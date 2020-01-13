import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

// import { IMAGE_URL } from "../../utils/misc";
import starImg from "../../assets/images/star.svg";
import Polygon from "../../assets/images/Polygon.svg";
import MyProfile from "./MyProfile";
import Donations from "./Donations";
import Rewards from "./Rewards";
import volunteerImg from "../../assets/images/non_volunteer.svg";
// import VolunteeredStep from "./VolunteeredStep";

const tabs = [
  { tab: "Campaigns" },
  { tab: "Donations" },
  { tab: "Rewards" },
  { tab: "Volunteering" }
];

class Profile extends PureComponent {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.state = {
      active: "Campaigns"
    };
  }

  componentDidMount() {
    this._isMounted = true;
  }

  setActiveTab = tab => {
    this.setState({
      active: tab
    });
  };

  render() {
    const { user, userCampaigns, request, history, userDonations } = this.props;

    return (
      <>
        <div className="profile">
          <div className="edit_profile">
            <div className="profile_name">
              <h3>
                {user.is_organization === 0
                  ? `${user.first_name} ${user.last_name}`
                  : `${user.organization_name}`}
              </h3>
              <Link
                to={`/profile_setting/${
                  user.is_organization === 0 ? "individual" : "organization"
                  }`}
              >
                Edit Profile
              </Link>
            </div>
            {/* <img src={user_image} /> */}
            {/* <img
              sizes={`
              (min-width: 1200px) 730w,
            (max-width: 1199px) 610w,
            (max-width: 380px) 350w
            `}
              srcset={`
            ${IMAGE_URL}363_232_${user.image_url} 730w,
            ${IMAGE_URL}363_232_${user.image_url} 610w,
            ${IMAGE_URL}363_232_${user.image_url} 350w
          `}
              src={`${IMAGE_URL}363_232_${user.image_url}`}
              alt={
                user.is_organization === 0
                  ? `${user.first_name} image `
                  : `${user.organization_name} image`
              }
            /> */}
          </div>

          <div className="profile_tab">
            <div className="profileTab_button">
              {tabs.map(tab => (
                <div key={tab.tab}>
                  <button
                    className="profile_tablinks"
                    onClick={() => this.setActiveTab(tab.tab)}
                  >
                    {tab.tab}
                  </button>
                  <div style={styles.tabs(this.state.active === tab.tab)}></div>
                </div>
              ))}
            </div>

            {this.state.active === "Campaigns" && (
              <MyProfile
                userCampaigns={userCampaigns}
                userDonations={userDonations}
                request={request}
                history={history}
              />
            )}

            {this.state.active === "Donations" && (
              <Donations
                userCampaigns={userCampaigns}
                userDonations={userDonations}
              />
            )}

            {this.state.active === "Rewards" && <Rewards Polygon={Polygon} />}

            {this.state.active === "Volunteering" && (
              <div id="" className="">
                <div className="campaigns_div">
                  <div className="tab_content1">
                    <div className="tab_nonVolunteer">
                      <img src={volunteerImg} alt="volunteerImg" />
                      <h3>
                        You’re not a volunteer.{" "}
                        <Link to="/volunteer">Click here</Link> to learn more
                        <br />
                        about Ajoo Volunteers.
                      </h3>
                    </div>
                    {/* <VolunteeredStep userCampaigns={userCampaigns} /> */}
                  </div>
                  <div className="volunteer_content2">
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

const styles = {
  tabs: active => {
    return {
      height: 5,
      width: "100%",
      backgroundColor: active ? "#0072A3" : "transparent",
      borderRadius: "10px 10px 0px 0px"
    };
  }
};

export default Profile;
