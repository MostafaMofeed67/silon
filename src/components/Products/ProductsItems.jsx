import React, { Fragment, useContext } from "react";
import CartContext from "../../store/cart-context";
import LoadingSpinner from "../../ui/LoadingSpinner";
import Products from "../Products/Products";

const Features = ({ start, end }) => {
  const cartCtx = useContext(CartContext);

  const featuresProducts = cartCtx.products.slice(start, end);

  return (
    <Fragment>
      {cartCtx.isLoading && (
        <div className="text-center">
          <LoadingSpinner />
        </div>
      )}
      {!cartCtx.isLoading && (
        <div className="grid grid-cols-4 container gap-10 lg:grid-cols-2  sm:grid-cols-1 justify-items-center">
          <Products products={featuresProducts} />
        </div>
      )}
    </Fragment>
  );
};

export default Features;
