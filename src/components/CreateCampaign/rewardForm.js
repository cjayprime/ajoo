import React, { PureComponent } from "react";

import LoadableButton from "../../sharedComponent/LoadableButton";
import FormInputField from "../../sharedComponent/form";

class RewardForm extends PureComponent {
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const {
        form: { rewardFields: field, formError },
        _handleChange,
        onBlur,
        typeItem,
        request,
        utils,
        triggerCampaignAction,
        campaignRequest
      } = this.props,
      { donationAmt, rewardType, reward } = field;
    return (
      <>
        <h3
          style={{
            fontWeight: "bold",
            fontSize: 18,
            lineHeight: "23px",
            color: "#0072A3",
            marginBottom: 50
          }}
        >
          Rewards
        </h3>
        {/*Error: `validateDOMNesting(...): <form> cannot appear as a descendant of <form>.`
        <form onSubmit={triggerCampaignAction}>*/}
          <div className="createCampaign_form">
            <FormInputField
              type="text"
              placeholder="N4000.00"
              name="donationAmt"
              value={donationAmt.value}
              form={field}
              onBlur={onBlur}
              onChange={_handleChange}
              labelTitle="Donation amount (N)"
              className="createCampaign_form-title"
            />
          </div>
          <div className="createCampaign_form">
            <FormInputField
              type="select"
              name="rewardType"
              value={rewardType.value}
              form={field}
              onBlur={onBlur}
              options={typeItem}
              labelTitle="reward type"
              onChange={_handleChange}
              className="createCampaign_form-select createCampaign_form-type createCampaign_form-round"
            />
          </div>
          <div className="createCampaign_form">
            <FormInputField
              type="textarea"
              name="reward"
              value={reward.value}
              onBlur={onBlur}
              form={field}
              maxlength="50"
              style={{ resize: "none" }}
              onChange={_handleChange}
              labelTitle="reward"
              labelRight="0 / 50"
              className="createCampaign_form-summary"
            />
          </div>

          <div className="clearfix"></div>

          <div
            style={{
              height: 100,
              width: 410,
              display: "flex",
              justifyContent: "flex-end"
            }}
          >
            <LoadableButton
              error={formError}
              btnTitle={"Add Reward"}
              isLoading={utils.request === campaignRequest.userCampaignRequest}
              type="submit"
              style={{
                width: 200,
                backgroundColor: "#fff",
                borderRadius: 8,
                border: "1px solid #0072A3",
                color: "#0072A3",

                fontWeight: "bold",
                fontSize: 18,
                lineHeight: "23px",
                height: 56,
                marginTop: 63,
                outline: "transparent",
                cursor: "pointer"
              }}
            />
          </div>
        {/*</form>*/}
      </>
    );
  }
}

export default RewardForm;
