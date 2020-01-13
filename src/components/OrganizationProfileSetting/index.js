import React, { PureComponent } from "react";

import Layout from "../../sharedComponent/Layout";
import OrganizationProfileSetting from "./OrganizationProfileSetting";

class OrganizationProfileSettingComponent extends PureComponent {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.state = {};
  }

  componentDidMount() {
    this._isMounted = true;
    this.props.fetchStates({});
  }

  _safelySetState = (newState, prevState = null) => {
    if (this._isMounted)
      return this.setState(state => ({
        [prevState]: !state[prevState],
        ...newState
      }));
  };

  render() {
    const {
      organisationProfileSetting,
      organisationEmailSetting,
      organisationProfilePasswordSetting,
      utils,
      misc,
      user,
      request,
      requestStatus,
      fetchLga
    } = this.props;

    return (
      <>
        <Layout {...this.props}>
          <OrganizationProfileSetting
            {...this.props}
            organisationProfileSetting={organisationProfileSetting}
            organisationEmailSetting={organisationEmailSetting}
            organisationProfilePasswordSetting={
              organisationProfilePasswordSetting
            }
            utils={utils}
            misc={misc}
            user={user}
            request={request}
            requestStatus={requestStatus}
            fetchLga={fetchLga}
          />
        </Layout>
      </>
    );
  }
}

export default OrganizationProfileSettingComponent;
