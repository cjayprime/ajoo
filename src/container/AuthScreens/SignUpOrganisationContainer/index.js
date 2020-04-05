import React, { PureComponent } from "react";
import { connect } from "react-redux";

import { signupOrg, facebookOrgSignup, getFacebookSignupDetails } from "../../../store/allActions";
import SignUpOrganisationComponent from "../../../components/AuthScreenComponent/SignUpOrganisation";
import { fetchStates, fetchLga } from "../../../store/miscModules/actions";

class SignUpOrganisationContainer extends PureComponent {
  render() {
    const {
      signupOrg,
      utils,
      fetchStates,
      fetchLga,
      facebookOrgSignup,
      facebookOrgRegister,
      getFacebookDetails,
      getFacebookSignupDetails,
      misc } = this.props;

    return (
      <SignUpOrganisationComponent
        {...this.props}
        misc={misc}
        signupOrg={signupOrg}
        utils={utils || {}}
        fetchStates={fetchStates}
        fetchLga={fetchLga}
        facebookOrgRegister={facebookOrgRegister}
        facebookOrgSignup={facebookOrgSignup}
        getFacebookDetails={getFacebookDetails}
        getFacebookSignupDetails={getFacebookSignupDetails}
      />
    );
  }
}

const mapStateToProps = ({ utils, auth, misc }) => ({
  auth,
  misc,
  utils,
  facebookOrgRegister: auth.facebookOrgSignup,
  getFacebookDetails: auth.facebookSignupDetails
});

const mapDispatchToProps = {
  signupOrg,
  fetchStates,
  fetchLga,
  facebookOrgSignup,
  getFacebookSignupDetails
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpOrganisationContainer);
