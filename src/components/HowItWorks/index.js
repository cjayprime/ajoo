import React, { PureComponent } from "react";

import HowItWorksHead from "./HowItWorksHead";
import HowItWorksBody from "./HowItWorksBody";
import StartCampaign from "../../sharedComponent/StartCampaign";
import Layout from "../../sharedComponent/Layout";
//import Footer from "../../sharedComponent/Footer";

class HowItWorksComponent extends PureComponent {
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
        <Layout
          {...this.props}>
          <HowItWorksHead />
          <HowItWorksBody />
          <StartCampaign />
        </Layout>
      </>
    );
  }
}

export default HowItWorksComponent;
