import React, { PureComponent } from "react";
import { connect } from "react-redux";

import SignupVerificationComponent from "../../../components/AuthScreenComponent/SignUpVerification";
import { uploadProfileImage } from "../../../store/authModules/actions.js";
import { verifySignupUser, uploadFeatureImageForVerification, uploadDocumentImageForVerification } from "../../../store/verifyModules/actions.js";
import { showPercentageProgress, showRequestFeedBack } from "../../../store/utilsModule/actions.js";

class SignUpVeificationContainer extends PureComponent {
  render() {
    const { verifySignupUser, uploadFeatureImageForVerification, uploadDocumentImageForVerification, uploadProfileImage, showPercentageProgress, showRequestFeedBack, utils, isLoading, request } = this.props;

    return (
      <SignupVerificationComponent
        {...this.props}
        verifySignupUser={verifySignupUser}
        uploadFeatureImageForVerification={uploadFeatureImageForVerification}
        uploadDocumentImageForVerification={uploadDocumentImageForVerification}
        uploadProfileImage={uploadProfileImage}
        showPercentageProgress={showPercentageProgress}
        showRequestFeedBack={showRequestFeedBack}
        utils={utils}
        isLoading={isLoading}
        request={request}
      />
    );
  }
}

const mapStateToProps = ({ auth, verify, utils }) => ({
  auth,
  verify,
  utils,
  isLoading: utils.loading,
  request: utils.request
});

const mapDispatchToProps = {
  verifySignupUser,
  uploadFeatureImageForVerification,
  uploadDocumentImageForVerification,
  uploadProfileImage,
  showPercentageProgress,
  showRequestFeedBack
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpVeificationContainer);
