import React, { PureComponent } from "react";

import Layout from "../../../sharedComponent/Layout";
import SignUpOrganisationForm from "./SignUpOrganisationForm";
import { authRequest } from "../../../store/authModules/saga";
import { isRequestActive } from "../../../utils/misc";

class SignUpOrganisationComponent extends PureComponent {
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
    this.props.facebookOrgSignup([]);

    if (this.props.location.search)
      this.props.getFacebookSignupDetails(this.getParameterByName());
  }

  render() {
    const { signupOrg, utils, misc, fetchLga, facebookOrgRegister, getFacebookDetails } = this.props;
    console.log(getFacebookDetails, "hey email")
    return (
      <Layout {...this.props}>
        <SignUpOrganisationForm
          {...this.props}
          signupOrg={signupOrg}
          misc={misc}
          request={utils}
          fetchLga={fetchLga}
          facebookOrgRegister={facebookOrgRegister.facebookorgsignupURL}
          getFacebookDetails={getFacebookDetails}
          isLoading={isRequestActive(
            utils.request,
            authRequest.signupOrgRequest
          )}
        />
      </Layout>
    );
  }
}

export default SignUpOrganisationComponent;
