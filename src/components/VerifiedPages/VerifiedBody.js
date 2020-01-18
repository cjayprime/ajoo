import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

import FormInputField from "../../sharedComponent/form";
import redcross from "../../assets/images/redcross.svg";

// const verified_category = [
//   "Medical",
//   "Memorial",
//   "Emergency",
//   "Nonprofit",
//   "Education",
//   "Religion",
//   "Business",
//   "Sports",
//   "Concert",
//   "Reality Show",
//   "Entertainment",
//   "Community",
//   "Competition",
//   "Creative",
//   "Event",
//   "Faith",
//   "Family",
//   "Newlywed",
//   "Travel",
//   "Volunteer",
//   "Wishes"
// ];

class VerifiedBody extends PureComponent {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.state = {
      fields: {
        category: {
          value: "",
          name: "Category",
          error: null,
          errorMessage: "",
          rules: {
            required: true
          }
        }
      }
    };
  }

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    let newState = { ...this.state };
    Object.keys(newState.fields).map(key => {
      return newState.fields[key].value = "";
    });
    this._safelySetState(newState);
  }

  _handleChange = e => {
    const { name, value } = e.target;
    let newState = { ...this.state };
    newState.fields[name].value = value;
    this._safelySetState(newState);
  };

  onBlur = (res, name) => {
    const { error, errorMessage } = res;
    let newForm = { ...this.state };
    newForm.fields[name] = {
      ...newForm.fields[name],
      error,
      errorMessage
    };

    this._safelySetState(newForm);
  };

  _safelySetState = (newState, prevState = null) => {
    if (this._isMounted)
      return this.setState(state => ({
        [prevState]: !state[prevState],
        ...newState
      }));
  };

  render() {
    const { categories } = this.props;
    const { category } = this.state.fields;

    const categoryItems = categories.map((c, i) => (
      <option key={c} value={c}>{c}</option>
    ));

    return (
      <div className="verified_page_body">
        <div className="verified_page_body_head">
          <FormInputField
            type="select"
            name="category"
            value={category.value}
            form={this.state.fields}
            options={categoryItems}
            labelTitle=""
            onBlur={this.onBlur}
            className="verified_page_body_select verified_page_body-round"
            onChange={this._handleChange}
          />
          <span>28 Verified Organisations</span>
        </div>
        <div>
          <a href id="verified_organization">
            <h3 className="verified_page_body_title">Verified Organisations</h3>
          </a>
          <div className="verified_page_body_card">
            {Array.apply(null, Array(16)).map((a, i) => (
              <div className="verified_page-card">
                <div className="verified_page_first-card">
                  <div className="verified_page_second-card">
                    <div className="verified_page_third-card">
                      <div className="verified_page_third-card-img">
                        <img
                          src={redcross}
                          alt="Red cross"
                        />
                      </div>
                      <div className="verified_page_third-card-title">
                        <b>
                          hellohellohel
                        </b>
                      </div>
                    </div>
                  </div>
                  <div className="verified_page_first-card-footer">
                    <Link to="/verified_org_campaigns">
                      <button className="verified_footer-firstbtn">
                        VIEW CAMPAIGNS
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default VerifiedBody;
