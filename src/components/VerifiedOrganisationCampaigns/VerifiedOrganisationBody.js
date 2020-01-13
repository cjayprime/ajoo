import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

import campaigns_5 from "../../assets/images/campaigns_5.svg";
// import Card from "../../sharedComponent/Card";
// import { width } from "@material-ui/system";
import { categoryColor } from "../../utils/misc";

class VerifiedOrganisationBody extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <h3 className="verified_org-campaign-card-head">Campaigns</h3>
        <div className="verified_body_right">
          <div className="newCampaigns_row1 verified_org_right_cards">
            {Array.apply(null, Array(12)).map((a, i) => (
              <div className="verified_body-card">
                {/* The card component was commented as a result of the error the screen
                 renders because we are not feeding the component here data, therefore it's
                 affecting the Link coming from the card */}

                {/* <Card
                  key={i}
                  src={campaigns_5}
                  alt="Lady drinking coffee"
                  style={{
                    background: "#DFF0FF",
                    borderRadius: "34px"
                  }}
                  labelDescription="Finance"
                  title="Fintech Startup"
                  summary="I need help to set up my Fintech startup and I need help with initial funding something something."
                /> */}

                <div className="topCampaigns_column3">
                  <div className="card">
                    <img
                      /*sizes="(min-width: 1200px) 730w,
                        (max-width: 1199px) 610w,
                        (max-width: 380px) 350w"
                      srcSet={`
                        ${src} 730w,
                        ${src} 610w,
                        ${src} 350w
                      `}*/
                      src={campaigns_5}
                      alt="Lady drinking coffee"
                      style={{
                        background: "#DFF0FF",
                      }}
                    />

                    <label
                      style={{
                        background: categoryColor["Finance"]
                      }}
                    >
                      Finance
                    </label>
                    <div className="topCampaigns_h6">
                      <h6>72% Complete</h6>
                    </div>
                    <div
                      style={{
                        width: "90%",
                        marginLeft: "5%",
                        height: 6,
                        backgroundColor: "#f9f9f9",
                        marginTop: 20
                      }}
                    >
                      <div
                        style={{
                          maxWidth: "inherit",
                          width: `72%`,
                          height: 6,
                          borderRadius: 6,
                          backgroundColor: "#008253"
                        }}
                      ></div>
                    </div>
                    <h3 className="campaigns_h3" style={{ whiteSpace: 'pre', height: 'auto', overflow: 'hidden', textOverflow: 'ellipsis' }}>Fintech Startup</h3>
                    <h6 className="campaigns_h6" style={{ height: 60, lineHeight: 1.5, overflow: 'hidden', textOverflow: 'ellipsis' }}>I need help to set up my Fintech startup and I need help with initial funding something something.</h6>
                    <div className="viewCampaign">
                      <Link to="/">
                        <div className="viewCampaignBorder">
                          <span>View Campaign</span>
                          <i className="fas fa-arrow-right"></i>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </React.Fragment >
    );
  }
}

export default VerifiedOrganisationBody;
