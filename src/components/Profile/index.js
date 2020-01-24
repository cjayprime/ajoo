import React, { PureComponent } from "react";
import Layout from "../../sharedComponent/Layout";
import AlertDialog from "../../sharedComponent/AlertDialog";
import { campaignRequest } from "../../store/campaignModules/saga";
import Profile from "./Profile";

class ProfileComponent extends PureComponent {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.state = {};
  }

  componentDidMount() {
    this._isMounted = true;
    this.props.fetchUserCampaigns([]);
    this.props.getCampaignDonations({});
      
    if(typeof this.props.location.state != "undefined" && this.props.location.state.redirectFromCampaign){
      this.props.showRequestFeedBack({
        message: "Select a campaign to edit.",
        for: campaignRequest.userCampaignRequest,
        success: false
      });
    }
  }

  render() {
    const { user, userCampaigns, match, request, userDonations, utils } = this.props;

    return (
      <Layout route={match.path} {...this.props}>
        <AlertDialog
            open={
                utils.feedback.for === campaignRequest.userCampaignRequest
            }
            message={utils.feedback.message}
            success={utils.feedback.success}
        />
        <Profile
          {...this.props}
          userDonations={userDonations}
          request={request}
          userCampaigns={userCampaigns}
          user={user}
        />
      </Layout>
    );
  }
}

export default ProfileComponent;
