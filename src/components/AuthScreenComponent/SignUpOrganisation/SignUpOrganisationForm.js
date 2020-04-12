import React, { PureComponent, Component } from "react";

import LoadableButton from "../../../sharedComponent/LoadableButton";
import FormInputField from "../../../sharedComponent/form";
import { validateInput, validate, isRequestActive } from "../../../utils/misc";
import { miscRequest } from "../../../store/miscModules/saga";
import { Link } from "react-router-dom";
import Vector from "../../../assets/images/Vector.svg";
import eyeicon from "../../../assets/images/eyeicon.svg";

const type = [
  "Profit",
  "Non-Profit",
  "Student Organisation",
  "Government Owned"
],
  organisation_category = [
    "Medical",
    "Memorial",
    "Emergency",
    "Nonprofit",
    "Education",
    "Religion",
    "Business",
    "Sports",
    "Concert",
    "Reality Show",
    "Entertainment",
    "Community",
    "Competition",
    "Creative",
    "Event",
    "Faith",
    "Family",
    "Newlywed",
    "Travel",
    "Volunteer",
    "Wishes"
  ];

class SignUpOrganisationForm extends Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.state = {
      formError: false,
      hidden: true,
      fields: {
        organization_email: {
          value: "",
          error: null,
          errorMessage: "",
          name: "Email",
          rules: {
            required: true,
            email: true
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
        organization_mobile: {
          value: "",
          name: "Phone Number",
          error: null,
          errorMessage: "",
          rules: {
            required: true,
            maxLength: 11,
            minLength: 8
          }
        },
        secondary_mobile: {
          value: "",
          name: "Secondary Phone Number",
          error: null,
          errorMessage: "",
          rules: {
            required: false,
            maxLength: 11,
            minLength: 8
          }
        },
        organization_name: {
          value: "",
          name: "Organisation Name",
          error: null,
          errorMessage: "",
          rules: {
            required: true
          }
        },
        organization_type: {
          value: "",
          name: "Type of Organisation",
          error: null,
          errorMessage: "",
          rules: {
            required: true
          }
        },
        organization_address: {
          value: "",
          name: "Organisation Address",
          error: null,
          errorMessage: "",
          rules: {
            required: true
          }
        },
        category: {
          value: "",
          name: "Category",
          error: null,
          errorMessage: "",
          rules: {
            required: true
          }
        },
        state: {
          value: "",
          name: "State",
          error: null,
          errorMessage: "",
          rules: {
            required: true
          }
        },
        lga: {
          value: "",
          name: "LGA",
          error: null,
          errorMessage: "",
          rules: {
            required: true
          }
        }
      }
    };
  }

  componentDidMount() {

    this._isMounted = true;
    this.props.fetchStates();

  }

  ranOnce = false;

  componentDidUpdate() {

    if (this.ranOnce === false && typeof this.props.getFacebookDetails.user !== "undefined" && this.state.fields.organization_name.value != this.props.getFacebookDetails.user.organization_name){
      this.ranOnce = true;
      this.setState({
        fields: {
          ...this.state.fields,
          organization_email: {
            ...this.state.fields.organization_email,
            value: this.props.getFacebookDetails.user.email
          },
          organization_name: {
            ...this.state.fields.organization_name,
            value: this.props.getFacebookDetails.user.organization_name
          },
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

  triggerSignUpOrgAction = e => {
    e.preventDefault();
    var fields = this.state.fields;
    var compulsoryFields = {};
    for (var key in fields) {
      if (key !== 'secondary_mobile') {
        compulsoryFields[key] = fields[key];
      }
    }

    // Although secondary mobile isn't compulsory, if it has a value it MUST be correct
    if (fields.secondary_mobile.value !== "" && !validate(this, fields))
      return;

    if (validate(this, compulsoryFields)) {

      let data = {};
      Object.keys(this.state.fields).map(key => {
        if (key !== "confirm_password") {
          data[key] = this.state.fields[key].value;
        }
      });

      this.props.signupOrg({
        data,
        history: this.props.history
      });

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

  toggleShow = () => {
    this.setState({
      hidden: !this.state.hidden
    });
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
    const { isLoading, misc, request, facebookOrgRegister } = this.props;
    const {
      fields: {
        organization_email,
        password,
        confirm_password,
        organization_mobile,
        secondary_mobile,
        organization_name,
        organization_type,
        category,
        organization_address,
        lga,
        state
      },
      formError
    } = this.state;

    const typeItems = type.map((organization_types, i) => (
      <option key={organization_types}>{organization_types}</option>
    ));

    const categoryItems = organisation_category.map(
      (organisation_categories, i) => (
        <option key={organisation_categories}>{organisation_categories}</option>
      )
    );

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

    const error = this.props.auth.requestStatus.code === 100 ? '' : this.props.auth.requestStatus.desc;


    return (
      <>
        <div className="signup_org-row">
          <div className="signup_org-column1">
            <img alt="sign in" src="images/sign_in.svg" />
          </div>
          <div className="signup_org-column2">
            <div className="signup_org">
              <h4>Sign Up</h4>
              <Link to="#">
                <span>Organisation</span>
              </Link>
            </div>
            {/* Handle signup with facebook */}
            <div className="face-pass">
              {" "}
              <a href={facebookOrgRegister}>
                <button
                  style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}
                  className="signup_org-face-btn"
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
            <div className="signup_org-form">
              <form onSubmit={this.triggerSignUpOrgAction}>
                {/* Form name */}
                <div className="signup_org-form-name">
                  <FormInputField
                    type="text"
                    placeholder="Organization name"
                    name="organization_name"
                    form={this.state.fields}
                    onBlur={this.onBlur}
                    value={organization_name.value}
                    labelTitle="ORGANISATION NAME"
                    onChange={this._handleChange}
                  />
                </div>
                {/* form organisation name */}
                <div className="signup_org-type-form">
                  <FormInputField
                    type="select"
                    name="organization_type"
                    value={organization_type.value}
                    form={this.state.fields}
                    onBlur={this.onBlur}
                    options={typeItems}
                    labelTitle="type of organisation"
                    className="signup_org-type-form-select"
                    onChange={this._handleChange}
                  />
                </div>
                {/* form organisation category */}
                <div className="signup_org-category-form">
                  <FormInputField
                    type="select"
                    name="category"
                    value={category.value}
                    form={this.state.fields}
                    onBlur={this.onBlur}
                    options={categoryItems}
                    labelTitle="category"
                    className="signup_org-category-select"
                    onChange={this._handleChange}
                  />
                </div>
                {/* form organisation email */}
                <div className="signup_org-email-form">
                  <FormInputField
                    type="email"
                    placeholder="Organization email"
                    name="organization_email"
                    value={organization_email.value}
                    onBlur={this.onBlur}
                    form={this.state.fields}
                    labelTitle="Email"
                    onChange={this._handleChange}
                  />
                </div>
                <div className="signup_org-form-pass">
                  <div>
                    <FormInputField
                      type={this.state.hidden ? "password" : "text"}
                      placeholder="********"
                      name="password"
                      value={password.value}
                      onBlur={this.onBlur}
                      form={this.state.fields}
                      labelTitle="Password"
                      onChange={this._handleChange}
                    />
                    <span className="field-icon" onClick={this.toggleShow}>
                      <img src={eyeicon} />
                    </span>
                  </div>
                </div>
                <div className="signup_org-form-pass">
                  <div>
                    <FormInputField
                      type={this.state.hidden ? "password" : "text"}
                      placeholder="********"
                      name="confirm_password"
                      value={confirm_password.value}
                      onBlur={this.onBlur}
                      form={this.state.fields}
                      labelTitle="Confirm Password"
                      onChange={this._handleChange}
                    />
                    <span className="field-icon" onClick={this.toggleShow}>
                      <img src={eyeicon} />
                    </span>
                  </div>
                </div>
                {/* form organisation phone */}
                <div className="signup_org-phone-form">
                  <FormInputField
                    type="number"
                    placeholder="e.g 0812345678"
                    name="organization_mobile"
                    value={organization_mobile.value}
                    onBlur={this.onBlur}
                    form={this.state.fields}
                    labelTitle="Phone Number"
                    onChange={this._handleChange}
                    onKeyUp={this._handleChange}
                  />
                </div>
                {/* form organisation sec phone number */}
                <div className="signup_org-sec-phone-form">
                  <FormInputField
                    type="number"
                    placeholder="e.g 0812345678"
                    name="secondary_mobile"
                    value={secondary_mobile.value}
                    onBlur={this.onBlur}
                    form={this.state.fields}
                    labelTitle="Secondary Phone Number"
                    onChange={this._handleChange}
                  />
                </div>
                {/* form organisation address */}
                <div className="signup_org-address-form">
                  <FormInputField
                    type="text"
                    placeholder="Address"
                    name="organization_address"
                    value={organization_address.value}
                    form={this.state.fields}
                    onBlur={this.onBlur}
                    labelTitle="Address"
                    onChange={this._handleChange}
                  />
                </div>
                {/* form organisation location */}
                <div className="signup_org-location-form">
                  <div className="signup_org-state-form">
                    <FormInputField
                      type="select"
                      name="state"
                      value={state.value}
                      form={this.state.fields}
                      onBlur={this.onBlur}
                      options={stateItem}
                      isFetching={isRequestActive(
                        request.request,
                        miscRequest.fetchStateRequest
                      )}
                      labelTitle="STATE"
                      className="signup_org-state-form-select"
                      onChange={this._handleChange}
                    />
                  </div>
                  <div className="signup_org-city-form">
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
                      className="signup_org-city-form-select"
                      onChange={this._handleChange}
                    />
                  </div>
                </div>
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
                    error={error}
                    className="signup_agree-btn"
                    btnTitle="Submit"
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

export default SignUpOrganisationForm;
