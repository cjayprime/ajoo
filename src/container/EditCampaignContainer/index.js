import React, { Component } from 'react';

import { connect } from "react-redux";

import {
    userCreateCampaign,
    uploadCampaignImage,
    userEditCampaign
} from "../../store/campaignModules/actions.js";
import {
    fetchCategories,
    fetchOrgTypes
} from "../../store/miscModules/actions.js";
import { showPercentageProgress, showRequestFeedBack } from "../../store/utilsModule/actions.js";
import EditCampaignComponent from "../../components/EditCampaign";

class EditCampaignContainer extends Component {
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
            showRequestFeedBack
        } = this.props;
        return (
            <>
                <EditCampaignComponent {...this.props}
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
                    showRequestFeedBack={showRequestFeedBack}
                />
            </>
        )
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
    userEditCampaign,
    showRequestFeedBack
};


export default connect(
    mapStateToProps,
    mapDispatchToProps)(EditCampaignContainer);