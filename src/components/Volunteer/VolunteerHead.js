import React, { PureComponent } from "react";

import volunteerImg from "../../assets/images/non_volunteer.svg";

export default class VolunteerHead extends PureComponent {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.state = {
      active: "campaigns"
    };
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
    return (
      <>
        <div className="volunteerHead">
          <div className="volunteerHead_container">
            <h1 className="volunteerHead_banner">Ajoo Volunteers</h1>
            <p className="volunteerHead_desc">
              For Ajoo, we are not just about crowdfunding, we are about
              community. This is why, beyond raising money, it is important that
              we maintain the integrity of campaigns put up on this platform.
              While we can not do this alone, the community can ensure that
              donations are made towards sincere causes.
            </p>
            <div className="volunteerHead_image">
              <img src={volunteerImg} alt="volunteerImg" />
            </div>
          </div>
        </div>
      </>
    );
  }
}
