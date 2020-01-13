import React, { PureComponent } from "react";
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

class CampaignComponent extends PureComponent {
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
      match
    } = this.props;

    return (
      <Layout {...this.props}>
        {/*<!-- Go to www.addthis.com/dashboard to customize your tools -->*/}
        <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5c695c4c3b9a6a95"></script>
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
