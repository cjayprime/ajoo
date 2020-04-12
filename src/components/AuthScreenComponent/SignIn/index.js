import React, { PureComponent } from "react";

import Layout from "../../../sharedComponent/Layout";
import SigninForm from "./SignInForm";
import { authRequest } from "../../../store/authModules/saga";
import { isRequestActive } from "../../../utils/misc";

class SigninComponent extends PureComponent {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.state = {};
  }

  componentDidMount() {
    this._isMounted = true;
    this.props.facebookLogin([])
  }

  _safelySetState = (newState, prevState = null) => {
    if (this._isMounted)
      return this.setState(state => ({
        [prevState]: !state[prevState],
        ...newState
      }));
  };

  render() {
    const { signinUser, utils, requestStatus, facebookSignin } = this.props;

    return (
      <>
        <Layout {...this.props}>
          <SigninForm
            {...this.props}
            signinUser={signinUser}
            utils={utils}
            requestStatus={requestStatus}
            facebookSignin={facebookSignin.facebookloginURL}
            isLoading={isRequestActive(utils.request, authRequest.loginRequest)}
          />
        </Layout>
      </>
    );
  }
}

export default SigninComponent;
