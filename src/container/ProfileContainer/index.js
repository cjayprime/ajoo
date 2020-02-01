import React, { Component } from "react";
import { connect } from "react-redux";

import ProfileComponent from "../../components/Profile";
import {
  fetchUserCampaigns,
  getCampaignDonations
} from "../../store/campaignModules/actions";
import { showRequestFeedBack } from "../../store/utilsModule/actions.js";

class ProfileContainer extends Component {
  render() {
    const {
      user,
      userCampaigns,
      request,
      fetchUserCampaigns,
      getCampaignDonations,
      userDonations
    } = this.props;
    
    return (
      <ProfileComponent
        {...this.props}
        request={request}
        userCampaigns={userCampaigns}
        userDonations={userDonations}
        fetchUserCampaigns={fetchUserCampaigns}
        getCampaignDonations={getCampaignDonations}
        user={user}
      />
    );
  }
}

const mapStateToProps = (state) =>  {
  const { auth, utils, campaigns } = state;

  return {
    utils,
    user: auth.data,
    request: utils.request,
    userCampaigns: campaigns.userCampaigns,
    userDonations: campaigns.campaignDonations
  };
}

const mapDispatchToProps = {
  fetchUserCampaigns,
  getCampaignDonations,
  showRequestFeedBack
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
