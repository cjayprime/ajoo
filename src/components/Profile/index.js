import React, { PureComponent } from "react";
import Layout from "../../sharedComponent/Layout";
import Profile from "./Profile";

class ProfileComponent extends PureComponent {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.state = {};
  }

  componentDidMount() {
    this._isMounted = true;
    this.props.fetchUserCampaigns([]);
    this.props.getCampaignDonations({});
  }

  render() {
    const { user, userCampaigns, match, request, userDonations } = this.props;

    return (
      <Layout route={match.path} {...this.props}>
        <Profile
          {...this.props}
          userDonations={userDonations}
          request={request}
          userCampaigns={userCampaigns}
          user={user}
        />
      </Layout>
    );
  }
}

export default ProfileComponent;
