import React, { PureComponent } from "react";

import { Link } from "react-router-dom";
import BlogCard from "../../sharedComponent/BlogCard";
import meeting from "../../assets/images/meeting.svg";

class BlogBody extends PureComponent {
  render() {
    const images = [
      {
        photo: meeting,
        alt: "Groups have meeting"
      },
      {
        photo: meeting,
        alt: "Groups have meeting"
      },
      {
        photo: meeting,
        alt: "Groups have meeting"
      },
      {
        photo: meeting,
        alt: "Groups have meeting"
      }
    ];
    return (
      <>
        <div className="blog_page-head">
          <div className="blog_page-head-div">
            <Link to="/blog_articles">
              <div
                className="blog_page-head-card"
                style={{ alignItems: "stretch" }}
              >
                <div
                  className="blog_page-head-image"
                  style={{
                    flex: 2
                  }}
                >
                  <img
                    src={meeting}
                    alt="blog-post-img"
                    style={{
                      height: "100%",
                      width: "100%"
                    }}
                  />
                </div>

                <div className="blog_page-head-post" style={{ flex: 1 }}>
                  <span className="blog_page-head-date">23rd July 2019</span>
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
        </div>

        <div className="newCampaigns_row1 blog_page-body">
          {images.map((image, i) => (
            <BlogCard src={image.photo} alt={image.alt} key={i} />
          ))}
        </div>
      </>
    );
  }
}

export default BlogBody;
