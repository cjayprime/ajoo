import React, { PureComponent } from 'react';

import Layout from "../../../sharedComponent/Layout";
import SignUpVerificationIndividual from "./SignUpVerificationIndividual"

class SignUpVerificationIndividualComponent extends PureComponent {
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
        const { verifySignupUser, uploadDocumentImageForVerification, showPercentageProgress, utils } = this.props;
        return (
            <>
                <Layout {...this.props}>
                    <SignUpVerificationIndividual
                        {...this.props}
                        verifySignupUser={verifySignupUser}
                        uploadDocumentImageForVerification={uploadDocumentImageForVerification}
                        showPercentageProgress={showPercentageProgress}
                        utils={utils}
                    />
                </Layout>
            </>
        )
    }
}

export default SignUpVerificationIndividualComponent;