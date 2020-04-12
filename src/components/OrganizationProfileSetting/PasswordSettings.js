import React, { Component } from "react";

import FormInputField from "../../sharedComponent/form";
import LoadableButton from "../../sharedComponent/LoadableButton";
import AlertDialog from "../../sharedComponent/AlertDialog";
import { isRequestActive } from "../../utils/misc";

class PasswordSetting extends Component {
  render() {
    const {
      form: { passwordChangeField: fields, action, formError },
      settingRequest,
      utils,
      triggerOrganisationPasswordProfileAction,
      _handleChange,
      onBlur
    } = this.props;
    const { current_password, password, cnew_password } = fields;

    return (
      <div className="campaigns_div" id="profile_div">
        <div className="accountSettings_column1">
          <h3>Change Account Password</h3>
          <p>Change your account password.</p>
        </div>
        <form onSubmit={triggerOrganisationPasswordProfileAction}>
          <div className="accountSettings_org_column2">
            <div className="accountSettings_form">
              <div className="accountSettings_form2">
                <FormInputField
                  type="password"
                  name="current_password"
                  value={current_password.value}
                  onBlur={onBlur}
                  form={this.props.form.passwordChangeField}
                  onChange={_handleChange}
                  labelTitle="CURRENT PASSWORD"
                />
              </div>
              <div className="accountSettings_form2">
                <FormInputField
                  type="password"
                  name="password"
                  value={password.value}
                  onBlur={onBlur}
                  form={this.props.form.passwordChangeField}
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
                  form={this.props.form.passwordChangeField}
                  onChange={_handleChange}
                  labelTitle="CONFIRM NEW PASSWORD"
                />
              </div>
            </div>
          </div>
          <AlertDialog
            open={
              utils.feedback.for ===
              settingRequest.organisationPasswordSettingRequest
            }
            message={utils.feedback.message}
            success={utils.feedback.success}
          />
          <div className="accountSettings_org-btn">
            <LoadableButton
              error={formError && action === "passwordChangeField"}
              btnTitle="Save Changes"
              isLoading={
                isRequestActive(
                  utils.request,
                  settingRequest.organisationPasswordSettingRequest
                )
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
