import React, { PureComponent } from 'react';
import VolunteerComponent from '../../components/Volunteer';

class VolunteerContainer extends PureComponent {
  render() {
    return (
      <VolunteerComponent 
      {...this.props}/>
    )
  }
}

export default VolunteerContainer;