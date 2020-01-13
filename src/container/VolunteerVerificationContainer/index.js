import React, { PureComponent } from "react";
import { connect } from "react-redux";

import { volunteerImageUser } from "../../store/verifyModules/actions.js";
import VolunteerVerificationComponent from "../../components/VolunteerVerification";

class VolunteerVerificationContainer extends PureComponent {
  render() {
    const { volunteerImageUser, utils, isLoading, request } = this.props;
    return (
      <VolunteerVerificationComponent
        {...this.props}
        volunteerImageUser={volunteerImageUser}
        utils={utils}
        isLoading={isLoading}
        request={request}
      />
    );
  }
}

const mapStateToProps = ({ verify, utils }) => ({
  verify,
  isLoading: utils.loading,
  request: utils.request
});

const mapDispatchToProps = {
  volunteerImageUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VolunteerVerificationContainer);
