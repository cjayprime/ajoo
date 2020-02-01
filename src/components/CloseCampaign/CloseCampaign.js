import React, { Component } from 'react';
import StarRatings from "react-star-ratings";
//import { Link } from "react-router-dom";
//import CKEditor from "@ckeditor/ckeditor5-react";
//import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import FormInputField from "../../sharedComponent/form";
import AlertDialog from "../../sharedComponent/AlertDialog";
import ImageUpload from "../../sharedComponent/ImageUpload";
import LoadableButton from "../../sharedComponent/LoadableButton";
import { campaignRequest } from "../../store/campaignModules/saga";

import { IMAGE_URL, validate, isRequestActive } from "../../utils/misc";

//import OpenDonations from "./OpenDonations";

const VolunteerList = ({ url, title }) => {
  return (
    <div className="campaign--volunteers-list-item">
      <img src={`${IMAGE_URL}363_232_${url}`} alt={`${title}`} />
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <p>Preye Adebusola</p>
        <div style={{ marginTop: 20 }}>
            <StarRatings
                rating={4}
                numberOfStars={5}
                changeRating={rating => this.setState({ starRating: rating })}
                starRatedColor="#ffc94f"
                starEmptyColor="#BFBFBF"
                starHoverColor="#ffc94f"
                starDimension="30px"
                starSpacing="1px"
                name="rating"
                className="review-star"
            />
        </div>
      </div>
    </div>
  );
};

//const preImage = `${IMAGE_URL}363_232_`;

export default class CloseCampaign extends Component {

    state = {
        images: [],
        fields: {
            message: {
                value: "",
                error: false,
                errorMessage: "",
                name: "message",
                rules: {
                    required: true
                }
            }
        }
    };
    
    _handleChange = (e, text) => {
        let newState = { ...this.state };
        newState.formError = false;
        if (text && text.hasOwnProperty("name")) {
            const { name, data } = text;
            newState.fields[name].error = false;
            newState.fields[name].value = data;
            this._safelySetState(newState);
            return;
        }
        const { name, value } = e.target;
        if (newState.rewardFields.hasOwnProperty(name)) {
            newState.rewardFields[name].error = false;
            newState.rewardFields[name].value = value;
        } else {
            newState.fields[name].error = false;
            newState.fields[name].value = value;
        }
        this._safelySetState(newState);

        validate(this, this.state.fields, e);
    };

    onBlur = (res, name) => {
        const { error, errorMessage } = res;
        let newForm = { ...this.state };
        if (newForm.rewardFields.hasOwnProperty(name)) {
            newForm.rewardFields[name] = {
                ...newForm.rewardFields[name],
                error,
                errorMessage
            };
        } else {
            newForm.fields[name] = {
                ...newForm.fields[name],
                error,
                errorMessage
            };
        }

        this.setState(newForm);
    };

    setImage = image => {
        this.setState({ image });
    };

    save = e => {

    };

    render() {
        const { fields: message } = this.state;
        const { utils, history, campaign } = this.props;
        
        return (
            <>
                <AlertDialog
                    open={
                        utils.feedback.for === campaignRequest.userCampaignRequest

                    }
                    message={utils.feedback.message}
                    success={utils.feedback.success}
                />

                <div className="edit__campaign">
                    <div className="edit__campaign-head">
                        <div className="edit__campaign-head-title">
                            Close Campaign
                        </div>
                        <div className="edit__campaign-heade-2">
                            <span className="edit__campaign-close" onClick={this.toggle} style={{ cursor: "pointer" }}>
                                Reopen Donations
                            </span>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAjCAYAAABVcWC0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAaSURBVHgB1cQxDQAADAKwZsonHWzwFP6KCQJtbQDFuhliogAAAABJRU5ErkJggg==" alt="line" className="edit__campaign-line" />
                            <span className="edit__campaign-delete" onClick={() => {}} style={{ cursor: "pointer" }}>
                                Close Campaign
                            </span>
                        </div>
                    </div>







                    <div className="campaign__info">
                        <h3 className="campaign__info-title">Campaign Info</h3>
                        <hr className="campaign-hr" />
                        <div className="campaign__info-body">
                            <div className="campaign__info-desc" style={{flexShrink:"0"}}>
                                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                    <div>
                                        CAMPAIGN GOAL
                                        <div style={{ fontWeight: "bolder", fontSize: 20, marginTop: 10 }}>N 230, 000.00</div>
                                    </div>
                                    <div>
                                        CAMPAIGN DONATIONS
                                        <div style={{ fontWeight: "bolder", fontSize: 20, marginTop: 10 }}>N 242, 579.00</div>
                                    </div>
                                </div>
                            </div>
                            <div className="campaign__info-form" style={{width:"100%"}}>
                                <div className="createCampaign_form">
                                    <FormInputField
                                        type="textarea"
                                        name="message"
                                        value={message.value}
                                        onBlur={this.onBlur}
                                        form={this.state.fields}
                                        style={{height: 200, width: "100%"}}
                                        required
                                        //validate={validate1}
                                        //onChange={this._handleChange}
                                        labelTitle="Thank you message to donors"
                                        className="createCampaign_form-goal"
                                    />
                                </div>
                                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                    <div style={{ height: 260, width: "46.5%", marginTop: 30, marginLeft: 0 }}>
                                        <ImageUpload
                                            image={this.state.images[0]}
                                            setImage={this.setImage}
                                            fileUploadProgress={utils.fileUploadProgress}
                                            //editImageUrl={this.editCampaign && this.editCampaign.imageUrl}
                                            isUploading={
                                                isRequestActive(utils.request, campaignRequest.uploadCampaignImageRequest)
                                            }
                                        />
                                    </div>
                                    <div style={{ height: 260, width: "46.5%", marginTop: 30, marginLeft: 25 }}>
                                        <ImageUpload
                                            image={this.state.images[1]}
                                            setImage={this.setImage}
                                            fileUploadProgress={utils.fileUploadProgress}
                                            //editImageUrl={this.editCampaign && this.editCampaign.imageUrl}
                                            isUploading={
                                                isRequestActive(utils.request, campaignRequest.uploadCampaignImageRequest)
                                            }
                                        />
                                    </div>
                                </div>
                                <div style={{ display: "flex", justifyContent: "end", cursor: "pointer" }}>
                                    <LoadableButton
                                        error={
                                            false
                                            /*formError &&
                                            "There is something wrong! Ensure you've added a campaign"*/
                                        }
                                        className="edit__camp-img-btn"
                                        btnTitle="Save Message"
                                        isLoading={
                                            isRequestActive(utils.request, campaignRequest.uploadCampaignImageRequest)
                                        }
                                        onClick={this.save}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>







                    <div className="campaign__info">
                        <h3 className="campaign__info-title">Volunteer Rating</h3>
                        <hr className="campaign-hr" />
                        <div className="campaign--volunteers-list" style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                            <VolunteerList title={campaign.title} url={campaign.imageUrl} />
                            <VolunteerList title={campaign.title} url={campaign.imageUrl} />
                            <VolunteerList title={campaign.title} url={campaign.imageUrl} />
                            <VolunteerList title={campaign.title} url={campaign.imageUrl} />
                            <VolunteerList title={campaign.title} url={campaign.imageUrl} />
                        </div>
                        <div className="campaign__info-body">
                            <div className="campaign__info-desc">
                            </div>
                            <div className="campaign__info-form" style={{ width: "100%"}}>
                                <div style={{ width: "100%", display: "flex", justifyContent: "end", cursor: "pointer" }}>
                                    <LoadableButton
                                        error={
                                            false
                                            /*formError &&
                                            "There is something wrong! Ensure you've added a campaign"*/
                                        }
                                        className="edit__camp-img-btn"
                                        btnTitle="Save Rating"
                                        isLoading={
                                            isRequestActive(utils.request, campaignRequest.uploadCampaignImageRequest)
                                        }
                                        onClick={this.save}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

