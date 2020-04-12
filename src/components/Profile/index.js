import React, { Component } from "react";
import Layout from "../../sharedComponent/Layout";
import AlertDialog from "../../sharedComponent/AlertDialog";
import { campaignRequest } from "../../store/campaignModules/saga";
import Profile from "./Profile";

class ProfileComponent extends Component {
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

  componentDidUpdate(prevProps){
    
    if(this.props.user._id !== prevProps.user._id){
      this.props.getCampaignsOfAVolunteer(this.props.user._id);
      this.props.getReward({id: this.props.user._id, isUser: true});
    }
    
  }

  render() {
    const { user, userCampaigns, request, userDonations, utils } = this.props;
    
    return (
      <Layout {...this.props}>
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
