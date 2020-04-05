import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/images/logo.png";

class Footer extends PureComponent {
  render() {
    return (
      <>
        <div className="footerUp">
          <ul className="footerUp_column1">
            <li className="logo">
              <img alt="logo" src={logo} />
            </li>
            <h6>
              Raise money for charity and causes you’re passionate about online.
              Ajoo is an innovative, cost-effective online fundraising website
              for personal and innovative projects.
            </h6>
          </ul>
          <ul className="footerUp_column2" id="footerColumn1">
            <li>
              <h5>Explore</h5>
            </li>
            <li>
              <Link to="/campaigns">Campaigns</Link>
            </li>
            <li>
              <a href="/campaigns" onClick={(e) => {
                e.preventDefault();
                this.props.history.push("/campaigns", { is_reward: 1 })
              }}>Rewards</a>
            </li>
            <li>
              <a href="/campaigns" onClick={(e) => {
                e.preventDefault();
                this.props.history.push("/campaigns", { is_reward: 0 })
              }}>Non-Rewards</a>
            </li>
            <li>
              <Link to="/volunteer">Community</Link>
            </li>
          </ul>
          <ul className="footerUp_column2" id="footerColumn2">
            <li>
              <h5>More</h5>
            </li>
            <li>
              <Link to="/how_it_works">How it Works</Link>
            </li>
            <li>
              <Link to="/volunteer">Volunteer</Link>
            </li>
            <li>
              <Link to="/verified_page">Organizations</Link>
            </li>
            <li>
              <Link to="/success_stories">Success Stories</Link>
            </li>
          </ul>
          <ul className="footerUp_column2" id="footerColumn3">
            <li>
              <h5>Company</h5>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/faq">FAQs</Link>
            </li>
            <li>
              <a href="https://medium.com/ajoo-notes" target="_blank">Blog</a>
            </li>
            <li>
              <Link to="/help">Help & Support</Link>
            </li>
          </ul>
        </div>

        <div className="clearfix"></div>

        <footer>
          <div className="footer_row">
            <div className="footer_column1">
              <div>
                <Link to="/terms_of_use">Terms of Use</Link>
              </div>
              <div>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </div>
            </div>
            <div className="footer_column2">
              <div>
                <Link to="#">
                  Copyright &copy; 2020 Ajoo. All Rights Reserved
                </Link>
              </div>
            </div>
            <div className="footer_column3">
              <div>
                <a href="https://web.facebook.com/ajoonig" target="_blank">
                  <i className="fab fa-facebook-square fa-2x"></i>
                </a>
              </div>
              <div>
                <a href="https://www.instagram.com/ajoo_nig/" target="_blank">
                  <i className="fab fa-instagram fa-2x"></i>
                </a>
              </div>
              <div>
                <a href="https://twitter.com/ajoo_ng" target="_blank">
                  <i className="fab fa-twitter fa-2x"></i>
                </a>
              </div>
              <div>
                <a href=" https://www.linkedin.com/company/64648409/admin/content-suggestions/" target="_blank">
                  <i className="fab fa-linkedin fa-2x"></i>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
