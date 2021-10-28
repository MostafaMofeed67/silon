import React, { useContext, useEffect } from "react";
import { useState } from "react";

import imgLogo from "../../assets/img/logo1.png";
import imgCart from "../../assets/img/svg/bx-cart.svg";
import imgMenu from "../../assets/img/svg/bx-menu-alt-right.svg";
import Sidebar from "./Sidebar";
import CartContext from "../../store/cart-context";
import { Link } from "react-router-dom";

const MainHeader = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);
  const { line_items } = cartCtx?.cart;

  const showSidebarHandler = () => {
    setShowSidebar(true);
  };

  const hideSidebarHandler = () => {
    setShowSidebar(false);
  };

  useEffect(() => {
    if (line_items?.length === 0 || !line_items) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [line_items]);

  return (
    <>
      <Sidebar onHideSidebar={hideSidebarHandler} showSidebar={showSidebar} />
      <div className="shadow-md fixed w-full z-40  bg-white">
        <div className="container py-4 flex items-center">
          <div className="flex-1">
            <img src={imgLogo} alt="logo" />
          </div>
          <ul className="flex space-x-10 md:hidden items-center ">
            <li className="cursor-pointer hover:text-primary transition duration-200 ease-in-out">
              <Link to="/home">Home</Link>
            </li>
            <li className="cursor-pointer hover:text-primary transition duration-200 ease-in-out">
              <Link to="/products">Shop</Link>
            </li>
            <li className="cursor-pointer hover:text-primary transition duration-200 ease-in-out">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="cursor-pointer hover:text-primary transition duration-200 ease-in-out">
              <Link to="/about">About</Link>
            </li>
            {cartCtx.showCart && (
              <li className="cursor-pointer relative flex items-center justify-center bg-gray-200 w-8 h-8 rounded-full">
                <Link to="/cart">
                  <img src={imgCart} alt="" className="h-5 w-5" />
                  <p
                    className={` ${
                      btnIsHighlighted ? "animate-bounce" : "animate-none"
                    }  absolute text-xs -top-2 right-0 h-4 w-4 bg-primary rounded-full flex items-center justify-center text-white`}
                  >
                    {cartCtx.totalItems}
                  </p>
                </Link>
              </li>
            )}
          </ul>
          {!showSidebar && (
            <div className="hidden md:flex cursor-pointer">
              <img
                onClick={showSidebarHandler}
                src={imgMenu}
                alt="menu icon"
                className="h-7 w-7"
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MainHeader;
