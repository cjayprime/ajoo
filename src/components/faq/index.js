import React, { PureComponent } from "react";

import Layout from "../../sharedComponent/Layout";
import Faq from "./faq";
import "./faq.css";

class FaqComponent extends PureComponent {
  render() {
    return (
      <>
        <Layout {...this.props}>
          <Faq />
        </Layout>
      </>
    );
  }
}

export default FaqComponent;
