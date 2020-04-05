import React, { PureComponent } from "react";

import FormInputField from "../../sharedComponent/form";
import LoadableButton from "../../sharedComponent/LoadableButton";
import AlertDialog from "../../sharedComponent/AlertDialog";

class PasswordSetting extends PureComponent {
  render() {
    const {
      form: { passwordChangeField: fields, action, formError },
      settingRequest,
      request,
      triggerIndividualPasswordProfileAction,
      _handleChange,
      onBlur
    } = this.props,
      { current_password, new_password, cnew_password } = fields;
    return (
      <div className="campaigns_div" id="profile_div">
        <div className="accountSettings_column1">
          <h3>Change Account Password</h3>
          <p>Change your account password.</p>
        </div>
        <form onSubmit={triggerIndividualPasswordProfileAction}>
          <div className="accountSettings_column2">
            <div className="accountSettings_form">
              <div className="accountSettings_form2">
                <FormInputField
                  type="password"
                  name="current_password"
                  value={current_password.value}
                  onBlur={onBlur}
                  form={fields}
                  onChange={_handleChange}
                  labelTitle="CURRENT PASSWORD"
                />
              </div>
              <div className="accountSettings_form2">
                <FormInputField
                  type="password"
                  name="new_password"
                  value={new_password.value}
                  onBlur={onBlur}
                  form={fields}
                  onChange={_handleChange}
                  labelTitle="NEW PASSWORD"
                />
              </div>
              <div className="accountSettings_form2">
                <FormInputField
                  type="password"
                  name="cnew_password"
                  value={cnew_password.value}
                  onBlur={onBlur}
                  form={fields}
                  onChange={_handleChange}
                  labelTitle="CONFIRM NEW PASSWORD"
                />
              </div>
            </div>
          </div>
          <AlertDialog
            open={
              request.feedback.for ===
              settingRequest.individualPasswordSettingRequest
            }
            message={request.feedback.message}
            success={request.feedback.success}
          />
          <div className="accountSettings_button">
            <LoadableButton
              error={formError && action === "passwordChangeField"}
              btnTitle="Save Changes"
              isLoading={
                request.request ===
                settingRequest.individualPasswordSettingRequest
              }
              type="submit"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default PasswordSetting;
