import React, { Component } from "react";

import LoadableButton from "../../sharedComponent/LoadableButton";
import FormInputField from "../../sharedComponent/form";
import Arrow from "../../assets/images/Arrow.svg";
import { isRequestActive } from "../../utils/misc";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

class RewardForm extends Component {
  
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  
  add = e => {
    
    e.preventDefault();
    
    if(this.props.validate())
    this.props.triggerSaveRewardAction(this.props.saveRewardSuccess);
    
  };

  render() {
    const {
        form: { rewardFields: field, formError },
        _handleChange,
        onBlur,
        //typeItem,
        //request,
        utils,
        campaignRequest,
        rewards
      } = this.props,
      { donationAmt, rewardType, reward } = field;
    return (
      <>
        <div className="create_campaign1">
          <div className="createCampaign_column1">
            <img alt="icons" src="images/sign_in.svg" />
          </div>
          <div className="createCampaign_column2">
            <img alt="icons" src="images/line.svg" />
          </div>
          <div className="createCampaign_column3">
            <div onClick={this.back} style={{ cursor: "pointer", marginBottom: 60 }}>
              <img src={Arrow} alt="Arrow" style={{ paddingRight: "5px" }} />
              Back
            </div>
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
            <div className="createCampaign_form">
              <FormInputField
                type="number"
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
                options={[<option key={1}>Material</option>, <option key={2}>Non-material</option>]}
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
                labelRight={reward.value.length + " / 50"}
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
                onClick={this.add}
                btnTitle="Add Reward"
                isLoading={isRequestActive(utils.request, campaignRequest.addRewardRequest)}
                className="add_reward-btn"
                type="submit"
                style={{
                  marginTop: 63
                  /*width: 200,
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
                  cursor: "pointer"*/
                }}
              />
            </div>
          </div>
        </div>
        <div style={{width: "auto", paddingRight: 235, paddingLeft: 90, backgroundColor: "#f9fafc"}}>
          <div style={{width: "100%", marginLeft: 0, marginBottom: 100, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "end", backgroundColor: "#f9fafc"}}>
              {
                rewards.length
                ? 
                    <>
                        <hr className="campaign-hr" style={{ width: "auto", marginLeft: 0, marginTop: 50, marginBottom: 50 }} />
                        <div style={{ width: "auto", overflow: "hidden", overflowX: "auto" }}>
                            <table cellPadding="20" style={{ width: "100%", tableLayout: "fixed", borderCollapse: "collapse", borderRadius: 5, background: "#FFF", boxShadow: "1px 1px 4px -1px" }}>
                                <thead>
                                    <tr>
                                        <td style={{ width: "25%" }}><b>REWARD TYPE</b></td>
                                        <td style={{ width: "25%" }}><b>REWARD</b></td>
                                        <td style={{ width: "25%" }}><b>DONATION AMOUNT (N)</b></td>
                                                              <td style={{ width: "5%" }}></td>
                                                              <td style={{ width: "5%" }}></td>
                                    </tr>
                                </thead>
                                <tbody style={{ verticalAlign: "bottom" }}>
                                {
                                    rewards.map((v, i) => 
                                        <tr key={i} style={{ borderBottom: "1px solid #ccc", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "pre" }}>
                                            <td style={{ padding: 20, overflow: "hidden", textOverflow: "ellipsis", width: "25%" }}>          {v.rewardType.value}
                                            </td>
                                            <td style={{ padding: 20, overflow: "hidden", textOverflow: "ellipsis", width: "25%" }}>
                                              {v.reward.value}
                                            </td>
                                            <td style={{ padding: 20, overflow: "hidden", textOverflow: "ellipsis", width: "25%" }}>
                                              {v.donationAmt.value}
                                            </td>
                                        </tr>
                                    )
                                }
                                </tbody>
                            </table>
                        </div>
                    </>
                : null
              }
              {
                rewards.length
                ? <div className="verificationbutton_center">
                    <LoadableButton
                      error={formError}
                      style={{width: 219}}
                      onClick={this.props.nextStep}
                      className="campaign_image-btn"
                      btnTitle="Next"
                      isLoading={
                        isRequestActive(utils.request, campaignRequest.addRewardRequest)
                      }
                      type="submit"
                    />
                  </div>
                : null
              }
          </div>
          </div>
      </>
    );
  }

}

export default RewardForm;