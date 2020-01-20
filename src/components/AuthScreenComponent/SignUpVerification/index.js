import React, { PureComponent } from "react";

import Layout from "../../../sharedComponent/Layout";
import SignUpVerificationForm from "./SignUpVerificationForm";

class SignupVerificationComponent extends PureComponent {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.state = {};
  }

  componentDidMount() {
    this._isMounted = true;
  }

  _safelySetState = (newState, prevState = null) => {
    if (this._isMounted)
      return this.setState(state => ({
        [prevState]: !state[prevState],
        ...newState
      }));
  };

  render() {
    const { verifySignupUser,  uploadFeatureImageForVerification, uploadDocumentImageForVerification, uploadProfileImage, showPercentageProgress, utils, isLoading, request } = this.props;

    return (
      <>
        <Layout
          {...this.props}>
          <SignUpVerificationForm
            {...this.props}
            verifySignupUser={verifySignupUser}
            uploadFeatureImageForVerification={uploadFeatureImageForVerification}
            uploadDocumentImageForVerification={uploadDocumentImageForVerification}
            uploadProfileImage={uploadProfileImage}
            showPercentageProgress={showPercentageProgress}
            utils={utils}
            /*isLoading={
              isLoading && request === verifyRequest.verifySignupRequest
            }*/
          />
        </Layout>
      </>
    );
  }
}

export default SignupVerificationComponent;
