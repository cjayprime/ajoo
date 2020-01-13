import React, { PureComponent } from "react";
import { connect } from "react-redux";

import { signupUser } from "../../../store/allActions";
import SignUpIndividualComponent from "../../../components/AuthScreenComponent/SignUpIndividual";
import { fetchStates, fetchLga } from "../../../store/miscModules/actions";

class SignUpIndividualContainer extends PureComponent {
  render() {
    const { signupUser, request, fetchStates, fetchLga, misc } = this.props;
    return (
      <SignUpIndividualComponent
        {...this.props}
        misc={misc}
        signupUser={signupUser}
        request={request || {}}
        fetchStates={fetchStates}
        fetchLga={fetchLga}
      />
    );
  }
}

const mapStateToProps = ({ utils, auth, misc }) => ({
  auth,
  misc,
  request: utils
});

const mapDispatchToProps = {
  signupUser,
  fetchStates,
  fetchLga
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpIndividualContainer);
