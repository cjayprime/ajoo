import React from 'react'
import { Link } from "react-router-dom";

import completed from "../assets/images/completed.png";
import { IMAGE_URL, categoryColor } from "../utils/misc";

const SuccessCard = props => {
    var {
        src,
        labelClass,
        category,
        campaignId,
        title,
        summary
    } = props;
    src = src ? IMAGE_URL + '363_232_' + src : 'images/image-404.jpg';
    var alt = src ? title : 'Image not found';
    return (
        <div className="topCampaigns_column3">
            <div className="success__card">
                <img
                    src={src}
                    alt={alt}
                />
                <div className="success__card-label">
                    <div className="success__card-com">
                        <img src={completed} alt="completed icon" />
                        <span>Completed</span>
                    </div>
                    <div>
                        <label
                            className={labelClass}
                            style={{
                                backgroundColor: categoryColor[category]
                            }}
                        >
                            Support
                        </label>
                    </div>
                </div>
                <div className="success__card-desc">
                    <h3 className="success_h3" style={{ whiteSpace: 'pre', height: 'auto', overflow: 'hidden', textOverflow: 'ellipsis' }}>{title}</h3>
                    <h6 className="success_h6" style={{ height: 60, lineHeight: 1.5, overflow: 'hidden', textOverflow: 'ellipsis' }}>{summary}</h6>
                    <div className="viewCampaign-success">
                        <a href={`/campaign/${campaignId.toLowerCase()}`}>
                            <div className="viewCampaignBorder">
                                <span>View Campaign</span>
                                <i className="fas fa-arrow-right"></i>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default SuccessCard;