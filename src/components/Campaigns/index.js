import React, { Component } from "react";
import StartCampaign from "../../sharedComponent/StartCampaign";
import Layout from "../../sharedComponent/Layout";
import CampaignBodyLeft from "./CampaignBodyLeft";
import CampaignBodyRight from "./CampaignBodyRight";
import CampaignsHead from "./CampaignsHead";
import { isRequestActive } from "../../utils/misc";
import { campaignRequest } from "../../store/campaignModules/saga";

class CampaignComponent extends Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.state = {
      page: 2,
      perPage: 6,
      lastPage: false
    };
  }

  componentDidMount() {
    this._isMounted = true;
    var { page, perPage } = this.state;
    this.props.fetchAllCampaigns({ page: 1, perPage });
    this.props.fetchCategories();
  }

  _safelySetState = (newState, prevState = null) => {
    if (this._isMounted)
      return this.setState(state => ({
        [prevState]: !state[prevState],
        ...newState
      }));
  };

  componentDidUpdate(prevProps, prevState){

    if(typeof prevProps.allCampaigns.allCampaigns !== "undefined" &&
      prevProps.allCampaigns.allCampaigns.transactions.length > 0 &&
      prevProps.allCampaigns.allCampaigns.transactions[0].campaign_id !== this.props.allCampaigns.allCampaigns.transactions[0].campaign_id &&
      prevState.page === this.state.page)
      this.setState({page: this.state.page + 1, lastPage: (this.state.page + 1) >= this.props.allCampaigns.allCampaigns.total_pages});

  }

  more = () => {

    if(! this.state.lastPage){
      var { page, perPage } = this.state;
      this.props.fetchAllCampaigns({ page, perPage });
    }

  };

  render() {
    const { allCampaigns, fetchAllCampaigns, categories, utils } = this.props;

    const isCampaignFetching = isRequestActive(utils.request, campaignRequest.fetchAllCampaignsRequest)

    return (
      <Layout {...this.props}>
        <CampaignsHead />
        <div className="campaign_body">
          <CampaignBodyLeft
            fetchAllCampaigns={fetchAllCampaigns}
            categories={categories}
          />
          <CampaignBodyRight
            more={this.more}
            fetchAllCampaigns={fetchAllCampaigns}
            allCampaigns={allCampaigns.allCampaigns}
            isCampaignFetching={isCampaignFetching}
          />
        </div>
        <StartCampaign />
      </Layout>
    );
  }
}

export default CampaignComponent;
