import React, { Component } from "react";

import HowItWorksComponent from "../../components/HowItWorks";

class HowItworksContainer extends Component {
  render() {
    return <HowItWorksComponent 
    {...this.props}/>;
  }
}

export default HowItworksContainer;
