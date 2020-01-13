import React, { PureComponent } from "react";

import FormInputField from "../../sharedComponent/form";
import LoadableButton from "../../sharedComponent/LoadableButton";
import AlertDialog from "../../sharedComponent/AlertDialog";
// import { request } from "https";

class EmailSetting extends PureComponent {
  render() {
    const {
        form: { emailChangeField: fields, action, formError },
        triggerIndividualEmailProfileAction,
        settingRequest,
        _handleChange,
        request,
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
        <form onSubmit={triggerIndividualEmailProfileAction}>
          <div className="accountSettings_column2">
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
              request.feedback.for ===
              settingRequest.individualEmailSettingRequest
            }
            message={request.feedback.message}
            success={request.feedback.success}
          />

          <div className="accountSettings_button">
            <LoadableButton
              error={formError && action === "emailChangeField"}
              btnTitle="Save Changes"
              isLoading={
                request.request === settingRequest.individualEmailSettingRequest
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
