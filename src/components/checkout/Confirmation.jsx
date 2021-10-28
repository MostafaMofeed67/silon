import React from "react";
import { Link } from "react-router-dom";

const Confirmation = ({ shippingData }) => {
  return (
    <>
      <div>
        <h5 className="text-lg font-semibold sm:text-sm">
          Thank you for your purchase,{" "}
          <span className="capitalize"> {shippingData.firstName} </span>
        </h5>
        <hr className="my-3" />
        <p className="mb-4 sm:text-xs">
          Order ref: {shippingData.shippingOption}
        </p>
      </div>
      <Link to="/home" className="btn">
        Back to Home
      </Link>
    </>
  );
};

export default Confirmation;
