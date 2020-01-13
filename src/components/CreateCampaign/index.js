import React, { PureComponent } from "react";

import Layout from "../../sharedComponent/Layout";
import CreateCampaignForm from "./CreateCampaignForm";

class CreateCampaign extends PureComponent {
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
    this.props.fetchCategories({});
    this.props.fetchOrgTypes({});
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
      utils
    } = this.props;

    //console.log(createdCampaign, uploadCampaignImage)
    return (
      <Layout {...this.props}>
        <CreateCampaignForm
          {...this.props}
          createdCampaign={createdCampaign}
          uploadCampaignImage={uploadCampaignImage}
          showPercentageProgress={showPercentageProgress}
          campaignSuccess={campaignSuccess}
          userCreateCampaign={userCreateCampaign}
          userEditCampaign={userEditCampaign}
          orgTypes={orgTypes}
          categories={categories}
          editCampaign={this.editCampaign}
          utils={utils}
        />
      </Layout>
    );
  }
}

export default CreateCampaign;
