import React, { Fragment, useContext } from "react";
import MainHeader from "./MainHeader";
import Footer from "./Footer";
import CartContext from "../../store/cart-context";

const Layout = (props) => {
  const cartCtx = useContext(CartContext);

  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
      {cartCtx.showCart && <Footer />}
    </Fragment>
  );
};

export default Layout;
