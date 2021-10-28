import React from "react";

const Review = ({ checkoutToken }) => {
  return (
    <>
      <h6 className="mt-6 font-bold text-xl text-gray-900">Order Summary</h6>
      <ul className="my-4 flex flex-col gap-3">
        {checkoutToken?.live.line_items.map((product) => (
          <li key={product.id} className="flex justify-between  items-center">
            <div>
              <h2 className="text-lg  font-semibold mb-1">{product.name}</h2>
              <p className="text-gray-400 text-sm">{`Quantity: ${product.quantity}`}</p>
            </div>
            <p className="font-semibold text-sm">
              {product.line_total.formatted_with_symbol}
            </p>
          </li>
        ))}
      </ul>
      <div>
        <div>
          <p className="font-semibold text-lg mb-1">Total</p>
          <h5 className="font-bold text-gray-700">
            {checkoutToken?.live.subtotal.formatted_with_symbol}
          </h5>
        </div>
      </div>
    </>
  );
};

export default Review;
