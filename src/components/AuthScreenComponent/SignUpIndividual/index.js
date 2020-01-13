import React, { PureComponent } from "react";

import Layout from "../../../sharedComponent/Layout";
import SignUpIndividualForm from "./SignUpIndividualForm";
import { authRequest } from "../../../store/authModules/saga";
import { isRequestActive } from "../../../utils/misc";

class SignUpIndividualComponent extends PureComponent {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.state = {};
  }

  componentDidMount() {
    this._isMounted = true;
    this.props.fetchStates({});
  }

  _safelySetState = (newState, prevState = null) => {
    if (this._isMounted)
      return this.setState(state => ({
        [prevState]: !state[prevState],
        ...newState
      }));
  };

  render() {
    const { signupUser, request, misc, fetchLga } = this.props;
    return (
      <Layout {...this.props}>
        <SignUpIndividualForm
          {...this.props}
          signupUser={signupUser}
          request={request}
          misc={misc}
          fetchLga={fetchLga}
          isLoading={isRequestActive(
            request.request,
            authRequest.signupRequest
          )}
        />
      </Layout>
    );
  }
}

export default SignUpIndividualComponent;
