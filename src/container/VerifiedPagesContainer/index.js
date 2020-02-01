import React, { PureComponent } from "react";
import { connect } from "react-redux";

import { fetchCategories } from "../../store/miscModules/actions";
import { organizationsAction } from "../../store/campaignModules/actions";
import VerifiedPagesComponent from "../../components/VerifiedPages";

class VerifiedPagesContainer extends PureComponent {
  render() {

    const {
      fetchCategories,
      categories,
      organizationsAction,
      organizationsData,
      utils
    } = this.props

    console.log(organizationsData, "hey verify")

    return (
      <>
        <VerifiedPagesComponent
          categories={categories}
          fetchCategories={fetchCategories}
          organizationsAction={organizationsAction}
          organizationsData={organizationsData}
          utils={utils}
          {...this.props}
        />
      </>
    )
  }
}

const mapStateToProps = ({ misc, campaigns, utils }) => ({
  utils,
  categories: misc.categories,
  organizationsData: campaigns.organizationsData
})

const mapDispatchToProps = {
  fetchCategories,
  organizationsAction
}

export default connect(mapStateToProps, mapDispatchToProps)(VerifiedPagesContainer);
