import React, { PureComponent } from "react";
import { connect } from "react-redux";

import ResetPasswordComponent from "../../components/ResetPassword";

import { confirmUser } from "../../store/confirmModules/actions.js";
import { resetPassword } from "../../store/authModules/actions.js";

class ResetPasswordContainer extends PureComponent {
  render() {
    const { confirmUser, utils, isLoading, request } = this.props;
    return (
      <ResetPasswordComponent
        {...this.props}
        confirmUser={confirmUser}
        utils={utils}
        isLoading={isLoading}
        request={request}
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
  resetPassword
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResetPasswordContainer);
