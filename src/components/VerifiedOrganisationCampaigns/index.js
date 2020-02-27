import React, { Component } from "react";

import Layout from "../../sharedComponent/Layout";
import VerifiedOrganisationHead from "./VerifiedOrganisationHead";
import VerifiedOrganisationCard from "./VerifiedOrganisationCard";
import VerifiedOrganisationBody from "./VerifiedOrganisationBody";
import StartCampaign from "../../sharedComponent/StartCampaign";
import { isRequestActive } from "../../utils/misc";
import { campaignRequest } from "../../store/campaignModules/saga";
import Spinner from "../../sharedComponent/Spinner";

class VerifiedOrganisationComponent extends Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.state = {
      organizationCampaigns: { transactions: [] },
      lastPage: false,
      page: 0,
      perPage: 12
    };
  }

  componentDidMount() {
    const { match, organizationCampaignsAction, organizationsAction } = this.props;
    this._isMounted = true;
    var { page, perPage } = this.state;

    organizationsAction({ page, perPage });
    organizationCampaignsAction((match.params), { perPage, page });

    this.setState({organizationCampaigns: { transactions: [] }});
  }

  _safelySetState = (newState, prevState = null) => {
    if (this._isMounted)
      return this.setState(state => ({
        [prevState]: !state[prevState],
        ...newState
      }));
  };

  componentDidUpdate(prevProps, prevState) {

    if (typeof prevProps.organizationCampaigns.transactions !== "undefined" &&
      prevProps.organizationCampaigns.transactions.length > 0 &&
      this.props.organizationCampaigns.transactions.length > 0 &&
      this.props.organizationCampaigns.transactions[0].campaign_id !== prevProps.organizationCampaigns.transactions[0].campaign_id &&
      prevState.page === this.state.page)
      this.setState({
        page: this.state.page + 1,
        lastPage: (this.state.page + 1) >= this.props.organizationCampaigns.total_pages
      });

    if ((typeof prevProps.organizationCampaigns.transactions !== "undefined" &&
      prevProps.organizationCampaigns.transactions.length > 0 &&
      this.props.organizationCampaigns.transactions.length > 0 &&
      this.props.organizationCampaigns.transactions[0]._id !== prevProps.organizationCampaigns.transactions[0]._id)
      ||
      (typeof this.props.organizationCampaigns.transactions !== "undefined" && this.props.organizationCampaigns.transactions.length > 0 && this.state.organizationCampaigns.transactions.length === 0)
    ) {
      var transactions = this.state.organizationCampaigns.transactions.concat(this.props.organizationCampaigns.transactions);
      this.setState({
        organizationCampaigns: { ...this.props.organizationCampaigns, transactions }
      });
    }
  }

  more = () => {
    if (!this.state.lastPage) {
      var { page, perPage } = this.state;
      this.props.organizationCampaignsAction({ page: page + 1, perPage });
    }
  }

  render() {
    const { utils, match, organizationsData } = this.props;
    const { organizationCampaigns } = this.state;

    const isCampaignFetching = isRequestActive(
      utils.request,
      campaignRequest.organizationCampaignsRequest
    );
    
    return (
      <>
        <Layout {...this.props}>
          {
            isCampaignFetching
            ? <Spinner />
            : (typeof organizationsData.organizations === "undefined" || organizationsData.organizations.length === 0)
              ? <span style={{
                  fontFamily: "Muli",
                  fontSize: "23px",
                  marginTop: "30px",
                  display: "flex",
                  justifyContent: "center",
                  textTransform: "uppercase"
                }}>
                  Sorry, there is no organization data
                </span>
              : <div className="verified_org_body">
                  <VerifiedOrganisationHead
                    organizationId={match.params.organizationId}
                    organizationsData={organizationsData}
                  />
                  <VerifiedOrganisationCard
                    organizationId={match.params.organizationId}
                    organizationsData={organizationsData}
                  />
                  {
                    organizationCampaigns.transactions.length === 0 
                    ? <span style={{
                        fontFamily: "Muli",
                        fontSize: "23px",
                        marginTop: "30px",
                        display: "flex",
                        justifyContent: "center",
                        textTransform: "uppercase"
                      }}>
                        This organization has no campaigns
                      </span>
                    : <VerifiedOrganisationBody
                        utils={utils}
                        more={this.more}
                        organizationsData={organizationsData}
                        organizationCampaigns={organizationCampaigns}
                      />
                  }
                </div>
          }
          <StartCampaign />
        </Layout>
      </>
    );
  }
}

export default VerifiedOrganisationComponent;
