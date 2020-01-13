import React, { PureComponent } from "react";

import VolunteerVerification from "./VolunteerVerification";
import Layout from "../../sharedComponent/Layout";
import { verifyRequest } from "../../store/verifyModules/actions";
//import Footer from "../../sharedComponent/Footer";

class VolunteerVerificationComponent extends PureComponent {
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
    const { volunteerImageUser, utils, isLoading, request } = this.props;

    return (
      <>
        <Layout>
          <div className="verify_volunteer_image-body">
            <VolunteerVerification
              volunteerImageUser={volunteerImageUser}
              utils={utils}
              isLoading={
                isLoading &&
                request === verifyRequest.verifyVolunteerImageRequest
              }
            />
          </div>
        </Layout>
      </>
    );
  }
}

export default VolunteerVerificationComponent;
