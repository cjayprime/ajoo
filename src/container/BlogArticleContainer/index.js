import React, { PureComponent } from "react";

import BlogArticleComponent from "../../components/BlogArticleComponent";

class BlogArticleContainer extends PureComponent {
  render() {
    return <BlogArticleComponent 
    {...this.props}/>;
  }
}

export default BlogArticleContainer;
