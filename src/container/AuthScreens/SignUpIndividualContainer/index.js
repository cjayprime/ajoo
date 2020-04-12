import React, { PureComponent } from "react";
import { connect } from "react-redux";

import { signupUser, facebookSignup, getFacebookSignupDetails } from "../../../store/allActions";
import SignUpIndividualComponent from "../../../components/AuthScreenComponent/SignUpIndividual";
import { fetchStates, fetchLga } from "../../../store/miscModules/actions";

class SignUpIndividualContainer extends PureComponent {
  render() {
    const { signupUser, request, fetchStates, fetchLga, misc, getFacebookSignupDetails, getFacebookDetails, facebookSignup, facebookRegister } = this.props;
    return (
      <SignUpIndividualComponent
        {...this.props}
        misc={misc}
        signupUser={signupUser}
        request={request || {}}
        fetchStates={fetchStates}
        fetchLga={fetchLga}
        facebookSignup={facebookSignup}
        facebookRegister={facebookRegister}
        getFacebookDetails={getFacebookDetails}
        getFacebookSignupDetails={getFacebookSignupDetails}
      />
    );
  }
}

const mapStateToProps = ({ utils, auth, misc }) => ({
  auth,
  misc,
  request: utils,
  facebookRegister: auth.facebookSignup,
  getFacebookDetails: auth.facebookSignupDetails
});

const mapDispatchToProps = {
  signupUser,
  fetchStates,
  fetchLga,
  facebookSignup,
  getFacebookSignupDetails
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpIndividualContainer);
