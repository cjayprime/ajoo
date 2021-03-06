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
      page: 0,
      perPage: 6,
      lastPage: false,
      allCampaigns: { transactions: [] },
      verification: undefined,
      campaignType: undefined,
      category: undefined,
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
    //console.log(window.getComputedStyle(campaignBodyLeftRef.current).display)
    if(campaignBodyLeftRef.current && window.getComputedStyle(campaignBodyLeftRef.current).display !== "none"){
      
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
    var is_reward = undefined;
    if(typeof this.props.location.state !== "undefined" && typeof this.props.location.state.is_reward !== "undefined")
    is_reward = this.props.location.state.is_reward;

    this.props.fetchAllCampaigns({ page: 1, perPage, is_reward });
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

    setTimeout(() => {
      if(typeof prevProps.allCampaigns.allCampaigns !== "undefined" &&
        this.props.allCampaigns.allCampaigns.transactions.length > 0 &&
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
      if((typeof prevProps.allCampaigns.allCampaigns !== "undefined" &&
        this.props.allCampaigns.allCampaigns.transactions.length > 0 &&
        prevProps.allCampaigns.allCampaigns.transactions.length > 0 &&
        this.props.allCampaigns.allCampaigns.transactions[0].campaign_id !== prevProps.allCampaigns.allCampaigns.transactions[0].campaign_id)
        ||
        (typeof this.props.allCampaigns.allCampaigns !== "undefined" && this.state.allCampaigns.transactions.length === 0)
        ){
        var transactions = this.state.allCampaigns.transactions.concat(this.props.allCampaigns.allCampaigns.transactions);
        this.setState({
          allCampaigns: { ...this.props.allCampaigns.allCampaigns, transactions }
        });

      }
    }, 1000);

  }

  reset = (updated) => {
    this.props.allCampaigns.allCampaigns = { transactions: [] };

    this.setState({
      page: 0,
      perPage: 6,
      lastPage: false,
      allCampaigns: { transactions: [] }
    }, updated);
  }

  more = () => {

    if(! this.state.lastPage){
      var { page, perPage, verification, campaignType, category } = this.state;
      this.props.fetchAllCampaigns({ page, perPage, verification, campaignType, category });
    }

  };

  update = ({ verification, campaignType, category }) => this.setState({ verification, campaignType, category });

  render() {
    const { /*allCampaigns, */fetchAllCampaigns, categories, utils } = this.props;

    const isCampaignFetching = isRequestActive(utils.request, campaignRequest.fetchAllCampaignsRequest)

    return (
      <Layout {...this.props}>
        <CampaignsHead {...this.props} reset={this.reset} campaignHeadRef={campaignHeadRef} />
        <div className="campaign_body" style={{ height: this.state.allCampaigns.transactions.length === 0 ? "100vh" : "auto" }}>
          <CampaignBodyLeft
            reset={this.reset}
            update={this.update}
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
