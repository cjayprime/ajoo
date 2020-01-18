import React from "react";
import { IMAGE_URL, moneyFormat } from "../../utils/misc";
import { campaignRequest } from "../../store/campaignModules/saga";
import Spinner from "../../sharedComponent/Spinner";

const MyProfile = (props) => {
  const { userCampaigns, userDonations, history, request } = props;
  function editCampaign(event, campaign) {
    event.stopPropagation();
    history.push({
      pathname: "/edit_campaign",
      state: { campaign }
    });
  }
  return (
    <div id="" className="">
      <div className="campaigns_div">
        <div className="tab_content1" style={{ cursor: "pointer" }}>
          {request === campaignRequest.fetchUserCampaignsRequest ? (
            <div className="no_reward">
              <Spinner />
            </div>
          ) : userCampaigns.length === 0 ? (
            <div className="no_reward">
              <h1>No campaigns yet</h1>
            </div>
          ) : null}
          {userCampaigns.map(c => {
            c.status = 0;
            var src = c.imageUrl;
            var title = c.title;
            src = src ? IMAGE_URL + '363_232_' + src : 'images/image-404.jpg';
            var alt = src ? title : 'Image not found';
            return (<div key={c._id} className="tabContent_card">
              <div className="tabContent_column1">
                <img
                  sizes={`
                    (min-width: 1200px) 730w,
                    (max-width: 1199px) 610w,
                    (max-width: 380px) 350w`}
                  srcSet={`${src} 730w,
                        ${src} 610w,
                        ${src} 350w`}
                  src={src}
                  alt={alt}
                />
              </div>
              <div
                className="tabContent_column2"
                style={{
                  //marginLeft: 20
                }}
              >
                <h3>{c.title}</h3>
                <h6 className="tabContent_h6">{c.summary}</h6>
                <h6>
                  {c.percent > 100 ? 100 : c.percent}% Complete
                  <span>₦{moneyFormat(c.pledged || "0.00")} Funded</span>
                </h6>
                <div className="myProgress">
                  <div className="myBar"
                    style={{
                      width: (c.percent > 100 ? 100 : c.percent) + '%'
                    }}
                  ></div>
                </div>
                <div className="tabContent_button" style={{display: "flex", alignItems: "end"}}>
                  {/*<button className="button_delete">Delete Campaign</button>*/}
                  <div style={{display: "flex", alignItems: "center", height: 15, padding: 3.5, borderRadius: 5, width: "auto", background: c.status === 2 ? "blue" : c.status === 1 ? "green" : "orange", color: c.status === 2 ? "white" : c.status === 1 ? "white" : "black"}}>
                    {c.status === 2 ? "Campaign Closed" : c.status === 1 ? "Campaign Live" : "Pending Verification"}
                  </div>
                  <button
                    onClick={e => editCampaign(e, c)}
                    className="button_edit"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          )})}
        </div>
        <div className="tab_content2">
          <div className="tabContent_label">
            <label>
              TOTAL CAMPAIGNS<span>{userCampaigns.length}</span>
            </label>
          </div>
          <div className="tabContent_label">
            <label>
              DONATIONS<span>{userDonations.length}</span>
            </label>
          </div>
          <div className="tabContent_label">
            <label>
              COMMENTS<span>0</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
