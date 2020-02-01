import React, { PureComponent } from "react";

import ProfileCampaign from "./ProfileCampaign";
import ProfileCampaignDetails from "./ProfileCampaignDetails";

class VolunteeredStep extends Component {
  state = {
    step: 1
  };

  //next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  //prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  render() {
    const { step } = this.state;
    const { userCampaigns } = this.props;

    switch (step) {
      case 1:
        return (
          <ProfileCampaign
            userCampaigns={userCampaigns}
            nextStep={this.nextStep}
          />
        );
      case 2:
        return (
          <ProfileCampaignDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
          />
        );
    }
  }
}

export default VolunteeredStep;
