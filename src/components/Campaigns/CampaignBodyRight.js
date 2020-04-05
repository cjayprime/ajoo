import React, { PureComponent } from "react";
import Card from "../../sharedComponent/Card";
import Spinner from "../../sharedComponent/Spinner";
import LoadableButton from "../../sharedComponent/LoadableButton";
import { campaignRequest } from "../../store/campaignModules/saga";
import { isRequestActive } from "../../utils/misc";

export default class CampaignBodyRight extends PureComponent {

  render() {
    const { allCampaigns, isCampaignFetching, utils } = this.props;

    return (
      <div
        className="campaign_body_right"
        ref={this.props.campaignBodyRightRef}
        style={{ marginLeft: this.props.position === "fixed" ? "30%" : "0" }}
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
                    No campaigns found
                  </span>
                ) : (
                    <>
                      <div
                        className="newCampaigns_row1 campaign_body_right_cards"
                        style={{
                          position: "relative"
                        }}
                      >
                        {allCampaigns.transactions.map((c, i) => (
                          <div className="campaign_body-card" key={i}>
                            <Card
                              key={i}
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

                      </div>
                      <div style={{ display: "flex", justifyContent: "center" }}>
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
                    </>
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
