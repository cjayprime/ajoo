import React from 'react'
import { Link } from "react-router-dom";

const SuccessCard = props => {
    const { src, alt } = props
    return (
        <div className="topCampaigns_column3">
            <div className="success__card">
                <img
                    src={src}
                    alt={alt}
                />
            </div>
        </div>
    )

}

export default SuccessCard;