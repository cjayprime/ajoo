import React, { Component } from 'react';

import Layout from '../../sharedComponent/Layout';
import EditCampaign from "./EditCampaign";

class EditCampaignComponent extends Component {
    constructor(props) {
        super(props);
        this.editCampaign = props.history.location.state
            ? props.history.location.state.campaign
            : {};
        this._isMounted = false;
        this.state = {};
    }

    componentDidMount() {
        this._isMounted = true;
        const { fetchCategories, fetchOrgTypes, getReward, history } = this.props;
        fetchCategories({});
        fetchOrgTypes({});
        
        if(history.location.state)
        getReward({id: history.location.state.campaign._id});
    }

    componentWillUnmount() { }

    _safelySetState = (newState, prevState = null) => {
        if (this._isMounted)
            return this.setState(state => ({
                [prevState]: !state[prevState],
                ...newState
            }));
    };

    render() {
        const {
            userCreateCampaign,
            createdCampaign,
            categories,
            campaignSuccess,
            showPercentageProgress,
            uploadCampaignImage,
            orgTypes,
            userEditCampaign,
            utils,
            showRequestFeedBack,
            rewards,
            getReward,
            addReward,
            editReward,
            deleteReward
        } = this.props;
        
        return (
            <Layout {...this.props}>
                <div style={{ backgroundColor: "#f9fafc", marginTop: "0.5px" }}>
                    <EditCampaign {...this.props}
                        rewards={rewards}
                        getReward={getReward}
                        addReward={addReward}
                        editReward={editReward}
                        deleteReward={deleteReward}
                        createdCampaign={createdCampaign}
                        uploadCampaignImage={uploadCampaignImage}
                        showPercentageProgress={showPercentageProgress}
                        campaignSuccess={campaignSuccess}
                        userCreateCampaign={userCreateCampaign}
                        userEditCampaign={userEditCampaign}
                        orgTypes={orgTypes}
                        categories={categories}
                        editCampaign={this.props.history.location.state ? this.props.history.location.state.campaign : {}/*this.editCampaign*/}
                        utils={utils}
                        showRequestFeedBack={showRequestFeedBack} />
                </div>
            </Layout>
        )
    }
}

export default EditCampaignComponent;