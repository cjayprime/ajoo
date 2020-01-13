import React, { PureComponent } from "react";
import StarRatings from "react-star-ratings";

import { IMAGE_URL } from "../../utils/misc";
import blueBadge from "../../assets/images/star3.svg";

const VolunteerList = ({ url, title }) => {
  return (
    <div className="campaign--volunteers-list-item">
      <img src={`${IMAGE_URL}363_232_${url}`} alt={`${title}`} />
      <div>
        <img src={blueBadge} alt="Badge of this volunteer is gold" />
        <p>Preye Adebusola</p>
      </div>
    </div>
  );
};

class CampaignBody extends PureComponent {
  state = { starRating: 4 };
  render() {
    const { campaign } = this.props;
    const { starRating } = this.state;

    return null;
    /*
    return (
      <div className="campaign--body">
        <div className="campaign--body-content">
          <div className="campaign--owner-message">
            <h3 className="campaign--owner-message-title">
              A message from the owner
            </h3>
            <p className="campaign--owner-message-text">
              Dear Donor, Thank you for your generous donation. Your donation
              changed life and helped build a better society. To all who
              supported us throughout this campaign, you have our most sincere
              gratitude. We send our gratitude to you with pictures of what you
              have helped accomplished. WE APPRECIATE YOU
            </p>
          </div>
          <div className="campaign--volunteer">
            <div className="campaign--more-image">
              <img
                src={`${IMAGE_URL}363_232_${campaign.imageUrl}`}
                alt={`${campaign.title}`}
              />
              <img
                src={`${IMAGE_URL}363_232_${campaign.imageUrl}`}
                alt={`${campaign.title}`}
              />
            </div>
            <div
              className="campaign--volunteers"
              style={{ borderTop: "1px solid #D2D2D2" }}
            >
              <h3
                className="campaign--owner-message-title"
                style={{ marginTop: 20 }}
              >
                Ajoo Volunteers
              </h3>
              <div className="campaign--volunteers-list">
                <VolunteerList title={campaign.title} url={campaign.imageUrl} />
                <VolunteerList title={campaign.title} url={campaign.imageUrl} />
                <VolunteerList title={campaign.title} url={campaign.imageUrl} />
              </div>
              <div className="campaign--rate-volunteers">
                <button
                  onClick={this.openInitiatePayment}
                  className="donateButton"
                  style={{
                    width: 200
                  }}
                >
                  rate volunteers
                </button>
              </div>
              <div
                style={{
                  width: "100%",
                  height: 100,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderTop: "1px solid #D2D2D2"
                }}
              >
                <StarRatings
                  rating={starRating}
                  changeRating={rating => this.setState({ starRating: rating })}
                  starRatedColor="#ffc94f"
                  starEmptyColor="#BFBFBF"
                  starHoverColor="#ffc94f"
                  starDimension="50px"
                  starSpacing="1px"
                  numberOfStars={5}
                  name="rating"
                  className="review-star"
                />{" "}
                <button
                  onClick={this.openInitiatePayment}
                  className="donateButton"
                  style={{
                    width: 200,
                    marginTop: 0,
                    marginBottom: 0
                  }}
                >
                  rate campaign
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
    */
  }
}

export default CampaignBody;
