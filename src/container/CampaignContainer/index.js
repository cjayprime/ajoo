import React, { Component } from "react";
import { connect } from "react-redux";

import CampaignComponent from "../../components/Campaign";
import {
  fetchCampaignById,
  iniateDonationAction,
  verifyPaymentAction,
  getCampaignDonationById
} from "../../store/campaignModules/actions";
import { openModalAction } from "../../store/utilsModule/actions";

class CampaignContainer extends Component {
  render() {
    const {
      fetchCampaignById,
      utils,
      campaign,
      initDonation,
      openModalAction,
      verifyPaymentAction,
      iniateDonationAction,
      requestStatus,
      getCampaignDonationById
    } = this.props;
    
    return (
      <CampaignComponent
        {...this.props}
        utils={utils}
        initDonation={initDonation}
        verifyPaymentAction={verifyPaymentAction}
        openModalAction={openModalAction}
        iniateDonationAction={iniateDonationAction}
        campaign={campaign}
        fetchCampaignById={fetchCampaignById}
        requestStatus={requestStatus}
        getCampaignDonationById={getCampaignDonationById}
      />
    );
  }
}

const mapStateToProps = ({ utils, campaigns }) => ({
  utils,
  campaign: campaigns.campaign,
  initDonation: campaigns.initDonation,
  requestStatus: campaigns.requestStatus,
  userDonations: campaigns.campaignDonations
});
const mapDispatchToProps = {
  fetchCampaignById,
  iniateDonationAction,
  verifyPaymentAction,
  openModalAction,
  getCampaignDonationById
};

export default connect(mapStateToProps, mapDispatchToProps)(CampaignContainer);
