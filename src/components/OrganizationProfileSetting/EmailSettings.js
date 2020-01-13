import React, { PureComponent } from "react";

import FormInputField from "../../sharedComponent/form";
import LoadableButton from "../../sharedComponent/LoadableButton";
import AlertDialog from "../../sharedComponent/AlertDialog";
// import { file } from "@babel/types";

class EmailSetting extends PureComponent {
  render() {
    const {
        form: { emailChangeField: fields, action, formError },
        triggerOrganisationEmailProfileAction,
        settingRequest,
        _handleChange,
        utils,
        onBlur
      } = this.props,
      { new_email, password } = fields;
    return (
      <div className="campaigns_div" id="profile_div">
        <div className="accountSettings_column1">
          <h3>Change Email Address</h3>
          <p>
            Change your default email address. All default notifications will be
            sent to the new address. Kindly note that the new email address will
            have to be verified.
          </p>
        </div>
        <form onSubmit={triggerOrganisationEmailProfileAction}>
          <div className="accountSettings_org_column2">
            <div className="accountSettings_form">
              <div className="accountSettings_form2">
                <FormInputField
                  type="text"
                  placeholder="email@email.com"
                  name="new_email"
                  value={new_email.value}
                  onBlur={onBlur}
                  form={fields}
                  onChange={_handleChange}
                  labelTitle="EMAIL ADDRESS"
                />
              </div>
              <div className="accountSettings_form2">
                <FormInputField
                  type="password"
                  placeholder="**********************"
                  name="password"
                  value={password.value}
                  onBlur={onBlur}
                  form={fields}
                  onChange={_handleChange}
                  labelTitle="CURRENT PASSWORD"
                />
              </div>
            </div>
          </div>

          <AlertDialog
            open={
              utils.feedback.for ===
              settingRequest.organisationEmailSettingRequest
            }
            message={utils.feedback.message}
            success={utils.feedback.success}
          />

          <div className="accountSettings_org-btn">
            <LoadableButton
              error={formError && action === "emailChangeField"}
              btnTitle="Save Changes"
              isLoading={
                utils.request === settingRequest.organisationEmailSettingRequest
              }
              type="submit"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default EmailSetting;
