import React, { PureComponent } from "react";
import { connect } from "react-redux";

import { fetchCategories } from "../../store/miscModules/actions";
import VerifiedPagesComponent from "../../components/VerifiedPages";

class VerifiedPagesContainer extends PureComponent {
  render() {

    const {
      fetchCategories,
      categories
    } = this.props

    return <VerifiedPagesComponent
      categories={categories}
      fetchCategories={fetchCategories}
      {...this.props} />;
  }
}

const mapStateToProps = ({ misc }) => ({
  categories: misc.categories
})

const mapDispatchToProps = {
  fetchCategories
}

export default connect(mapStateToProps, mapDispatchToProps)(VerifiedPagesContainer);
