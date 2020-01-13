import React, { PureComponent } from "react";
import Card from "../../sharedComponent/Card";
// import { CircularProgress } from "@material-ui/core";
// import { campaignRequest } from "../../store/campaignModules/saga";
import Spinner from "../../sharedComponent/Spinner";
import { moneyFormat } from "../../utils/misc";

export default class CampaignBodyRight extends PureComponent {
  render() {
    const { allCampaigns, isCampaignFetching } = this.props;
    return (
      <div className="campaign_body_right">
        {
          isCampaignFetching ? (
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
                    no campaign
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
                      <div style={{width: "90%", display: "flex", justifyContent: "center"}} onClick={this.props.more}>
                        <button className="allButton">SHOW MORE CAMPAIGNS</button>
                      </div>
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
    total_records: "",
    total_pages: "",
    current_page: ""
  }
};
