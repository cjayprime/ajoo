import React, { PureComponent } from "react";

import { Link } from "react-router-dom";
import LoadableButton from "../../sharedComponent/LoadableButton";

class CampaignFeatureImage extends PureComponent {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.state = {};
  }

  handleSubmit = e => {
    e.preventDefault();
  };

  triggerAction = () => {
    this.props.campaignImageUser();
  };

  componentDidMount() {
    this._isMounted = true;
  }

  _safelySetState = (newState, prevState = null) => {
    if (this._isMounted)
      return this.setState(state => ({
        [prevState]: !state[prevState],
        ...newState
      }));
  };

  render() {
    const { /*campaign,*/ isLoading } = this.props;

    return (
      <>
        <div className="campaign_image-row">
          <div className="campaign_image-column1">
            <img alt="sign in" src="images/sign_in.svg" />
          </div>
          <div className="campaign_image-column2">
            <div className="backCampaign">
              <Link to="#">
                <i className="fas fa-arrow-left"></i>
              </Link>
              <Link to="#" className="backCampaignBorder link">
                Back
              </Link>
            </div>
            <form>
              <label>Campaign Feature Image</label>
              <div className="verification2_column3">
                <img
                  alt="verification"
                  id="organisation_logo"
                  src="images/drag.svg"
                />
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <LoadableButton
                  className="campaign_image-btn"
                  onClick={this.triggerAction}
                  btnTitle="Next"
                  isLoading={isLoading}
                />
              </div>
            </form>
          </div>
          <hr className="hr1" />
        </div>

        <div class="clearfix"></div>
      </>
    );
  }
}

export default CampaignFeatureImage;
