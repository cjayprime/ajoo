import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Menu, MenuItem } from "@material-ui/core";

import { IMAGE_URL } from "../utils/misc";
import logo from "../assets/images/logo.png";
import line from "../assets/images/line.png";
import AuthService from "../services/authServices";
import { signoutAction } from "../store/allActions";
// import user_image from "../assets/images/Ellipse_2.png";

class HeaderNav extends PureComponent {
  constructor(props) {
    super(props);
    this.isAuthenticated = AuthService.isAuthenticated();
    this.state = {
      anchorEl: null
    };
  }

  signoutUser = () => {
    const { history, signoutAction } = this.props;
    signoutAction({ history });
    this.hideProfileMenu();
  };

  navigateToProfile = () => {
    const { history } = this.props;
    history.push("/profile");
    this.hideProfileMenu();
  };

  navigateToEditProfile = () => {
    const { history, user } = this.props;
    history.push(`/profile_setting/${user.is_organization === 0 ? "individual" : "organization"}`)
  }

  showProfileMenu = e => {
    this.setState({
      anchorEl: e.currentTarget
    });
  };

  hideProfileMenu = () => {
    this.setState({
      anchorEl: null
    });
  };

  render() {
    const { toggleSearch, toggleMobileSideNav, user, route } = this.props;

    const hideNavLinks = !(
      route === "/reset_password" || route === "/forgot_password"
    );

    return (
      <header>
        <nav className="nav-wrapper">
          <ul className="menu_left">
            <li className="logo">
              <Link to="/">
                <img alt="ajoo logo" src={logo} />
              </Link>
            </li>
            {hideNavLinks && (
              <>
                <li className="menu_left_li">
                  <Link to="/how_it_works">How it Works</Link>
                </li>
                <li className="menu_left_li">
                  <Link to="/volunteer">Volunteer</Link>
                </li>
                <li className="menu_left_li">
                  <Link to="/verified_page">Organizations</Link>
                </li>
              </>
            )}
          </ul>
          {hideNavLinks && (
            <ul className="menu_right">
              <li
                onClick={toggleSearch}
                style={{ cursor: "pointer" }}
                className="menu_right_li"
              >
                <i className="fas fa-search"></i>&nbsp; Search
              </li>
              <li className="menu_right_li">
                <img alt="" src={line} />
              </li>
              {typeof user.is_organization !== "undefined" ? (
                <>
                  <li className="menu_right_li">

                    {user.is_organization === 0
                      ? `${user.first_name} ${user.last_name}`
                      : `${user.organization_name ? user.organization_name : ""}`}

                    <div style={{
                      fontSize: 10, display: "flex", justifyContent: "center", alignItems: "center", height: 15, padding: 1.5, borderRadius: 5, width: "auto",
                      background: user.verified === 1 ? "green" : "orange",
                      color: user.verified === 1 ? "white" : "black"
                    }}>
                      {
                        user.is_volunteer > 0
                          ? "VOLUNTEER"
                          : user.verified === 1
                            ? "VERIFIED"
                            : "UNVERIFIED"
                      }
                    </div>

                  </li>
                  <li>
                    <div
                      onClick={this.showProfileMenu}
                      style={{
                        display: "inline-block",
                        backgroundImage: `url(${IMAGE_URL}60_60_${user.image_url})`,
                        backgroundColor: "#f9fafc",
                        border: "3px solid #FFFFFF",
                        borderRadius: "50%",
                        cursor: "pointer",
                        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                        minHeight: 60,
                        minWidth: 60
                      }}
                    />
                    <Menu
                      id="simple-menu"
                      anchorEl={this.state.anchorEl}
                      open={Boolean(this.state.anchorEl)}
                      onClose={this.hideProfileMenu}
                      style={{
                        marginTop: 60
                      }}
                      keepMounted
                    >
                      <div>
                        <MenuItem
                          onClick={this.navigateToEditProfile}
                          style={{
                            marginLeft: 10,
                            marginRight: 10
                          }}
                        >
                          <Link
                            // to={`/profile_setting/${
                            //   user.is_organization === 0 ? "individual" : "organization"
                            //   }`}
                            to={`/profile_setting`}
                          >
                            My Profile
                          </Link>
                        </MenuItem>
                        <MenuItem
                          onClick={this.navigateToProfile}
                          style={{
                            marginLeft: 10,
                            marginRight: 10
                          }}
                        >
                          <Link to="/profile">My Campaigns</Link>
                        </MenuItem>
                        <MenuItem
                          onClick={this.signoutUser}
                          style={{
                            marginLeft: 10,
                            marginRight: 10
                          }}
                        >
                          Logout
                        </MenuItem>
                      </div>
                    </Menu>
                  </li>
                </>
              ) : (
                  <>
                    <li className="menu_right_li">
                      <Link to="/signin">Sign In</Link>
                    </li>
                    <li>
                      <Link to="/create_campaigns">
                        <button>START CAMPAIGN</button>
                      </Link>
                    </li>
                  </>
                )}
              <li id="dropDown" onClick={toggleMobileSideNav}>
                <i className="fa fa-align-justify fa-2x"></i>
              </li>
            </ul>
          )}
        </nav>
      </header>
    );
  }
}

const mapStateToProps = ({ auth, utils }) => ({
  user: auth.data,
  request: utils.request
});

const mapDispatchToProps = {
  signoutAction
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderNav);
