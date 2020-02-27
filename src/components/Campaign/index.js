import React, { Component } from "react";
import StartCampaign from "../../sharedComponent/StartCampaign";
import CampaignHead from "./CampaignHead";
import CampaignTab from "./CampaignTab";
import Layout from "../../sharedComponent/Layout";
import { CircularProgress } from "@material-ui/core";
import { campaignRequest } from "../../store/campaignModules/saga";
import store from "../../store";
import { FETCH_ALL_CAMPAIGNS_SUCCESS } from "../../store/campaignModules/actions";
import { isRequestActive } from "../../utils/misc";
import CampaignBody from "./CampaignBody";
import './style.css';

class CampaignComponent extends Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.state = {};
  }

  componentDidMount() {
    const { match, fetchCampaignById } = this.props;
    this._isMounted = true;
    fetchCampaignById(match.params);
  }

  ranOnce = false;

  componentDidUpdate(){
    const { getReward, campaign } = this.props;

    if(typeof campaign.campaign !== "undefined" && campaign.campaign._id && this.ranOnce === false){
      this.ranOnce = true;
      getReward({id: campaign.campaign._id});
    }
    
  }

  componentWillUnmount() {
    store.dispatch({
      type: FETCH_ALL_CAMPAIGNS_SUCCESS,
      payload: {
        status: {},
        data: {}
      }
    });
  }

  _safelySetState = (newState, prevState = null) => {
    if (this._isMounted)
      return this.setState(state => ({
        [prevState]: !state[prevState],
        ...newState
      }));
  };

  render() {
    const {
      utils,
      campaign,
      iniateDonationAction,
      openModalAction,
      verifyPaymentAction,
      initDonation,
      requestStatus,
      getCampaignDonationById,
      userDonations,
      match,
      rewards
    } = this.props;
    //console.log('Reward:::', rewards)

    return (
      <Layout {...this.props}>
        {isRequestActive(
          utils.request,
          campaignRequest.fetchCampaignByIdRequest
        ) ? (
          <div
            style={{
              width: "100%",
              height: '100vh',
              textAlign: "center",
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <CircularProgress />
          </div>
        ) : (
          <>
            {campaign.campaign ? (
              <>
                <CampaignHead
                  {...this.props}
                  utils={utils}
                  initDonation={initDonation}
                  verifyPaymentAction={verifyPaymentAction}
                  campaignRequest={campaignRequest}
                  openModalAction={openModalAction}
                  iniateDonationAction={iniateDonationAction}
                  campaign={campaign.campaign}
                  requestStatus={requestStatus}
                  match={match}
                />
                <CampaignBody campaign={campaign.campaign}/>
                <CampaignTab
                  {...this.props}
                  rewards={rewards}
                  campaign={campaign.campaign}
                  getCampaignDonationById={getCampaignDonationById}
                  userDonations={userDonations}
                />
              </>
            ) :
              <span
                style={{
                  fontFamily: "Muli",
                  fontSize: "23px",
                  marginTop: "30px",
                  display: "flex",
                  justifyContent: "center",
                  textTransform: "uppercase"
                }}
              >
                no campaign
              </span>}
          </>
        )}
        <StartCampaign />
      </Layout>
    );
  }
}

export default CampaignComponent;
