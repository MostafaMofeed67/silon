import React from "react";

import bannerImg from "../../assets/img/banner/2.jpg";
import ButtonBuy from "../../ui/ButtonBuy";

const Banner = () => {
  return (
    <>
      <div
        className="bg-primary mb-5 mt-16   bg-fixed bg-cover bg-center py-32 text-white "
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="container ">
          <h6 className="text-gray-300 uppercase sm:text-sm">
            Mid Season's sale
          </h6>
          <h2 className="text-4xl font-bold mt-2 mb-6 md:text-2xl sm:text-xl">
            Autumn Collection <br />
            <span className="uppercase"> Up To 20% Off</span>
          </h2>
          <ButtonBuy
            to="/products"
            className="rounded-none focus:ring-offset-0 "
          >
            Shop Now
          </ButtonBuy>
        </div>
      </div>
    </>
  );
};

export default Banner;
