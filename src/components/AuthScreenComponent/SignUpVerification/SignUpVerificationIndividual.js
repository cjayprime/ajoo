import React, { Component } from 'react';
import { Link } from "react-router-dom";

import ImageUpload from "../../../sharedComponent/ImageUpload";
import LoadableButton from "../../../sharedComponent/LoadableButton";
import AlertDialog from "../../../sharedComponent/AlertDialog";
import FormInputField from "../../../sharedComponent/form";
import { validate, isRequestActive } from "../../../utils/misc";
import { verifyRequest } from "../../../store/verifyModules/saga";

class SignUpVerificationIndividual extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formError: false,
      hidden: true,
      documentImage: "",
      submitted: false,
      fields: {
        facebook: {
          value: "",
          error: null,
          errorMessage: "",
          name: "facebook",
          rules: {
            required: true
          }
        },
        twitter: {
          value: "",
          error: null,
          errorMessage: "",
          name: "twitter",
          rules: {
            required: true
          }
        },
        instagram: {
          value: "",
          error: null,
          errorMessage: "",
          name: "instagram",
          rules: {
            required: true
          }
        },
        ref_first_name: {
          value: "",
          error: null,
          errorMessage: "",
          name: "first name",
          rules: {
            required: true
          }
        },
        ref_last_name: {
          value: "",
          error: null,
          errorMessage: "",
          name: "last name",
          rules: {
            required: true
          }
        },
        ref_email: {
          value: "",
          error: null,
          errorMessage: "",
          name: "email",
          rules: {
            email: true
          }
        },
        ref_mobile: {
          value: "",
          error: null,
          errorMessage: "",
          name: "mobile",
          rules: {
            required: true
          }
        }
      }
    };
  }

  componentDidMount() {
    this._isMounted = true;

    if (typeof this.props.location.state != "undefined" && this.props.location.state.redirectFromCampaign) {
      this.props.showRequestFeedBack({
        message: "You need to verify your account before you can create campaigns.",
        for: verifyRequest.verifySignupRequest,
        success: false
      });
    }
  }

  componentDidUpdate() {

    if (this.props.verify.category === "Identification-Document-Upload-Failed") {
      this.props.verify.category = "";
      this.setState({ documentImage: "" });
    }

  }

  _safelySetState = (newState, prevState = null) => {
    if (this._isMounted)
      return this.setState(state => ({
        [prevState]: !state[prevState],
        ...newState
      }));
  };

  triggerSignUpVerificationAction = e => {
    e.preventDefault();

    this.setState({ submitted: true }, () => {

      let data = {};
      Object.keys(this.state.fields).map(key => {
        data[key] = this.state.fields[key].value;
      });

      if (validate(this, this.state.fields) && this.state.documentImage)
        this.props.verifySignupUser({ data });

    });
  };

  _handleChange = (e, text) => {
    let newState = { ...this.state };
    newState.formError = false;
    if (text && text.hasOwnProperty("name")) {
      const { name, data } = text;
      newState.fields[name].error = false;
      newState.fields[name].value = data;
      this._safelySetState(newState);
      return;
    }
    const { name, value } = e.target;
    if (newState.rewardFields && newState.rewardFields.hasOwnProperty(name)) {
      newState.rewardFields[name].error = false;
      newState.rewardFields[name].value = value;
    } else {
      const { name, value } = e.target;
      newState.fields[name].error = false;
      newState.fields[name].value = value;
    }
    this._safelySetState(newState);

    validate(this, this.state.fields, e);
  };

  triggerDocumentImageUpload = () => {
    const { documentImage } = this.state;
    const { showPercentageProgress } = this.props;

    this.props.uploadDocumentImageForVerification({
      data: {
        file: documentImage
      },
      showPercentageProgress
    });
  };

  setDocumentImage = documentImage => {
    this.setState({ documentImage }, this.triggerDocumentImageUpload);
  };

  render() {
    const { utils } = this.props;
    const {
      ref_first_name,
      ref_last_name,
      ref_email,
      ref_mobile
    } = this.state.fields;
    return (
      <>
        <AlertDialog
          open={
            utils.feedback.for === verifyRequest.verifySignupRequest ||
            utils.feedback.for === verifyRequest.uploadDocumentImageRequest
          }
          message={utils.feedback.message}
          success={utils.feedback.success}
        />
        <form onSubmit={this.triggerSignUpVerificationAction}>
          <div className="signUp_verification">
            <div className="verification_1">
              <h1>Sign Up Verification</h1>
              <Link to="/campaigns">Skip Verification</Link>
            </div>
            <h3>Social Information</h3>
            <hr />
            <div className="verification_social">
              <div className="verification2_column1">
                <h5>
                  Your social information links are needed for us to confirm your identity on social media. We do not post on your page. This is to only confirm your pages on social media. If you do not have any of the social media page please leave blank.
                </h5>
              </div>
              <div className="verification2_column2">
                <div className="verification_form">
                  <FormInputField
                    type="text"
                    placeholder="e.g. https://facebook.com/ajoo"
                    name="facebook"
                    value={`https://facebook.com/${this.state.fields.facebook.value}`}
                    form={this.state.fields}
                    required
                    labelTitle="FACEBOOK PROFILE"
                    onChange={this._handleChange}
                  />
                </div>
                <div className="verification_form">
                  <FormInputField
                    type="text"
                    placeholder="e.g. https://twitter.com/ajoo"
                    name="twitter"
                    value={`https://twitter.com/${this.state.fields.twitter.value}`}
                    form={this.state.fields}
                    labelTitle="TWITTER PROFILE"
                    onChange={this._handleChange}
                  />
                </div>
                <div className="verification_form">
                  <FormInputField
                    type="text"
                    placeholder="e.g. https://instagram.com/ajoo"
                    name="instagram"
                    value={`https://instagram.com/${this.state.fields.instagram.value}`}
                    form={this.state.fields}
                    labelTitle="INSTAGRAM PROFILE"
                    onChange={this._handleChange}
                  />
                </div>
              </div>
            </div>
            <h3>Referees</h3>
            <hr />
            <div className="verification_person">
              <div className="verification2_column1">
                <h5>
                  Please provide the information of one person we can contact to confirm your campaign purpose. This person can be family or friend.
  
                                </h5>
              </div>
              <div className="verification2_column4">
                <div className="verification_form">
                  <FormInputField
                    type="text"
                    placeholder="Tonye"
                    name="ref_first_name"
                    value={ref_first_name.value}
                    form={this.state.fields}
                    labelTitle="FIRST NAME"
                    onChange={this._handleChange}
                  />
                </div>
                <div className="verification_form">
                  <FormInputField
                    type="text"
                    placeholder="Dickson"
                    name="ref_last_name"
                    value={ref_last_name.value}
                    form={this.state.fields}
                    labelTitle="LAST NAME"
                    onChange={this._handleChange}
                  />
                </div>
              </div>
              <div className="verification2_column4">
                <div className="verification_form">
                  <FormInputField
                    type="email"
                    placeholder="e.g. email@website.com"
                    name="ref_email"
                    value={ref_email.value}
                    form={this.state.fields}
                    labelTitle="EMAIL ADDRESS"
                    onChange={this._handleChange}
                  />
                </div>
                <div className="verification_form">
                  <FormInputField
                    type="text"
                    placeholder="234567890-09876543"
                    name="ref_mobile"
                    value={ref_mobile.value}
                    form={this.state.fields}
                    labelTitle="PHONE NUMBER"
                    onChange={this._handleChange}
                  />
                </div>
              </div>
            </div>
            <h3>Relevant Document</h3>
            <hr />
            <div className="verification_2">
              <div className="verification2_column1">
                <h5>
                  Relevant document include national ID card,
                  National Voters card, National Passport,
                   Drivers License.
                                </h5>
              </div>
              <div className="signup_verification_form_image">
                {/*<img alt="verification" src="images/drag.svg" />*/}
                <label style={{ color: !this.state.documentImage && this.state.submitted ? "red" : "inherit" }}>
                  {!this.state.documentImage && this.state.submitted ? "SELECT A VALID MEANS OF IDENTIFICATION" : "IDENTIFICATION DOCUMENT"}
                </label>
                <div style={{ height: 275, width: 300 }}>
                  <ImageUpload
                    alt="verification"
                    id="individual_relevant_document"
                    rejectBase64={true}
                    image={this.state.documentImage}
                    setImage={this.setDocumentImage}
                    fileUploadProgress={utils.fileUploadProgress}
                    isUploading={
                      isRequestActive(utils.request, verifyRequest.uploadDocumentImageRequest)
                    }
                  />
                </div>
              </div>
            </div>
            <hr />
            <div className="verificationbutton_center">
              <LoadableButton
                className="verification_button"
                btnTitle="Save"
                onClick={this.triggerSignUpVerificationAction}
                isLoading={
                  isRequestActive(utils.request, verifyRequest.verifySignupRequest)
                }
              />
            </div>
          </div>
        </form>
      </>
    )
  }

}

export default SignUpVerificationIndividual;