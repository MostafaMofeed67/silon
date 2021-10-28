import React, { useContext } from "react";

import CartContext from "../../store/cart-context";
import ButtonBuy from "../../ui/ButtonBuy";
import LoadingSpinner from "../../ui/LoadingSpinner";
import CartItem from "./CartItem";

const Cart = () => {
  const cartCtx = useContext(CartContext);

  if (!cartCtx.cart.line_items) {
    return (
      <div className="pt-[92px] container text-center">
        <LoadingSpinner />
      </div>
    );
  }

  let content = (
    <div className="shadow-lg w-6/12 sm:w-full mx-auto p-5 rounded space-y-3">
      <p className="text-lg sm:text-sm font-semibold">
        Your cart is empty, Start add some
      </p>
      <div className="text-right">
        <ButtonBuy to="/products">Shop Now</ButtonBuy>
      </div>
    </div>
  );

  if (cartCtx.cart.line_items.length > 0) {
    content = (
      <>
        <div className=" grid grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-5">
          {cartCtx.cart.line_items.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              imgUrl={item.media.source}
              name={item.product_name}
              total={item.line_total.formatted_with_symbol}
              quantity={item.quantity}
            />
          ))}
        </div>
        <div className="mt-32 md:mt-14 flex items-center md:block md:space-y-3 ">
          <h3 className="flex-1 text-xl font-semibold text-gray-800 capitalize">
            Total Price: {cartCtx.cart.subtotal.formatted_with_symbol}
          </h3>
          <div className="space-x-3">
            <button
              onClick={() => cartCtx.emptyCart()}
              className={` btn bg-secondary-light hover:bg-secondary-dark`}
            >
              Empty Cart
            </button>
            <ButtonBuy to="/checkout">Checkout</ButtonBuy>
          </div>
        </div>
      </>
    );
  } else {
  }

  return (
    <div className="pt-[92px]">
      <div className="container py-16">{content}</div>
    </div>
  );
};

export default Cart;
