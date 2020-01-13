// import React, { PureComponent } from "react";
// import { matchRoutes } from "react-router-config";
// import { withRouter } from "react-router-dom";
// import { connect } from "react-redux";
// import AppContext from "../AppContext";

// class AuthenticateUser extends PureComponent {
//   constructor(props, context) {
//     super(props);
//     const { routes } = context;
//     this.state = {
//       accessGranted: true,
//       routes
//     };
//   }

//   componentDidMount() {
//     if (!this.state.accessGranted) {
//       this.redirectRoute();
//     }
//   }

//   componentDidUpdate() {
//     if (!this.state.accessGranted) {
//       this.redirectRoute();
//     }
//   }

//   static getDerivedStateFromProps(props, state) {
//     const { location } = props;
//     const { pathname } = location;
//     const isAuth = true;

//     const matched = matchRoutes(state.routes, pathname)[0];

//     return {
//       accessGranted: matched ? isAuth : true
//     };
//   }

//   redirectRoute() {
//     const { history } = this.props;
//     /* User Redirect to Login Page if not authenticated */
//     history.push({
//       pathname: "/login"
//     });
//   }

//   render() {
//     // console.info('Fuse Authorization rendered', accessGranted);
//     return this.state.accessGranted ? (
//       <React.Fragment>{this.props.children}</React.Fragment>
//     ) : null;
//   }
// }

// function mapStateToProps({ user }) {
//   return {};
// }

// AuthenticateUser.contextType = AppContext;

// export default withRouter(connect(mapStateToProps)(AuthenticateUser));
