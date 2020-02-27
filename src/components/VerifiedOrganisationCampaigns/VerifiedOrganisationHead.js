import React, { PureComponent } from "react";

import { IMAGE_URL } from "../../utils/misc";

const preImage = `${IMAGE_URL}60_60_`;

class VerifiedOrganisationHead extends PureComponent {
  render() {
    const { organizationsData, organizationId } = this.props;
    let organization = {};
    
    organizationsData.organizations.map((v) => {
      if(v._id == organizationId)
      organization = v;
    });

    return (
      <>
        <div className="verified_org_head_banner">
          <div className="verified_org_head_banner-container">
            <img
              src={organization.image_url ? preImage + "" + organization.image_url : "images/image-404.jpg"}
              alt="image here"
              className="verified_org_head_banner-container-img"
            />
            <p>{organization.organization_name}</p>
            <div>
              {/*<img src={ehealth} className="verified_org_head_ehealth" />*/}
            </div>
            <div>{organization.organization_type}</div>
          </div>
        </div>
      </>
    );
  }
}

export default VerifiedOrganisationHead;
