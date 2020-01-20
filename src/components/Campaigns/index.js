import React, { Component } from "react";
import StartCampaign from "../../sharedComponent/StartCampaign";
import Layout from "../../sharedComponent/Layout";
import CampaignBodyLeft from "./CampaignBodyLeft";
import CampaignBodyRight from "./CampaignBodyRight";
import CampaignsHead from "./CampaignsHead";
import { isRequestActive } from "../../utils/misc";
import { campaignRequest } from "../../store/campaignModules/saga";

const campaignBodyLeftRef = React.createRef();
const campaignBodyRightRef = React.createRef();
const campaignHeadRef = React.createRef();

class CampaignComponent extends Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.state = {
      page: 2,
      perPage: 6,
      lastPage: false,
      allCampaigns: { transactions: [] },
      position: "static"
    };
  }

  _safelySetState = (newState, prevState = null) => {
    if (this._isMounted)
      return this.setState(state => ({
        [prevState]: !state[prevState],
        ...newState
      }));
  };

  offsetTop = 0;

  handleScroll = (e) => {
    if(campaignBodyLeftRef.current && campaignBodyLeftRef.current.style.display !== "none"){
      
      if(!this.offsetTop) 
      this.offsetTop = campaignBodyLeftRef.current.offsetTop;
      
      var bodyRight = window.getComputedStyle(campaignBodyRightRef.current);
      var offset = 2 * (parseFloat(bodyRight.paddingTop) + parseFloat(bodyRight.paddingBottom));

      if(this.offsetTop < window.pageYOffset && ! (window.pageYOffset > (campaignBodyRightRef.current.clientHeight - offset))){
        this.setState({position: "fixed"});
      }else if(this.offsetTop < window.pageYOffset && window.pageYOffset > (campaignBodyRightRef.current.clientHeight - offset)){
        this.setState({position: "static"});
      }else{
        this.setState({position: "static"});
      }
    }
  };

  componentDidMount() {
    this._isMounted = true;
    var { page, perPage } = this.state;
    this.props.fetchAllCampaigns({ page: 1, perPage });
    this.props.fetchCategories();

    this.setState({
      allCampaigns: { ...this.state.allCampaigns, ...this.props.allCampaigns.allCampaigns }
    });
    
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount(){
      window.removeEventListener('scroll', this.handleScroll);
  }

  componentDidUpdate(prevProps, prevState){

    if(typeof prevProps.allCampaigns.allCampaigns !== "undefined" &&
      prevProps.allCampaigns.allCampaigns.transactions.length > 0 &&
      prevProps.allCampaigns.allCampaigns.transactions[0].campaign_id !== this.props.allCampaigns.allCampaigns.transactions[0].campaign_id &&
      prevState.page === this.state.page)
      this.setState({
        page: this.state.page + 1,
        lastPage: (this.state.page + 1) >= this.props.allCampaigns.allCampaigns.total_pages
      });

    
    // If the `Show More` button is clicked then the campaign_id of the first item in the collection will change
    // cause the item is always re-fetched, which is the need to write the props into the state in the first place
    // so as to show the new (more) items beneath the old ones
    if(typeof prevProps.allCampaigns.allCampaigns !== "undefined" &&
      this.props.allCampaigns.allCampaigns.transactions[0].campaign_id !== prevProps.allCampaigns.allCampaigns.transactions[0].campaign_id
      ||
      (typeof this.props.allCampaigns.allCampaigns !== "undefined" && this.state.allCampaigns.transactions.length === 0)
      ){
      var transactions = this.state.allCampaigns.transactions.concat(this.props.allCampaigns.allCampaigns.transactions);
      this.setState({
        allCampaigns: { ...this.props.allCampaigns.allCampaigns, transactions }
      });

    }

  }

  more = () => {

    if(! this.state.lastPage){
      var { page, perPage } = this.state;
      this.props.fetchAllCampaigns({ page, perPage });
    }

  };

  render() {
    const { /*allCampaigns, */fetchAllCampaigns, categories, utils } = this.props;

    const isCampaignFetching = isRequestActive(utils.request, campaignRequest.fetchAllCampaignsRequest)

    return (
      <Layout {...this.props}>
        <CampaignsHead campaignHeadRef={campaignHeadRef} />
        <div className="campaign_body">
          <CampaignBodyLeft
            position={this.state.position}
            campaignBodyLeftRef={campaignBodyLeftRef}
            fetchAllCampaigns={fetchAllCampaigns}
            categories={categories}
          />
          <CampaignBodyRight
            position={this.state.position}
            campaignBodyRightRef={campaignBodyRightRef}
            more={this.more}
            utils={utils}
            fetchAllCampaigns={fetchAllCampaigns}
            //allCampaigns={allCampaigns.allCampaigns}
            allCampaigns={this.state.allCampaigns}
            isCampaignFetching={isCampaignFetching}
          />
        </div>
        <StartCampaign />
      </Layout>
    );
  }
}

export default CampaignComponent;
