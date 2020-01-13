import React, { PureComponent } from "react";

import DonationsRewardCommunity from "./DonationsRewardCommunity";
import WhyAjoo from "./WhyAjoo";
import TopCampaigns from "./TopCampaign";
import ClosingCampaign from "./ClosingCampaigns";
import NewCampaign from "./NewCampaigns";
import AskingForFund from "./AskingForFund";
import BlogPost from "./Blog";
import Organizations from "../../sharedComponent/Organizations";
import StartCampaign from "../../sharedComponent/StartCampaign";
import Layout from "../../sharedComponent/Layout";
import { campaignRequest } from "../../store/campaignModules/saga";
import { isRequestActive } from "../../utils/misc";

class HomeComponent extends PureComponent {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.state = {};
  }

  componentDidMount() {
    this._isMounted = true;
    this.props.fetchAllCampaigns({ time: "top" });
    this.props.fetchAllCampaigns({ time: "closing" });
    this.props.fetchAllCampaigns({ time: "new" });
  }

  _safelySetState = (newState, prevState = null) => {
    if (this._isMounted)
      return this.setState(state => ({
        [prevState]: !state[prevState],
        ...newState
      }));
  };

  render() {
    const { allCampaigns, utils } = this.props;

    const isCampaignFetching = isRequestActive(
      utils.request,
      campaignRequest.fetchAllCampaignsRequest
    );

    return (
      <Layout {...this.props}>
        <DonationsRewardCommunity />
        <WhyAjoo />
        <TopCampaigns
          topCampaigns={allCampaigns.topCampaigns}
          isCampaignFetching={isCampaignFetching}
        />
        <NewCampaign
          newCampaigns={allCampaigns.newCampaigns}
          isCampaignFetching={isCampaignFetching}
        />
        <ClosingCampaign
          closingCampaigns={allCampaigns.closingCampaigns}
          isCampaignFetching={isCampaignFetching}
        />
        <AskingForFund />
        <BlogPost />
        <Organizations />
        <StartCampaign />
      </Layout>
    );
  }
}

HomeComponent.defaultProps = {
  allCampaigns: {
    newCampaigns: {},
    closingCampaigns: {
      transactions: [],
      total_records: "",
      total_pages: "",
      current_page: ""
    },
    topCampaigns: {}
  }
};

export default HomeComponent;

