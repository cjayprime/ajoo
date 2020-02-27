import React, { PureComponent } from "react";
import Modal from "react-responsive-modal";

import Description from "./Description";
import Comment from "./Comment";
import Rewards from "./Rewards";
import Donations from "../Profile/Donations";
import warn from "../../assets/images/warn.svg";
import AlertDialog from "../../sharedComponent/AlertDialog";
import LoadableButton from "../../sharedComponent/LoadableButton";
import { isRequestActive } from "../../utils/misc";
import { campaignRequest } from "../../store/campaignModules/saga";

const bg = {
  overlay: {
    background: "rgba(17, 12, 12, 0.932)",
    zIndex: 1300
  },
  modal: {
    width: "492px",
    height: "523px",
    display: "flex",
    justifyContent: "center",
    background: "#FFFFFF",
    borderRadius: "10px"
  }
};

class CampaignTab extends PureComponent {
  state = {
    active: "description", // Possible values are connect, comments and donations
    reportOrganisation: false,
    message: ""
  };

  componentDidMount(){
    var { getCampaignDonationById } = this.props;
    if(this.props.campaign._id)
    getCampaignDonationById({ campaignId: this.props.campaign._id });
  }

  onOpenModal = () => {
    this.setState({ reportOrganisation: true });
  };

  onCloseModal = () => {
    this.setState({ reportOrganisation: false });
  };

  renderArticle = text => ({
    __html: text
  });

  iniateReport = () => {
    this.props.reportCampaign({
      campaign_id: this.props.campaign.campaign_id,
      message: this.state.message
    });
  }

  render() {
    const { reportOrganisation } = this.state;
    const { campaign, userDonations, rewards, utils } = this.props;

    return (
      <>
        <div className="tab">
          <div className="clearfix"></div>

      {/* description tab */}
          <AlertDialog
            open={
                utils.feedback.for === campaignRequest.reportCampaignRequest
            }
            message={utils.feedback.message}
            success={utils.feedback.success}
          />
          <div className="tab_button">
            <div>
              <button
                className="tablinks"
                onClick={() => this.setState({ active: "description" })}
              >
                Description
              </button>
              <div
                className="campaignTab_style"
                style={{
                  backgroundColor:
                    this.state.active === "description"
                      ? "#0072A3"
                      : "transparent"
                }}
              ></div>
            </div>
                {/* comment tab */}
            <div>
              <button
                className="tablinks"
                onClick={() => this.setState({ active: "comments" })}
              >
                Comments
                {/*(2)*/}
              </button>
              <div
                className="campaignTab_style"
                style={{
                  backgroundColor:
                    this.state.active === "comments" ? "#0072A3" : "transparent"
                }}
              ></div>
            </div>
                {/* rewards tab */}
            <div>
              <button
                className="tablinks"
                onClick={() => this.setState({ active: "rewards" })}
              >
                Rewards
              </button>
              <div
                className="campaignTab_style"
                style={{
                  backgroundColor:
                    this.state.active === "rewards" ? "#0072A3" : "transparent"
                }}
              ></div>
            </div>
             {/* donation tab */}
            <div>
              <button
                className="tablinks"
                onClick={() => this.setState({ active: "donations" })}
              >
                Donations
              </button>
              <div
                className="campaignTab_style"
                style={{
                  backgroundColor:
                    this.state.active === "donations" ? "#0072A3" : "transparent"
                }}
              >
              </div>
            </div>
            <div>
              <button
                className="tablinks report_tab"
                onClick={this.onOpenModal}
              >
                <img src={warn} />{" "}
                <span style={{ color: "#B00101", fontFamily: "Muli" }}>
                  Report this Campaign
                </span>
              </button>
            </div>
          </div>

          {this.state.active === "description" && (
            <Description campaign={campaign} renderArticle={this.renderArticle} />
          )}

            {this.state.active === "comments" && (
              <Comment />
          )}

          {this.state.active === "rewards" && (
            <Rewards rewards={rewards} />
          )}

          {this.state.active === "donations" && (
            <Donations
              userDonations={userDonations}
            />
          )}
        </div>
            <Modal
              open={reportOrganisation}
              onClose={this.onCloseModal}
              styles={bg}
              center
            >
              <div className="report_modal-body">
                <h1 className="report_modal-head">Report Campaign</h1>
                <hr />
                  <p>
                    Tell us something about this campaign that should be looked
                    into.
                  </p>
                  <div className="report_div">
                    <textarea
                      cols="20"
                      rows="10"
                      className="report_modal-card"
                      placeholder="I have observed some shady things about this campaign and
                whatnot."
                      value={this.state.message}
                      onChange={e => this.setState({message: e.target.value})}
                    />
                  </div>
                  <div className="report_modal-btn">
                    <button className="report_btn-cancel">Cancel</button>
                    <LoadableButton
                      onClick={this.iniateReport}
                      style={{display: "block"}}
                      className="report_btn-submit"
                      isLoading={isRequestActive(utils.request, campaignRequest.reportCampaignRequest)}
                      btnTitle="Submit Report"
                      type="submit"
                    >
                    </LoadableButton>
                  </div>
              </div>
            </Modal>
      </>
    );
  }
}
export default CampaignTab;
