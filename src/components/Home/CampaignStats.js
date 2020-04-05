import React, { Component } from 'react';
import CountUp from 'react-countup';


import campaign from "../../assets/images/campaign.svg";
import helpinghand from "../../assets/images/helpinghand.svg";
import target from "../../assets/images/target.svg";

class CampaignStats extends Component {
    render() {
        const { allCampaigns } = this.props;
        
        return (
            <>
                <div className="stat wow fadeInUp">
                    <div className="campaign-stat">
                        {/* campaigns */}
                        <div className="stat-body">
                            <img className="stat-icon" src={campaign} alt="campaign icon" />
                            <p className="stat-number">
                                {
                                    typeof allCampaigns.newCampaigns !== "undefined" && typeof allCampaigns.newCampaigns.total_campaigns !== "undefined" ? (
                                        <CountUp start={0} duration={3} delay={2} end={allCampaigns.newCampaigns.total_campaigns} />
                                    ) : (
                                            <p className="stat-number">0</p>
                                        )
                                }
                            </p>
                            <p className="stat-text">Campaigns</p>
                        </div>
                        {/* donation */}
                        <div className="stat-body">
                            <img className="stat-icon" src={helpinghand} alt="helping hand icon" />
                            <p className="stat-number">
                                {
                                    typeof allCampaigns.newCampaigns !== "undefined" && typeof allCampaigns.newCampaigns.total_donations !== "undefined" ? (
                                        <CountUp start={0} duration={3} delay={2} end={allCampaigns.newCampaigns.total_donations} />
                                    ) : (
                                            <p className="stat-number">0</p>
                                        )
                                }
                            </p>
                            <p className="stat-text">donations</p>
                        </div>
                        {/* success story */}
                        <div className="stat-body">
                            <img className="stat-icon" src={target} alt="target icon" />
                            <p className="stat-number">
                                {
                                    typeof allCampaigns.newCampaigns !== "undefined" && typeof allCampaigns.newCampaigns.total_closed !== "undefined" ? (
                                        <CountUp start={0} duration={3} delay={2} end={allCampaigns.newCampaigns.total_closed} />
                                    ) : (
                                            <p className="stat-number">0</p>
                                        )
                                }
                            </p>
                            <p className="stat-text">success stories</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default CampaignStats;