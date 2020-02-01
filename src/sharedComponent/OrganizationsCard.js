import React from "react";
import { Link } from "react-router-dom";

import { IMAGE_URL } from "../utils/misc";

const OrganizationsCard = props => {
    var {
        src,
        organization_name,
    } = props;
    src = src ? IMAGE_URL + '60_60_' + src : 'images/image-404.jpg';
    var alt = src ? organization_name : 'Image not found';
    return (
        <div className="verified_page-card">
            <div className="verified_page_first-card">
                <div className="verified_page_second-card">
                    <div className="verified_page_third-card">
                        <div className="verified_page_third-card-img">
                            <img
                                src={src}
                                alt={alt}
                            />
                        </div>
                        <div className="verified_page_third-card-title">
                            <b>{organization_name}</b>
                        </div>
                    </div>
                </div>
                <div className="verified_page_first-card-footer">
                    <Link to="/verified_org_campaigns">
                        <button className="verified_footer-firstbtn">
                            VIEW CAMPAIGNS
                            </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default OrganizationsCard;
