import React, { PureComponent } from "react";
import HeaderNav from "./Header";
import SearchBar from "./search";
import MobileSideNav from "./mobileSideNav";
import Footer from "./Footer";

class Layout extends PureComponent {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.state = {
      openSearch: false,
      openMobileSideNav: false
    };
  }

  componentDidMount() {
    this._isMounted = true;
    window.scrollTo(0, 0);
  }

  _safelySetState = (newState, prevState = []) => {
    if (this._isMounted)
      this.setState(state => {
        let toggledState = {};
        prevState.map(el => {
          return toggledState[el] = !state[toggledState];
        });
        return {
          ...toggledState,
          ...newState
        };
      });
  };

  toggleSearch = () => {
    this.setState(state => ({
      openSearch: !state.openSearch
    }));
  };

  toggleMobileSideNav = () => {
    //this._safelySetState({}, ["openMobileSideNav"]);
    
    if (this.state.openSearch) this._safelySetState({}, ["openSearch"]);

    // Imitates the above line
    this.setState({ openMobileSideNav: ! this.state.openMobileSideNav});
  };

  render() {
    const { children, route } = this.props;
    const { openSearch, openMobileSideNav } = this.state;
    
    return (
      <div style={{ width: "100%", height: "auto" }}>
        <HeaderNav
          toggleSearch={this.toggleSearch}
          route={route}
          toggleMobileSideNav={this.toggleMobileSideNav}
          {...this.props}
        />
        <div className="container">
          <SearchBar {...this.props} toggleSearch={this.toggleSearch} openSearch={openSearch} />
          <MobileSideNav
            toggleMobileSideNav={this.toggleMobileSideNav}
            openMobileSideNav={openMobileSideNav}
            {...this.props}
          />
          {children}
          <Footer {...this.props} />
        </div>
      </div>
    );
  }
}

export default Layout;
