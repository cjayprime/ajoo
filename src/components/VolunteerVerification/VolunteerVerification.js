import React, { PureComponent } from "react";

// import { Link } from "react-router-dom";
import LoadableButton from "../../sharedComponent/LoadableButton";

class VolunteerVerification extends PureComponent {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.state = {};
  }

  handleSubmit = e => {
    e.preventDefault();
  };

  triggerAction = () => {
    this.props.volunteerImageUser();
  };

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
    const { /*verify,*/ isLoading } = this.props;

    return (
      <>
        <div className="verify_volunteer_image-row">
          <div className="verify_volunteer_image-column1">
            <img src="images/Vectorvolunteer1.svg" alt="Volunteer 1" />
            <img src="images/Vectorarrow.svg" alt="Volunteer arrow"  />
            <img src="images/Vectorvolunteer2.svg" alt="Volunteer 2"  />
            <img src="images/Vectorarrow.svg"  alt="Volunteer arrow" />
            <img src="images/Vectorvolunteer3.svg" alt="Volunteer 3"  />
          </div>
          <div className="verify_volunteer_image-column2">
            <form onSubmit={this.handleSubmit}>
              <label>Volunteer Verification</label>
              <p>
                Please upload a valid form of identication. E.g. National ID
                card, Nigerian International Passport, Student Identity Card
              </p>
              <div className="verification2_column3">
                <img
                  alt="verification"
                  id="organisation_logo"
                  src="images/drag.svg"
                />
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <LoadableButton
                  className="verify_volunteer_image-btn"
                  onClick={this.triggerAction}
                  btnTitle="Next"
                  isLoading={isLoading}
                />
              </div>
            </form>
          </div>
          <hr className="hr1" />
        </div>
        <div class="clearfix"></div>
      </>
    );
  }
}

export default VolunteerVerification;
