import React, { PureComponent } from "react";
import { connect } from "react-redux";

import EmailVerificationComponent from "../../../components/AuthScreenComponent/EmailVerification/index.js";
import { verifyEmail } from "../../../store/allActions.js";

class EmailVerificationContainer extends PureComponent {
  render() {
    const {
      verifyEmail,
      emailVerificationSuccess,
      utils,
      isLoading,
      request
    } = this.props;
    return (
      <EmailVerificationComponent
        {...this.props}
        verifyEmail={verifyEmail}
        emailVerificationSuccess={emailVerificationSuccess}
        utils={utils}
        isLoading={isLoading}
        request={request}
      />
    );
  }
}

const mapStateToProps = ({ confirm, utils, auth }) => ({
  confirm,
  isLoading: utils.loading,
  request: utils.request,
  emailVerificationSuccess: auth.emailVerificationSuccess
});

const mapDispatchToProps = {
  verifyEmail
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmailVerificationContainer);
