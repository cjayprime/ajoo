import React, { PureComponent } from "react";

import Header from "../../sharedComponent/Header";
import Faq from "./faq";
import "./faq.css";

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
