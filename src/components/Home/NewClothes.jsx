import React from "react";

import imgNew1 from "../../assets/img/new/1.jpg";
import imgNew2 from "../../assets/img/new/5.jpg";
import imgNew3 from "../../assets/img/new/3.jpg";

const NewClothes = () => {
  return (
    <div className="grid grid-cols-3 mb-5 lg:grid-cols-2 md:grid-cols-1 ">
      <div
        className=" hover:bg-red-800 h-96 bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${imgNew1})` }}
      >
        <div className=" flex flex-col justify-center h-full transition duration-500 hover:bg-secondary p-4 space-y-10">
          <h3 className="font-bold text-gray-800 text-2xl lg:text-center md:text-lg">
            Extreme Rare Sneakers
          </h3>
          <button
            className={`uppercase border-b border-black pb-px hover:text-white lg:self-center hover:border-white self-start font-semibold text-sm transition duration-200 transform hover:scale-105`}
          >
            shop now
          </button>
        </div>
      </div>
      <div
        className=" hover:bg-red-800 h-96 bg-no-repeat bg-cover bg-center "
        style={{ backgroundImage: `url(${imgNew2})` }}
      >
        <div className=" flex flex-col justify-center h-full transition duration-500 hover:bg-secondary p-4 space-y-10">
          <h3 className="font-bold text-gray-800 text-2xl text-center md:text-lg">
            Awesome Black Outfit
          </h3>
          <button
            className={`uppercase border-b border-black pb-px hover:text-white hover:border-white self-center font-semibold text-sm transition duration-200 transform hover:scale-105`}
          >
            shop now
          </button>
        </div>
      </div>
      <div
        className=" hover:bg-red-800 h-96 bg-no-repeat bg-cover bg-center lg:col-span-2 md:col-span-1"
        style={{ backgroundImage: `url(${imgNew3})` }}
      >
        <div className=" flex flex-col justify-center h-full transition duration-500 hover:bg-secondary p-4 space-y-10">
          <h3 className="font-bold text-gray-800 text-2xl text-right lg:text-center md:text-lg">
            Sportwear Up To 50% Off
          </h3>
          <button
            className={`uppercase border-b border-black pb-px hover:text-white lg:self-center hover:border-white self-end font-semibold text-sm transition duration-200 transform hover:scale-105`}
          >
            shop now
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewClothes;
