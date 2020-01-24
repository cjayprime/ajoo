import React, { PureComponent } from "react";

import Layout from "../../../sharedComponent/Layout";
import LoadableButton from "../../../sharedComponent/LoadableButton";
import { isRequestActive } from "../../../utils/misc";
import { authRequest } from "../../../store/authModules/saga";

class EmailSentComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { verifyEmail, match } = this.props;
    verifyEmail({ token: match.params.token });
  }

  triggerAction = () => {
    // if (isVerified) {
    //   this.props.history.push("/signin");
    // }
  };

  render() {
    const { user, utils, location } = this.props;
    return (
      <Layout route={location.pathname}>
        <div className="phone-confirm-body">
          <div className="phone_verify">
            <h1 style={{ color: "green" }}>EMAIL SENT</h1>
            <div className="phone_verify-form">
              <div style={{ textAlign: "center", marginBottom: 30 }}>
                <p style={{ fontSize: "16px", lineHeight: "24px" }}>
                  Hello {user.first_name}! To verify your account, and finish
                  your registration,{" "}
                </p>
                <p style={{ fontSize: "16px", lineHeight: "24px" }}>
                  a mail has been sent to your email address.
                </p>
                <p style={{ fontSize: "16px", lineHeight: "24px" }}>
                  Click the link provided in your email to continue.
                </p>
              </div>
            </div>
            {/*<div className="phone_verify-form">
              <LoadableButton
                onClick={this.triggerAction}
                btnTitle={"RESEND EMAIL"}
                // isLoading={isLoading}
              />
            </div>*/}
          </div>
        </div>
      </Layout>
    );
  }
}

export default EmailSentComponent;
