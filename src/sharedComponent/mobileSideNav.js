import React, { PureComponent } from 'react'
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import authServices from '../services/authServices';
import { signoutAction } from "../store/allActions";
import { withRouter } from "react-router";

class MobileSideNav extends PureComponent {
  render(){
    const {
      toggleMobileSideNav,
      openMobileSideNav,
    } = this.props;
    
    return (
      <div
        id="overlay2" 
        style={{ display: openMobileSideNav ? "block" : "none"}}>
        <div id="overlay2_header">
          <Link to="/">
            <img id="logo_img" alt="ajoo logo" src="images/logo.png" />
          </Link>
          <img onClick={toggleMobileSideNav} id="close_img" alt="close" src="images/close.png" />
        </div>
        <div id="overlay2_menu1">
          <ul id="overlay2_menu1_ul">
            <li><Link to="/how_it_works">How it works</Link></li>
            <li><Link to="/volunteer">Volunteer</Link></li>
            <li><Link to="/verified_page">Verified Pages</Link></li>
          </ul>
        </div>
        <hr />
        <div id="overlay2_menu2">
          <ul id="overlay2_menu2_ul">
            <li>
              <Link to="#"><i className="fas fa-search"></i>&nbsp; Search</Link>
            </li>
            <li><div id="overlay2_menu2_ul_li_divider"></div></li>
            <li><Link to={authServices.isAuthenticated() ? "/signout" : "/signin"} onClick={() => {
              if(authServices.isAuthenticated()){
                const { history, signoutAction } = this.props;
                signoutAction({ history });
              }
              toggleMobileSideNav();
            }}>{authServices.isAuthenticated() ? "Sign out" : "Sign in"}</Link></li>
          </ul>
        </div>
      </div>
    )
  }
}


const mapDispatchToProps = {
  signoutAction
};

export default withRouter(connect(null, mapDispatchToProps)(MobileSideNav));