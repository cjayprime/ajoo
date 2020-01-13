import React, { PureComponent } from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import LoadableButton from "../../sharedComponent/LoadableButton";
import FormInputField from "../../sharedComponent/form";
import Arrow from "../../assets/images/Arrow.svg";
import { isRequestActive } from "../../utils/misc";
import RewardForm from "./rewardForm";

class CreateCampaignForm2 extends PureComponent {
  state = {
    submitted: false
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  
  continue = e => {
    
    e.preventDefault();
    
    if(this.props.validate()){
      this.setState({submitted: true});
      this.props.triggerCampaignAction(e);
    }
    
  };

  componentDidUpdate(prevProps, prevState){
    
    if(prevState.submitted !== this.state.submitted && this.state.submitted === true){
      if(isRequestActive(this.props.utils.request, this.props.campaignRequest.userCampaignRequest))
      this.props.nextStep();
    }
  
  }

  render() {
    const {
        form,
        _handleChange,
        onBlur,
        typeItem,
        utils,
        triggerCampaignAction,
        campaignRequest,
        isEdit,
        editCampaign
      } = this.props,
      { fields: field, formError } = form,
      { summary, campaign_details, types } = field;
    return (
      <>
        <div className="create_campaign1">
          <div className="createCampaign_column1">
            <img alt="icons" src="images/sign_in.svg" />
          </div>
          <div className="createCampaign_column2">
            <img alt="icons" src="images/line.svg" />
          </div>
          <div className="createCampaign_column3">
            <div onClick={this.back} style={{ cursor: "pointer", marginBottom: 60 }}>
              <img src={Arrow} alt="Arrow" style={{ paddingRight: "5px" }} />
              Back
            </div>
            <form onSubmit={triggerCampaignAction}>
              <div className="createCampaign_form">
                <FormInputField
                  type="textarea"
                  name="summary"
                  value={summary.value}
                  onBlur={onBlur}
                  form={field}
                  maxlength="50"
                  style={{ resize: "none" }}
                  onChange={_handleChange}
                  labelTitle="CAMPAIGN SUMMARY"
                  labelRight="0 / 50"
                  className="createCampaign_form-summary"
                />
              </div>
              <div className="createCampaign_form">
                <label className="createCampaign_desc" style={{ color: campaign_details.error ? "red" : "inherit" }}>
                  {campaign_details.error ? campaign_details.errorMessage : 'Campaign Description'}
                </label>
                <div className="createCampaign_form-textarea">
                  <CKEditor
                    editor={ClassicEditor}
                    data={campaign_details.value}
                    onInit={editor => {
                      _handleChange(null, {
                        name: "campaign_details",
                        data: isEdit ? editCampaign.description : ""
                      });
                    }}
                    name="campaign_details"
                    onChange={(event, editor) => {
                      const data = editor.getData();
                      _handleChange(event, { name: "campaign_details", data });
                    }}
                    config={{
                      ckfinder: {
                        uploadUrl: `/pdf/uploadImage`
                      }
                    }}
                  />
                </div>
              </div>
              <div className="createCampaign_form">
                <FormInputField
                  type="select"
                  name="types"
                  value={types.value}
                  form={field}
                  onBlur={onBlur}
                  options={typeItem}
                  labelTitle="type of campaign"
                  onChange={_handleChange}
                  className="createCampaign_form-select createCampaign_form-type createCampaign_form-round"
                />
              </div>
              {/*<hr
                style={{
                  color: "#CACACA",
                  backgroundColor: "#CACACA",
                  width: "100%",
                  marginTop: 50,
                  marginBottom: 50,
                  width: 410
                }}
              />
              <RewardForm
                form={form}
                request={utils.request}
                _handleChange={_handleChange}
                onBlur={onBlur}
                typeItem={typeItem}
                utils={utils}
                triggerCampaignAction={triggerCampaignAction}
                campaignRequest={campaignRequest}
                isEdit={isEdit}
                editCampaign={editCampaign}
              />{" "}
              <hr
                style={{
                  color: "#CACACA",
                  backgroundColor: "#CACACA",
                  width: "100%",
                  marginTop: 50,
                  marginBottom: 50,
                  width: 410
                }}
              />*/}
              <div className="verificationbutton_center">
                <LoadableButton
                  error={formError}
                  onClick={this.continue}
                  className="campaign_image-btn"
                  btnTitle="Next"
                  isLoading={
                    isRequestActive(utils.request, campaignRequest.userCampaignRequest)
                  }
                  type="submit"
                />
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default CreateCampaignForm2;
