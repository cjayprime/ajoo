import React, { Component } from 'react';
import Modal from "react-responsive-modal";

const bg = {
  overlay: {
    background: "rgba(17, 12, 12, 0.932)"
  },
  modal: {
    width: "415px",
    height: "auto",
    display: "flex",
    justifyContent: "center",
    background: "#FFFFFF",
    borderRadius: "10px",
    //padding: 3,
    //paddingBottom: 10
    //padding: "30px 0px 5px 5px"
    padding: 30,
    paddingTop: 0
  }
};

export default class OpenDonations extends Component{
    
    render(){
        return (
            <Modal
                open={this.props.open}
                onClose={this.props.toggle}
                styles={bg}
                center
            >
                <div className="report_modal-body">
                    <h1 className="report_modal-head">Close Donations</h1>
                    <hr />
                    <p>You can close this campaign based on any of the conditions below.</p>
                    <p>
                        1. You have exceeded your target for the campaign
                        <br/><br/>
                        2. The purpose for the campaign has been met or achieved
                    </p>
                    <p>
                        This action is irreversible closing the campaign will stop any more donations from coming in.
                    </p>
                    <div className="report_modal-btn" style={{ marginTop: 30 }}>
                        <button className="report_btn-cancel" onClick={this.props.toggle}>Cancel</button>
                        <button className="report_btn-submit">Close Donations</button>
                    </div>
                </div>
            </Modal>
        );
    }

}