import React, { PureComponent } from "react";

import VerifiedPagesComponent from "../../components/VerifiedPages";

class VerifiedPagesContainer extends PureComponent {
  render() {
    return <VerifiedPagesComponent 
    {...this.props}/>;
  }
}

export default VerifiedPagesContainer;
