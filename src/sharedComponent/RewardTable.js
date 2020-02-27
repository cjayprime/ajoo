import React, { Component } from "react";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

class RewardTable extends Component {

  render() {
    const {
        rewards
      } = this.props;
    console.log('Rewards::: ', rewards)
    return (
        <>
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
                                            <td style={{ width: "5%" }} onClick={() => this.setMode("edit", v)}>
                                                <EditIcon style={{ cursor: "pointer" }} />
                                            </td>
                                            <td style={{ width: "5%" }} onClick={() => this.deleteReward(v)}>
                                                <DeleteIcon style={{ cursor: "pointer", fill: "red" }} />
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
        </>
    );
  }

}

export default RewardTable;