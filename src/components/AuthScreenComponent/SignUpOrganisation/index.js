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
    const { signupOrg, utils, misc, fetchLga } = this.props;
    return (
      <Layout {...this.props}>
        <SignUpOrganisationForm
          {...this.props}
          signupOrg={signupOrg}
          misc={misc}
          request={utils}
          fetchLga={fetchLga}
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
