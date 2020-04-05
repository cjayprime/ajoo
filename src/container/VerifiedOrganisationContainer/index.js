import React, { Component } from "react";
import { connect } from "react-redux";

import VerifiedOrganisationComponent from "../../components/VerifiedOrganisationCampaigns";
import { organizationCampaignsAction, organizationsAction } from "../../store/campaignModules/actions";

class VerifiedOrganisationContainer extends Component {
  render() {
    const {
      utils,
      organizationCampaigns,
      organizationCampaignsAction,
      organizationsData
    } = this.props;

    console.log(organizationCampaigns, "Hey try me")
    return <VerifiedOrganisationComponent
      {...this.props}
      utils={utils}
      organizationCampaigns={organizationCampaigns}
      organizationCampaignsAction={organizationCampaignsAction}
    />;
  }
}

const mapStateToProps = (state) => {
  const { utils, campaigns } = state;

  return {
    utils,
    organizationCampaigns: campaigns.organizationCampaignsData,
    organizationsData: campaigns.organizationsData
  }
}

const mapDispatchToProps = {
  organizationCampaignsAction,
  organizationsAction
}

export default connect(mapStateToProps, mapDispatchToProps)(VerifiedOrganisationContainer);
