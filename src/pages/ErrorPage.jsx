import React from "react";
import { Link } from "react-router-dom";

import imgError from "../assets/img/404.png";

const ErrorPage = () => {
  return (
    <div
      className="
    pt-[92px]
    relative 
    container
    min-h-screen 
    flex 
    justify-between 
    items-center
    md:flex-col-reverse
    gap-y-3
    "
    >
      <div className="space-y-8 flex-1 md:space-y-5">
        <h2 className="text-7xl font-black text-gray-900 sm:text-5xl">
          Whoop!
        </h2>
        <p className="text-sm font-semibold">
          Sorry for that, just because real content is not shown go to home page
        </p>
        <Link className="btn" to="/home">
          Go Back
        </Link>
      </div>
      <div>
        <img src={imgError} alt="" />
      </div>
    </div>
  );
};

export default ErrorPage;
