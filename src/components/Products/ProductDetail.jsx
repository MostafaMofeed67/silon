import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import CartContext from "../../store/cart-context";
import LoadingSpinner from "../../ui/LoadingSpinner";

const ProductDetail = () => {
  const params = useParams();
  const cartCtx = useContext(CartContext);

  const product = cartCtx.products.find(
    (product) => product.id === params.productId
  );

  if (!product) {
    return (
      <div className="pt-[92px] container text-center">
        <LoadingSpinner />
      </div>
    );
  }

  const addToCartHandler = () => {
    cartCtx.addToCart(product.id, 1);
  };

  return (
    <div className="pt-[92px] container">
      <div className="py-10 grid grid-cols-3 md:grid-cols-1">
        <div>
          <img
            src={product.media.source}
            alt=""
            className="w-full h-80 object-cover"
          />
        </div>
        <div className="col-span-2 px-5 md:p-5 flex flex-col gap-3 sm:px-0">
          <div className="space-y-3 md:flex items-center md:space-y-0">
            <h2 className="text-3xl text-primary font-semibold flex-1 xs:text-lg">
              {product.name}
            </h2>
            <h4 className="text-xl font-semibold sm:text-base">
              {product.price.formatted_with_symbol}
            </h4>
          </div>

          <div>
            <h6 className="text-xl mb-2  font-semibold text-gray-700 sm:text-base">
              Product Details
            </h6>
            <p
              dangerouslySetInnerHTML={{ __html: product.description }}
              className="w-5/6 leading-relaxed md:w-full sm:text-sm"
            />
          </div>
          <div className="flex-1 justify-self-end flex md:self-end">
            <button
              className="self-end btn"
              to="/cart"
              onClick={addToCartHandler}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
