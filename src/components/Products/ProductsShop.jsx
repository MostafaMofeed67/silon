import React, { Fragment, useContext, useState } from "react";
import ReactPaginate from "react-paginate";
import CartContext from "../../store/cart-context";
import LoadingSpinner from "../../ui/LoadingSpinner";
import Products from "../Products/Products";

const ProductsShop = () => {
  const cartCtx = useContext(CartContext);
  const [pageNumber, setPageNumber] = useState(0);

  const products = cartCtx.products;
  //   console.log(products);

  const productsPerPage = 12;
  const pagesVisited = pageNumber * productsPerPage;

  const displayProducts = products.slice(
    pagesVisited,
    pagesVisited + productsPerPage
  );

  const pageCount = Math.ceil(products.length / productsPerPage);

  const changePageHandler = ({ selected }) => {
    setPageNumber(selected);
    window.scrollTo(0, 0);
  };

  return (
    <Fragment>
      {cartCtx.isLoading && (
        <div className="text-center">
          <LoadingSpinner />
        </div>
      )}
      {!cartCtx.isLoading && (
        <div className="container">
          <div className="grid grid-cols-4  gap-10 lg:grid-cols-2  sm:grid-cols-1 justify-items-center">
            <Products products={displayProducts} />
          </div>
          <ReactPaginate
            previousLabel="Prev"
            nextLabel="Next"
            breakLabel={"..."}
            marginPagesDisplayed={12}
            pageCount={pageCount}
            onPageChange={changePageHandler}
            containerClassName="flex gap-x-1 mt-10  sm:gap-x-0"
            previousClassName="paginateLink"
            nextClassName="paginateLink"
            disabledClassName="bg-gray-300 text-gray-700 border-gray-300 hover:bg-gray-300 hover:border-gray-300 "
            activeClassName="bg-gray-800 py-1 px-3 text-white sm:py-0 sm:px-3"
            pageClassName="paginateLink"
          />
        </div>
      )}
    </Fragment>
  );
};

export default ProductsShop;
