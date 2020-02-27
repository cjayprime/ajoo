import React, { PureComponent } from 'react';
import { connect } from "react-redux";
import VolunteerComponent from '../../components/Volunteer';
import { getAllVolunteers } from "../../store/verifyModules/actions"; 

class VolunteerContainer extends PureComponent {
  render() {
    return (
      <VolunteerComponent
      {...this.props}/>
    )
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = {
  getAllVolunteers
}

export default connect(mapStateToProps, mapDispatchToProps)(VolunteerContainer);