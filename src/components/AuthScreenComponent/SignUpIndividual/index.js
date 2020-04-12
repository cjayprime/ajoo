import React, { Component } from "react";

import Layout from "../../../sharedComponent/Layout";
import SignUpIndividualForm from "./SignUpIndividualForm";
import { authRequest } from "../../../store/authModules/saga";
import { isRequestActive } from "../../../utils/misc";

class SignUpIndividualComponent extends Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.state = {};
  }

  getParameterByName = () => {
    var names = {};
    if (this.props.location.search) {
      var params = this.props.location.search.split("?")[1].split("&");
      for (var i = 0; i < params.length; i++) {
        var param = params[i].split("=");
        var key = param[0];
        var value = param[1];
        names[key] = value;
      }
    }

    return names;
  }

  _safelySetState = (newState, prevState = null) => {
    if (this._isMounted)
      return this.setState(state => ({
        [prevState]: !state[prevState],
        ...newState
      }));
  };

  componentDidMount() {
    this._isMounted = true;
    this.props.fetchStates({});
    this.props.facebookSignup([]);

    if (this.props.location.search)
      this.props.getFacebookSignupDetails(this.getParameterByName());
  }

  render() {
    const { signupUser, request, misc, fetchLga, facebookRegister, getFacebookDetails } = this.props;

    return (
      <Layout {...this.props}>
        <SignUpIndividualForm
          {...this.props}
          signupUser={signupUser}
          request={request}
          misc={misc}
          fetchLga={fetchLga}
          facebookRegister={facebookRegister.facebooksignupURL}
          getFacebookDetails={getFacebookDetails}
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
