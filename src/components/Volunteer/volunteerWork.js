import React, { PureComponent } from "react";
import Modal from "react-responsive-modal";
import { Link } from "react-router-dom";

import note from "../../assets/images/note.svg";

const bg = {
  overlay: {
    background: "rgba(17, 12, 12, 0.932)"
  },
  modal: {
    display: "flex",
    justifyContent: "center",
    background: "#FFFFFF",
    borderRadius: "5px"
  }
};

class VolunteerWork extends PureComponent {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.state = {
      isModalActive: false
    };
  }

  componentDidMount() {
    this._isMounted = true;
  }

  /*toggleModal = () => {
    this.setState(state => ({ isModalActive: !state.isModalActive }));
  };

  becomeVolunteer = () => {
    this.toggleModal();
  };*/

  render() {
    return (
      <>
        <h2 className="volunteerWork_head">How Volunteering Works</h2>
        <div className="volunteerWork_banner">
          <div className="volunteerWork1">
            <p>
              Register as a volunteer and help verify that campaigns are true
              and sincere. Volunteers are assigned to campaigns based on
              location. Once registered as a volunteer, you get notified of
              campaigns with same geo-tag as your registered location. After
              reviewing the campaign details, and if comfortable with the
              information, you can then accept to be assigned to the campaign.
              Once assigned to the campaign, you can help take further steps to
              help verify the campaign. Such further steps include: Visiting the
              hospital in case of medical emergencies, Phone interviews with the
              campaigner, Where a safe neutral location can be agreed upon,
              meeting the campaigner in person. Once satisfied with the
              situation and facts available, you can then recommend the campaign
              for a verified status. Campaigns with verified status are presumed
              to be true, sincere and worthy of support. Hence, volunteers
              should not recommend campaigns where there is any form of doubt at
              all.
            </p>
          </div>
          <div className="volunteerWork2">
            <img src={note} alt="note" />
          </div>
        </div>
        <Link to="/volunteer_document">
          <div className="volunteerWork_button">
            <button
              className="donateButton"
            >
              Become a Volunteer
            </button>
          </div>
        </Link>
        {/*<Modal
          open={this.state.isModalActive}
          onClose={this.toggleModal}
          styles={bg}
          center
        >
          <div className="report_modal-body">
            <h1 className="report_modal-head" style={{ paddingTop: 0 }}>
              Sorry
            </h1>

            <p>
              You can't be a Volunteer yet!
              <br />
              You have to have donated to 5 Campaigns before you can become a
              volunteer
            </p>
            <div
              className="report_modal-btn"
              style={{ marginTop: 50, float: "right" }}
            >
              <button
                className="report_btn-submit"
                style={{ cursor: "pointer" }}
                onClick={this.toggleModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </Modal>*/}
      </>
    );
  }
}

export default VolunteerWork;
