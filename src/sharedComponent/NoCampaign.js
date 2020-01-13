import React from "react";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";

import { Link } from "react-router-dom";

const NoCampaign = () => (
  <div className="nocampaign_bg">
    {" "}
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="campaign__icon-body">
        <HelpOutlineOutlinedIcon className="campaign__mdi-cart" />
      </div>
      <span className="campaign-empty__title">You don't have Campaign</span>
      <Link to="/create_campaigns" className="campaign-empty__button">
        START CAMPAIGN
      </Link>
    </div>
  </div>
);

export default NoCampaign;
