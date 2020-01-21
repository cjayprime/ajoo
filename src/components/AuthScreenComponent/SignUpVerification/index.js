import React, { PureComponent } from "react";

import Layout from "../../../sharedComponent/Layout";
import SignUpVerificationOrganization from "./SignUpVerificationOrganization";
import SignUpVerificationIndividual from "./SignUpVerificationIndividual";
import CircularProgress from "@material-ui/core/CircularProgress";

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

            {
              typeof this.props.auth.data.is_organization === "undefined"
              ?
              <div style={{minHeight: "75vh", color: "#0072a3", display: "flex", justifyContent: "center", alignItems: "center"}}>
                <CircularProgress size={100} color="inherit" />
              </div>
              :
                this.props.auth.data.is_organization === 0
                ?
                <SignUpVerificationIndividual
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
                :
                <SignUpVerificationOrganization
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
            }
        </Layout>
      </>
    );
  }
}

export default SignupVerificationComponent;
