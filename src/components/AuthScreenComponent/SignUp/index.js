import React, { PureComponent } from "react";

import Layout from "../../../sharedComponent/Layout";
import { Link } from "react-router-dom";

class SignupComponent extends PureComponent {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.state = {};
  }

  componentDidMount() {
    this._isMounted = true;
  }

  _safelySetState = (newState, prevState = null) => {
    if (this._isMounted)
      return this.setState(state => ({
        [prevState]: !state[prevState],
        ...newState
      }));
  };

  render() {
    return (
      <Layout
        {...this.props}>
        <div className="sign_up">
          <h1>Sign up as</h1>
          <div className="signUp_row">
            <div className="signUp_column1">
              <img src="images/sign_up1.svg" alt="" />
              <Link to="/signup_individual">
                <button>Individual</button>
              </Link>
            </div>
            <hr />
            <div className="signUp_column2">
              <img src="images/sign_up2.svg" alt="" />
              <Link to="/signup_org">
                <button className="button_organisation">Organisation</button>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default SignupComponent;
