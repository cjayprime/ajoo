import React from 'react';

import commentImage from "../../assets/images/post-image.png";
import clock from "../../assets/images/clock.svg";
import Loadablebutton from "../../sharedComponent/LoadableButton";

const Comment = (props) => {
    return (
        <div id="" className="tabcontent" style={{ display: "block", marginTop: 41, textAlign: "center" }}>
            {/* <div className="comment"> */}
            {/* comment response */}
            {/* {Array.apply(null, Array(5)).map((a, i) => (
                    <div className="comment__response">
                        <div className="comment__image">
                            <img src={commentImage}
                                alt="person image"
                            />
                        </div>
                        <div className="post__details">
                            <div className="post__head">
                                <div className="poster__name">
                                    <b>hello</b>
                                </div>
                                <div className="post__date">
                                    <img src={clock} alt="clock icon" />
                                    <span>3 days ago</span>
                                </div>
                            </div>
                            <div className="comment__details">
                                I really like this campaign for this reason and that reason. its definitely not because
                                 I am directly involved with it. I promise, I’m telling the honest truth.
                                 I really like this campaign for this reason and that reason. its definitely not because
                                 I am directly involved with it. I promise, I’m telling the honest truth.
                                 I really like this campaign for this reason and that reason. its definitely not because
                                 I am directly involved with it. I promise, I’m telling the honest truth.
                            </div>
                        </div>
                    </div>
                ))} */}
            {/* <div className="more__comment-btn-div">
                    <Loadablebutton
                        className="more__comment-btn"
                        type="button"
                        btnTitle="Show More"
                    />
                </div> */}
            {/* </div> */}
            No Comment for this campaign
        </div>

    )
}

export default Comment;
