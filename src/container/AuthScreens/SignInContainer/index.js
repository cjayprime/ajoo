import React, { PureComponent } from "react";
import { connect } from "react-redux";

import { signinUser, facebookLogin } from "../../../store/allActions";
import SigninComponent from "../../../components/AuthScreenComponent/SignIn";

class SignInContainer extends PureComponent {
  render() {
    const { signinUser, utils, requestStatus, facebookLogin, facebookSignin } = this.props;
    return (
      <SigninComponent
        {...this.props}
        signinUser={signinUser}
        requestStatus={requestStatus}
        utils={utils}
        facebookSignin={facebookSignin}
        facebookLogin={facebookLogin}
      />
    );
  }
}

const mapStateToProps = ({ utils, auth }) => ({
  requestStatus: auth.requestStatus,
  facebookSignin: auth.facebookLogin,
  utils
});

const mapDispatchToProps = {
  signinUser,
  facebookLogin
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInContainer);
