import React, { Component } from 'react';
import StarRatings from "react-star-ratings";

import FormInputField from "../../sharedComponent/form";
import AlertDialog from "../../sharedComponent/AlertDialog";
import ImageUpload from "../../sharedComponent/ImageUpload";
import LoadableButton from "../../sharedComponent/LoadableButton";
import { campaignRequest } from "../../store/campaignModules/saga";

import { IMAGE_URL, validate, isRequestActive } from "../../utils/misc";

const VolunteerList = ({ url, title, name }) => {
  return (
    <div className="campaign--volunteers-list-item" style={{width: 150}}>
      <img src={`${IMAGE_URL}60_60_${url}`} alt={`${title}`} />
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <p>{name}</p>
        {/*<div style={{ marginTop: 20 }}>
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
  </div>*/}
      </div>
    </div>
  );
};

//const preImage = `${IMAGE_URL}363_232_`;

export default class CloseCampaign extends Component {

    state = {
        images: [],
        index: "",
        submitted: false,
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
        const { name, value } = e.target;
        
        newState.fields[name].error = false;
        newState.fields[name].value = value;
        
        this.setState(newState);

        validate(this, this.state.fields, e);
    };

    onBlur = (res, name) => {
        const { error, errorMessage } = res;
        let newForm = { ...this.state };
        newForm.fields[name] = {
            ...newForm.fields[name],
            error,
            errorMessage
        };

        this.setState(newForm);
    };

    triggerThankYouImageUpload = (index) => {
      const { images } = this.state;
      const { showPercentageProgress } = this.props;
  
      this.props.uploadCampaignThankYouImage({
        data: {
          image: images[index],
          id: this.props.history.location.state.campaign._id
        },
        showPercentageProgress,
        imageNumber: index + 1
      });
    };

    setImage = (image, index) => {
        var images = this.state.images;
        images[index] = image;
        this.setState({ images, index }, () => this.triggerThankYouImageUpload(index));
    };

    save = e => {

        if(validate(this, this.state.fields) && this.state.images[0] && this.state.images[1]){
            this.props.closeCampaign({
                message: this.state.fields.message.value,
                id: this.props.history.location.state.campaign._id,
                campaign_id: this.props.history.location.state.campaign.campaign_id,
                success: () => {}
            });
        }else{
            this.setState({
                submitted: true
            });
        }

    };

    render() {
        const { fields: message } = this.state;
        const { utils, campaign } = this.props;
        return (
            <>
                <AlertDialog
                    open={
                        utils.feedback.for === campaignRequest.userCampaignRequest ||
                        utils.feedback.for === campaignRequest.closeCampaignRequest ||
                        utils.feedback.for === campaignRequest.uploadThankYouImageRequest

                    }
                    message={utils.feedback.message}
                    success={utils.feedback.success}
                />

                <div className="edit__campaign">
                    <div className="edit__campaign-head">
                        <div className="edit__campaign-head-title">
                            Close Campaign
                        </div>
                    </div>







                    <div className="campaign__info">
                        <h3 className="campaign__info-title">Campaign Info</h3>
                        <hr className="campaign-hr" />
                        <div className="campaign__info-body" style={{ justifyContent: "space-between" }}>
                            <div className="campaign__info-desc" style={{ width: "40%", flexShrink: "0" }}>
                                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                    <div>
                                        CAMPAIGN GOAL
                                        <div style={{ fontWeight: "bolder", fontSize: 20, marginTop: 10 }}>N{campaign.pledged === null ? 0 : campaign.pledged}</div>
                                    </div>
                                    <div>
                                        CAMPAIGN DONATIONS
                                        <div style={{ fontWeight: "bolder", fontSize: 20, marginTop: 10 }}>N{campaign.amount}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="campaign__info-form" style={{ width: "45%", alignItems: "end" }}>
                                <div className="createCampaign_form">
                                    <FormInputField
                                        type="textarea"
                                        name="message"
                                        value={message.value}
                                        onBlur={this.onBlur}
                                        form={this.state.fields}
                                        style={{height: 200, width: "100%"}}
                                        required
                                        validate={validate}
                                        onChange={this._handleChange}
                                        labelTitle="Thank you message to donors"
                                        className="createCampaign_form-goal"
                                    />
                                </div>
                                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                    <div style={{ height: 260, width: "46.5%", marginTop: 30, marginLeft: 0 }}>
                                        <label style={{ color: !this.state.images[0] && this.state.submitted ? "red" : "inherit" }}>
                                            {!this.state.images[0] && this.state.submitted ? "SELECT YOUR FIRST THANK YOU IMAGE" : ""}
                                        </label>
                                        <ImageUpload
                                            image={this.state.images[0]}
                                            setImage={(image) => this.setImage(image, 0)}
                                            fileUploadProgress={utils.fileUploadProgress}
                                            //editImageUrl={this.editCampaign && this.editCampaign.imageUrl}
                                            isUploading={
                                                this.state.index === 0 &&
                                                isRequestActive(utils.request, campaignRequest.uploadThankYouImageRequest)
                                            }
                                        />
                                    </div>
                                    <div style={{ height: 260, width: "46.5%", marginTop: 30, marginLeft: 25 }}>
                                        <label style={{ color: !this.state.images[1] && this.state.submitted ? "red" : "inherit" }}>
                                            {!this.state.images[1] && this.state.submitted ? "SELECT YOUR SECOND THANK YOU IMAGE" : ""}
                                        </label>
                                        <ImageUpload
                                            image={this.state.images[1]}
                                            setImage={(image) => this.setImage(image, 1)}
                                            fileUploadProgress={utils.fileUploadProgress}
                                            //editImageUrl={this.editCampaign && this.editCampaign.imageUrl}
                                            isUploading={
                                                this.state.index === 1 &&
                                                isRequestActive(utils.request, campaignRequest.uploadThankYouImageRequest)
                                            }
                                        />
                                    </div>
                                </div>
                                <div style={{ display: "flex", justifyContent: "end", cursor: "pointer" }}>
                                    <LoadableButton
                                        error={false}
                                        className="edit__camp-img-btn"
                                        btnTitle="Save Message"
                                        isLoading={
                                            isRequestActive(utils.request, campaignRequest.closeCampaignRequest)
                                        }
                                        onClick={this.save}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>







                    <div className="campaign__info">
                        <h3 className="campaign__info-title">Volunteer</h3>
                        <hr className="campaign-hr" />
                        <div className="campaign--volunteers-list" style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap" }}>
                            {
                                this.props.campaigns.volunteers.map((v, i) => (
                                    <VolunteerList
                                        key={i}
                                        name={v.first_name + " " + v.last_name}
                                        title={v.first_name + " " + v.last_name}
                                        url={v.image_url}
                                    />
                                ))
                            }
                        </div>
                        <div className="campaign__info-body">
                            <div className="campaign__info-desc">
                            </div>
                            <div className="campaign__info-form" style={{ width: "100%"}}>
                                <div style={{ width: "100%", display: "flex", justifyContent: "end", cursor: "pointer" }}>
                                    {/*<LoadableButton
                                        error={
                                            false
                                        }
                                        className="edit__camp-img-btn"
                                        btnTitle="Save Rating"
                                        isLoading={
                                            isRequestActive(utils.request, campaignRequest.uploadCampaignImageRequest)
                                        }
                                        onClick={this.save}
                                    />*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

