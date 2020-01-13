import React, { PureComponent } from "react";

import Layout from "../../sharedComponent/Layout";
import PhoneConfirmation from "./PhoneConfirmation";
import { confirmRequest } from "../../store/confirmModules/actions";

class PhoneConfimationComponent extends PureComponent {
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
    const { confirmUser, utils, isLoading, request } = this.props;

    return (
      <>
        <Layout>
          <div className="phone-confirm-body">
            <PhoneConfirmation
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

export default PhoneConfimationComponent;
