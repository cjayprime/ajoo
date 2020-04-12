import React, { Component } from "react";
import { Link } from "react-router-dom";

import LoadableButton from "../../../sharedComponent/LoadableButton";
import FormInputField from "../../../sharedComponent/form";
import { isRequestActive, validate } from "../../../utils/misc";
import Vector from "../../../assets/images/Vector.svg";
import AlertDialog from "../../../sharedComponent/AlertDialog";
import { authRequest } from "../../../store/authModules/saga";
import { miscRequest } from "../../../store/miscModules/saga";

const genders = ["male", "female"];

class SignUpIndividualForm extends Component {
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
            email: true
          }
        },
        first_name: {
          value: "",
          error: null,
          errorMessage: "",
          name: "first name",
          rules: {
            required: true
          }
        },
        last_name: {
          value: "",
          error: null,
          errorMessage: "",
          name: "last name",
          rules: {
            required: true
          }
        },
        password: {
          value: "",
          name: "Password",
          error: null,
          errorMessage: "",
          rules: {
            required: true,
            password: true
          }
        },
        confirm_password: {
          value: "",
          name: "confirm password",
          error: null,
          errorMessage: "",
          rules: {
            required: true,
            confirmPassword: true
          }
        },
        state: {
          value: "",
          name: "state",
          error: null,
          errorMessage: "",
          rules: {
            required: true
          }
        },
        mobile: {
          value: "",
          name: "mobile",
          error: null,
          errorMessage: "",
          rules: {
            required: true
          }
        },
        gender: {
          value: "",
          name: "gender",
          error: null,
          errorMessage: "",
          rules: {
            required: true
          }
        },
        lga: {
          value: "",
          name: "City",
          error: null,
          errorMessage: "",
          rules: {
            required: true
          }
        }
      }
    };
  }

  ranOnce = false;

  componentDidUpdate() {

    if (this.ranOnce === false && typeof this.props.getFacebookDetails.user !== "undefined" && this.state.fields.first_name.value != this.props.getFacebookDetails.user.first_name) {
      this.ranOnce = true;
      this.setState({
        fields: {
          ...this.state.fields,
          email: {
            ...this.state.fields.email,
            value: this.props.getFacebookDetails.user.email
          },
          first_name: {
            ...this.state.fields.first_name,
            value: this.props.getFacebookDetails.user.first_name
          },
          last_name: {
            ...this.state.fields.last_name,
            value: this.props.getFacebookDetails.user.last_name
          }
        }
      });
    }

  }

  componentWillUnmount() {
    let newState = { ...this.state };
    Object.keys(newState.fields).map(key => {
      newState.fields[key].value = "";
      newState.fields[key].error = null;
      newState.fields[key].errorMessage = "";
    });
    this._safelySetState(newState);
  }

  triggerSignUpIndividualAction = e => {
    e.preventDefault();
    var fields = this.state.fields;
    var compulsoryFields = {};
    for (var key in fields) {
      compulsoryFields[key] = fields[key];
    }

    if (validate(this, compulsoryFields)) {

      let data = {};
      Object.keys(this.state.fields).map(key => {
        if (key !== "confirm_password") {
          data[key] = this.state.fields[key].value;
        }
      });

      this.props.signupUser({ data, history: this.props.history });

    }
  };

  _handleChange = e => {

    const { name, value } = e.target;
    let newState = { ...this.state };
    newState.formError = false;
    newState.fields[name].error = false;
    newState.fields[name].value = value;
    this._safelySetState(newState);
    if (name === "state") {
      this.props.fetchLga({ stateId: value });
    }

    validate(this, this.state.fields, e);
  };

  onBlur = (res, name) => {
    const { error, errorMessage } = res;
    let newForm = { ...this.state };
    newForm.fields[name] = {
      ...newForm.fields[name],
      error,
      errorMessage
    };

    this._safelySetState(newForm);
  };

  _safelySetState = (newState, prevState = null) => {
    //if (this._isMounted)
    return this.setState(state => ({
      [prevState]: !state[prevState],
      ...newState
    }));
  };

  render() {
    const { isLoading, misc, request, facebookRegister } = this.props;
    const {
      email,
      password,
      confirm_password,
      first_name,
      last_name,
      lga,
      mobile,
      gender,
      state
    } = this.state.fields;

    const genderItems = genders.map((gender, i) => (
      <option key={gender}>{gender}</option>
    ));

    const stateItem = misc.states.map(state => (
      <option value={state.state_id} key={state.state_id}>
        {state.name}
      </option>
    ));

    const lgaItem = misc.lga.map(local => (
      <option value={local.local_id} key={local.local_id}>
        {local.local_name}
      </option>
    ));

    return (
      <>
        <div className="signup_individual-row">
          <div className="signup_individual-column1">
            <img alt="sign in" src="images/sign_in.svg" />
          </div>
          <div className="signup_individual-column2">
            <div className="signup_indi">
              <h4>Sign Up</h4>
              <Link to="#">
                <span>individual</span>
              </Link>
            </div>
            {/* Handle signup with facebook */}
            <div className="face-pass">
              {" "}
              <a href={facebookRegister}>
                <button
                  className="signup_indi-face-btn facebook_button"
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <img style={{ width: "24px" }} src={Vector} />
                Sign Up with Facebook
              </button>
              </a>
              <span>
                We’ll never post anything on Facebook without your permission.
              </span>
            </div>
            <div className="hr_or">
              <hr className="hr2" />
              <p id="or">or</p>
              <hr className="hr3" />
            </div>
            <div className="signup_indi-form">
              <form onSubmit={this.triggerSignUpIndividualAction}>
                {/* Form name */}
                <div className="signup_indi-form-name">
                  <div className="signup_indi-form-name1">
                    <FormInputField
                      className="signup_indi-form-fsname"
                      placeholder="First name"
                      name="first_name"
                      value={first_name.value}
                      onBlur={this.onBlur}
                      form={this.state.fields}
                      labelTitle="FIRST NAME"
                      onChange={this._handleChange}
                    />
                  </div>
                  <div className="signup_indi-form-name2">
                    <FormInputField
                      className="signup_indi-form-lsname"
                      placeholder="Last name"
                      name="last_name"
                      value={last_name.value}
                      onBlur={this.onBlur}
                      form={this.state.fields}
                      labelTitle="LAST NAME"
                      onChange={this._handleChange}
                    />
                  </div>
                </div>

                {/*desktop view form email*/}
                <div className="signup_indi-form-email">
                  <div>
                    <FormInputField
                      type="email"
                      placeholder="Email address"
                      name="email"
                      value={email.value}
                      onBlur={this.onBlur}
                      form={this.state.fields}
                      labelTitle="EMAIL ADDRESS"
                      onChange={this._handleChange}
                    />
                  </div>
                </div>
                {/* desktop view form password */}
                <div className="signup_indi-form-pass">
                  <div>
                    <FormInputField
                      type="password"
                      placeholder="********"
                      name="password"
                      value={password.value}
                      onBlur={this.onBlur}
                      form={this.state.fields}
                      labelTitle="PASSWORD"
                      onChange={this._handleChange}
                    />
                  </div>
                  <div>
                    <FormInputField
                      type="password"
                      name="confirm_password"
                      value={confirm_password.value}
                      onBlur={this.onBlur}
                      form={this.state.fields}
                      labelTitle="CONFIRM PASSWORD"
                      onChange={this._handleChange}
                    />
                  </div>
                </div>
                {/* desktop form indi phone */}
                <div className="signup_indi-form-phone">
                  <div>
                    <FormInputField
                      name="mobile"
                      placeholder="e.g 0812345678"
                      value={mobile.value}
                      onBlur={this.onBlur}
                      form={this.state.fields}
                      labelTitle="PHONE NUMBER"
                      onChange={this._handleChange}
                    />
                  </div>
                </div>
                <div className="signup_indi-form-gender">
                  <div>
                    <FormInputField
                      type="select"
                      name="gender"
                      value={gender.value}
                      onBlur={this.onBlur}
                      options={genderItems}
                      form={this.state.fields}
                      labelTitle="GENDER"
                      className="signup_indi-gender-form signup_indi-form-round"
                      onChange={this._handleChange}
                    />
                  </div>
                </div>
                {/* form indi location */}
                <div className="signup_indi-form-location">
                  <div className="signup_indi-form-location1">
                    <FormInputField
                      type="select"
                      name="state"
                      value={state.value}
                      form={this.state.fields}
                      onBlur={this.onBlur}
                      options={stateItem}
                      labelTitle="STATE"
                      onChange={this._handleChange}
                      isFetching={isRequestActive(
                        request.request,
                        miscRequest.fetchStateRequest
                      )}
                      className="signup_indi-form-state"
                    />
                  </div>
                  <div className="signup_indi-form-location2">
                    <FormInputField
                      type="select"
                      name="lga"
                      value={lga.value}
                      form={this.state.fields}
                      onBlur={this.onBlur}
                      options={lgaItem}
                      isFetching={isRequestActive(
                        request.request,
                        miscRequest.fetchLgaRequest
                      )}
                      labelTitle="LGA"
                      onChange={this._handleChange}
                      className="signup_indi-form-city"
                    />
                  </div>
                </div>
                <AlertDialog
                  open={request.feedback.for === authRequest.signupRequest}
                  message={request.feedback.message}
                  success={request.feedback.success}
                />
                <AlertDialog
                  open={request.feedback.for === authRequest.facebookSignupDetailsRequest}
                  message={request.feedback.message}
                  success={request.feedback.success}
                />
                <div className="signup_agree">
                  <div className="signup_span">
                    By clicking submit, you agree to the{" "}
                    <Link to="/privacy-policy">
                      <label>Privacy Policy</label>
                    </Link>{" "}
                    and{" "}
                    <Link to="/terms_of_use">
                      <label>Terms of Use</label>
                    </Link>{" "}
                    of the Company.
                  </div>
                  <LoadableButton
                    error={this.state.formError}
                    className="signup_agree-btn"
                    btnTitle="Next"
                    type="submit"
                    isLoading={isLoading}
                  />
                </div>
              </form>
            </div>
          </div>
          <hr className="hr1" />
        </div>

        <div className="clearfix"></div>
      </>
    );
  }
}

export default SignUpIndividualForm;
