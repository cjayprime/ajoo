import React, { Component } from 'react';

import About from "./About";
import Layout from '../../sharedComponent/Layout';

class AboutCompoent extends Component {
    render() {
        return (
            <>
                <Layout {...this.props}>
                    <About />
                </Layout>
            </>
        )
    }
}

export default AboutCompoent;