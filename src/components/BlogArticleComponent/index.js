import React, { PureComponent } from "react";

import Layout from "../../sharedComponent/Layout";
import BlogArticleHead from "./BlogArticleHead";
import BlogArticleBody from "./BlogArticleBody";
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
          <BlogArticleHead />
          <BlogArticleBody />
          <StartCampaign />
        </Layout>
      </>
    );
  }
}

export default BlogComponent;
