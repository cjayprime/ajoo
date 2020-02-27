import React, { PureComponent } from "react";
import { connect } from "react-redux";

import { fetchAllCampaigns } from "../../store/campaignModules/actions";
import CampaignsComponent from "../../components/Campaigns";
import { fetchCategories } from "../../store/miscModules/actions";

class CampaignsContainer extends PureComponent {
  render() {
    const {
      fetchAllCampaigns,
      fetchCategories,
      allCampaigns,
      categories,
      utils
    } = this.props;
    
    return (
      <CampaignsComponent
        fetchAllCampaigns={fetchAllCampaigns}
        categories={categories}
        allCampaigns={allCampaigns.allCampaigns}
        fetchCategories={fetchCategories}
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
  categories: misc.categories,
  utils
});

const mapDispatchToProps = {
  fetchAllCampaigns,
  fetchCategories
};

export default connect(mapStateToProps, mapDispatchToProps)(CampaignsContainer);
