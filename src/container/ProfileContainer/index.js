import React, { PureComponent } from "react";
import { connect } from "react-redux";

import ProfileComponent from "../../components/Profile";
import {
  fetchUserCampaigns,
  getCampaignDonations
} from "../../store/campaignModules/actions";

class ProfileContainer extends PureComponent {
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

const mapStateToProps = ({ auth, utils, campaigns }) => ({
  user: auth.data,
  request: utils.request,
  userCampaigns: campaigns.userCampaigns,
  userDonations: campaigns.campaignDonations
});

const mapDispatchToProps = {
  fetchUserCampaigns,
  getCampaignDonations
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
