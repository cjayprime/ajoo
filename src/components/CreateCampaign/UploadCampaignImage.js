import React, { PureComponent } from "react";

import LoadableButton from "../../sharedComponent/LoadableButton";
import ImageUpload from "../../sharedComponent/ImageUpload";
import Arrow from "../../assets/images/Arrow.svg";
import AlertDialog from "../../sharedComponent/AlertDialog";
import { isRequestActive } from "../../utils/misc";

class CampaignFeatureImage extends PureComponent {
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      utils,
      imageVal,
      setImage,
      campaignRequest,
      formError,
      isEdit,
      editImageUrl,
      triggerImageUpload
    } = this.props;

    return (
      <div className="create_campaign1">
        <div className="campaign_image-column1">
          <img alt="sign in" src="images/sign_in.svg" />
        </div>
        <div className="campaign_image-column2">
          <div onClick={this.back} style={{ cursor: "pointer", marginBottom: 60 }}>
            <img src={Arrow} alt="Arrow" style={{ paddingRight: "5px" }} />
            Back
          </div>
          <div style={{ textAlign: "center" }}>
            <label className="createCampaign_desc" style={{fontSize: 15, color: "red"}}>
              {formError &&
                    "Oops! There's something wrong! Try again!"}
            </label><br/><br/>
            <label>Campaign Feature Image</label>{" "}
            <AlertDialog
              open={
                utils.feedback.for ===
                campaignRequest.uploadCampaignImageRequest
              }
              message={utils.feedback.message}
              success={utils.feedback.success}
            />
            <div style={{ height: 260, width: 260, marginTop: 30, marginLeft: 25 }}>
              <ImageUpload
                image={imageVal}
                setImage={setImage}
                fileUploadProgress={utils.fileUploadProgress}
                editImageUrl={editImageUrl}
                isUploading={
                  isRequestActive(utils.request, campaignRequest.uploadCampaignImageRequest)
                }
              />
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <LoadableButton
                error={
                  false
                  /*formError &&
                  "There is something wrong! Ensure you've added a campaign"*/
                }
                className="campaign_image-btn"
                btnTitle={isEdit ? "Edit Campaign" : "Submit Campaign"}
                isLoading={
                  isRequestActive(utils.request, campaignRequest.uploadCampaignImageRequest)
                }
                onClick={triggerImageUpload}
              />
            </div>
          </div>
        </div>
        <hr className="hr1" />
      </div>
    );
  }
}

export default CampaignFeatureImage;
