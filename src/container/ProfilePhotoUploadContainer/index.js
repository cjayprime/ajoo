import React, { Component } from "react";
import { connect } from "react-redux";

import { uploadProfileImage } from "../../store/authModules/actions.js";
import ProfilePhotoUploadComponent from "../../components/ProfilePhotoUpload";
import { showPercentageProgress } from "../../store/utilsModule/actions.js";

class ProfilePhotoUploadContainer extends Component {
  render() {
    const { uploadProfileImage, utils, showPercentageProgress } = this.props;
    return (
      <ProfilePhotoUploadComponent
        {...this.props}
        showPercentageProgress={showPercentageProgress}
        uploadProfileImage={uploadProfileImage}
        utils={utils}
      />
    );
  }
}

const mapStateToProps = ({ utils }) => ({
  utils
});

const mapDispatchToProps = {
  uploadProfileImage,
  showPercentageProgress
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePhotoUploadContainer);
