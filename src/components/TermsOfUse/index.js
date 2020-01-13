import React, { PureComponent } from "react";

import Layout from "../../sharedComponent/Layout";
import TermsOfUse from "./TermsOfUse";

class TermsOfUseComponent extends PureComponent {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.state = {};
  }

  componentDidMount() {
    this._isMounted = true;
  }

  _safelySetState = (newState, prevState = null) => {
    if (this._isMounted)
      return this.setState(state => ({
        [prevState]: !state[prevState],
        ...newState
      }));
  };

  render() {
    return (
      <>
        <Layout>
          <TermsOfUse />
        </Layout>
      </>
    );
  }
}

export default TermsOfUseComponent;
