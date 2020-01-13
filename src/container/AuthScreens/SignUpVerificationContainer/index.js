import React, { PureComponent } from "react";
import { connect } from "react-redux";

import SignupVerificationComponent from "../../../components/AuthScreenComponent/SignUpVerification";
import { verifySignupUser } from "../../../store/verifyModules/actions.js";

class SignUpVeificationContainer extends PureComponent {
  render() {
    const { verifySignupUser, utils, isLoading, request } = this.props;

    return (
      <SignupVerificationComponent
        {...this.props}
        verifySignupUser={verifySignupUser}
        utils={utils}
        isLoading={isLoading}
        request={request}
      />
    );
  }
}

const mapStateToProps = ({ verify, utils }) => ({
  verify,
  isLoading: utils.loading,
  request: utils.request
});

const mapDispatchToProps = {
  verifySignupUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpVeificationContainer);
