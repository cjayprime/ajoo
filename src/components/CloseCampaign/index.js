import React, { Component } from 'react';

import Layout from '../../sharedComponent/Layout';
import CloseCampaign from "./CloseCampaign";

export default class CloseCampaignComponent extends Component {

    componentDidUpdate() {

        if(typeof this.props.history.location.state === "undefined" || typeof this.props.history.location.state.campaign === "undefined")
        this.props.history.push("/profile", { redirectFromCampaign: true })

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