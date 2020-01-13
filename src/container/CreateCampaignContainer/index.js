import React, { PureComponent } from "react";
import { connect } from "react-redux";

import {
  userCreateCampaign,
  uploadCampaignImage,
  userEditCampaign
} from "../../store/campaignModules/actions.js";
import CreateCampaign from "../../components/CreateCampaign";
import {
  fetchCategories,
  fetchOrgTypes
} from "../../store/miscModules/actions.js";
import { showPercentageProgress } from "../../store/utilsModule/actions.js";

class CreateCampaignContainer extends PureComponent {
  render() {
    const {
      userCreateCampaign,
      campaignSuccess,
      fetchCategories,
      categories,
      fetchOrgTypes,
      createdCampaign,
      userEditCampaign,
      uploadCampaignImage,
      showPercentageProgress,
      orgTypes,
      utils
    } = this.props;

    //console.log('CC: ', createdCampaign, uploadCampaignImage)

    return (
      <CreateCampaign
        {...this.props}
        categories={categories}
        createdCampaign={createdCampaign}
        showPercentageProgress={showPercentageProgress}
        userEditCampaign={userEditCampaign}
        orgTypes={orgTypes}
        campaignSuccess={campaignSuccess}
        uploadCampaignImage={uploadCampaignImage}
        fetchCategories={fetchCategories}
        fetchOrgTypes={fetchOrgTypes}
        userCreateCampaign={userCreateCampaign}
        utils={utils}
      />
    );
  }
}

const mapStateToProps = (state) => {
  //console.log(state, state.campaigns.createdCampaign)
  var { campaigns, utils, misc } = state;
  return {
    campaignSuccess: campaigns.success,
    categories: misc.categories,
    orgTypes: misc.orgTypes,
    utils,
    createdCampaign: campaigns.createdCampaign
  };
}

const mapDispatchToProps = {
  userCreateCampaign,
  fetchCategories,
  fetchOrgTypes,
  uploadCampaignImage,
  showPercentageProgress,
  userEditCampaign
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateCampaignContainer);
