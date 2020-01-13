import React from "react";
import { CircularProgress } from "@material-ui/core";

const Spinner = () => (
  <div
    style={{
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: 200,
      marginTop: 50
    }}
  >
    <CircularProgress className="text-orange" />
  </div>
);

export default Spinner;
