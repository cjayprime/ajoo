import React, { PureComponent } from "react";

import BlogComponent from "../../components/BlogComponent";

class BlogContainer extends PureComponent {
  render() {
    return <BlogComponent 
    {...this.props}/>;
  }
}

export default BlogContainer;
