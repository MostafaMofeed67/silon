import React, { useContext } from "react";

import imgStar from "../../assets/img/svg/bxs-star.svg";
import imgAddToCart from "../../assets/img/svg/bxs-cart-add.svg";
import ButtonBuy from "../../ui/ButtonBuy";
import CartContext from "../../store/cart-context";

const ProductsItem = (props) => {
  const cartCtx = useContext(CartContext);

  const showProduct = () => {
    cartCtx.fetchProduct(props.id);
  };

  return (
    <div className="group w-full relative ">
      <div
        onClick={() => cartCtx.addToCart(props.id, 1)}
        className="absolute bg-primary w-8 h-8 top-3 left-3  rounded-full flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out cursor-pointer"
      >
        <img src={imgAddToCart} alt="" className="w-5 h-5" />
      </div>
      <div className="w-full h-80">
        <img src={props.imgSrc} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="text-center pt-8 ">
        <div className="flex justify-center gap-x-0.5 ">
          <img className="w-4 h-4" src={imgStar} alt="" />
          <img className="w-4 h-4" src={imgStar} alt="" />
          <img className="w-4 h-4" src={imgStar} alt="" />
          <img className="w-4 h-4" src={imgStar} alt="" />
          <img className="w-4 h-4" src={imgStar} alt="" />
        </div>
        <p className="text-xs font-medium mt-2">{props.name}</p>
        <p className="text-sm font-bold mt-1 mb-2">{props.price}</p>
        <ButtonBuy
          to={cartCtx.btnText ? `/products/${props.id}` : "/products"}
          className="opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out "
          onClick={cartCtx.btnText ? showProduct : () => {}}
        >
          {cartCtx.btnText ? "Show Details" : "Shop Now"}
        </ButtonBuy>
      </div>
    </div>
  );
};

export default ProductsItem;
