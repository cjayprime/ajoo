import React, { Component } from "react";

import LoadableButton from "../../sharedComponent/LoadableButton";
import FormInputField from "../../sharedComponent/form";
import AlertDialog from "../../sharedComponent/AlertDialog";
import { authRequest } from "../../store/authModules/saga";
import { isRequestActive, validate } from "../../utils/misc";

class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.state = {
      formError: false,
      hidden: true,
      token: "",
      fields: {
        newPassword: {
          value: "",
          name: "New Password",
          error: null,
          errorMessage: "",
          rules: {
            required: true
          }
        },
        confirmPassword: {
          value: "",
          name: "Confirm Password",
          error: null,
          errorMessage: "",
          rules: {
            required: true
          }
        }
      }
    };
  }

  triggerAction = () => {
    
    //this.props.confirmUser();
    
    if(validate(this, this.state.fields)){
      var { utils } = this.props;
      if(this.state.fields.newPassword.value != this.state.fields.confirmPassword.value){
        utils.feedback.for = authRequest.resetPasswordRequest;
        utils.feedback.message = "The password field must be the same with the confirm password field";
        utils.feedback.success = false;
        return;
      }

      this.props.resetPassword({
        pass: this.state.fields.newPassword.value,
        cpass: this.state.fields.confirmPassword.value,
        token: this.state.token
      });
    }
  };

  componentDidMount() {
    this._isMounted = true;

    const { match } = this.props;
    setTimeout(() => this.setState({ token: match.params.token }), 2000);
  }

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

  _handleChange = e => {
    const { name, value } = e.target;
    let newState = { ...this.state };
    newState.formError = false;
    newState.fields[name].error = false;
    newState.fields[name].value = value;
    this.setState(newState);

    validate(this, this.state.fields, e);
  };

  render() {
    const { utils, isLoading } = this.props;
    const { fields } = this.state,
      { newPassword, confirmPassword } = fields;
    
    return (
      <div className="phone_verify">
        <AlertDialog
            open={
              utils.feedback.for === authRequest.resetPasswordRequest
            }
            message={utils.feedback.message}
            success={utils.feedback.success}
        />
        <h1>Reset Password</h1>
        <div className="phone_verify-form">
          <FormInputField
            placeholder="********"
            name="newPassword"
            value={newPassword.value}
            onBlur={this.onBlur}
            form={this.state.fields}
            labelTitle="New Password"
            onChange={this._handleChange}
          />
          <FormInputField
            placeholder="********"
            name="confirmPassword"
            value={confirmPassword.value}
            onBlur={this.onBlur}
            form={this.state.fields}
            labelTitle="Confirm Password"
            onChange={this._handleChange}
          />
          <LoadableButton
            onClick={this.triggerAction}
            btnTitle="Continue"
            isLoading={
              isRequestActive(utils.request, authRequest.resetPasswordRequest)
            }
          />
        </div>
      </div>
    );
  }
}

export default ResetPassword;
