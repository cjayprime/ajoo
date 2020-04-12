import React from 'react';

import border from "../../assets/images/rewardborder.svg";

const Rewards = (props) => {
    const { rewards } = props;

    return (
        <div id="" className="tabcontent" style={{ display: "block", marginTop: 61, textAlign: "center" }}>
            {
                rewards.length > 0
                ? 
                    rewards.map((v, i) => (
                        <div key={i} className="donation">
                            <div className="donation__body">
                                <div className="donation-amt">
                                    <h5>DONATION AMOUNT</h5>
                                    <span>N{v.donation}</span>
                                </div>
                                <img src={border} alt="border line" className="donation__border-line" />
                                <div className="donation-amt">
                                    <h5>REWARD TYPE</h5>
                                    <span>{v.rewardType}</span>
                                </div>
                                <img src={border} alt="border line" className="donation__border-line" />
                                <div className="donation-reward">
                                    <h5>REWARDS</h5>
                                    <span>{v.reward}</span>
                                </div>
                            </div>
                        </div>
                    ))
                :   <div className="no_reward">
                        <h1>There are no rewards</h1>
                    </div>
            }

        </div>
    )
}

export default Rewards
