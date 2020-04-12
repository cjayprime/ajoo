import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

import Vector from "../../assets/images/Vector.png";
import medal from "../../assets/images/medal.png";
import Vector2 from "../../assets/images/Vector2.png";
import Vector3 from "../../assets/images/Vector3.png";

class WhyAjoo extends PureComponent {
  render() {
    const icons = [
      {
        photo: Vector,
        alt: "mouse icon",
        text: "Free & Setup",
        text2:
          "Start fundraising in minutes. No goal requirements, no deadlines"
      },
      {
        photo: medal,
        alt: "medal icon",
        text: "Rewards for Donations",
        text2:
          "Partnership with reliable and trusted organizations and volunteers."
      },
      {
        photo: Vector2,
        alt: "headphone icon",
        text: "Expert Advice, 24/7",
        text2:
          " Our campaign coaches will answer your questions in 5 minutes, day or night."
      },
      {
        photo: Vector3,
        alt: "safety icon",
        text: "Safety Guaranteed",
        text2:
          "The Ajoo Safety Guarantee protects your donations and supporters."
      }
    ];
    return (
      <>
        <div className="why_ajoo_container">
          <div className="why_ajoo_heading">
            <h2>Why Ajoo?</h2>
          </div>
          <p className="circle"></p>
          <div className="why_ajoo_content">
            {icons.map((icon, i) => (
              <div className="why_ajoo_content_item" key={i}>
                <div className="why_ajoo_content_item_icon_container">
                  <img
                    src={icon.photo}
                    alt={icon.alt}
                    className="why_ajoo_content_item_icon"
                    key={i}
                  />
                </div>
                <h3 className="why_ajoo_content_item_heading">{icon.text}</h3>
                <hr className="why_ajoo_content_item_line" />
                <p className="why_ajoo_content_item_text">{icon.text2}</p>
              </div>
            ))}
          </div>

          <div className="button_home">
            <div className="heading_button">
              <Link to="/create_campaigns">
                <p className="heading_button_text">start a campaign</p>
              </Link>
            </div>
          </div>
        </div>

        <div className="clearfix"></div>
      </>
    );
  }
}

export default WhyAjoo;
