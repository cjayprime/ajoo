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
              <Link to="#">Rewards</Link>
            </li>
            <li>
              <Link to="#">Donations</Link>
            </li>
            <li>
              <Link to="#">Community</Link>
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
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/help">Help & Support</Link>
            </li>
          </ul>
        </div>

        <div className="clearfix"></div>

        <footer>
          <div className="footer_row">
            <ul className="footer_column1">
              <li>
                <Link to="/terms_of_use">Terms of Use</Link>
              </li>
              <li>
                <Link to="/tnc">Legal</Link>
              </li>
            </ul>
            <ul className="footer_column2">
              <li>
                <Link to="#">
                  Copyright &copy; 2019 Ajoo. All Rights Reserved
                </Link>
              </li>
            </ul>
            <ul className="footer_column3">
              <li>
                <i className="fab fa-facebook-square fa-2x"></i>
              </li>
              <li>
                <i className="fab fa-instagram fa-2x"></i>
              </li>
              <li>
                <i className="fab fa-twitter fa-2x"></i>
              </li>
            </ul>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
