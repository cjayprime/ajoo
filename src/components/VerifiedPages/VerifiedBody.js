import React, { Component } from "react";

import FormInputField from "../../sharedComponent/form";
import OrganizationsCard from "../../sharedComponent/OrganizationsCard";
import Spinner from "../../sharedComponent/Spinner";
import LoadableButton from "../../sharedComponent/LoadableButton";
import { isRequestActive } from "../../utils/misc";
import { campaignRequest } from "../../store/campaignModules/saga";


class VerifiedBody extends Component {
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
    const {
      categories,
      organizationsData,
      isCampaignFetching,
      utils
    } = this.props;
    const { category } = this.state.fields;

    const categoryItems = categories.map((c, i) => (
      <option key={c} value={c}>{c}</option>
    ));

    return (
      <>
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
              {organizationsData.organizations.length === 0 && isCampaignFetching ? (
                <Spinner />
              ) : (
                  <>
                    {
                      typeof organizationsData.organizations === "undefined" ||
                        organizationsData.organizations.length === 0 ? (
                          <span
                            style={{
                              fontFamily: "Muli",
                              fontSize: "23px",
                              marginTop: "30px",
                              display: "flex",
                              justifyContent: "center",
                              textTransform: "uppercase"
                            }}
                          >
                            no verified organizations available yet
                          </span>
                        ) : (
                          <>
                            {organizationsData.organizations.map(c => (
                              <div key={c._id}>
                                <OrganizationsCard
                                  key={c._id}
                                  src={c.image_url}
                                  organization_name={c.organization_name}
                                />
                              </div>
                            ))}
                          </>
                        )}
                  </>
                )
              }
            </div>
            <div className="orgButton_div">
              {
                (organizationsData.organizations.length === 0) ? null :
                  <LoadableButton
                    error={false}
                    className="orgButton"
                    btnTitle="Show More Organizations"
                    isLoading={isRequestActive(utils.request, campaignRequest.organizationsRequest)}
                    onClick={this.props.more}
                  />
              }
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default VerifiedBody;
