import React from "react";
import ProductsItem from "./ProductsItem";

const Products = (props) => {
  return (
    <>
      {props.products.map((product) => (
        <ProductsItem
          key={product.id}
          id={product.id}
          imgSrc={product.media.source}
          name={product.name}
          price={product.price.formatted_with_symbol}
        />
      ))}
    </>
  );
};

export default Products;
