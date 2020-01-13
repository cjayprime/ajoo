import React, { PureComponent } from "react";
import { connect } from "react-redux";

import HomeComponent from "../../components/Home";
import { fetchAllCampaigns } from "../../store/campaignModules/actions";

class HomeContainer extends PureComponent {
  render() {
    const { fetchAllCampaigns, allCampaigns, utils } = this.props;

    return (
      <HomeComponent
        fetchAllCampaigns={fetchAllCampaigns}
        allCampaigns={allCampaigns}
        utils={utils}
        {...this.props}
      />
    );
  }
}

const mapStateToProps = ({ utils, auth, misc, campaigns }) => ({
  auth,
  misc,
  allCampaigns: campaigns.allCampaigns,
  utils
});

const mapDispatchToProps = {
  fetchAllCampaigns
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
