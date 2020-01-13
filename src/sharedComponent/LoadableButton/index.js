import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

const LoadableButton = props => {
  const {
    isLoading,
    type,
    id,
    error,
    className,
    btnTitle,
    onClick,
    style = {}
  } = props;
  return (
    <>
      {error && (
        <p style={{ color: "red", textAlign: "center", marginTop: 20 }}>
          {error || "Some of your inputs are not valid"}
        </p>
      )}
      <button
        id={id}
        type={type}
        className={className}
        // disabled={isLoading === true}
        onClick={onClick}
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          ...style
        }}
      >
        <div style={{color: "#fff"}}>{isLoading && <CircularProgress size={20} color="inherit" />}</div>
        {!isLoading && <span> {btnTitle} </span>}
      </button>
    </>
  );
};

export default LoadableButton;
