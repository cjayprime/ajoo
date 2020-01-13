import React, { PureComponent } from "react";

import Layout from "../../sharedComponent/Layout";
import BlogHead from "./BlogHead";
import BlogBody from "./BlogBody";
import StartCampaign from "../../sharedComponent/StartCampaign";

class BlogComponent extends PureComponent {
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
        <Layout
          {...this.props}>
          <BlogHead />
          <div className="blog-body">
            <BlogBody />
          </div>
          <StartCampaign />
        </Layout>
      </>
    );
  }
}

export default BlogComponent;
