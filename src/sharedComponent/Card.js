import React from "react";
import { Link } from "react-router-dom";

import { IMAGE_URL, categoryColor, moneyFormat } from "../utils/misc";

const Card = props => {
  var {
    src,
    labelClass,
    category,
    campaignId,
    percent,
    amtDonated,
    title,
    summary
  } = props;
  src = src ? IMAGE_URL + '363_232_' + src : 'images/image-404.jpg';
  var alt = src ? title : 'Image not found';
  return (
    <div className="topCampaigns_column3">
      <div className="card">
        <img
          /*sizes="(min-width: 1200px) 730w,
            (max-width: 1199px) 610w,
            (max-width: 380px) 350w"
          srcSet={`
            ${src} 730w,
            ${src} 610w,
            ${src} 350w
          `}*/
          src={src}
          alt={alt}
        />

        <label
          className={labelClass}
          style={{
            background: categoryColor[category]
          }}
        >
          {category}
        </label>
        <div className="topCampaigns_h6">
          <h6>{percent}% Complete</h6>
          <h6>&#8358;{moneyFormat(amtDonated || "0.00")} Funded</h6>
        </div>
        <div
          style={{
            width: "90%",
            marginLeft: "5%",
            height: 6,
            backgroundColor: "#f9f9f9",
            marginTop: 20
          }}
        >
          <div
            style={{
              maxWidth: "inherit",
              width: `${percent}%`,
              height: 6,
              borderRadius: 6,
              backgroundColor: "#008253"
            }}
          ></div>
        </div>
        <h3 className="campaigns_h3" style={{ whiteSpace: 'pre', height: 'auto', overflow: 'hidden', textOverflow: 'ellipsis' }}>{title}</h3>
        <h6 className="campaigns_h6" style={{ height: 60, lineHeight: 1.5, overflow: 'hidden', textOverflow: 'ellipsis' }}>{summary}</h6>
        <div className="viewCampaign">
          <Link to={`/campaign/${campaignId.toLowerCase()}`}>
            <div className="viewCampaignBorder">
              <span>View Campaign</span>
              <i className="fas fa-arrow-right"></i>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
