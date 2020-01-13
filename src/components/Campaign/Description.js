import React from 'react';

const Description = (props) => {

    const { campaign, renderArticle } = props;

    return (
        <div
            id="Description"
            className="tabcontent"
            style={{ display: "block", marginTop: 40, fontSize: 15 }}
            dangerouslySetInnerHTML={renderArticle(campaign.description)}
        />
    )
}

export default Description;
