import React, { PureComponent } from "react";

import Layout from "../../sharedComponent/Layout";
import AlertDialog from "../../sharedComponent/AlertDialog";
import CreateCampaignForm from "./CreateCampaignForm";
import { campaignRequest } from "../../store/campaignModules/saga";

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
    
    if(typeof this.props.auth.data !== "undefined" && this.props.auth.data.verified === 0)
    this.props.history.push("/verify", { redirectFromCampaign: true });
  
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

    return (
      <Layout {...this.props}>
        <AlertDialog
            open={
                utils.feedback.for === campaignRequest.userCampaignRequest
            }
            message={utils.feedback.message}
            success={utils.feedback.success}
        />
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
