import React, { Component } from "react";

// import ellipse from "../../assets/images/Ellipse_2.png";
import { validateInput, IMAGE_URL, validate } from "../../utils/misc";
import { settingRequest } from "../../store/profilesettingsModules/saga";
import BasicInformation from "./BasicInformation";
import EmailSetting from "./EmailSettings";
import PasswordSetting from "./PasswordSettings";

const preImage = `${IMAGE_URL}100_100_`;

class IndividualProfileSetting extends Component {
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
      image: user.image_url ? `${preImage}${user.image_url}` : "",
      basicInformationFields: {
        first_name: {
          value: user.first_name || "",
          error: false,
          errorMessage: "",
          name: "first_name",
          rules: {
            required: true
          }
        },
        last_name: {
          value: user.last_name || "",
          error: false,
          errorMessage: "",
          name: "last_name",
          rules: {
            required: true
          }
        },
        mobile: {
          value: user.mobile || "",
          name: "mobile",
          error: false,
          errorMessage: "",
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
      emailChangeField: {
        new_email: {
          value: user.email ? user.email : "",
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
          error: null,
          name: "Password",
          errorMessage: "",
          rules: {
            required: true,
            password: true
          }
        }
      },
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
        new_password: {
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

  componentDidUpdate(){
    if(this.props.user.email && ! this.state.runOnce){

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

  setImage = image => {
    this.setState({ image });
  };

  triggerIndividualProfileAction = e => {
    e.preventDefault();
    let data = {};
    const { image } = this.state;
    const { showPercentageProgress, user, uploadProfileImage } = this.props;

    if (!image) {
      return this._safelySetState({
        formError: true
      });
    }
    
    Object.keys(this.state.basicInformationFields).map(key => {
      return data[key] = this.state.basicInformationFields[key].value;
    });
    
    if(! validate(this, this.state.basicInformationFields)){
      return;
    }

    if (!validateInput(this.state.basicInformationFields)) {
      return this._safelySetState({
        formError: true,
        action: "basicInformationFields"
      });
    }

    if (image !== `${preImage}${user.image_url}` && !!image) {
      uploadProfileImage({
        data: { image },
        showPercentageProgress
      });
    }
    this.props.individualProfileSetting({
      data
    });
  };

  triggerIndividualEmailProfileAction = e => {
    e.preventDefault();
    const { new_email, password } = this.state.emailChangeField;
    let data = {
      new_email: new_email.value,
      password: password.value
    };
    /*if (!validateInput(this.state.emailChangeField)) {
      return this._safelySetState({
        formError: true,
        action: "emailChangeField"
      });
    }*/
    this.props.individualEmailSetting({ data, history: this.props.history });
  };

  triggerIndividualPasswordProfileAction = e => {
    e.preventDefault();
    const {
      current_password,
      new_password,
      cnew_password
    } = this.state.passwordChangeField;

    let data = {
      current_password: current_password.value,
      new_password: new_password.value,
      cnew_password: cnew_password.value
    };
    /*if (!validateInput(this.state.passwordChangeField)) {
      return this._safelySetState({
        formError: true,
        action: "passwordChangeField"
      });
    }*/
    this.props.individualProfilePasswordSetting({
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
    
    this.setState(newState);
    if (name === "state") {
      this.props.fetchLga({ stateId: value });
    }
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
    this.setState(newState);
  };

  _safelySetState = (newState, prevState = null) => {
    if (this._isMounted){
      return this.setState({
        ...newState
      });
    }
  };

  render() {
    const { /*setting,*/ misc, request } = this.props;

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
            </div>

            {this.state.active === "profile" && (
              <BasicInformation
                form={this.state}
                lgaItem={lgaItem}
                stateItem={stateItem}
                request={request}
                imageVal={this.state.image}
                setImage={this.setImage}
                onBlur={(...args) =>
                  this.onBlur("basicInformationFields", ...args)
                }
                settingRequest={settingRequest}
                triggerIndividualProfileAction={
                  this.triggerIndividualProfileAction
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
                <EmailSetting
                  form={this.state}
                  onBlur={(...args) => this.onBlur("emailChangeField", ...args)}
                  settingRequest={settingRequest}
                  request={request}
                  triggerIndividualEmailProfileAction={
                    this.triggerIndividualEmailProfileAction
                  }
                  _handleChange={e => this._handleChange(e, "emailChangeField")}
                />
                <PasswordSetting
                  form={this.state}
                  onBlur={(...args) =>
                    this.onBlur("passwordChangeField", ...args)
                  }
                  settingRequest={settingRequest}
                  request={request}
                  triggerIndividualPasswordProfileAction={
                    this.triggerIndividualPasswordProfileAction
                  }
                  _handleChange={e =>
                    this._handleChange(e, "passwordChangeField")
                  }
                />
              </div>
            )}
          </div>
        </div>

        <div className="clearfix"></div>
      </>
    );
  }
}

export default IndividualProfileSetting;
