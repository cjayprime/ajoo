import React, { PureComponent } from "react";

class CampaignsHead extends PureComponent {
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
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CampaignsHead;
