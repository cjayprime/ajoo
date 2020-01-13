import React, { PureComponent } from "react";

import Layout from "../../../sharedComponent/Layout";
import SignUpVerificationForm from "./SignUpVerificationForm";
import { verifyRequest } from "../../../store/verifyModules/actions";

class SignupVerificationComponent extends PureComponent {
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
    const { verifySignupUser, utils, isLoading, request } = this.props;

    return (
      <>
        <Layout
          {...this.props}>
          <SignUpVerificationForm
            verifySignupUser={verifySignupUser}
            utils={utils}
            isLoading={
              isLoading && request === verifyRequest.verifySignupRequest
            }
          />
        </Layout>
      </>
    );
  }
}

export default SignupVerificationComponent;
