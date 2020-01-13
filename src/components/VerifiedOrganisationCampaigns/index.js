import React, { PureComponent } from "react";

import Layout from "../../sharedComponent/Layout";
import VerifiedOrganisationHead from "./VerifiedOrganisationHead";
import VerifiedOrganisationCard from "./VerifiedOrganisationCard";
import VerifiedOrganisationBody from "./VerifiedOrganisationBody";
import StartCampaign from "../../sharedComponent/StartCampaign";

class VerifiedOrganisationComponent extends PureComponent {
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
    return (
      <>
        <Layout>
          <div className="verified_org_body">
            <VerifiedOrganisationHead />
            <VerifiedOrganisationCard />
            <VerifiedOrganisationBody />
          </div>
          <StartCampaign />
        </Layout>
      </>
    );
  }
}

export default VerifiedOrganisationComponent;
