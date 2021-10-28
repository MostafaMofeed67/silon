import React, { useContext } from "react";

import imgClose from "../../assets/img/svg/bx-x.svg";
import imgCart from "../../assets/img/svg/bx-cart.svg";
import CartContext from "../../store/cart-context";
import { Link } from "react-router-dom";

const Sidebar = ({ onHideSidebar, showSidebar }) => {
  const cartCtx = useContext(CartContext);

  return (
    <div
      className={`bg-gray-600 bg-opacity-50 ${
        showSidebar ? "top-0" : "-top-full"
      } left-0 fixed w-full h-full z-50 flex items-center justify-center transition-all duration-500 ease-in-out `}
    >
      <img
        src={imgClose}
        alt="close btn"
        onClick={onHideSidebar}
        className="absolute top-6 right-6 w-10 h-10 cursor-pointer"
      />
      <ul className="space-y-8 divide-y-2 divide-y-reverse flex flex-col items-center ">
        <li className="link cursor-pointer py-3 px-7 text-white border-b border-white ">
          <Link to="/home" onClick={onHideSidebar}>
            Home
          </Link>
        </li>
        <li className="link cursor-pointer py-3 px-7 text-white">
          <Link to="/products" onClick={onHideSidebar}>
            Shop
          </Link>
        </li>
        <li className="link cursor-pointer py-3 px-7 text-white">
          <Link to="/blog" onClick={onHideSidebar}>
            Blog
          </Link>
        </li>
        <li className="link cursor-pointer py-3 px-7 text-white">
          <Link to="/about" onClick={onHideSidebar}>
            About
          </Link>
        </li>

        {cartCtx.showCart && (
          <Link
            to="/cart"
            onClick={onHideSidebar}
            className="bg-gray-50 w-32 px-7 py-3 rounded-full flex items-center"
          >
            <span className="flex-1">
              <img src={imgCart} alt="" />
            </span>
            <span className=" bg-primary  px-2 rounded-full text-white">
              {cartCtx.totalItems}
            </span>
          </Link>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
