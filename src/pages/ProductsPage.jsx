import React from "react";
import ProductsShop from "../components/Products/ProductsShop";
import Heading from "../ui/Heading";

const ProductsPage = () => {
  return (
    <div className="pt-[92px] container">
      <Heading heading="Our Products" position="left" />
      <ProductsShop />
    </div>
  );
};

export default ProductsPage;
