import React, { PureComponent } from 'react';
import { connect } from "react-redux";

import {
    fetchCompletedCampaigns,
    closeCampaign,
    uploadCampaignThankYouImage,
    getVolunteersOfACampaign,
    getTotalDonations,
    getTotalCampaigns
} from "../../store/campaignModules/actions";
import { showPercentageProgress } from "../../store/utilsModule/actions.js";
import CloseCampaignComponent from '../../components/CloseCampaign';

class CloseCampaignContainer extends PureComponent {
    render = () => <CloseCampaignComponent {...this.props} />
}

const mapDispatchToProps = {
    fetchCompletedCampaigns,
    closeCampaign,
    uploadCampaignThankYouImage,
    showPercentageProgress,
    getVolunteersOfACampaign,
    getTotalDonations,
    getTotalCampaigns
}


export default connect(state => state, mapDispatchToProps)(CloseCampaignContainer);