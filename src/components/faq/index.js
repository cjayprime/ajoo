import React, { PureComponent } from "react";

import Header from "../../sharedComponent/Header";
import Faq from "./faq";

class FaqComponent extends PureComponent {
  render() {
    return (
      <>
        <Header />
        <Faq />
      </>
    );
  }
}

export default FaqComponent;
