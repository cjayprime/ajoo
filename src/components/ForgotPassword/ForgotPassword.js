import React, { Component } from "react";

import LoadableButton from "../../sharedComponent/LoadableButton";
import FormInputField from "../../sharedComponent/form";

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.state = {
      formError: false,
      hidden: true,
      fields: {
        email: {
          value: "",
          error: null,
          errorMessage: "",
          name: "Email",
          rules: {
            required: true,
            minLength: 4,
            email: true
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
    const { /*confirm,*/ isLoading } = this.props;
    const { fields } = this.state,
      { email } = fields;

    return (
      <div className="phone_verify">
        <form>
          <h1>Recover Your Password</h1>
          <div className="phone_verify-form">
            <div style={{ textAlign: "center", marginBottom: 30 }}>
              <p style={{ fontSize: "14px", lineHeight: "24px" }}>
                A mail will be send to the email address given below <br />{" "}
                Click on the link to continue your password reset
              </p>
            </div>
            <div>
              <FormInputField
                name="email"
                value={email.value}
                onBlur={this.onBlur}
                form={fields}
                labelTitle="Email"
                onChange={this._handleChange}
              />
            </div>
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

export default ForgotPassword;
