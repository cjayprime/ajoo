import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

export default class StartCampaign extends PureComponent {
  render() {
    return (
      <>
        <div id="startCampaign" style={{ position: "relative" }}>
          <div className="heading-2" style={{fontSize: 30, margin: 15}}>Guide your campaign to success</div>
          <div className="heading-4">
            {" "}
            Collaborate with family, friends, colleagues, classmates as team
            members to create your campaign. Set milestones and monitor your
            progress. You can give incentives to donors by setting rewards.
          </div>
          <Link to="/create_campaigns">
            <button className="allButton">START A CAMPAIGN</button>
          </Link>
        </div>
        <hr id="footer_hr" />
      </>
    );
  }
}
