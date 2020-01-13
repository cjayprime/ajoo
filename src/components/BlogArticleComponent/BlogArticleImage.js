import React, { PureComponent } from "react";

import meeting from "../../assets/images/meeting.svg";

class BlogArticleImage extends PureComponent {
  render() {
    return (
      <img
        src={meeting}
        alt="article_image"
        className="blog_article-image"
      />
    );
  }
}

export default BlogArticleImage;
