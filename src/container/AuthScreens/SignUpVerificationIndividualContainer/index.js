import React, { PureComponent } from 'react';
import { connect } from "react-redux";

import SignUpVerificationIndividualComponent from "../../../components/AuthScreenComponent/SignUpVerificationIndividual";
import { verifySignupUser, uploadDocumentImageForVerification } from "../../../store/verifyModules/actions.js";
import { showPercentageProgress, showRequestFeedBack } from "../../../store/utilsModule/actions.js";

class SignUpVerificationIndividualContainer extends PureComponent {
    render() {
        const { verifySignupUser, uploadDocumentImageForVerification, utils, isLoading, request } = this.props;

        return (
            <>
                <SignUpVerificationIndividualComponent
                    {...this.props}
                    verifySignupUser={verifySignupUser}
                    uploadDocumentImageForVerification={uploadDocumentImageForVerification}
                    utils={utils}
                    isLoading={isLoading}
                    request={request}
                />
            </>
        )
    }
}

const mapStateToProps = ({ verify, utils }) => ({
    verify,
    utils,
    isLoading: utils.loading,
    request: utils.request
});

const mapDispatchToProps = {
    verifySignupUser,
    uploadDocumentImageForVerification,
    showPercentageProgress,
    showRequestFeedBack
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUpVerificationIndividualContainer);