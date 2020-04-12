import React, { PureComponent } from "react";

import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

class SearchBar extends PureComponent {
  state = {
    search: ""
  }

  render() {
    const { toggleSearch, openSearch, history } = this.props;
    const { search } = this.state;
    
    return (
      <div id="" className={openSearch === false ? "overlay" : "non_overlay"}>
        {openSearch && (
          <div id="" className="overlay1_search_content">
            <SearchIcon className="search_icon"/>
            <input
              type="text"
              className="overlay_search_input"
              placeholder="Search Ajoo..."
              name="search"
              value={search}
              onChange={(e) => this.setState({search: e.target.value})}
            />
            <button
              className="overlay1_search_button"
              
            >
              <span  onClick={() => history.push("/campaigns", { search })}>Search&nbsp;&nbsp;</span>
              <CloseIcon onClick={toggleSearch}/>
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default SearchBar;