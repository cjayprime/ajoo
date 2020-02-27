import React, { Component } from 'react';

import Layout from "../../sharedComponent/Layout";
import VolunteerDocument from "./VolunteerDocument";
import "./index.css";

class VolunteerDocumentComponent extends Component {
    render() {
        return (
            <>
                <Layout {...this.props}>
                    <VolunteerDocument  {...this.props} />
                </Layout>
            </>
        )
    }
}

export default VolunteerDocumentComponent;