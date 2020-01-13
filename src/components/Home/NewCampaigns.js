import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

import Card from "../../sharedComponent/Card";
import Spinner from "../../sharedComponent/Spinner";

class NewCampaign extends PureComponent {
  render() {
    const {
      newCampaigns: { transactions },
      isCampaignFetching
    } = this.props;

    return (
      <>
        <div className="newCampaigns">
          <h2>New Campaigns</h2>

          <div>
            {isCampaignFetching ? (
              <Spinner />
            ) : (
                <div className="topCampaigns_row2">
                  {transactions.length === 0 ? (
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
                      <>
                        {transactions.map((c, i) => {
                          if (i > 2) return null;
                          return (
                            <Card
                              key={c._id}
                              campaignId={c.campaign_id}
                              src={c.imageUrl}
                              category={c.category}
                              percent={c.percent}
                              amtDonated={c.pledged}
                              title={c.title}
                              summary={c.summary}
                            />
                          );
                        })}
                      </>
                    )}
                </div>
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

NewCampaign.defaultProps = {
  newCampaigns: {
    transactions: [],
    total_records: "",
    total_pages: "",
    current_page: ""
  }
};

export default NewCampaign;

