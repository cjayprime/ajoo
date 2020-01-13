import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import { authRequest } from "../../store/authModules/saga";
import userphoto1 from "../../assets/images/userphoto1.svg";
import userphoto2 from "../../assets/images/userphoto2.svg";
import userphoto3 from "../../assets/images/userphoto3.svg";
import ImageUpload from "../../sharedComponent/ImageUpload";
import LoadableButton from "../../sharedComponent/LoadableButton";
import AlertDialog from "../../sharedComponent/AlertDialog";
import { isRequestActive } from "../../utils/misc"

class ProfilePhotoUpload extends PureComponent {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.state = {
      formError: false,
      image: ""
    };
  }

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    let newState = { ...this.state };
    this._safelySetState(newState);
  }

  setImage = image => {
    this.setState({ image });
  };

  triggerImageUpload = () => {
    const { image } = this.state;
    const { showPercentageProgress, history } = this.props;

    if (!image) {
      return this._safelySetState({
        formError: true
      });
    }
    this.props.uploadProfileImage({
      data: {
        image
      },
      history,
      showPercentageProgress
    });
  };

  // _handleChange = e => {
  //   let newState = { ...this.state };
  //   newState.formError = false;
  //   this._safelySetState(newState);
  // };

  _safelySetState = (newState, prevState = null) => {
    if (this._isMounted)
      return this.setState(state => ({
        [prevState]: !state[prevState],
        ...newState
      }));
  };

  render() {
    const { utils } = this.props;

    return (
      <>
        <h1 className="profile_photo_upload-head">Profile Image</h1>
        <div className="profile_photo_upload-row">
          <div className="profile_photo_upload-column1">
            <img src={userphoto1} alt="Profile Upload 1" />
            <img src={userphoto2} alt="Profile Upload 2" />
            <img src={userphoto3} alt="Profile Upload 3" />
          </div>
          <hr className="profile_photo_upload-hr" />
          {/* <hr className="profile_photo_upload-hr"/> */}
          <div className="profile_photo_upload-column2">
            <AlertDialog
              open={
                utils.feedback.for === authRequest.uploadProfileImageRequest
              }
              message={utils.feedback.message}
              success={utils.feedback.success}
            />
            <div className="profile_photo_upload-column2-img">
              <div style={{ height: 260, width: 260 }}>
                <ImageUpload
                  image={this.state.image}
                  setImage={this.setImage}
                  fileUploadProgress={utils.fileUploadProgress}
                  isUploading={
                    isRequestActive(utils.request, authRequest.uploadProfileImageRequest)
                  }
                />
              </div>
            </div>
            <div>
              <LoadableButton
                error={this.state.formError}
                className="profile_photo_upload-btn"
                btnTitle="Continue"
                onClick={this.triggerImageUpload}
                isLoading={
                  isRequestActive(utils.request, authRequest.uploadProfileImageRequest)
                }
              />
            </div>
            <div className="profile_upload_skip">
              <Link to="/">
                <div className="profile_upload_div">
                  <span>skip for now</span>
                  <span>
                    <ArrowForwardIcon />
                  </span>
                </div>
              </Link>
            </div>
          </div>
          {/* <hr className="hr1" /> */}
        </div>
        <div className="clearfix"></div>
      </>
    );
  }
}

export default ProfilePhotoUpload;
