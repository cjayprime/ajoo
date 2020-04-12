import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

import Card from "../../sharedComponent/Card";
import Spinner from "../../sharedComponent/Spinner";

class ClosingCampaign extends PureComponent {
  render() {
    const {
      closingCampaigns: { transactions },
      isCampaignFetching
    } = this.props;

    return (
      <>
        <div className="newCampaigns">
          <h2>Closing Campaigns</h2>

          <div>
            {isCampaignFetching ? (
              <Spinner />
            ) : (
                <>
                  {
                    transactions.length === 0 ? (
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
                        no campaigns
                      </span>
                    ) : (
                        <div className="topCampaigns_row2">
                          {transactions.map((c, i) => {
                            if (i > 2) return null;
                            return (
                              <Card
                                key={c._id}
                                campaignId={c.campaign_id}
                                percent={c.percent}
                                amtDonated={c.pledged}
                                src={c.imageUrl}
                                category={c.category}
                                title={c.title}
                                summary={c.summary}
                              />
                            );
                          })}
                        </div>
                      )
                  }
                </>
              )}
          </div>
        </div>
        <div className="clearfix"></div>

        <div className="button_home">
          <Link to="/campaigns">
            <button className="allButton">VIEW MORE</button>
          </Link>
        </div>
      </>
    );
  }
}

ClosingCampaign.defaultProps = {
  closingCampaigns: {
    transactions: [],
    total_records: "",
    total_pages: "",
    current_page: ""
  }
};

export default ClosingCampaign;
