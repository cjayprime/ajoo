import React, { Component, Fragment } from 'react';

import Spinner from '../../sharedComponent/Spinner';
import SuccessCard from "../../sharedComponent/SuccessCard";
import LoadableButton from "../../sharedComponent/LoadableButton";
import { isRequestActive } from '../../utils/misc';
import { campaignRequest } from '../../store/campaignModules/saga';

class Success extends Component {
    render() {
        const {
            isCampaignFetching,
            completedCampaigns,
            utils
        } = this.props;

        return (
            <>
                <div className="success__stories-campaign">
                    <div>
                        {isCampaignFetching ? (
                            <Spinner />
                        ) : (
                                <div className="success_row">
                                    {
                                        typeof completedCampaigns.campaigns === "undefined" || completedCampaigns.campaigns.length === 0 ?   <span
                                                style={{
                                                    fontFamily: "Muli",
                                                    fontSize: "23px",
                                                    marginTop: "30px",
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    textTransform: "uppercase"
                                                }}
                                            >no success stories available yet</span>
                                        :   completedCampaigns.campaigns.map((c, i) => {
                                                return (
                                                    <div key={i}>
                                                        <SuccessCard
                                                            key={c._id}
                                                            campaignId={c.campaign_id}
                                                            src={c.imageUrl}
                                                            category={c.category}
                                                            title={c.title}
                                                            summary={c.summary}
                                                        />
                                                    </div>
                                            )})
                                    }
                                </div>
                            )
                        }
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    {
                        (completedCampaigns.campaigns.length === 0)
                        ?   null
                        :   <LoadableButton
                                error={
                                    false
                                    /*formError &&
                                    "There is something wrong! Ensure you've added a campaign"*/
                                }
                                className="allButton"
                                btnTitle="Show More Campaigns"
                                isLoading={
                                    isRequestActive(utils.request, campaignRequest.completedCampaignsRequest)
                                }
                                onClick={this.props.more}
                            />
                    }
                
                </div>
            </>
        )
    }
}

Success.defaultProps = {
    success: {
        transactions: []
    }
}

export default Success;