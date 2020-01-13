import React, { PureComponent } from "react";
import Modal from "react-responsive-modal";

const TitleHeading = ({ children, title }) => {
  return (
    <div className="campaign_body_left-subheading">
      <div className="campaign_body_left-subheading-title">{title}</div>
      <div> {children}</div>
    </div>
  );
};

const bg = {
  overlay: {
    background: "rgba(17, 12, 12, 0.932)"
  },
  modal: {
    width: "100%",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#FFFFFF",
    paddingBottom: "40%"
  }
};

export default class CampaignBodyLeft extends PureComponent {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.state = {
      openFilterModal: false,
      formError: false,
      verification: null,
      campaignType: null,
      category: null
    };
  }

  onOpenFilterModal = () => {
    this.setState({ openFilterModal: true });
  };

  onCloseFilterModal = () => {
    this.setState({ openFilterModal: false });
  };

  componentDidMount() {
    this._isMounted = true;
  }

  componentDidUpdate(prevProps, prevState) {
    const { verification, campaignType, category } = this.state;
    if (
      prevState.verification !== verification ||
      prevState.campaignType !== campaignType ||
      prevState.category !== category
    ) {
      this.fetchCampaign();
    }
  }

  fetchCampaign = () => {
    const { fetchAllCampaigns } = this.props;
    const { campaignType, verification, category } = this.state;
    fetchAllCampaigns({
      time: campaignType,
      verify: verification,
      category
    });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ ...this.state, [name]: value });
  };

  render() {
    const { openFilterModal } = this.state;
    return (
      <div className="campaign_body_left">
        <div className="campaign_body_left_content-heading campaign_body_left_content-heading-mobile">
          Campaign Filters
        </div>
        <div className="campaign_body_left_content">
          <div className="category-desktop">
            <TitleHeading title="CATEGORY">
              <select
                onChange={this.handleChange}
                name="category"
                className="campaign_body_left_category profileSettings_form1-round"
              >
                <option value={""}>All</option>
                {this.props.categories.map(c => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </TitleHeading>
          </div>
          {/*TIME-CAMPAIGN - Radio button appears inside a modal on mobile screen */}

          <div className="timeDesktop">
            <TitleHeading title="TIME">
              <label className="campaign_body_left_time">
                Top Campaigns
                <input
                  onChange={this.handleChange}
                  name="campaignType"
                  value="top"
                  type="radio"
                />
                <span className="time-checkmark" />
              </label>
              <label className="campaign_body_left_time">
                New Campaigns
                <input
                  onChange={this.handleChange}
                  name="campaignType"
                  value="new"
                  type="radio"
                />
                <span className="time-checkmark" />
              </label>
              <label className="campaign_body_left_time">
                Closing Campaigns
                <input
                  onChange={this.handleChange}
                  name="campaignType"
                  value="closing"
                  type="radio"
                />
                <span className="time-checkmark" />
              </label>
            </TitleHeading>
          </div>

          {/* VERIFICATION-CAMPAIGN - radio button appears inside modal */}

          <div className="verifyDesktop">
            <TitleHeading title="VERIFICATION">
              <label className="campaign_body_left_verify">
                All
                <input
                  onChange={this.handleChange}
                  name="verification"
                  value="all"
                  type="radio"
                />
                <span className="verify-checkmark" />
              </label>
              <label className="campaign_body_left_verify">
                Verified Campaigns
                <input
                  onChange={this.handleChange}
                  name="verification"
                  value="1"
                  type="radio"
                />
                <span className="verify-checkmark" />
              </label>
              <label className="campaign_body_left_verify">
                Non-Verified Campaigns
                <input
                  onChange={this.handleChange}
                  name="verification"
                  value="0"
                  type="radio"
                />
                <span className="verify-checkmark" />
              </label>
            </TitleHeading>
          </div>
        </div>
        {/*  filter campaign for mobile view */}

        <div className="filter_campaign">
          <button
            className="filter_campaign-btn"
            onClick={this.onOpenFilterModal}
          >
            <i className="fas fa-filter" /> Filter By:
          </button>

          <Modal
            open={openFilterModal}
            onClose={this.onCloseFilterModal}
            styles={bg}
          >
            <TitleHeading title="CATEGORY">
              <select
                onChange={this.handleChange}
                name="category"
                className="campaign_body_left_category profileSettings_form1-round"
              >
                <option value="All">All</option>
                {this.props.categories.map(c => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </TitleHeading>
            <TitleHeading title="TIME">
              <label className="campaign_body_left_time">
                Top Campaigns
                <input
                  onChange={this.handleChange}
                  name="campaignType"
                  value="top"
                  type="radio"
                />
                <span className="time-checkmark" />
              </label>
              <label className="campaign_body_left_time">
                New Campaigns
                <input
                  onChange={this.handleChange}
                  name="campaignType"
                  value="new"
                  type="radio"
                />
                <span className="time-checkmark" />
              </label>
              <label className="campaign_body_left_time">
                Closing Campaigns
                <input
                  onChange={this.handleChange}
                  name="campaignType"
                  value="closing"
                  type="radio"
                />
                <span className="time-checkmark" />
              </label>
            </TitleHeading>
            <TitleHeading title="VERIFICATION">
              <label className="campaign_body_left_verify">
                All
                <input
                  onChange={this.handleChange}
                  name="verification"
                  value="all"
                  type="radio"
                />
                <span className="verify-checkmark" />
              </label>
              <label className="campaign_body_left_verify">
                Verified Campaigns
                <input
                  onChange={this.handleChange}
                  name="verification"
                  value="1"
                  type="radio"
                />
                <span className="verify-checkmark" />
              </label>
              <label className="campaign_body_left_verify">
                Non-Verified Campaigns
                <input
                  onChange={this.handleChange}
                  name="verification"
                  value="0"
                  type="radio"
                />
                <span className="verify-checkmark" />
              </label>
            </TitleHeading>
            <button className="filter-btn">FILTER</button>
          </Modal>
        </div>
      </div>
    );
  }
}
