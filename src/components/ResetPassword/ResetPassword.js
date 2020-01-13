import React, { Component } from "react";

import LoadableButton from "../../sharedComponent/LoadableButton";
import FormInputField from "../../sharedComponent/form";

class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.state = {
      formError: false,
      hidden: true,
      fields: {
        newPassword: {
          value: "",
          name: "New Password",
          error: null,
          errorMessage: "",
          rules: {
            required: true,
            password: true
          }
        },
        confirmPassword: {
          value: "",
          name: "Confirm Password",
          error: null,
          errorMessage: "",
          rules: {
            required: true,
            password: true
          }
        }
      }
    };
  }

  triggerAction = () => {
    this.props.confirmUser();
  };

  componentDidMount() {
    this._isMounted = true;
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
  };

  render() {
    const { /*confirm, */isLoading } = this.props;
    const { fields } = this.state,
      { newPassword, confirmPassword } = fields;

    return (
      <div className="phone_verify">
        <form>
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
              isLoading={isLoading}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default ResetPassword;
