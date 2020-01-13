import React, { PureComponent } from "react";
import { connect } from "react-redux";

import { confirmUser } from "../../store/confirmModules/actions.js";
import PhoneConfirmationComponent from "../../components/PhoneConfirmation/index";

class PhoneConfirmationContainer extends PureComponent {
  render() {
    const { confirmUser, utils, isLoading, request } = this.props;
    return (
      <PhoneConfirmationComponent
        {...this.props}
        confirmUser={confirmUser}
        utils={utils}
        isLoading={isLoading}
        request={request}
      />
    );
  }
}

const mapStateToProps = ({ confirm, utils }) => ({
  confirm,
  isLoading: utils.loading,
  request: utils.request
});

const mapDispatchToProps = {
  confirmUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhoneConfirmationContainer);
