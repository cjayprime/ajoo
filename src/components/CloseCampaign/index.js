import React, { Component } from 'react';

import Layout from '../../sharedComponent/Layout';
import CloseCampaign from "./CloseCampaign";

export default class CloseCampaignComponent extends Component {

    componentDidMount(){
        
        const { history, getVolunteersOfACampaign, getTotalDonations, getTotalCampaigns } = this.props;

        if(typeof history.location.state !== "undefined" && typeof history.location.state.campaign !== "undefined"){
            
            getVolunteersOfACampaign(history.location.state.campaign.campaign_id);
            //getTotalDonations();
            //getTotalCampaigns();

        }

    }

    componentDidUpdate(prevProps) {

        const { history } = this.props;

        if(typeof history.location.state === "undefined" || typeof history.location.state.campaign === "undefined"){
            
            history.push("/profile", { redirectFromCampaign: true });
            
        }

    }

    render() {
        return (
            <Layout {...this.props}>
                <CloseCampaign
                    {...this.props}
                    campaign={ this.props.history.location.state ? this.props.history.location.state.campaign : {} }
                />
            </Layout>
        )
    }
}