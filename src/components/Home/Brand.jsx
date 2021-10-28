import React from "react";

import brand1 from "../../assets/img/brand/1.png";
import brand2 from "../../assets/img/brand/2.png";
import brand3 from "../../assets/img/brand/3.png";
import brand4 from "../../assets/img/brand/4.png";
import brand5 from "../../assets/img/brand/5.png";
import brand6 from "../../assets/img/brand/6.png";

const Brand = () => {
  return (
    <section className="container grid grid-cols-6 justify-center gap-5 py-20 lg:grid-cols-3 md:grid-cols-1 justify-items-center ">
      <img src={brand1} alt={brand1} />
      <img src={brand2} alt={brand2} />
      <img src={brand3} alt={brand3} />
      <img src={brand4} alt={brand4} />
      <img src={brand5} alt={brand5} />
      <img src={brand6} alt={brand6} />
    </section>
  );
};

export default Brand;
