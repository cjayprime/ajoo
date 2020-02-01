import React, { PureComponent } from 'react';
import { connect } from "react-redux";

import { fetchCompletedCampaigns } from "../../store/campaignModules/actions";
import CloseCampaignComponent from '../../components/CloseCampaign';

class CloseCampaignContainer extends PureComponent {
    render = () => <CloseCampaignComponent {...this.props} />
}

const mapDispatchToProps = {
    fetchCompletedCampaigns
}


export default connect(state => state, mapDispatchToProps)(CloseCampaignContainer);