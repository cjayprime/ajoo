import React from 'react'
//import RewardTable from "../../sharedComponent/RewardTable";

import border from "../../assets/images/rewardborder.svg";

const Rewards = ({ Polygon, rewards }) => {
  if(rewards.length === 0){

    return (
      <div id="" className="">
        <div className="campaigns_div">
          <div className="tab_content1">
            <div className="no_reward">
              <h1>No Reward</h1>
              {/*<RewardTable rewards/>*/}
            </div>
          </div>
          <div className="tab_content2">
            <div className="tabContent_label">
              <label>
                RANK
                <span>
                  <img src={Polygon} />
                </span>
              </label>
            </div>
            <div className="tabContent_label">
              <label>
                VERIFIED CAMPAIGNS<span>0</span>
              </label>
            </div>
            <div className="tabContent_label">
              <label>
                ASSIGNED CAMPAIGNS<span>0</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    )

  }else{
    
    return (
      <div id="" className="">
        <div className="campaigns_div">
          <div className="tab_content1">
            <div className="no_reward">
              <div id="" className="tabcontent" style={{ display: "block", textAlign: "center" }}>
              {
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
              }
              </div>
            </div>
          </div>
          <div className="tab_content2">
            <div className="tabContent_label">
              <label>
                RANK
                <span>
                  <img src={Polygon} />
                </span>
              </label>
            </div>
            <div className="tabContent_label">
              <label>
                TOTAL REWARDS<span>{rewards.length}</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    );

  }
}

export default Rewards;