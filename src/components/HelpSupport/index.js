import React, { PureComponent } from 'react';

import Layout from "../../sharedComponent/Layout";
import { isRequestActive } from "../../utils/misc";
import { miscRequest } from "../../store/miscModules/saga";
import "./index.css";
import HelpSupport from "./Help";
import HelpHead from './HelpHead';

class HelpSupportComponent extends PureComponent {
    constructor(props) {
        super(props);
        this._isMounted = false;
        this.state = {}
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
        const { helpSupportAction, utils, user } = this.props;
        return (
            <Layout {...this.props}>
                <HelpHead />
                <HelpSupport
                    {...this.props}
                    helpSupportAction={helpSupportAction}
                    utils={utils}
                    user={user}
                    isLoading={isRequestActive(
                        utils.request,
                        miscRequest.helpSupportRequest
                    )}
                />
            </Layout>
        );
    }
}

export default HelpSupportComponent;