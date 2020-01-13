import React, { PureComponent } from "react";

import FormInputField from "../../sharedComponent/form";
import LoadableButton from "../../sharedComponent/LoadableButton";
import AlertDialog from "../../sharedComponent/AlertDialog";

class BasicInformation extends PureComponent {
  render() {
    const {
        form: { basicInformationFields: fields, action, formError },
        lgaItem,
        triggerOrganisationProfileAction,
        typeItems,
        categoryItems,
        stateItem,
        settingRequest,
        _handleChange,
        onBlur,
        utils
      } = this.props,
      {
        organization_name,
        organization_type,
        category,
        organization_mobile,
        secondary_mobile,
        organization_address,
        state,
        lga
      } = fields;
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
          <form onSubmit={triggerOrganisationProfileAction}>
            <div className="profileSettings_org_column2">
              <div className="profileSettings_form">
                <div className="profileSettings_form2">
                  <FormInputField
                    type="text"
                    placeholder="e.g Kola"
                    name="organization_name"
                    value={organization_name.value}
                    onBlur={onBlur}
                    form={fields}
                    onChange={_handleChange}
                    labelTitle="ORGANISATION NAME"
                  />
                </div>
                <div className="profileSettings_form2">
                  <FormInputField
                    type="select"
                    name="organization_type"
                    value={organization_type.value}
                    onBlur={onBlur}
                    options={typeItems}
                    form={fields}
                    onChange={_handleChange}
                    labelTitle="TYPE OF ORGANISATION"
                  />
                </div>
                <div className="profileSettings_form2">
                  <FormInputField
                    type="select"
                    name="category"
                    options={categoryItems}
                    value={category.value}
                    onBlur={onBlur}
                    form={fields}
                    onChange={_handleChange}
                    labelTitle="CATEGORY"
                  />
                </div>
                <div className="profileSettings_form2">
                  <FormInputField
                    type="text"
                    placeholder="Enter Phone Number"
                    name="organization_mobile"
                    value={organization_mobile.value}
                    onBlur={onBlur}
                    form={fields}
                    onChange={_handleChange}
                    labelTitle="PHONE NUMBER"
                  />
                </div>
                <div className="profileSettings_form2">
                  <FormInputField
                    type="text"
                    placeholder="Enter Phone Number"
                    name="secondary_mobile"
                    value={secondary_mobile.value}
                    onBlur={onBlur}
                    form={fields}
                    onChange={_handleChange}
                    labelTitle="SECONDARY PHONE NUMBER"
                  />
                </div>
                <div className="profileSettings_form2">
                  <FormInputField
                    type="text"
                    placeholder="Enter Address"
                    name="organization_address"
                    value={organization_address.value}
                    onBlur={onBlur}
                    form={fields}
                    onChange={_handleChange}
                    labelTitle="ADDRESS"
                  />
                </div>
                <div className="profileSettings_org_form1-location">
                  <div>
                    <FormInputField
                      type="select"
                      name="state"
                      value={state.value}
                      form={fields}
                      onBlur={onBlur}
                      options={stateItem}
                      labelTitle="STATE"
                      onChange={_handleChange}
                      className="profileSettings_org_form1-state-select"
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
                      labelTitle="LGA"
                      onChange={_handleChange}
                      className="profileSettings_org_form1-lga-select"
                    />
                  </div>
                </div>
              </div>
            </div>
            <AlertDialog
              open={
                utils.feedback.for === settingRequest.organisationProfileRequest
              }
              message={utils.feedback.message}
              success={utils.feedback.success}
            />
            <div className="profileSettings_org-btn">
              <LoadableButton
                error={formError && action === "basicInformationFields"}
                btnTitle="Save Changes"
                isLoading={
                  utils.request === settingRequest.organisationProfileRequest
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
