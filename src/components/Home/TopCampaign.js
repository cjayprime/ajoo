import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

import Card from "../../sharedComponent/Card";
// import NoCampaign from "../../sharedComponent/NoCampaign";
import Spinner from "../../sharedComponent/Spinner";
import { IMAGE_URL, categoryColor, moneyFormat } from "../../utils/misc";

class TopCampaigns extends PureComponent {
  renderArticle = text => {
    var len = 200;
    return {
      __html: text.length > len ? text.substring(0, len) + "..." : text
    };
  };

  render() {
    const {
      topCampaigns: { transactions },
      isCampaignFetching
    } = this.props;

    return (
      <>
        <div id="topCampaigns">
          <h2>Top Campaigns</h2>
          {!!transactions[0] && Object.keys(transactions[0]).length > 0 && (
            <div
              className="topCampaigns_row1"
              style={{ alignItems: "stretch" }}
            >
              <div className="topCampaigns_column1">
                <img
                  src={`${IMAGE_URL}363_232_${transactions[0].imageUrl}`}
                  alt=""
                  style={{
                    height: "100%",
                    width: "100%"
                  }}
                />
              </div>
              <div className="topCampaigns_column2">
                <label
                  className="label_card"
                  style={{
                    background: categoryColor[transactions[0].category]
                  }}
                >
                  {transactions[0].category}
                </label>
                <h3>{transactions[0].title}</h3>
                <h5
                  dangerouslySetInnerHTML={this.renderArticle(
                    transactions[0].description
                  )}
                />
                <div id="topCampaigns_h6" style={{ marginTop: 20 }}>
                  <h6>{transactions[0].percent}% Complete</h6>
                  <h6>&#8358;{moneyFormat(transactions[0].pledged || "0.00")} Funded</h6>
                </div>
                {/*<div className="myProgress">
                  <div className="myBar"></div>
                </div>*/}
                <div
                  style={{
                    width: "100%",
                    height: 6,
                    backgroundColor: "#f9f9f9",
                    marginTop: 20,
                    marginBottom: 30
                  }}
                >
                  <div
                    style={{
                      width: `${transactions[0].percent}%`,
                      height: 6,
                      borderRadius: 6,
                      backgroundColor: "#008253"
                    }}
                  ></div>
                </div>
                <div className="viewCampaign">
                  <Link
                    to={`/campaign/${transactions[0].campaign_id.toLowerCase()}`}
                  >
                    <div className="viewCampaignBorder">
                      <span>View Campaign</span>
                      <i className="fas fa-arrow-right"></i>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          )}
          <div>
            {isCampaignFetching ? (
              <Spinner />
            ) : (
                <>
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
                      <div className="topCampaigns_row2">
                        {transactions.map((c, i) => {
                          if (i === 0 || i > 3) return null;
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
                      </div>
                    )}
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

TopCampaigns.defaultProps = {
  topCampaigns: {
    transactions: [],
    total_records: "",
    total_pages: "",
    current_page: ""
  }
};

export default TopCampaigns;
