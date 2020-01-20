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
    this.verify();
    this.props.fetchCategories({});
    this.props.fetchOrgTypes({});
  }

  componentDidUpdate(){

    this.verify();

  }
    
  verify = () => {
    if(typeof this.props.auth.data !== "undefined"){
      var location;
      if(this.props.auth.data.verified === 0 && this.props.auth.data.is_organization === 0){
        location = "/verify_individual";
      }else if(this.props.auth.data.verified === 0 && this.props.auth.data.is_organization === 1){
        location = "/verify_organization";
      }

      if(location)
      this.props.history.push(location, { redirectFromCreateCampaign: true });
    }
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
