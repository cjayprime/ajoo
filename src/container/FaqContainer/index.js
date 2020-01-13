import React, { PureComponent } from "react";

import FaqComponent from "../../components/faq";

class FaqContainer extends PureComponent {
  render() {
    return <FaqComponent 
    {...this.props}/>;
  }
}

export default FaqContainer;
