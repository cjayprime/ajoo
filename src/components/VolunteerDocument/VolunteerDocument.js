import React, { Component } from 'react';

import AlertDialog from "../../sharedComponent/AlertDialog";
import LoadableButton from "../../sharedComponent/LoadableButton";
import ImageUpload from "../../sharedComponent/ImageUpload";
import Arrow from "../../assets/images/volunteerarrow.png";
import { isRequestActive } from "../../utils/misc";
import { campaignRequest } from "../../store/campaignModules/saga";

class VolunteerDocument extends Component {

    state = {
        documentImage: '',
        billImage: ''
    };

    triggerDocumentUpload = () => {
      const { documentImage } = this.state;
      const { showPercentageProgress } = this.props;
      
      this.props.uploadVolunteerIdentificationDocument({
        data: {
          file: documentImage
        },
        showPercentageProgress
      });
    };
  
    setDocumentImage = documentImage => {
      this.setState({ documentImage });
    };

    triggerBillImageUpload = () => {
      const { billImage } = this.state;
      const { showPercentageProgress } = this.props;
      
      this.props.uploadVolunteerBill({
        data: {
          file: billImage
        },
        showPercentageProgress
      });
    };
  
    setBillImage = billImage => {
      this.setState({ billImage });
    };

    render() {
        const { utils } = this.props;

        return (
            <>
                <AlertDialog
                    open={
                        utils.feedback.for === campaignRequest.uploadVolunteerBillImageRequest ||
                        utils.feedback.for === campaignRequest.uploadVolunteerIdentificationDocumentRequest
                    }
                    message={utils.feedback.message}
                    success={utils.feedback.success}
                />
                <div className="volunteer_document">
                    <div onClick={this.back} style={{ cursor: "pointer" }} onClick={() => this.props.history.push("/volunteer")}>
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
                            {/*<img alt="verification" src="images/drag.svg" />*/}
                            <div style={{height: 275, width: 300}}>
                                <ImageUpload
                                    alt="verification"
                                    id="individual_relevant_document"
                                    rejectBase64={true}
                                    image={this.state.documentImage}
                                    setImage={this.setDocumentImage}
                                    fileUploadProgress={utils.fileUploadProgress}
                                    isUploading={
                                        isRequestActive(utils.request, campaignRequest.uploadVolunteerIdentificationDocumentRequest)
                                    }
                                />
                            </div>
                            <LoadableButton
                                className="volunteer_button"
                                btnTitle="Save Changes"
                                onClick={this.triggerDocumentUpload}
                                isLoading={
                                  isRequestActive(utils.request, campaignRequest.uploadVolunteerIdentificationDocumentRequest)
                                }
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
                            {/*<img alt="verification" src="images/drag.svg" />*/}
                            <div style={{height: 275, width: 300}}>
                                <ImageUpload
                                    alt="verification"
                                    id="individual_relevant_document"
                                    rejectBase64={true}
                                    image={this.state.billImage}
                                    setImage={this.setBillImage}
                                    fileUploadProgress={utils.fileUploadProgress}
                                    isUploading={
                                        isRequestActive(utils.request, campaignRequest.uploadVolunteerBillImageRequest)
                                    }
                                />
                            </div>
                            <LoadableButton
                                className="volunteer_button"
                                btnTitle="Save Changes"
                                onClick={this.triggerBillImageUpload}
                                isLoading={
                                  isRequestActive(utils.request, campaignRequest.uploadVolunteerBillImageRequest)
                                }
                            />
                        </div>
                    </div>
                    <div style={{ width: "100%", marginTop: 100, display: "flex", justifyContent: "flex-end" }}>
                        <LoadableButton
                            className="volunteer_button"
                            btnTitle="Next"
                            onClick={() => this.props.history.push("/volunteer")}
                        />
                    </div>
                </div>
            </>
        )
    }
}

export default VolunteerDocument;