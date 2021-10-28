import React, { Fragment } from "react";
import Banner from "../components/Home/Banner";
import Brand from "../components/Home/Brand";
import ProductsItems from "../components/Products/ProductsItems";
import NewClothes from "../components/Home/NewClothes";
import Heading from "../ui/Heading";
import HomeBG from "../components/Home/HomeBG";

const HomePage = () => {
  return (
    <Fragment>
      <HomeBG />
      <Brand />
      <NewClothes />
      <Heading heading="Our Features" />
      <ProductsItems start="0" end="4" full={true} />
      <Banner />
      <Heading heading={"Dresses & Jumpsuits"} />
      <ProductsItems start="4" end="8" />
      <Heading heading="Best Watches" />
      <ProductsItems start="8" end="12" />
      <Heading heading="Running Shoes" />
      <ProductsItems start="12" end="16" />
    </Fragment>
  );
};

export default HomePage;
