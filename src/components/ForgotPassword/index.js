import React, { PureComponent } from "react";

import Layout from "../../sharedComponent/Layout";
import ForgotPassword from "./ForgotPassword";
import { confirmRequest } from "../../store/confirmModules/actions";

class ForgotPasswordComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { confirmUser, utils, isLoading, request, location } = this.props;
    return (
      <>
        <Layout route={location.pathname}>
          <div className="phone-confirm-body">
            <ForgotPassword
              confirmUser={confirmUser}
              utils={utils}
              isLoading={
                isLoading && request === confirmRequest.confirmationRequest
              }
            />
          </div>
        </Layout>
      </>
    );
  }
}

export default ForgotPasswordComponent;
