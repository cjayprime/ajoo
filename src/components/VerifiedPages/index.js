import React, { PureComponent } from "react";

import Layout from "../../sharedComponent/Layout";
import VerifiedPagesHead from "./VerifiedPagesHead";
import VerifiedDesc from "./VerifiedDesc";
import VerifiedBody from "./VerifiedBody";
import StartCampaign from "../../sharedComponent/StartCampaign";

class VerifiedPagesComponent extends PureComponent {
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
    // const { signupUser, utils, isLoading } = this.props;

    return (
      <>
        <Layout {...this.props}>
          <VerifiedPagesHead />
          <div className="verified_body">
            <VerifiedDesc />
            <div id={'verified_organization'}>
              {" "}
              <VerifiedBody />
            </div>
          </div>
          <StartCampaign />
        </Layout>
      </>
    );
  }
}

export default VerifiedPagesComponent;
