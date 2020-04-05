import React, { Component } from "react";

import LoadableButton from "../../sharedComponent/LoadableButton";
import FormInputField from "../../sharedComponent/form";
import { moneyFormat } from "../../utils/misc"

class CreateCampaignForm1 extends Component {
  continue = e => {
    
    e.preventDefault();

    if(this.props.validate())
    this.props.nextStep();
    
  };
  
  render() {
    const {
        form: { fields: field, formError },
        _handleChange,
        onBlur,
        categoriesItem,
        isEdit,
        editCampaign,
        validate
      } = this.props,
      { goal, title, category, affiliatedOrganization } = field;
    return (
      <div className="create_campaign1">
        <div className="createCampaign_column1">
          <img alt="icons" src="images/sign_in.svg" />
        </div>
        <div className="createCampaign_column2">
          <img alt="icons" src="images/line.svg" />
        </div>
        <div className="createCampaign_column3">
          <form method="post">
            <h1>
              {isEdit ? `Edit "${editCampaign.title}"` : "Create Campaign"}
            </h1>
            <div className="createCampaign_form">
              <FormInputField
                type="number"
                placeholder="N 4,000,000"
                name="goal"
                value={goal.value}
                onBlur={onBlur}
                form={field}
                required
                validate={validate}
                onChange={_handleChange}
                labelTitle="CAMPAIGN GOAL"
                className="createCampaign_form-goal"
              />
              <span style={{fontSize: 12, color: "grey"}}>5% ({! isNaN(goal.value) ? "N" + moneyFormat(0.05 * goal.value) : "N0.00"}) commission will be removed upon claiming the money</span>
            </div>
            <div className="createCampaign_form">
              <FormInputField
                type="text"
                placeholder="Something Something"
                name="title"
                value={title.value}
                form={field}
                required
                validate={validate}
                onBlur={onBlur}
                onChange={_handleChange}
                labelTitle="CAMPAIGN TITLE"
                className="createCampaign_form-title"
              />
            </div>
            <div className="createCampaign_form">
              <FormInputField
                type="select"
                name="category"
                value={category.value}
                form={field}
                required
                validate={validate}
                onBlur={onBlur}
                options={categoriesItem}
                labelTitle="category"
                onChange={_handleChange}
                className="createCampaign_form-select createCampaign_form-round"
              />
            </div>
            <div className="createCampaign_form">
              <FormInputField
                type="text"
                placeholder={category.value ? category.value : "Medical"}
                name="affiliatedOrganization"
                value={affiliatedOrganization.value}
                form={field}
                required
                validate={validate}
                /*onBlur={onBlur}*/
                onChange={_handleChange}
                labelTitle="AFFILIATED ORGANIZATION"
                className="createCampaign_form-title"
              />
            </div>
            <div className="verificationbutton_center">
              <LoadableButton
                error={formError}
                onClick={this.continue}
                className="verification_button"
                btnTitle="Next"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateCampaignForm1;
