import React, { Component } from 'react';
import Success from "./Success";
import Layout from '../../sharedComponent/Layout';
import SuccessHead from './SuccessHead';
import StartCampaign from '../../sharedComponent/StartCampaign';

class SuccessComponent extends Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.state = {
      completedCampaigns: { campaigns: [] },
      lastPage: false,
      page: 0,
      perPage: 10
    }
  }

  componentDidMount() {
    this._isMounted = true;

    var { page, perPage } = this.state;
    this.props.fetchCompletedCampaigns({ page, perPage });
  }

  _safelySetState = (newState, prevState = null) => {
    if (this._isMounted)
      return this.setState(state => ({
        [prevState]: !state[prevState],
        ...newState
      }));
  }

  componentDidUpdate(prevProps, prevState) {

    if (typeof prevProps.completedCampaigns.campaigns !== "undefined" &&
      prevProps.completedCampaigns.campaigns.length > 0 &&
      this.props.completedCampaigns.campaigns[0].campaign_id !== prevProps.completedCampaigns.campaigns[0].campaign_id &&
      prevState.page === this.state.page)
      this.setState({
        page: this.state.page + 1,
        lastPage: (this.state.page + 1) >= this.props.completedCampaigns.total_pages
      });


    if (typeof prevProps.completedCampaigns.campaigns !== "undefined" &&
      prevProps.completedCampaigns.campaigns.length > 0 &&
      this.props.completedCampaigns.campaigns[0].campaign_id !== prevProps.completedCampaigns.campaigns[0].campaign_id
      ||
      (typeof this.props.completedCampaigns.campaigns !== "undefined" && this.state.completedCampaigns.campaigns.length === 0)
    ) {
      var campaigns = this.state.completedCampaigns.campaigns.concat(this.props.completedCampaigns.campaigns);
      this.setState({
        completedCampaigns: { ...this.props.completedCampaigns, campaigns }
      });

    }

  }

  more = () => {

    if (!this.state.lastPage) {
      var { page, perPage } = this.state;
      this.props.fetchCompletedCampaigns({ page: page + 1, perPage });
    }

  }

  render() {
    return (
      <Layout {...this.props}>
        <SuccessHead />
        <Success
          {...this.props}
          completedCampaigns={this.state.completedCampaigns}
          more={this.more}
        />
        <StartCampaign />
      </Layout>
    )
  }

}

export default SuccessComponent;