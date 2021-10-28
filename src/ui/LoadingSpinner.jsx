import React from "react";

import classes from "./LoadingSpinner.module.css";

const LoadingSpinner = () => {
  return (
    <div className="py-12">
      <div className={`${classes["lds-dual-ring"]} `}></div>
    </div>
  );
};

export default LoadingSpinner;
