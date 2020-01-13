import React, { PureComponent } from "react";

import VerifiedOrganisationComponent from "../../components/VerifiedOrganisationCampaigns";

class VerifiedOrganisationContainer extends PureComponent {
  render() {
    return <VerifiedOrganisationComponent
      {...this.props} />;
  }
}

export default VerifiedOrganisationContainer;
