import React, { Component } from "react";

// import ellipse from "../../assets/images/Ellipse_2.png";
import { validateInput, validate } from "../../utils/misc";
import { settingRequest } from "../../store/profilesettingsModules/saga";
import BasicInformation from "./BasicInformation";
import EmailSetting from "./EmailSettings";
import PasswordSetting from "./PasswordSettings";
import SignUpVerificationOrganization from "../AuthScreenComponent/SignUpVerification/SignUpVerificationOrganization";

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

class OrganizationProfileSetting extends Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.load();
  }

  load = () => {
    const { user } = this.props;
    this.state = {
      active: "profile",
      formError: false,
      action: "",
      runOnce: false,
      basicInformationFields: {
        organization_name: {
          value: user.organization_name || "",
          error: false,
          errorMessage: "",
          name: "Organization Name",
          rules: {
            required: true
          }
        },
        organization_type: {
          value: user.organization_type || "",
          error: false,
          errorMessage: "",
          name: "Type of Organisation",
          rules: {
            required: true
          }
        },
        category: {
          value: user.category || "",
          error: false,
          errorMessage: "",
          name: "Category",
          rules: {
            required: true
          }
        },
        organization_mobile: {
          value: user.organization_mobile || "",
          error: false,
          errorMessage: "",
          name: "Phone Number",
          rules: {
            required: true
          }
        },
        secondary_mobile: {
          value: user.secondary_mobile || "",
          error: false,
          errorMessage: "",
          name: "Secondary Phone Number",
          rules: {
            required: true
          }
        },
        organization_address: {
          value: user.organization_address || "",
          error: false,
          errorMessage: "",
          name: "Organization Address",
          rules: {
            required: true
          }
        },
        state: {
          value: user.state ? user.state.state_id : "",
          name: "state",
          error: false,
          errorMessage: "",
          rules: {
            required: true
          }
        },
        lga: {
          value: user.lga ? user.lga.local_id : "",
          name: "lga",
          error: false,
          errorMessage: "",
          rules: {
            required: true
          }
        }
      },
      // emailChangeField: {
      //   new_email: {
      //     value: user.email ? user.email : "",
      //     error: null,
      //     errorMessage: "",
      //     name: "Email",
      //     rules: {
      //       required: true,
      //       email: true
      //     }
      //   },
      //   password: {
      //     value: "",
      //     error: null,
      //     name: "Password",
      //     errorMessage: "",
      //     rules: {
      //       required: true,
      //       password: true
      //     }
      //   }
      // },
      passwordChangeField: {
        current_password: {
          value: "",
          name: "Current Password",
          error: null,
          errorMessage: "",
          rules: {
            required: true,
            password: true
          }
        },
        password: {
          value: "",
          name: "New Password",
          error: null,
          errorMessage: "",
          rules: {
            required: true,
            password: true
          }
        },
        cnew_password: {
          value: "",
          name: "confirm New password",
          error: null,
          errorMessage: "",
          rules: {
            required: true,
            confirmPassword: true
          }
        }
      }
    };
  }

  componentDidMount() {
    this._isMounted = true;
    if (this.state.basicInformationFields.state.value) {
      this.props.fetchLga({
        stateId: this.state.basicInformationFields.state.value
      });
    }
  }

  componentDidUpdate() {
    if (this.props.user.email && !this.state.runOnce) {

      this.load();

      setTimeout(() => {
        this.setState({ ...this.state, runOnce: true });
      }, 500);

    }
  }

  componentWillUnmount() {
    this._isMounted = false;
    // let newState = { ...this.state };
    // Object.keys(newState.fields).map(key => {
    //   newState.fields[key].value = "";
    //   newState.fields[key].error = null;
    //   newState.fields[key].errorMessage = "";
    // });
    // this._safelySetState(newState);
  }

  triggerOrganisationProfileAction = e => {
    e.preventDefault();
    let data = {};
    Object.keys(this.state.basicInformationFields).map(key => {
      return data[key] = this.state.basicInformationFields[key].value;
    });
    if (!validateInput(this.state.basicInformationFields)) {
      return this._safelySetState({
        formError: true,
        action: "basicInformationFields"
      });
    }
    this.props.organisationProfileSetting({
      data
    });
  };

  // triggerOrganisationEmailProfileAction = e => {
  //   e.preventDefault();
  //   const { new_email, password } = this.state.emailChangeField;
  //   let data = {
  //     new_email: new_email.value,
  //     password: password.value
  //   };
  //   if (!validateInput(this.state.emailChangeField)) {
  //     return this._safelySetState({
  //       formError: true,
  //       action: "emailChangeField"
  //     });
  //   }
  //   this.props.organisationEmailSetting({ data, history: this.props.history });
  // };

  triggerOrganisationPasswordProfileAction = e => {
    e.preventDefault();
    var data = {};

    Object.keys(this.state.passwordChangeField).map(key => {
      return data[key] = this.state.passwordChangeField[key].value;
    });

    if (! validate(this, this.state.passwordChangeField)) {
      return;
    }

    this.props.organisationProfilePasswordSetting({
      data,
      history: this.props.history
    });
  };

  _handleChange = (e, field) => {
    const { name, value } = e.target;
    let newState = {
      ...this.state,
      formError: false,
      [field]: {
        ...this.state[field],
        [name]: {
          ...this.state[field][name],
          value
        }
      }
    };
    
    this._safelySetState(newState);
    if (name === "state") {
      this.props.fetchLga({ stateId: value });
    }

    var event = {target: {name: e.target.name}};
    setTimeout(() => {
      validate(this, this.state[field], event);
    }, 500)
  };

  onBlur = (field, res, name) => {
    const { error, errorMessage } = res;
    let newState = {
      ...this.state,
      [field]: {
        ...this.state[field],
        [name]: {
          ...this.state[field][name],
          error,
          errorMessage
        }
      }
    };
    this._safelySetState(newState);
  };

  _safelySetState = (newState, prevState = null) => {
    if (this._isMounted)
      return this.setState({
        ...newState
      });
  };

  render() {
    const { /*setting,*/ misc, utils/*, request*/ } = this.props;
    //console.log(this.state, "hey error");
    //console.log(this.onBlur, "hey I'm here jae")

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
    return (
      <>
        <div className="profile">
          <div className="edit_profile">
            {/* <img alt="Profile setting" src={ellipse} /> */}
          </div>

          <div className="profile_tab">
            <div className="profileTab_button">
              <div>
                <button
                  className="profile_tablinks"
                  onClick={() => this.setState({ active: "profile" })}
                >
                  Profile Settings
                </button>
                <div
                  style={{
                    height: 5,
                    width: "100%",
                    backgroundColor:
                      this.state.active === "profile"
                        ? "#0072A3"
                        : "transparent",
                    borderRadius: "10px 10px 0px 0px"
                  }}
                ></div>
              </div>
              <div>
                <button
                  className="profile_tablinks"
                  onClick={() => this.setState({ active: "account" })}
                >
                  Account Settings
                </button>
                <div
                  style={{
                    height: 5,
                    width: "100%",
                    backgroundColor:
                      this.state.active === "account"
                        ? "#0072A3"
                        : "transparent",
                    borderRadius: "10px 10px 0px 0px"
                  }}
                ></div>
              </div>
              <div>
                <button
                  className="profile_tablinks"
                  onClick={() => this.setState({ active: "verification" })}
                >
                  Verification Information
                </button>
                <div
                  style={{
                    height: 5,
                    width: "100%",
                    backgroundColor:
                      this.state.active === "verification"
                        ? "#0072A3"
                        : "transparent",
                    borderRadius: "10px 10px 0px 0px"
                  }}
                ></div>
              </div>
            </div>

            {this.state.active === "profile" && (
              <BasicInformation
                form={this.state}
                typeItems={typeItems}
                categoryItems={categoryItems}
                lgaItem={lgaItem}
                stateItem={stateItem}
                utils={utils}
                onBlur={(...args) =>
                  this.onBlur("basicInformationFields", ...args)
                }
                settingRequest={settingRequest}
                triggerOrganisationProfileAction={
                  this.triggerOrganisationProfileAction
                }
                _handleChange={e =>
                  this._handleChange(e, "basicInformationFields")
                }
              />
            )}
            {/* ACCOUNT SETTINGS TAB */}
            {this.state.active === "account" && (
              <div
                id="Account Settings"
                style={{ display: "block" }}
                className="tabcontent"
              >
                {/* <EmailSetting
                  form={this.state}
                  onBlur={(...args) => this.onBlur("emailChangeField", ...args)}
                  settingRequest={settingRequest}
                  utils={utils}
                  triggerOrganisationEmailProfileAction={
                    this.triggerOrganisationEmailProfileAction
                  }
                  _handleChange={e => this._handleChange(e, "emailChangeField")}
                /> */}
                <PasswordSetting
                  form={this.state}
                  onBlur={(...args) =>
                    this.onBlur("passwordChangeField", ...args)
                  }
                  settingRequest={settingRequest}
                  utils={utils}
                  triggerOrganisationPasswordProfileAction={
                    this.triggerOrganisationPasswordProfileAction
                  }
                  _handleChange={e =>
                    this._handleChange(e, "passwordChangeField")
                  }
                />
              </div>
            )}
            {
              this.state.active === "verification" &&
              <SignUpVerificationOrganization
                {...this.props}
                request={this.props.utils}
                edit={true}
              />
            }
          </div>
        </div>

        <div className="clearfix"></div>
      </>
    );
  }
}

export default OrganizationProfileSetting;
