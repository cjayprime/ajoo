import React, { PureComponent } from "react";

import Layout from "../../../sharedComponent/Layout";
import LoadableButton from "../../../sharedComponent/LoadableButton";
import { isRequestActive } from "../../../utils/misc";
import { authRequest } from "../../../store/authModules/saga";
import Spinner from "../../../sharedComponent/Spinner";

class EmailVerificationComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { verifyEmail, match } = this.props;
    verifyEmail({ token: match.params.token });
  }

  triggerAction = isVerified => {
    if (isVerified) {
      this.props.history.push("/signin");
    }
  };

  render() {
    const {
      isLoading,
      request,
      emailVerificationSuccess,
      location
    } = this.props;
    const isVerified = emailVerificationSuccess === true;
    return (
      <Layout route={location.pathname}>
        <div className="phone-confirm-body">
          {!isRequestActive(request, authRequest.verifyEmailRequest) ? (
            <div className="phone_verify">
              <h1 style={{ color: isVerified ? "green" : "red" }}>
                EMAIL VERIFICATION{" "}
                {isVerified ? "SUCCESSFULL" : "UNSUCCESSFULL"}
              </h1>
              <div className="phone_verify-form">
                <div style={{ textAlign: "center", marginBottom: 30 }}>
                  <p style={{ fontSize: "14px", lineHeight: "24px" }}>
                    {isVerified
                      ? "Your email has been verified successfully. You can now proceed to login"
                      : "Your email was not verified successfully. Click the button below to request another mail."}
                  </p>
                </div>
              </div>
              <div className="phone_verify-form">
                <LoadableButton
                  onClick={() => this.triggerAction(isVerified)}
                  btnTitle={isVerified ? "LOGIN" : "RESEND EMAIL"}
                  isLoading={isLoading}
                />
              </div>
            </div>
          ) : (
            <Spinner />
          )}
        </div>
      </Layout>
    );
  }
}

export default EmailVerificationComponent;
