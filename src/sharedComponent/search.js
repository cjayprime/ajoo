import React, { PureComponent } from "react";

import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

class SearchBar extends PureComponent {
  render() {
    const { toggleSearch, openSearch } = this.props;
    return (
      <div id="" className={openSearch === false ? "overlay" : "non_overlay"}>
        {openSearch && (
          <div id="" className="overlay1_search_content">
            <SearchIcon className="search_icon" />
            <input
              type="text"
              className="overlay_search_input"
              placeholder="Search Ajoo..."
              name="search"
            />
            <button
              className="overlay1_search_button"
              onClick={toggleSearch}
            >
              <span>Close&nbsp;&nbsp;</span>
              <CloseIcon />
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default SearchBar;
