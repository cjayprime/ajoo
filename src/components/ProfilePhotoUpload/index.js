import React, { PureComponent } from "react";

import ProfilePhotoUpload from "./ProfilePhotoUpload";
import Layout from "../../sharedComponent/Layout";

class ProfilePhotoUpLoadComponent extends PureComponent {
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
    const { uploadProfileImage, utils, showPercentageProgress } = this.props;

    return (
      <>
        <Layout {...this.props}>
          <div className="profile_photo-body">
            <ProfilePhotoUpload
              {...this.props}
              uploadProfileImage={uploadProfileImage}
              utils={utils}
              showPercentageProgress={showPercentageProgress}
            />
          </div>
        </Layout>
      </>
    );
  }
}

export default ProfilePhotoUpLoadComponent;
