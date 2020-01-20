import React, { PureComponent } from 'react';

import LoadableButton from "../../sharedComponent/LoadableButton";
import Arrow from "../../assets/images/volunteerarrow.png";

class VolunteerDocument extends PureComponent {
    render() {
        return (
            <>
                <div className="volunteer_document">
                    <div onClick={this.back} style={{ cursor: "pointer" }}>
                        <img src={Arrow} alt="Arrow" style={{ paddingRight: "23px" }} />
                        Back
                    </div>
                    <h3>Identity Verification</h3>
                    <hr />
                    <div className="identify_verification">
                        <div className="identify_verification-column1">
                            <h5>Upload a readable copy any one of your National ID
                                 cards <br /> (National ID card, Voter’s Card, etc)
                            </h5>
                        </div>
                        <div className="identify_verification-column2">
                            <img alt="verification" src="images/drag.svg" />
                            <LoadableButton
                                className="volunteer_button"
                                btnTitle="Save Changes"
                            />
                        </div>
                    </div>
                    <h3>Proof of Address</h3>
                    <hr />
                    <div className="identify_verification">
                        <div className="identify_verification-column1">
                            <h5>Upload a copy of your most recent electricity bill.
                            </h5>
                        </div>
                        <div className="identify_verification-column2">
                            <img alt="verification" src="images/drag.svg" />
                            <LoadableButton
                                className="volunteer_button"
                                btnTitle="Save Changes"
                            />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default VolunteerDocument;