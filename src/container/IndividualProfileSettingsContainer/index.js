import React, { PureComponent } from "react";
import { connect } from "react-redux";

import {
  individualProfileSetting,
  individualEmailSetting,
  individualProfilePasswordSetting
} from "../../store/profilesettingsModules/actions.js";
import IndividualProfileSettingComponent from "../../components/IndividualProfileSetting";
import { fetchStates, fetchLga } from "../../store/miscModules/actions";
import { showPercentageProgress } from "../../store/utilsModule/actions.js";
import { uploadProfileImage } from "../../store/allActions.js";

class IndividualProfileSettingContainer extends PureComponent {
  render() {
    const {
      individualProfileSetting,
      individualEmailSetting,
      individualProfilePasswordSetting,
      showPercentageProgress,
      uploadProfileImage,
      fetchStates,
      fetchLga,
      request,
      requestStatus,
      misc,
      user
    } = this.props;
    console.log(user.last_name)

    return (
      <IndividualProfileSettingComponent
        {...this.props}
        misc={misc}
        user={user}
        request={request}
        showPercentageProgress={showPercentageProgress}
        uploadProfileImage={uploadProfileImage}
        requestStatus={requestStatus}
        individualProfileSetting={individualProfileSetting}
        individualEmailSetting={individualEmailSetting}
        individualProfilePasswordSetting={individualProfilePasswordSetting}
        fetchStates={fetchStates}
        fetchLga={fetchLga}
      />
    );
  }
}

const mapStateToProps = ({ setting, auth, misc, utils }) => ({
  misc,
  setting,
  user: auth.data,
  requestStatus: auth.requestStatus,
  request: utils
});

const mapDispatchToProps = {
  individualProfileSetting,
  individualEmailSetting,
  uploadProfileImage,
  individualProfilePasswordSetting,
  showPercentageProgress,
  fetchStates,
  fetchLga
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndividualProfileSettingContainer);
