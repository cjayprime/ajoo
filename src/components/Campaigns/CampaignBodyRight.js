import React, { PureComponent } from "react";
import Card from "../../sharedComponent/Card";
// import { CircularProgress } from "@material-ui/core";
// import { campaignRequest } from "../../store/campaignModules/saga";
import Spinner from "../../sharedComponent/Spinner";
import LoadableButton from "../../sharedComponent/LoadableButton";
import ImageUpload from "../../sharedComponent/ImageUpload";
import { campaignRequest } from "../../store/campaignModules/saga";
import { isRequestActive } from "../../utils/misc";

export default class CampaignBodyRight extends PureComponent {

  render() {
    const { allCampaigns, isCampaignFetching, utils } = this.props;
    
    return (
      <div
        className="campaign_body_right"
        ref={this.props.campaignBodyRightRef}
        style={{marginLeft: this.props.position === "fixed" ? "30%" : "0"}}
      >
        {
          allCampaigns.transactions.length === 0 && isCampaignFetching ? (
            <Spinner />
          ) : (
              <>
                {allCampaigns.transactions.length === 0 ? (
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
                    There are currently no campaigns
                  </span>
                ) : (
                    <div
                      className="newCampaigns_row1 campaign_body_right_cards"
                      style={{
                        position: "relative"
                      }}
                    >
                      {allCampaigns.transactions.map(c => (
                        <div className="campaign_body-card" key={c._id}>
                          <Card
                            key={c._id}
                            campaignId={c.campaign_id}
                            src={c.imageUrl}
                            percent={c.percent}
                            amtDonated={c.pledged || "0"}
                            category={c.category}
                            title={c.title}
                            summary={c.summary}
                          />
                        </div>
                      ))}
                      <LoadableButton
                          error={
                              false
                              /*formError &&
                              "There is something wrong! Ensure you've added a campaign"*/
                          }
                          className="allButton"
                          btnTitle="Show More Campaigns"
                          isLoading={
                              isRequestActive(utils.request, campaignRequest.fetchAllCampaignsRequest)
                          }
                          onClick={this.props.more}
                      />
                    </div>
                  )}
              </>
            )
        }
      </div>
    );
  }
}

CampaignBodyRight.defaultProps = {
  allCampaigns: {
    transactions: [],
    //total_records: "",
    //total_pages: "",
    //current_page: ""
  }
};
