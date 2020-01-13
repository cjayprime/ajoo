import React, { PureComponent } from "react";

import Layout from "../../sharedComponent/Layout";
import IndividualProfileSetting from "./IndividualProfileSetting";

class IndividualProfileSettingComponent extends PureComponent {
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
      individualProfileSetting,
      individualEmailSetting,
      individualProfilePasswordSetting,
      showPercentageProgress,
      misc,
      user,
      request,
      requestStatus,
      uploadProfileImage,
      fetchLga
    } = this.props;

    return (
      <>
        <Layout {...this.props}>
          <IndividualProfileSetting
            {...this.props}
            individualProfileSetting={individualProfileSetting}
            individualEmailSetting={individualEmailSetting}
            individualProfilePasswordSetting={individualProfilePasswordSetting}
            showPercentageProgress={showPercentageProgress}
            uploadProfileImage={uploadProfileImage}
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

export default IndividualProfileSettingComponent;
