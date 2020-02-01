import React, { Component } from "react";

import LoadableButton from "../../sharedComponent/LoadableButton";
import ImageUpload from "../../sharedComponent/ImageUpload";
import Arrow from "../../assets/images/Arrow.svg";
import AlertDialog from "../../sharedComponent/AlertDialog";
import { isRequestActive } from "../../utils/misc";

class CampaignFeatureImage extends Component {

  state = {
    index: -1,
    image: []
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      utils,
      //imageVal,
      setImage,
      campaignRequest,
      formError,
      //isEdit,
      editImageUrl,
      //triggerImageUpload
      createdCampaign
    } = this.props;

    return (
      <div className="create_campaign1">
        <AlertDialog
          open={
            utils.feedback.for ===
            campaignRequest.uploadCampaignImageRequest
          }
          message={utils.feedback.message}
          success={utils.feedback.success}
        />
        <div className="campaign_image-column1">
          <img alt="sign in" src="images/sign_in.svg" />
        </div>
        <div className="campaign_image-column2" style={{width: "100%"}}>
          <div onClick={this.back} style={{ cursor: "pointer", marginBottom: 60 }}>
            <img src={Arrow} alt="Arrow" style={{ paddingRight: "5px" }} />
            Back
          </div>
          <div style={{ textAlign: "center" }}>
            <label className="createCampaign_desc" style={{fontSize: 15, color: "red"}}>
              {formError &&
                    "Oops! There's something wrong! Try again!"}
            </label><br/><br/>
            <label>Campaign Images</label>{" "}
          </div>
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", textAlign: "center" }}>
            <div style={{ height: 260, width: 260 }}>
              <ImageUpload
                image={this.state.image[0]}
                setImage={(image) => {
                  var img = this.state.image;
                  img[0] = image;
                  this.setState({image1: img, index: 0});
                  setImage(image, 1);
                }}
                fileUploadProgress={utils.fileUploadProgress}
                editImageUrl={editImageUrl}
                isUploading={
                  this.state.index === 0 && isRequestActive(utils.request, campaignRequest.uploadCampaignImageRequest)
                }
              />
            </div>
            <div style={{ height: 260, width: 260 }}>
              <ImageUpload
                image={this.state.image[1]}
                setImage={(image) => {
                  var img = this.state.image;
                  img[1] = image;
                  this.setState({image: img, index: 1});
                  setImage(image, 2);
                }}
                fileUploadProgress={utils.fileUploadProgress}
                editImageUrl={editImageUrl}
                isUploading={
                  this.state.index === 1 && isRequestActive(utils.request, campaignRequest.uploadCampaignImageRequest)
                }
              />
            </div>
            <div style={{ height: 260, width: 260 }}>
              <ImageUpload
                image={this.state.image[2]}
                setImage={(image) => {
                  var img = this.state.image;
                  img[2] = image;
                  this.setState({image: img, index: 2});
                  setImage(image, 3);
                }}
                fileUploadProgress={utils.fileUploadProgress}
                editImageUrl={editImageUrl}
                isUploading={
                  this.state.index === 2 && isRequestActive(utils.request, campaignRequest.uploadCampaignImageRequest)
                }
              />
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {console.log('Created Campaign::: ', createdCampaign)}
              <LoadableButton
                error={
                  false
                  /*formError &&
                  "There is something wrong! Ensure you've added a campaign"*/
                }
                className="campaign_image-btn"
                btnTitle={"Submit Campaign"}
                isLoading={
                  isRequestActive(utils.request, campaignRequest.uploadCampaignImageRequest)
                }
                onClick={() => {
                  window.location = "/campaign/" + createdCampaign.campaign_id.toLowerCase();
                }}
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