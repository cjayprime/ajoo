import React, { PureComponent } from "react";
import Layout from "../../sharedComponent/Layout";
import VolunteerHead from "./VolunteerHead";
import VolunteerWork from "./volunteerWork";
import Volunteer from "./Volunteer";
import StartCampaign from "../../sharedComponent/StartCampaign";

class VolunteerComponent extends PureComponent {
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
          <VolunteerHead />
          <VolunteerWork />
          <Volunteer />
          <StartCampaign />
        </Layout>
      </>
    );
  }
}

export default VolunteerComponent;
