import React, { PureComponent } from "react";

import Layout from "../../sharedComponent/Layout";
import ForgotPassword from "./ForgotPassword";

class ForgotPasswordComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { confirmUser, utils, isLoading, request, forgotPassword, location } = this.props;
    return (
      <>
        <Layout {...this.props}>
          <div className="phone-confirm-body">
            <ForgotPassword
              {...this.props}
              confirmUser={confirmUser}
              utils={utils}
              forgotPassword={forgotPassword}
            />
          </div>
        </Layout>
      </>
    );
  }
}

export default ForgotPasswordComponent;
