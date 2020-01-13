import React from "react";

import { Link } from "react-router-dom";

const BlogCard = props => {
  const { src, alt } = props;

  return (
      <div className="blog_page-body-div">
        <Link to="/blog_articles">
          <div className="blog_page-body-card">
            <img alt={alt} src={src} />
            <div>
              <span className="blog_page-body-date">23rd July, 2019</span>
              <h4>
                Miseram sedulitatem Democritea accessio honesto discordant
                permagna?
              </h4>
              <p>
                Miseram sedulitatem Democritea accessio honesto discordant
                permagna Platonis ingenii Graecos praetermittenda assiduitas
                queo sit renovata?
              </p>
            </div>
          </div>
        </Link>
      </div>
  );
};

export default BlogCard;
