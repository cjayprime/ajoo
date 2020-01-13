import React, { PureComponent } from "react";

import LoadableButton from "../../../sharedComponent/LoadableButton";
import FormInputField from "../../../sharedComponent/form";

class SigninForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      formError: false,
      hidden: true,
      fields: {
        email_address: {
          value: "",
          error: null,
          errorMessage: "",
          name: "Email",
          rules: {
            email: true
          }
        },
        facebook_profile: {
          value: "",
          error: null,
          errorMessage: "",
          name: "Email",
          rules: {
            required: true
          }
        },
        twitter_profile: {
          value: "",
          error: null,
          errorMessage: "",
          name: "Email",
          rules: {
            required: true
          }
        },
        instagram_profile: {
          value: "",
          error: null,
          errorMessage: "",
          name: "Email",
          rules: {
            required: true
          }
        },
        first_name: {
          value: "",
          error: null,
          errorMessage: "",
          name: "Email",
          rules: {
            required: true
          }
        },
        last_name: {
          value: "",
          error: null,
          errorMessage: "",
          name: "Email",
          rules: {
            required: true
          }
        },
        phone_number: {
          value: "",
          error: null,
          errorMessage: "",
          name: "Email",
          rules: {
            required: true
          }
        }
      }
    };
  }

  triggerSignUpVerificationAction = e => {
    e.preventDefault();
    this.props.verifySignupUser();
  };

  _handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { /*verify,*/ isLoading } = this.props;
    const {
      facebook_profile,
      twitter_profile,
      instagram_profile,
      first_name,
      email_address,
      last_name,
      phone_number
    } = this.state.fields;

    return (
      <>
        <form onSubmit={this.triggerSignUpVerificationAction}>
          <div className="signUp_verification">
            <div className="verification_1">
              <h1>Sign Up Verification</h1>
              <a>Skip Verification</a>
            </div>
            <h3>Social Information</h3>
            <hr />
            <div className="verification_2">
              <div className="verification2_column1">
                <h5>
                  All Social account information are needed for the following
                  reasons. like blah blah blah.. some content will go here
                  explaining why this entire process is necessary and how it
                  helps for verification.
                </h5>
              </div>
              <div className="verification2_column2">
                <div className="verification_form">
                  <FormInputField
                    type="text"
                    placeholder="e.g https://facebook.com/ajoo"
                    name="facebook_profile"
                    value={facebook_profile.value}
                    form={this.state.fields}
                    labelTitle="FACEBOOK PROFILE"
                    onChange={this._handleChange}
                  />
                </div>
                <div className="verification_form">
                  <FormInputField
                    type="text"
                    placeholder="https://twitter.com/ajoo"
                    name="twitter_profile"
                    value={twitter_profile.value}
                    form={this.state.fields}
                    labelTitle="TWITTER PROFILE"
                    onChange={this._handleChange}
                  />
                </div>
                <div className="verification_form">
                  <FormInputField
                    type="text"
                    placeholder="e.g. https://instagram.com/ajoo"
                    name="instagram_profile"
                    value={instagram_profile.value}
                    form={this.state.fields}
                    labelTitle="INSTAGRAM PROFILE"
                    onChange={this._handleChange}
                  />
                </div>
              </div>
              <div className="verification2_column3">
                <label>ORGANISATION LOGO</label>
                <img
                  alt="verification"
                  id="organisation_logo"
                  src="images/drag.svg"
                />
              </div>
            </div>
            <h3>Feature Images</h3>
            <hr />
            <div className="verification_2">
              <div className="verification2_column1">
                <h5>
                  Some text will going here most likely describing the kinds of
                  images that are expected to be uploaded from. Suggestions are
                  welcome and will be very helpful for anyone involved.
                </h5>
              </div>
              <div className="verification_form_image">
                <div className="signup_verification_form_image">
                  <img alt="verification" src="images/drag.svg" />
                </div>
                <div className="signup_verification_form_image">
                  <img alt="verification" src="images/drag.svg" />
                </div>
                <div className="signup_verification_form_image">
                  <img alt="verification" src="images/drag.svg" />
                </div>
              </div>
            </div>
            <h3>Contact Person</h3>
            <hr />
            <div className="verification_2">
              <div className="verification2_column1">
                <h5>
                  Some text will going here most likely describing the kinds of
                  images that are expected to be uploaded from. Suggestions are
                  welcome and will be very helpful for anyone involved.
                </h5>
              </div>
              <div className="verification2_column4">
                <div className="verification_form">
                  <FormInputField
                    type="text"
                    placeholder="Tonye"
                    name="first_name"
                    value={first_name.value}
                    form={this.state.fields}
                    labelTitle="FIRST NAME"
                    onChange={this._handleChange}
                  />
                </div>
                <div className="verification_form">
                  <FormInputField
                    type="email"
                    placeholder="234567890-09876543"
                    name="email_address"
                    value={email_address.value}
                    form={this.state.fields}
                    labelTitle="EMAIL ADDRESS"
                    onChange={this._handleChange}
                  />
                </div>
              </div>
              <div className="verification2_column4">
                <div className="verification_form">
                  <FormInputField
                    type="text"
                    placeholder="Dickson"
                    name="last_name"
                    value={last_name.value}
                    form={this.state.fields}
                    labelTitle="LAST NAME"
                    onChange={this._handleChange}
                  />
                </div>
                <div className="verification_form">
                  <FormInputField
                    type="text"
                    placeholder="234567890-09876543"
                    name="phone_number"
                    value={phone_number.value}
                    form={this.state.fields}
                    labelTitle="PHONE NUMBER"
                    onChange={this._handleChange}
                  />
                </div>
              </div>
            </div>
            <hr />
            <div className="verificationbutton_center">
              <LoadableButton
                className="verification_button"
                btnTitle="Save"
                isLoading={isLoading}
              />
            </div>
          </div>
        </form>
      </>
    );
  }
}

export default SigninForm;
