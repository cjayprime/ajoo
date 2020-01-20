import React, { PureComponent } from 'react';

import Success from "./Success";
import Layout from '../../sharedComponent/Layout';
import SuccessHead from './SuccessHead';

class SuccessComponent extends PureComponent {
    render() {
        return (
            <>
                <Layout {...this.props}>
                    <SuccessHead />
                    <Success />
                </Layout>
            </>
        )
    }

}

export default SuccessComponent;