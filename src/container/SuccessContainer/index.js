import React, { Component } from 'react';
import { connect } from "react-redux";

import { fetchCompletedCampaigns } from "../../store/campaignModules/actions";
import SuccessComponent from '../../components/Success';

class SuccessContainer extends Component {
    render() {
        const {
            utils,
            fetchCompletedCampaigns,
            completedCampaigns
        } = this.props

        return (
            <>
                <SuccessComponent
                    {...this.props}
                    utils={utils}
                    completedCampaigns={completedCampaigns}
                    fetchCompletedCampaigns={fetchCompletedCampaigns}
                />
            </>
        )
    }
}

const mapStateToProps = (state) => {

    const { utils, campaigns } = state;

    return {
        utils,
        campaigns,
        userCampaigns: [],
        completedCampaigns: campaigns.completedCampaigns
    }
};

const mapDispatchToProps = {
    fetchCompletedCampaigns
}


export default connect(mapStateToProps, mapDispatchToProps)(SuccessContainer);