import React, { Component } from "react";
import SearchIcon from "@material-ui/icons/Search";

class CampaignsHead extends Component {
  state = {
    search: ""
  }
  
  componentDidMount(){
    
    if(typeof this.props.location.state !== "undefined" && this.props.location.state.search)
    this.load(this.props.location.state.search);

  }

  load = search => {
    this.setState({ search }, () => {
      this.props.reset(() => this.props.fetchAllCampaigns({ search }))
    });
  }

  render() {
    return (
      <>
        <div className="campaigns_head_banner" ref={this.props.campaignHeadRef}>
          <div className="campaigns_head_banner-container">
            <div className="campaigns_head_banner-heading">Explore</div>
            <div>
              <input
                type="text"
                className="campaigns_head_banner-search"
                name="search"
                placeholder="Search campaign"
                value={this.state.search}
                style={{ paddingRight: 45 }}
                onChange={e => this.load(e.target.value)}
              />
              <SearchIcon className="search_icon" style={{ position: "absolute", marginLeft: -45, marginTop: 22 }} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CampaignsHead;
