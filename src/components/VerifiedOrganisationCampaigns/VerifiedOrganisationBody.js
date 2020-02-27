import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

//import campaigns_5 from "../../assets/images/campaigns_5.svg";
import Card from "../../sharedComponent/Card";
import LoadableButton from "../../sharedComponent/LoadableButton";
import { campaignRequest } from "../../store/campaignModules/saga";
import { isRequestActive } from "../../utils/misc";
// import { width } from "@material-ui/system";
//import { categoryColor } from "../../utils/misc";

class VerifiedOrganisationBody extends PureComponent {

  render() {
    
    const { organizationCampaigns, more, utils } = this.props;

    return (
      <>
        <h3 className="verified_org-campaign-card-head">Campaigns</h3>
        <div className="verified_body_right">
          <div className="newCampaigns_row1 verified_org_right_cards">
            {organizationCampaigns.transactions.map((c, i) => (
              <div className="verified_body-card" key={i}>
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
        </div>
        <div style={{display: "flex", width: "100%", justifyContent: "center"}}>
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
              onClick={more}
          />
        </div>
      </>
    );
  }
}

export default VerifiedOrganisationBody;
