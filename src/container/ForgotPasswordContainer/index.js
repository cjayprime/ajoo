import React, { PureComponent } from "react";
import { connect } from "react-redux";

import ForgotPasswordComponent from "../../components/ForgotPassword";

import { confirmUser } from "../../store/confirmModules/actions.js";
import { forgotPassword } from "../../store/authModules/actions.js";

class ForgotPasswordContainer extends PureComponent {
  render() {
    const { confirmUser, utils, isLoading, request, forgotPassword } = this.props;
    return (
      <ForgotPasswordComponent
        {...this.props}
        confirmUser={confirmUser}
        utils={utils}
        isLoading={isLoading}
        request={request}
        forgotPassword={forgotPassword}
      />
    );
  }
}

const mapStateToProps = ({ confirm, utils }) => ({
  utils,
  confirm,
  isLoading: utils.loading,
  request: utils.request
});

const mapDispatchToProps = {
  confirmUser,
  forgotPassword
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgotPasswordContainer);
