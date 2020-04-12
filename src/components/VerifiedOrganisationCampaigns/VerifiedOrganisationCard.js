import React, { PureComponent } from "react";

import { IMAGE_URL } from "../../utils/misc";

import report from "../../assets/images/reportorg.svg";
import facebookIcon from "../../assets/images/Vectorfb.svg";
import twitterIcon from "../../assets/images/Vectortw.svg";
import instagramIcon from "../../assets/images/Vectorins.svg";
import gmailIcon from "../../assets/images/Vectorgmail.svg";

class VerifiedOrganisationCard extends PureComponent {
  render() {
    const { organizationsData, organizationId } = this.props;
    let organization = {};
    
    organizationsData.organizations.map((v) => {
      if(v._id == organizationId)
      organization = v;
    });

    return (
      <>
        {/* <p className="verified_org-report">
          <img src={report} />
        </p> */}

        <div className="verified_org-card">
          <div className="verified_org-card-img-body">
            <img
              src={organization.organization_f_img_1 ? IMAGE_URL + "" + organization.organization_f_img_1 : "images/image-404.jpg"}
              alt="1st Organization Image"
              className="verified_org-card-img"
            />
            <img
              src={organization.organization_f_img_2 ? IMAGE_URL + "" + organization.organization_f_img_2 : "images/image-404.jpg"}
              alt="2nd Organization Image"
              className="verified_org-card-img"
            />
            <img
              src={organization.organization_f_img_3 ? IMAGE_URL + "" + organization.organization_f_img_3 : "images/image-404.jpg"}
              alt="3rd Organization Image"
              className="verified_org-card-img"
            />
          </div>
          {/* mobile */}
          <div className="verified_org-card-img-body-mobile"></div>
          <div className="verified_org-card-details">
            <div className="verified_org-card-address">
              <div>
                <p>{organization.organization_address}</p>
              </div>
              <div>
                {/* <button>Donate to Organisation</button> */}
              </div>
            </div>
            <div className="verified_org-card-social">
              <div>
                {" "}
                <a className="verified_org-card-email" href={"mailto:" + (organization.organization_email ? organization.organization_email : organization.email)}>
                  {" "}
                  <img src={gmailIcon} /> Send an email
                </a>
              </div>
              <div>
                <ul>
                  <li>
                    <a alt="Facebook" href={organization.facebook ? organization.facebook : ""}>
                      <img src={facebookIcon} />
                    </a>
                  </li>
                  <li>
                    <a alt="Twitter" href={organization.twitter ? organization.twitter : ""}>
                      {" "}
                      <img src={twitterIcon} />
                    </a>
                  </li>
                  <li>
                    <a alt="Instagram" href={organization.instagram ? organization.instagram : ""}>
                      <img src={instagramIcon} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default VerifiedOrganisationCard;
