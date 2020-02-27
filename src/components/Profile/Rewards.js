import React from 'react'
import RewardTable from "../../sharedComponent/RewardTable";

const Rewards = ({ Polygon, rewards }) => {
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
}

export default Rewards;