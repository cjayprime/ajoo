import React, { PureComponent } from 'react';
import { connect } from "react-redux"

import HelpSupportComponent from "../../components/HelpSupport";
import { helpSupportAction } from "../../store/miscModules/actions";

class HelpSupportContainer extends PureComponent {
    render() {
        const { helpSupportAction, utils, user } = this.props
        return (
            <>
                <HelpSupportComponent
                    {...this.props}
                    helpSupportAction={helpSupportAction}
                    utils={utils || {}}
                    user={user}
                />
            </>
        )
    }
}

const mapStateToProps = ({ utils, auth }) => ({
    utils,
    user: auth.data
});

const mapDispatchToProps = {
    helpSupportAction
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HelpSupportContainer)