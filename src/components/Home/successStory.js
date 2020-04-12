import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { IMAGE_URL } from "../../utils/misc";
import Spinner from "../../sharedComponent/Spinner";

class SuccessStory extends Component {
    render() {
        const {
            completedCampaigns,
            isCampaignFetching
        } = this.props;
        return (
            <>
                <div className="home-success">
                    <h2>Success Stories</h2>

                    <div>
                        {isCampaignFetching ? (
                            <Spinner />
                        ) : (
                                <>
                                    {completedCampaigns.campaigns && completedCampaigns.campaigns.length > 0 ? (
                                        <div className="stories">
                                            {completedCampaigns.campaigns.map((c, i) => {
                                                var src = c.imageUrl;
                                                var title = c.title;
                                                src = src ? IMAGE_URL + '363_232_' + src : 'images/image-404.jpg';
                                                var alt = src ? title : 'Image not found';
                                                if (i > 2) return null;
                                                return (
                                                    <div key={i}>
                                                        <div key={c._id} className="story-body">
                                                            <img src={src} alt={alt} />
                                                            <Link to={"/campaign/" + c.campaign_id.toLowerCase()}>
                                                                <div className="success-category">
                                                                    <span style={{ padding: 20 }}>{c.title}
                                                                    </span>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>

                                    ) : (
                                            <span
                                                style={{
                                                    fontFamily: "Muli",
                                                    fontSize: "23px",
                                                    marginTop: "30px",
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    textTransform: "uppercase"
                                                }}>
                                                no success stories yet
                                            </span>
                                        )}
                                </>
                                // <>p</>
                            )}
                    </div>
                </div>
                <div className="button_home">
                    <Link to="/success_stories">
                        <button className="allButton">VIEW MORE</button>
                    </Link>
                </div>
            </>
        )
    }
}

// SuccessStory.defaultProps = {
//     completedCampaigns: {
//         campaigns: [],
//         total_records: "",
//         total_pages: "",
//         current_page: ""
//     }
// };

export default SuccessStory;