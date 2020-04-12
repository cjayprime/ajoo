import React, { Component } from "react";
import { Link } from "react-router-dom";

import LoadableButton from "../../../sharedComponent/LoadableButton";
import FormInputField from "../../../sharedComponent/form";
import { validateInput } from "../../../utils/misc";
import AlertDialog from "../../../sharedComponent/AlertDialog";
import { authRequest } from "../../../store/authModules/saga";
import Vector from "../../../assets/images/Vector.svg";
import eyeicon from "../../../assets/images/eyeicon.svg";

class SigninForm extends Component {
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
        }
      }
    };
  }

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    let newState = { ...this.state };
    Object.keys(newState.fields).map(key => {
      newState.fields[key].value = "";
      newState.fields[key].error = null;
      newState.fields[key].errorMessage = "";
      return null;
    });
    this._safelySetState(newState);
  }

  triggerSignInAction = e => {
    e.preventDefault();
    const { email, password } = this.state.fields;
    if (!validateInput(this.state.fields)) {
      return this._safelySetState({
        formError: true
      });
    }
    const data = {
      email: email.value,
      password: password.value
    };

    this.props.signinUser({
      data,
      history: this.props.history
    });
  };

  _handleChange = e => {
    const { name, value } = e.target;
    let newState = { ...this.state };
    newState.formError = false;
    newState.fields[name].error = false;
    newState.fields[name].value = value;
    this._safelySetState(newState);
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
    if (this._isMounted)
      return this.setState(state => ({
        [prevState]: !state[prevState],
        ...newState
      }));
  };

  render() {
    const { /*auth,*/ isLoading, utils, facebookSignin } = this.props;
    const {
      fields: { email, password },
      formError
    } = this.state;

    return (
      <>
        <div className="signinrow">
          <div className="signincolumn1">
            <img alt="sign in" src="images/sign_in.svg" />
          </div>
          <hr className="hr1" />
          <div className="signincolumn2">
            <form onSubmit={this.triggerSignInAction}>
              <div className="signUp_signIn">
                <h1>Sign In</h1>
                <Link to="/signup">
                  <span>Sign up?</span>
                </Link>
              </div>
              <div className="signIn_form">
                <AlertDialog
                  open={utils.feedback.for === authRequest.loginRequest}
                  message={utils.feedback.message}
                  success={utils.feedback.success}
                />
                <FormInputField
                  placeholder="e.g myemail@emailprovider.com"
                  name="email"
                  value={email.value}
                  onBlur={this.onBlur}
                  form={this.state.fields}
                  labelTitle="EMAIL"
                  onChange={this._handleChange}
                />
              </div>
              <div className="signIn_form">
                <FormInputField
                  type={this.state.hidden ? "password" : "text"}
                  name="password"
                  onBlur={this.onBlur}
                  value={password.value}
                  form={this.state.fields}
                  labelTitle="PASSWORD"
                  labelRight={
                    <span>
                      <Link to="/forgot_password">Forgot your Password?</Link>
                    </span>
                  }
                  onChange={this._handleChange}
                />
                <span className="field-icon" onClick={this.toggleShow}>
                  <img src={eyeicon} alt="Eye Icon" />
                </span>
              </div>

              <div className="checkBox" style={{ marginBottom: 15 }}>
                <input type="checkbox" />
                Remember Me
                <br />
              </div>
              <LoadableButton
                error={formError}
                id="signin"
                btnTitle="Sign in"
                isLoading={isLoading}
                type="submit"
              />
            </form>
          </div>
        </div>

        <div className="clearfix"></div>
      </>
    );
  }
}

export default SigninForm;
