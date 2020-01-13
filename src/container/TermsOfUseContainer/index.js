import React, { PureComponent } from 'react';
import TermsOfUseComponent from '../../components/TermsOfUse';

class TermsOfUseContainer extends PureComponent {
  render() {
    return (
      <TermsOfUseComponent 
      {...this.props}/>
    )
  }
}

export default TermsOfUseContainer;