import React, { PureComponent } from "react";
import { connect } from "react-redux";

import HomeComponent from "../../components/Home";
// import { fetchAllCampaigns, fetchCompletedCampaigns, getTotalCampaigns, getTotalDonations, getTotalClosed } from "../../store/campaignModules/actions";
import { fetchAllCampaigns, fetchCompletedCampaigns } from "../../store/campaignModules/actions";

class HomeContainer extends PureComponent {
  render() {
    const {
      fetchAllCampaigns,
      allCampaigns,
      utils,
      completedCampaigns,
      fetchCompletedCampaigns,
      // getTotalCampaigns,
      // getTotalDonations,
      // getTotalClosed,
      // totalCampaign,
      // totalDonations
    } = this.props;

    console.log(allCampaigns, "yes ALl campaign")

    return (
      <HomeComponent
        fetchAllCampaigns={fetchAllCampaigns}
        allCampaigns={allCampaigns}
        utils={utils}
        completedCampaigns={completedCampaigns}
        fetchCompletedCampaigns={fetchCompletedCampaigns}
        // getTotalCampaigns={getTotalCampaigns}
        // getTotalClosed={getTotalClosed}
        // totalCampaign={totalCampaign}
        // totalDonation={totalDonations}
        // getTotalDonations={getTotalDonations}
        {...this.props}
      />
    );
  }
}

const mapStateToProps = ({ utils, auth, misc, campaigns }) => ({
  auth,
  misc,
  allCampaigns: campaigns.allCampaigns,
  completedCampaigns: campaigns.completedCampaigns,
  // totalCampaign: campaigns.totalCampaigns,
  // totalDonation: campaigns.totalDonations,
  // totalClosed: campaigns.totalClosed,
  utils
});

const mapDispatchToProps = {
  fetchAllCampaigns,
  fetchCompletedCampaigns,
  // getTotalCampaigns,
  // getTotalDonations,
  // getTotalClosed
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
