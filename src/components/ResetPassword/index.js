import React, { PureComponent } from "react";

import Layout from "../../sharedComponent/Layout";
import ResetPassword from "./ResetPassword";
import { confirmRequest } from "../../store/confirmModules/actions";

class ResetPasswordComponent extends PureComponent {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.state = {};
  }

  componentDidMount() {
    this._isMounted = true;
  }

  _safelySetState = (newState, prevState = null) => {
    if (this._isMounted)
      return this.setState(state => ({
        [prevState]: !state[prevState],
        ...newState
      }));
  };

  render() {
    const { confirmUser, utils, isLoading, request, location } = this.props;
    return (
      <>
        <Layout route={location.pathname}>
          <div className="phone-confirm-body">
            <ResetPassword
              {...this.props}
              confirmUser={confirmUser}
              utils={utils}
              /*isLoading={
                isLoading && request === confirmRequest.confirmationRequest
              }*/
            />
          </div>
        </Layout>
      </>
    );
  }
}

export default ResetPasswordComponent;
