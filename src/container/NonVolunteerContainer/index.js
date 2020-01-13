import React, { PureComponent } from 'react';
import NonVolunteerComponent from '../../components/NonVolunteer';

class NonVolunteerContainer extends PureComponent {
  render() {
    return (
      <NonVolunteerComponent 
      {...this.props}/>
    )
  }
}

export default NonVolunteerContainer;