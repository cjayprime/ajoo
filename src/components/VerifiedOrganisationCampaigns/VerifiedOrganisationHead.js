import React, { PureComponent } from "react";

import Logo from "../../assets/images/eHealthlogo.svg";
import ehealth from "../../assets/images/ehealth.svg";

class VerifiedOrganisationHead extends PureComponent {
  render() {
    return (
      <>
        <div className="verified_org_head_banner">
          <div className="verified_org_head_banner-container">
            <img
              src={Logo}
              alt="image here"
              className="verified_org_head_banner-container-img"
            />
            <div>
              <img src={ehealth} className="verified_org_head_ehealth" />
            </div>
            <p>Non-Profit</p>
          </div>
        </div>
      </>
    );
  }
}

export default VerifiedOrganisationHead;
