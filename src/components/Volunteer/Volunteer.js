import React, { PureComponent } from "react";

import { IMAGE_URL } from "../../utils/misc";

import name1 from "../../assets/images/name1.png";
import name2 from "../../assets/images/name2.png";
import name3 from "../../assets/images/name3.png";
import name4 from "../../assets/images/name4.png";
import goldBadge from "../../assets/images/star.svg";
import silverBadge from "../../assets/images/star2.svg";
import blueBadge from "../../assets/images/star3.svg";
import report2 from "../../assets/images/report2.svg";

const preImage = `${IMAGE_URL}60_60_`;

class Volunteer extends PureComponent {
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
    const { volunteers } = this.props;
    
    return (
      <>
        <h1 className="volunteer_head">Ajoo Volunteers</h1>
        <div className="volunteer_images_body">
          {volunteers.map((v, i) => (
            <div key={i}>
              <div className="volunteer_image">
                <img
                  src={preImage + "" + v.image_url}
                  alt={preImage + "" + v.image_url}
                  className="volunteer_image_img"
                />
                <div className="volunteer_image_name">
                  <div>
                    <img src={goldBadge} alt="" />
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    {v.first_name + " " + v.last_name}
                  </div>
                </div>
                <div className="report_volunteer">
                  <img src={report2} alt="" className="report_volunteer_icon" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default Volunteer;
