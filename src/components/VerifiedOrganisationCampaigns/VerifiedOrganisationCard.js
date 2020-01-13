import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

import image1 from "../../assets/images/rectangle5.svg";
import image2 from "../../assets/images/rectangle6.svg";
import image3 from "../../assets/images/profile_tab1.svg";
import report from "../../assets/images/reportorg.svg";
import facebookIcon from "../../assets/images/Vectorfb.svg";
import twitterIcon from "../../assets/images/Vectortw.svg";
import instagramIcon from "../../assets/images/Vectorins.svg";
import gmailIcon from "../../assets/images/Vectorgmail.svg";

class VerifiedOrganisationCard extends PureComponent {
  render() {
    const images = [
      { photo: image1, alt: "image of doctors with a baby" },
      { photo: image2, alt: "image of muslim ladies" },
      { photo: image3, alt: "third image" }
    ];

    return (
      <>
        <p className="verified_org-report">
          <img src={report} />
        </p>

        <div className="verified_org-card">
          <div className="verified_org-card-img-body">
            {images.map((image, i) => (
              <img
                src={image.photo}
                alt={image.alt}
                className="verified_org-card-img"
                key={i}
              />
            ))}
          </div>
          {/* mobile */}
          <div className="verified_org-card-img-body-mobile"></div>
          <div className="verified_org-card-details">
            <div className="verified_org-card-address">
              <div>
                <p>No 123, Victoria Street, Lagos junction, Abuja</p>
              </div>
              <div>
                <button>Donate to Organisation</button>
              </div>
            </div>
            <div className="verified_org-card-social">
              <div>
                {" "}
                <p className="verified_org-card-email">
                  {" "}
                  <img src={gmailIcon} /> Send an email
                </p>
              </div>
              <div>
                <ul>
                  <li>
                    <Link to="">
                      <img src={facebookIcon} />
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      {" "}
                      <img src={twitterIcon} />
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <img src={instagramIcon} />
                    </Link>
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
