import React, { PureComponent } from "react";
import { connect } from "react-redux";

// import { campaignImageUser } from "../../store/campaignModules/actions.js";
import CampaignFeatureImageComponent from "../../components/CampaignFeatureImage";

class CampaignFeatureImageContainer extends PureComponent {
  render() {
    const { /*campaignImageUser,*/ utils, isLoading, request } = this.props;

    return (
      <CampaignFeatureImageComponent
        {...this.props}
        // campaignImageUser={campaignImageUser}
        utils={utils}
        isLoading={isLoading}
        request={request}
      />
    );
  }
}

const mapStateToProps = ({ campaign, utils }) => ({
  campaign,
  isLoading: utils.loading,
  request: utils.request
});

const mapDispatchToProps = {
  // campaignImageUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CampaignFeatureImageContainer);
