import React, { PureComponent } from "react";
import { connect } from "react-redux";

import {
  userCreateCampaign,
  uploadCampaignImage,
  userEditCampaign,
  addReward
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
      utils,
      addReward
    } = this.props;

    return (
      <CreateCampaign
        {...this.props}
        addReward={addReward}
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
  var { auth, campaigns, utils, misc } = state;
  return {
    auth,
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
  userEditCampaign,
  addReward
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateCampaignContainer);
