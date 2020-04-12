import React, { PureComponent } from "react";
import { connect } from "react-redux";

import {
  organisationProfileSetting,
  organisationEmailSetting,
  organisationProfilePasswordSetting
} from "../../store/profilesettingsModules/actions.js";
import { uploadProfileImage } from "../../store/authModules/actions.js";
import { verifySignupUser, uploadFeatureImageForVerification, uploadDocumentImageForVerification } from "../../store/verifyModules/actions.js";
import OrganizationProfileSettingComponent from "../../components/OrganizationProfileSetting";
import { fetchStates, fetchLga } from "../../store/miscModules/actions";
import { showPercentageProgress } from "../../store/utilsModule/actions.js";

class OganizationProfileSettingContainer extends PureComponent {
  render() {
    const {
      organisationProfileSetting,
      organisationEmailSetting,
      organisationProfilePasswordSetting,
      fetchStates,
      fetchLga,
      utils,
      requestStatus,
      misc,
      user
    } = this.props;

    return (
      <OrganizationProfileSettingComponent
        {...this.props}
        misc={misc}
        user={user}
        utils={utils}
        requestStatus={requestStatus}
        organisationProfileSetting={organisationProfileSetting}
        organisationEmailSetting={organisationEmailSetting}
        organisationProfilePasswordSetting={organisationProfilePasswordSetting}
        fetchStates={fetchStates}
        fetchLga={fetchLga}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const { setting, auth, misc, utils } = state;
  return {
    ...state,
    misc,
    setting,
    user: auth.data,
    requestStatus: auth.requestStatus,
    utils
  }
};

const mapDispatchToProps = {
  organisationProfileSetting,
  organisationEmailSetting,
  organisationProfilePasswordSetting,
  fetchStates,
  fetchLga,
  verifySignupUser,
  uploadProfileImage,
  uploadFeatureImageForVerification,
  uploadDocumentImageForVerification,
  showPercentageProgress
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OganizationProfileSettingContainer);
