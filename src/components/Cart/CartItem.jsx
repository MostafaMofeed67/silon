import React, { useContext } from "react";

import imgPlus from "../../assets/img/svg/bx-plus.svg";
import imgMinus from "../../assets/img/svg/bx-minus.svg";
import CartContext from "../../store/cart-context";

const CartItem = (props) => {
  const cartCtx = useContext(CartContext);

  return (
    <div className=" shadow-md rounded overflow-hidden ">
      <div
        className="h-52 bg-cover bg-center"
        style={{ backgroundImage: `url(${props.imgUrl})` }}
      ></div>
      <div className="p-5 space-y-4">
        <div className="flex items-center ">
          <h2 className="flex-1 text-primary text-xl font-semibold">
            {props.name}
          </h2>
          <h4 className=" text-lg">{props.total}</h4>
        </div>
        <div className="flex items-center">
          <div className="flex flex-1">
            <button
              onClick={() =>
                cartCtx.updateQuantity(props.id, props.quantity - 1)
              }
              className="p-0.5 shadow-2xl w-7 h-7 bg-gray-200 flex justify-center items-center cursor-pointer"
            >
              <img src={imgMinus} alt="" className="w-4 h-4" />
            </button>
            <p className="p-0.5 shadow-2xl w-7 h-7 flex justify-center items-center">
              {props.quantity}
            </p>
            <button
              onClick={() =>
                cartCtx.updateQuantity(props.id, props.quantity + 1)
              }
              className="p-0.5 shadow-2xl w-7 h-7 bg-gray-200 flex justify-center items-center cursor-pointer"
            >
              <img src={imgPlus} alt="" className="w-4 h-4" />
            </button>
          </div>
          <button
            onClick={() => cartCtx.removeFromCart(props.id)}
            className=" btn py-1 px-3 bg-secondary-light hover:bg-secondary-dark"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
