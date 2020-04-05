import React, { Component } from "react";
import { Link } from "react-router-dom";

import ImageUpload from "../../../sharedComponent/ImageUpload";
import LoadableButton from "../../../sharedComponent/LoadableButton";
import FormInputField from "../../../sharedComponent/form";
import AlertDialog from "../../../sharedComponent/AlertDialog";
import { IMAGE_URL, validate, isRequestActive } from "../../../utils/misc";
import { verifyRequest } from "../../../store/verifyModules/saga";
import { authRequest } from "../../../store/authModules/saga";

const preImage = `${IMAGE_URL}100_100_`;

class SigninForm extends Component {
  constructor(props) {
    super(props);

    let { user } = this.props;
    if (!user) user = {};

    this.state = {
      formError: false,
      hidden: true,
      index: null,
      profileImage: user.image_url ? preImage + "" + user.image_url : "",
      featureImages: [
        user.organization_f_img_1 ? IMAGE_URL + "" + user.organization_f_img_1 : "",
        user.organization_f_img_2 ? IMAGE_URL + "" + user.organization_f_img_2 : "",
        user.organization_f_img_3 ? IMAGE_URL + "" + user.organization_f_img_3 : ""
      ],
      documentImage: user.relevant_doc ? IMAGE_URL + "" + user.relevant_doc : "",
      submitted: false,
      fields: {
        facebook: {
          value: user.facebook || "",
          error: null,
          errorMessage: "",
          name: "facebook",
          rules: {
            required: true
          }
        },
        twitter: {
          value: user.twitter || "",
          error: null,
          errorMessage: "",
          name: "twitter",
          rules: {
            required: true
          }
        },
        instagram: {
          value: user.instagram || "",
          error: null,
          errorMessage: "",
          name: "instagram",
          rules: {
            required: true
          }
        },
        ref_first_name: {
          value: user.user_ref ? user.user_ref.first_name : "",
          error: null,
          errorMessage: "",
          name: "first name",
          rules: {
            required: true
          }
        },
        ref_last_name: {
          value: user.user_ref ? user.user_ref.last_name : "",
          error: null,
          errorMessage: "",
          name: "last name",
          rules: {
            required: true
          }
        },
        ref_email: {
          value: user.user_ref ? user.user_ref.email : "",
          error: null,
          errorMessage: "",
          name: "email",
          rules: {
            email: true
          }
        },
        ref_mobile: {
          value: user.user_ref ? user.user_ref.mobile : "",
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

      if (validate(this, this.state.fields) &&
        (this.state.featureImages[0] && this.state.featureImages[1] && this.state.featureImages[2] && this.state.documentImage && this.state.profileImage))
        this.props.verifySignupUser({ data });

    });
  };

  triggerProfileImageUpload = () => {
    const { profileImage } = this.state;
    const { showPercentageProgress } = this.props;

    this.props.uploadProfileImage({
      data: {
        image: profileImage
      },
      showPercentageProgress
    });
  };

  setProfileImage = profileImage => {
    this.setState({ profileImage }, this.triggerProfileImageUpload);
  };

  triggerFeatureImageUpload = (index) => {
    const { featureImages } = this.state;
    const { showPercentageProgress } = this.props;

    this.props.uploadFeatureImageForVerification({
      data: {
        image: featureImages[index],
        type: index + 1
      },
      showPercentageProgress
    });
  };

  setFeatureImage = (image, index) => {
    var featureImages = [...this.state.featureImages];
    featureImages[index] = image;
    this.setState({ featureImages, index }, () => this.triggerFeatureImageUpload(index));
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





  render() {
    const { /*verify,*/ isLoading, utils } = this.props;
    const {
      facebook,
      twitter,
      instagram,
      ref_first_name,
      ref_last_name,
      ref_email,
      ref_mobile
    } = this.state.fields;

    return (
      <>
        <AlertDialog
          open={
            utils.feedback.for === authRequest.uploadProfileImageRequest ||
            utils.feedback.for === verifyRequest.verifySignupRequest ||
            //utils.feedback.for === verifyRequest.verifyVolunteerImageRequest ||
            utils.feedback.for === verifyRequest.uploadFeatureImageRequest ||
            utils.feedback.for === verifyRequest.uploadDocumentImageRequest
          }
          message={utils.feedback.message}
          success={utils.feedback.success}
        />
        <form onSubmit={this.triggerSignUpVerificationAction}>
          <div className="signUp_verification">
            {
              this.props.edit === true
                ? null
                : <div className="verification_1">
                  <h1>Sign Up Verification</h1>
                  <Link to="/campaigns">Skip Verification</Link>
                </div>
            }

            <h3>Social Information</h3>
            <hr />
            <div className="verification_social">
              <div className="verification2_column1">
                <h5>
                  All Social account information are needed for the following
                  reasons. like blah blah blah.. some content will go here
                  explaining why this entire process is necessary and how it
                  helps for verification.
                </h5>
              </div>
              <div className="verification2_column2">
                <div className="verify2-form">
                  <div className="verification_form">
                    <FormInputField
                      type="text"
                      placeholder="e.g. https://facebook.com/ajoo"
                      name="facebook"
                      value={facebook.value}
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
                      value={twitter.value}
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
                      value={instagram.value}
                      form={this.state.fields}
                      labelTitle="INSTAGRAM PROFILE"
                      onChange={this._handleChange}
                    />
                  </div>
                </div>
                <div className="verify2-img">
                  <label style={{ color: !this.state.profileImage && this.state.submitted ? "red" : "inherit" }}>
                    {!this.state.featureImages[0] && this.state.submitted ? "PLEASE UPLOAD YOUR ORGANIZATION'S LOGO" : "ORGANIZATION LOGO"}
                  </label>
                  <div style={{ width: 260, height: 260 }}>
                    <ImageUpload
                      alt="verification"
                      id="organisation_logo"
                      image={this.state.profileImage}
                      setImage={this.setProfileImage}
                      fileUploadProgress={utils.fileUploadProgress}
                      isUploading={
                        isRequestActive(utils.request, authRequest.uploadProfileImageRequest)
                      }
                    />
                  </div>
                </div>
              </div>
            </div>










            <h3>Feature Images</h3>
            <hr />
            <div className="verification_feature">
              <div className="verification2_column1">
                <h5>
                  Some text will going here most likely describing the kinds of
                  images that are expected to be uploaded from. Suggestions are
                  welcome and will be very helpful for anyone involved.
                </h5>
              </div>
              <div className="verification2_column2">
                <div className="signup_verification_form_image">
                  {/*<img alt="verification" src="images/drag.svg" />*/}
                  <label style={{ color: !this.state.featureImages[0] && this.state.submitted ? "red" : "inherit" }}>
                    {!this.state.featureImages[0] && this.state.submitted ? "SELECT YOUR FIRST FEATURED IMAGE" : "FIRST FEATURED IMAGE"}
                  </label>
                  <div style={{ height: 230, width: 230 }}>
                    <ImageUpload
                      alt="verification"
                      id="organisation_feature_1"
                      image={this.state.featureImages[0]}
                      setImage={(image) => this.setFeatureImage(image, 0)}
                      fileUploadProgress={utils.fileUploadProgress}
                      isUploading={
                        this.state.index === 0 &&
                        isRequestActive(utils.request, verifyRequest.uploadFeatureImageRequest)
                      }
                    />
                  </div>
                </div>
                <div className="signup_verification_form_image">
                  {/*<img alt="verification" src="images/drag.svg" />*/}
                  <label style={{ color: !this.state.featureImages[1] && this.state.submitted ? "red" : "inherit" }}>
                    {!this.state.featureImages[1] && this.state.submitted ? "SELECT YOUR SECOND FEATURED IMAGE" : "SECOND FEATURED IMAGE"}
                  </label>
                  <div style={{ height: 230, width: 230 }}>
                    <ImageUpload
                      alt="verification"
                      id="organisation_feature_2"
                      image={this.state.featureImages[1]}
                      setImage={(image) => this.setFeatureImage(image, 1)}
                      fileUploadProgress={utils.fileUploadProgress}
                      isUploading={
                        this.state.index === 1 &&
                        isRequestActive(utils.request, verifyRequest.uploadFeatureImageRequest)
                      }
                    />
                  </div>
                </div>
                <div className="signup_verification_form_image">
                  {/*<img alt="verification" src="images/drag.svg" />*/}
                  <label style={{ color: !this.state.featureImages[2] && this.state.submitted ? "red" : "inherit" }}>
                    {!this.state.featureImages[2] && this.state.submitted ? "SELECT YOUR THIRD FEATURED IMAGE" : "THIRD FEATURED IMAGE"}
                  </label>
                  <div style={{ height: 230, width: 230 }}>
                    <ImageUpload
                      alt="verification"
                      id="organisation_feature_3"
                      image={this.state.featureImages[2]}
                      setImage={(image) => this.setFeatureImage(image, 2)}
                      fileUploadProgress={utils.fileUploadProgress}
                      isUploading={
                        this.state.index === 2 &&
                        isRequestActive(utils.request, verifyRequest.uploadFeatureImageRequest)
                      }
                    />
                  </div>
                </div>
              </div>
            </div>


















            <h3>Relevant Document</h3>
            <hr />
            <div className="verification_2">
              <div className="verification2_column1">
                <h5>
                  Relvant document include the organisation’s CAC document.
                </h5>
              </div>
              <div className="signup_verification_form_image">
                {/*<img alt="verification" src="images/drag.svg" />*/}
                <label style={{ color: !this.state.documentImage && this.state.submitted ? "red" : "inherit" }}>
                  {!this.state.documentImage && this.state.submitted ? "SELECT A VALID MEANS OF IDENTIFICATION" : "IDENTIFICATION DOCUMENT"}
                </label>
                <div style={{ height: 230, width: 230 }}>
                  <ImageUpload
                    alt="verification"
                    id="organisation_relevant_document"
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




















            <h3>Contact Person</h3>
            <hr />
            <div className="verification_person">
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
    );
  }
}

export default SigninForm;
