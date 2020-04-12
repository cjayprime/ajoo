import React, { Component } from 'react';
import { connect } from "react-redux";

import VolunteerDocumentComponent from "../../components/VolunteerDocument";
import { uploadVolunteerBill, uploadVolunteerIdentificationDocument } from "../../store/campaignModules/actions";
import { showPercentageProgress, showRequestFeedBack } from "../../store/utilsModule/actions.js";

class VolunteerDocumentContainer extends Component {
    render = () => <VolunteerDocumentComponent {...this.props} />;
}


const mapStateToProps = state => state;

const mapDispatchToProps = {
    uploadVolunteerBill,
    uploadVolunteerIdentificationDocument,
    showPercentageProgress,
    showRequestFeedBack
}

export default connect(mapStateToProps, mapDispatchToProps)(VolunteerDocumentContainer);