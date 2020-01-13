import React, { PureComponent } from "react";
import { connect } from "react-redux";

import { signinUser } from "../../../store/allActions";
import SigninComponent from "../../../components/AuthScreenComponent/SignIn";

class SignInContainer extends PureComponent {
  render() {
    const { signinUser, utils, requestStatus } = this.props;
    return (
      <SigninComponent
        {...this.props}
        signinUser={signinUser}
        requestStatus={requestStatus}
        utils={utils}
      />
    );
  }
}

const mapStateToProps = ({ utils, auth }) => ({
  requestStatus: auth.requestStatus,
  utils
});

const mapDispatchToProps = {
  signinUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInContainer);
