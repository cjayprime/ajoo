import React, { PureComponent } from 'react';
import PrivacyPolicyComponent from '../../components/PrivacyPolicy';

class PrivacyPolicyContainer extends PureComponent {
  render() {
    return (
      <PrivacyPolicyComponent 
      {...this.props}/>
    )
  }
}

export default PrivacyPolicyContainer;