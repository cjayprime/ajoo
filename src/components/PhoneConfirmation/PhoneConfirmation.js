import React, { Component } from "react";

import LoadableButton from "../../sharedComponent/LoadableButton";

class PhoneConfirmationComponent extends Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
  }

  triggerAction = () => {
    this.props.confirmUser();
  };

  componentDidMount() {
    this._isMounted = true;
  }

  _safelySetState = (newState, prevState = null) => {
    if (this._isMounted)
      return this.setState(state => ({
        [prevState]: !state[prevState],
        ...newState
      }));
  };

  render() {
    const { /*confirm,*/ isLoading } = this.props;

    return (
      <div className="phone_verify">
        <form>
          <h1>Confirm Phone Number</h1>
          <div className="phone_verify-form">
            <label>Enter 6 - digit number sent to 08347542245</label>
            <input type="text" placeholder="345678" />
            <LoadableButton
              onClick={this.triggerAction}
              btnTitle="Continue"
              isLoading={isLoading}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default PhoneConfirmationComponent;
