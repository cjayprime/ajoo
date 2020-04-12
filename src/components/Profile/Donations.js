import React from "react";
import { moneyFormat } from "../../utils/misc";

const Donations = ({ userDonations, userCampaigns }) => {
  return (
    <div id="" className="">
      <div className="campaigns_div">
        <div className="tab_content1">
          {!!userDonations ? (
            <>
              {userDonations.length > 0 ? (
                <>
                  <div className="tabContent_card_desc">
                    {userDonations[0].campaign.title && <span className="tabContent_card_campaign">Campaign</span>}
                    {! userDonations[0].campaign.title && <span className="tabContent_card_campaign">Name</span>}
                    <span className="tabContent_card_date">Date</span>
                    <span className="tabContent_card_time">Time</span>
                    <span className="tabContent_card_amount">Amount</span>
                  </div>
                  {userDonations.map((a, i) => {
                    var dateObj = new Date(a.created.replace(" ", "T"));
                    var month = ["January", "February", "March", "April", "May", "June", "July", "August", "Setember", "October", "November", "December"];
                    var date = month[dateObj.getMonth()] + " " + dateObj.getDate() + ", " + dateObj.getFullYear();
                    var time = dateObj.getHours() + ":" + dateObj.getMinutes();
                    var dayTime = dateObj.getHours() > 12 ? "pm" : "am";
                    return (
                      <div key={i} className="tabContent_card" style={{justifyContent: "space-between", paddingRight: 10, paddingLeft: 10}}>
                        {a.campaign.title &&
                          <div className="donations_column1">
                            <h5>{a.campaign.title}</h5>
                          </div>}
                        {! a.campaign.title &&
                          <div className="donations_column1">
                            {
                              (a.first_name || a.last_name)
                              ?
                              <h5>{(a.first_name ? a.first_name + " " : "") + "" + (a.last_name ? a.last_name : "")}</h5>
                              :
                              <h5>Anonymous</h5>
                            }
                          </div>}
                        <div className="donations_column2">
                          <h5>{date}</h5>
                        </div>
                        <div className="donations_column3">
                        <h5>{time} {dayTime}</h5>
                        </div>
                        <div className="donations_column4">
                          <h5>&#8358;{moneyFormat(a.amount)}</h5>
                        </div>
                      </div>)
                  })}
                </>
              ) : (
                <div className="no_reward">
                  <h1>You've not made any donations</h1>
                </div>
              )}
            </>
          ) : (
            <div className="no_reward">
              <h1>An error occured, please refresh</h1>
            </div>
          )}
        </div>
        {
          typeof userCampaigns !== "undefined" && typeof userDonations !== "undefined" &&
          (<div className="tab_content2">
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
          </div>)
        }
      </div>
    </div>
  );
};

export default Donations;
