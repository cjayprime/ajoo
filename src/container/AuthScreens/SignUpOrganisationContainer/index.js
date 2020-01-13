import React, { PureComponent } from "react";
import { connect } from "react-redux";

import { signupOrg } from "../../../store/allActions";
import SignUpOrganisationComponent from "../../../components/AuthScreenComponent/SignUpOrganisation";
import { fetchStates, fetchLga } from "../../../store/miscModules/actions";

class SignUpOrganisationContainer extends PureComponent {
  render() {
    const {
      signupOrg,
      utils,
      fetchStates,
      fetchLga,
      misc } = this.props;

    return (
      <SignUpOrganisationComponent
        {...this.props}
        misc={misc}
        signupOrg={signupOrg}
        utils={utils || {}}
        fetchStates={fetchStates}
        fetchLga={fetchLga}
      />
    );
  }
}

const mapStateToProps = ({ utils, auth, misc }) => ({
  auth,
  misc,
  utils
});

const mapDispatchToProps = {
  signupOrg,
  fetchStates,
  fetchLga
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpOrganisationContainer);
