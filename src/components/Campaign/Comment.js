import React from 'react';

import commentImage from "../../assets/images/post-image.png";
import clock from "../../assets/images/clock.svg";
import Loadablebutton from "../../sharedComponent/LoadableButton";

const Comment = (props) => {
    return (
        <div id="" className="tabcontent" style={{ display: "block", marginTop: 41 }}>
            <div className="comment">
                {/* comment box */}
                {/*<div className="comment__box">
                    <div className="comment__box-title">
                        Post a comment
                    </div>
                    <div className="comment__box-square">
                        <textarea />
                    </div>
                    <div className="comment__box-button-div">
                        <Loadablebutton
                            type="submit"
                            btnTitle="post comment"
                            className="comment__box-btn"
                        />
                    </div>
                </div>
                */}
                {/* comment response */}
                {/* <div className="comment__response">
                    <div className="comment__image">
                        <img src={commentImage}
                            alt="person image"
                        />
                    </div>
                    <div className="post__details">
                        <div className="post__head">
                            <div className="poster__name">hello</div>
                            <div className="post__date">
                                <img src={clock} alt="clock icon" />
                                <span>3 days ago</span>
                            </div>
                        </div>
                        <div className="comment__details">
                            I really like this campaign for this reason and that reason. its definitely not because
                             I am directly involved with it. I promise, I’m telling the honest truth.
                    </div>
                        <div className="comment__reply">Reply</div>
                    </div>
                </div>
                  */}
            </div>
        </div>
    )
}

export default Comment;
