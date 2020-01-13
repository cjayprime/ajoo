import React, { PureComponent } from "react";

import CampaignFeatureImage from "./CampaignImage";
import Layout from "../../sharedComponent/Layout";
//import Footer from "../../sharedComponent/Footer";

class CampaignFeatureImageComponent extends PureComponent {
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
    const { campaignImageUser, utils, isLoading } = this.props;

    return (
      <>
        <Layout
          {...this.props}>
          <div className="campaign_image-body">
            <CampaignFeatureImage
              campaignImageUser={campaignImageUser}
              utils={utils}
              isLoading={isLoading}
            />
          </div>
        </Layout>
      </>
    );
  }
}

export default CampaignFeatureImageComponent;
