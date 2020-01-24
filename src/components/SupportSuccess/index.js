import React, { Component } from 'react';

import Layout from '../../sharedComponent/Layout';
import "./index.css";

class SupportSentComponent extends Component {
    render() {
        return (
            <>
                <Layout {...this.props}>
                    <div className="support_sent">
                        <h1 style={{ color: "green" }}>MESSAGE SENT</h1>
                        <p>Your Message has been Received, We will Get back to You Shortly</p>
                    </div>
                </Layout>
            </>
        )
    }
}

export default SupportSentComponent;