import React, { PureComponent } from "react";
import { connect } from "react-redux";

import { verifyEmail } from "../../../store/allActions.js";
import EmailSentComponent from "../../../components/AuthScreenComponent/EmailSent/index.js";

class EmailSentContainer extends PureComponent {
  render() {
    const { utils, user } = this.props;
    //console.log(utils, user)
    return <EmailSentComponent {...this.props} user={user} utils={utils} />;
  }
}

const mapStateToProps = ({ utils, auth }) => ({
  utils,
  user: auth.data
});

const mapDispatchToProps = {
  verifyEmail
};

export default connect(mapStateToProps, mapDispatchToProps)(EmailSentContainer);
