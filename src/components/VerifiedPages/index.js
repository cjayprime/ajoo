import React, { Component } from "react";

import Layout from "../../sharedComponent/Layout";
import VerifiedPagesHead from "./VerifiedPagesHead";
import VerifiedDesc from "./VerifiedDesc";
import VerifiedBody from "./VerifiedBody";
import StartCampaign from "../../sharedComponent/StartCampaign";
import { isRequestActive } from "../../utils/misc";
import { campaignRequest } from "../../store/campaignModules/saga";

class VerifiedPagesComponent extends Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.state = {
      organizationsData: { organizations: [] },
      lastPage: false,
      page: 0,
      perPage: 16
    };
  }

  componentDidMount() {
    this._isMounted = true;

    this.props.fetchCategories();

    var { page, perPage } = this.state;
    this.props.organizationsAction({ page, perPage });
  }

  _safelySetState = (newState, prevState = null) => {
    if (this._isMounted)
      return this.setState(state => ({
        [prevState]: !state[prevState],
        ...newState
      }));
  };

  componentDidUpdate(prevProps, prevState) {
    setTimeout(() => {
      if (typeof prevProps.organizationsData.organizations !== "undefined" &&
        prevProps.organizationsData.organizations.length > 0 &&
        this.props.organizationsData.organizations[0]._id !== prevProps.organizationsData.organizations[0]._id &&
        prevState.page === this.state.page)
        this.setState({
          page: this.state.page + 1,
          lastPage: (this.state.page + 1) >= this.props.organizationsData.total_pages
        });

      if (typeof prevProps.organizationsData.organizations !== "undefined" &&
        prevProps.organizationsData.organizations.length > 0 &&
        this.props.organizationsData.organizations[0]._id !== prevProps.organizationsData.organizations[0]._id
        ||
        (typeof this.props.organizationsData.organizations !== "undefined" && this.state.organizationsData.organizations.length === 0)
      ) {
        var organizations = this.state.organizationsData.organizations.concat(this.props.organizationsData.organizations);
        this.setState({
          organizationsData: { ...this.props.organizationsData, organizations }
        });
      }
    }, 2000)
  }

  more = () => {

    if (!this.state.lastPage) {
      var { page, perPage } = this.state;
      this.props.organizationsAction({ page: page + 1, perPage });
    }
  }

  render() {
    const { utils } = this.props;
    const isCampaignFetching = isRequestActive(utils.request, campaignRequest.organizationsRequest);

    return (
      <>
        <Layout {...this.props}>
          <VerifiedPagesHead />
          <div className="verified_body">
            <VerifiedDesc />
            <div id={'verified_organization'}>
              <VerifiedBody
                {...this.props}
                organizationsData={this.state.organizationsData}
                isCampaignFetching={isCampaignFetching}
                more={this.more}
              />
            </div>
          </div>
          <StartCampaign />
        </Layout>
      </>
    );
  }
}

export default VerifiedPagesComponent;
