import React, { PureComponent } from 'react';

import success1 from "../../assets/images/success1.png";
import success2 from "../../assets/images/success2.png";
import completed from "../../assets/images/completed.png";
import { categoryColor } from "../../utils/misc";
import { Link } from "react-router-dom";

class Success extends PureComponent {
    render() {
        const images = [
            {
                photo: success1,
                alt: "children smiling"
            },
            {
                photo: success2,
                alt: "woman coding"
            },
            {
                photo: success1,
                alt: "children smiling"
            },
            {
                photo: success2,
                alt: "woman coding"
            },
            {
                photo: success1,
                alt: "children smiling"
            },
            {
                photo: success2,
                alt: "woman coding"
            }
        ];

        return (
            <>
                <div className="success__stories-campaign">
                    <div className="success_row">
                        {images.map((image, i) => (
                            <div className="topCampaigns_column3">
                                <div className="success__card">
                                    <img
                                        src={image.photo}
                                        alt={image.alt}
                                    />
                                    <div className="success__card-label">
                                        <div className="success__card-com">
                                            <img src={completed} alt="completed icon" />
                                            <span>Completed</span>
                                        </div>
                                        <div>
                                            <label style={{ backgroundColor: categoryColor["support"] }}>
                                                Support
                                    </label>
                                        </div>
                                    </div>
                                    <div className="success__card-desc">
                                        <h3 className="success_h3" style={{ whiteSpace: 'pre', height: 'auto', overflow: 'hidden', textOverflow: 'ellipsis' }}>Community Support</h3>
                                        <h6 className="success_h6" style={{ height: 60, lineHeight: 1.5, overflow: 'hidden', textOverflow: 'ellipsis' }}>I need help to set up my Fintech startup and I need help with initial funding something something. </h6>
                                        <div className="viewCampaign-success">
                                            <Link to="/campaigns">
                                                <div className="viewCampaignBorder">
                                                    <span>View Campaign</span>
                                                    <i className="fas fa-arrow-right"></i>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        )
    }
}

export default Success;