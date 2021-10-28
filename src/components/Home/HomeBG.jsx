import React from "react";
import { Link } from "react-router-dom";
import imgBack from "../../assets/img/back.jpg";

const HomeBG = () => {
  return (
    <div
      className="h-screen flex items-center bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${imgBack})` }}
    >
      <div className="container space-y-4">
        <h6 className="uppercase font-semibold">new arrivals</h6>
        <h1 className="capitalize text-5xl sm:text-2xl font-bold text-black">
          <span className="text-primary">Best price</span> this year
        </h1>
        <p className="w-1/3 sm:w-full md:text-sm">
          Shoomatic offers your very comfortable time on walking and exercises.
        </p>
        <Link
          to="/products"
          className="btn bg-black hover:bg-gray-800 rounded-none focus:ring focus:ring-offset-3  focus:ring-gray-900"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default HomeBG;
