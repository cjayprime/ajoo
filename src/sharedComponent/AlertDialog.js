import React, { Component } from 'react';
import { withSnackbar } from 'notistack';
import { connect } from "react-redux";
import { showRequestFeedBack } from "../store/utilsModule/actions";

class AlertDialog extends Component {
    displayed = [];

    storeDisplayed = (id) => {
        this.displayed = [...this.displayed, id];
    };

    componentDidMount(){
      this.displayed = [];
    }
    
    closeAlert() {
      this.props.showRequestFeedBack({});
    }

    showAlert = () => {
      const { open, message, success } = this.props;

      if(open && message){
        this.props.enqueueSnackbar(message, {
          variant: success ? "success" : "error",
          autoHideDuration: 3000,
          anchorOrigin: { horizontal: "right", vertical: "top" }
          //persist: true
        });

        // Show the alert then remove it
        this.closeAlert();
      }
    }

    componentDidUpdate() {
      this.showAlert();
    }

    render() {
      /*
        The props `id={(Date.now())}` is USELESS except you want React to update
        and permit new messages to show, without props like the USEFUL `props.open`, `props.message` and `props.status`
      */
      return null;
    }
}

const mapDispatchProps = {
  showRequestFeedBack
};

export default withSnackbar(connect(null, mapDispatchProps)(AlertDialog));