import React from 'react';
import { IMAGE_URL } from "../../utils/misc";

const Description = (props) => {

    const { campaign, renderArticle } = props;

    return (
        <>
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-around", width: "100%", marginTop: 25}}>
                {
                    campaign.imageUrl1 &&
                    <div style={{width: "30%"}}>
                        <img style={{width: "100%"}} src={IMAGE_URL + '' + campaign.imageUrl1} alt="1" />
                    </div>
                }
                {
                    campaign.imageUrl2 &&
                    <div style={{width: "30%"}}>
                        <img style={{width: "100%"}} src={IMAGE_URL + '' + campaign.imageUrl2} alt="2" />
                    </div>
                }
                {
                    campaign.imageUrl3 &&
                    <div style={{width: "30%"}}>
                        <img style={{width: "100%"}} src={IMAGE_URL + '' + campaign.imageUrl3} alt="3" />
                    </div>
                }
            </div>
            <div
                id="Description"
                className="tabcontent"
                style={{ display: "block", marginTop: 40, fontSize: 15 }}
                dangerouslySetInnerHTML={renderArticle(campaign.description)}
            />
        </>
    )
}

export default Description;
