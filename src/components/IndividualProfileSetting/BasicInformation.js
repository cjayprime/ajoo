import React, { PureComponent } from "react";

import FormInputField from "../../sharedComponent/form";
import LoadableButton from "../../sharedComponent/LoadableButton";
import AlertDialog from "../../sharedComponent/AlertDialog";
import ImageUpload from "../../sharedComponent/ImageUpload";
import { authRequest } from "../../store/authModules/saga";
import { isRequestActive } from "../../utils/misc";

class BasicInformation extends PureComponent {
  render() {
    const {
        form: { basicInformationFields: fields, action, formError },
        lgaItem,
        triggerIndividualProfileAction,
        stateItem,
        settingRequest,
        _handleChange,
        onBlur,
        request,
        imageVal,
        setImage
      } = this.props,
      { first_name, last_name, mobile, lga, state } = fields;
      
    return (
      <div
        id="Profile Settings"
        className="tabcontent"
        style={{ display: "block" }}
      >
        <div className="campaigns_div" id="profile_div">
          <div className="profileSettings_column1">
            <h3>Basic Information</h3>
          </div>
          <form onSubmit={triggerIndividualProfileAction}>
            <div className="profileSettings_column2">
              <div className="profileSettings_form">
                <div className="profileSettings_form1">
                  <div>
                    <FormInputField
                      type="text"
                      placeholder="e.g Kola"
                      name="first_name"
                      className="profileSettings_form1_first-name"
                      value={first_name.value}
                      onBlur={onBlur}
                      form={fields}
                      onChange={_handleChange}
                      labelTitle="FIRST NAME"
                    />
                  </div>
                  <div>
                    <FormInputField
                      type="text"
                      name="last_name"
                      className="profileSettings_form1_last-name"
                      value={last_name.value}
                      onBlur={onBlur}
                      form={fields}
                      onChange={_handleChange}
                      placeholder="e.g James"
                      labelTitle="LAST NAME"
                    />
                  </div>
                </div>
                <div className="profileSettings_form2-mobile">
                  <FormInputField
                    type="text"
                    name="mobile"
                    value={mobile.value}
                    onBlur={onBlur}
                    form={fields}
                    onChange={_handleChange}
                    placeholder="+234 813 657 9879"
                    labelTitle="PHONE NUMBER"
                  />
                </div>
                <div className="profileSettings_form1-location">
                  <div>
                    <FormInputField
                      type="select"
                      name="state"
                      value={state.value}
                      form={fields}
                      onBlur={onBlur}
                      options={stateItem}
                      className="profileSettings_form1-state-select"
                      labelTitle="STATE"
                      onChange={_handleChange}
                    />
                  </div>
                  <div>
                    <FormInputField
                      type="select"
                      name="lga"
                      value={lga.value}
                      form={fields}
                      onBlur={onBlur}
                      options={lgaItem}
                      className="profileSettings_form1-lga-select"
                      labelTitle="LGA"
                      onChange={_handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="profileSettings_image">
                <div style={{ height: 260, width: 260 }}>
                  <ImageUpload
                    image={imageVal}
                    setImage={setImage}
                    toolTipText="Change profile image"
                    fileUploadProgress={request.fileUploadProgress}
                    isUploading={isRequestActive(
                      request.request,
                      authRequest.uploadProfileImageRequest
                    )}
                  />
                </div>
              </div>
            </div>
            <AlertDialog
              open={
                request.feedback.for === settingRequest.individualProfileRequest
              }
              message={request.feedback.message}
              success={request.feedback.success}
            />
            <div className="profileSettings_button">
              <LoadableButton
                error={formError && action === "basicInformationFields"}
                btnTitle="Save Changes"
                isLoading={
                  isRequestActive(
                    request.request,
                    settingRequest.individualProfileRequest
                  ) ||
                  isRequestActive(
                    request.request,
                    authRequest.uploadProfileImageRequest
                  )
                }
                type="submit"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default BasicInformation;
