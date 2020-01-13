import React from "react";
import { connect } from "react-redux";
import { showRequestFeedBack } from "../store/utilsModule/actions";

const AlertDialog = props => {
  const { open, message, success } = props;

  if (!open) return null;

  function getClasses() {
    let classes = "animated slideInRight ";
    classes += !success ? "error_message" : "success_message";
    return classes;
  }

  function closeAlert() {
    props.showRequestFeedBack({});
  }

  return (
    <div className="login_message_body">
      {" "}
      <span
        className={getClasses()}
        style={{
          backgroundColor: "#fff",
          boxShadow: "0 4px 4px rgba(0, 0, 0, 0.25)",
          padding: "10px 20px"
        }}
      >
        {message}
        <span
          onClick={closeAlert}
          style={{ marginLeft: 30, fontSize: 20, cursor: "pointer" }}
        >
          &#10005;
        </span>
      </span>
    </div>
  );
};

const mapDispatchProps = {
  showRequestFeedBack
};

export default connect(null, mapDispatchProps)(AlertDialog);
