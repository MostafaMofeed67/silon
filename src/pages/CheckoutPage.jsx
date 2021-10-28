import React from "react";
import Checkout from "../components/checkout/Checkout";
import Heading from "../ui/Heading";

const CheckoutPage = () => {
  return (
    <div className="pt-[92px] container ">
      <Heading heading="checkout" text={true} padding={true} />
      <Checkout />
    </div>
  );
};

export default CheckoutPage;
