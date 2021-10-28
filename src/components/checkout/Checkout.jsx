import React, { useContext, useEffect, useState } from "react";
import { commerce } from "../../lib/commerce";
import CartContext from "../../store/cart-context";
import AddressForm from "./AddressForm";
import Confirmation from "./Confirmation";
import PaymentForm from "./PaymentForm";

const MAX_STEP = 2;

const Checkout = () => {
  const [formStep, setFormStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [shippingData, setShippingData] = useState({});

  const { cart, refreshCart } = useContext(CartContext);
  const { id } = cart;

  useEffect(() => {
    if (id) {
      const generateToken = async () => {
        try {
          const token = await commerce.checkout.generateToken(id, {
            type: "cart",
          });

          setCheckoutToken(token);
        } catch (error) {}
      };
      generateToken();
    } else {
      return;
    }
  }, [id]);

  const nestStep = () => {
    setFormStep((prevStep) => prevStep + 1);
  };

  const backStep = () => {
    setFormStep((prevStep) => prevStep - 1);
  };

  const nextHandler = (data) => {
    setShippingData(data);

    nestStep();
  };

  let content = (
    <AddressForm checkoutToken={checkoutToken} onNext={nextHandler} />
  );

  if (formStep > 0) {
    content = (
      <PaymentForm
        shippingData={shippingData}
        checkoutToken={checkoutToken}
        onNextStep={nestStep}
        onClear={refreshCart}
      />
    );
  }

  return (
    <>
      <div className="w-full max-w-xl  shadow-md mx-auto  rounded p-5  ">
        {formStep < MAX_STEP && (
          <div className="flex items-center  gap-1">
            {formStep > 0 && (
              <button type="button" onClick={backStep}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 text-gray-300 hover:text-gray-600 transition duration-500 ease-in-out"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            )}
            <p className="text-gray-400 text-xs">
              Step {formStep + 1} of {MAX_STEP}
            </p>
          </div>
        )}
        {formStep < MAX_STEP ? (
          content
        ) : (
          <Confirmation shippingData={shippingData} />
        )}
      </div>
    </>
  );
};

export default Checkout;
