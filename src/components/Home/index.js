import React, { PureComponent } from "react";

import DonationsRewardCommunity from "./DonationsRewardCommunity";
import SuccessStory from "./successStory";
import WhyAjoo from "./WhyAjoo";
import TopCampaigns from "./TopCampaign";
import ClosingCampaign from "./ClosingCampaigns";
import NewCampaign from "./NewCampaigns";
import AskingForFund from "./AskingForFund";
import CampaignStats from "./CampaignStats";
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
    this.props.fetchCompletedCampaigns([]);
    // this.props.getTotalCampaigns([]);
    // this.props.getTotalDonations([]);
    // this.props.getTotalClosed([]);
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
    const { allCampaigns, completedCampaigns, utils } = this.props;

    const isCampaignFetching = isRequestActive(
      utils.request,
      campaignRequest.fetchAllCampaignsRequest
    );

    return (
      <Layout {...this.props}>
        <DonationsRewardCommunity />
        <SuccessStory
          completedCampaigns={completedCampaigns}
          isCampaignFetching={isCampaignFetching}
        />
        <CampaignStats
          // completedCampaigns={completedCampaigns.total_records}
          // totalClosed={totalClosed}
          // totalCampaign={totalCampaign}
          // totalDonation={totalDonation}
          // newCampaigns={allCampaigns.newCampaigns}
          allCampaigns={allCampaigns}
        />
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
    allCampaigns: {},
    newCampaigns: {},
    closingCampaigns: {
      transactions: [],
      total_records: "",
      total_pages: "",
      current_page: ""
    },
    topCampaigns: {},
    total_donations: 0,
    total_campaigns: 0,
    total_closed: 0
  }
};

export default HomeComponent;

