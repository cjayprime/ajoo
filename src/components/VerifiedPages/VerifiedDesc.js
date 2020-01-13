import React, { PureComponent } from "react";

import board from "../../assets/images/checklist.svg";

class VerifiedDesc extends PureComponent {
  render() {
    return (
      <div className="verified_page_desc">
        <div className="verified_page_desc_left">
          <h2>What it means to be verified.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            sapien velit, aliquet eget commodo nec, auctor a sapien. Nam eu
            neque vulputate diam rhoncus faucibus. Curabitur quis varius libero.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            placerat sem at mauris suscipit porta. Cras metus velit, elementum
            sed pellentesque
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
