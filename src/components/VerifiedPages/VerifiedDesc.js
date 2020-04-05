import React, { PureComponent } from "react";

import board from "../../assets/images/checklist.svg";

class VerifiedDesc extends PureComponent {
  render() {
    return (
      <div className="verified_page_desc">
        <div className="verified_page_desc_left">
          <h2>What it means to be verified.</h2>
          <p>  
  We verify organizations and individuals. To verify, we collect identification cards not limited to students ID card, National Identity Card, Nigerian international passport and state bill receipt to confirm residence.
  
  We do this to ensure that our campaigners are real and can be located for accountability and transparency.
  
  
          </p>
        </div>
        <div className="verified_page_desc_right">
          <img src={board} alt="" />
        </div>
      </div>
    );
  }
}

export default VerifiedDesc;
