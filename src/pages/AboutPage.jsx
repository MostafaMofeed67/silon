import React from "react";

import person1 from "../assets/img/about/person1.jpg";
import person2 from "../assets/img/about/person2.jpg";
import person3 from "../assets/img/about/person3.jpg";
import person4 from "../assets/img/about/person4.jpg";
import person5 from "../assets/img/about/person5.jpg";
import person6 from "../assets/img/about/person6.jpg";
import person7 from "../assets/img/about/person7.jpg";
import person8 from "../assets/img/about/person8.jpg";

const AboutPage = () => {
  return (
    <div className="pt-[92px] container ">
      <div className=" py-10 grid grid-cols-4 gap-4 md:grid-cols-2 xs:block xs:space-y-9">
        <h1 className="text-5xl font-extrabold col-span-3 grid grid-cols-3 xl:text-4xl lg:text-3xl md:col-span-2 md:gap-4 md:grid-cols-2  xs:block md:text-2xl">
          <span className="col-span-2 md:col-span-1  text-gray-700 leading-normal ">
            <span className="bg-gradient-to-r from-primary to-transparent px-1 decoration-clone">
              Choose your clothes nicely with us.
            </span>
          </span>
        </h1>
        <p className="col-start-1 row-start-2 col-span-2 self-center pr-12 text-lg md:pr-0 md:text-base md:col-start-2 md:col-span-1">
          We are here to help you and offer awesome clothes which make you look
          perfect.
        </p>
        <div
          className=" square  xs:h-52 xs:w-full bg-center bg-cover"
          style={{ backgroundImage: `url(${person1})` }}
        ></div>
        <div
          className=" square xs:h-52 xs:w-full  bg-center bg-cover"
          style={{ backgroundImage: `url(${person2})` }}
        ></div>
        <div
          className=" square xs:h-52 xs:w-full bg-center bg-cover"
          style={{ backgroundImage: `url(${person3})` }}
        ></div>
        <div
          className=" square  xs:h-52 xs:w-full col-start-2 md:col-start-1 bg-center bg-cover"
          style={{ backgroundImage: `url(${person6})` }}
        ></div>
        <div
          className=" square  xs:h-52 xs:w-full bg-center bg-cover"
          style={{ backgroundImage: `url(${person5})` }}
        ></div>
        <div
          className=" square  xs:h-52 xs:w-full bg-center bg-cover"
          style={{ backgroundImage: `url(${person4})` }}
        ></div>
        <div
          className=" square  xs:h-52 xs:w-full bg-center bg-cover"
          style={{ backgroundImage: `url(${person8})` }}
        ></div>
        <div
          className=" square  xs:h-52 xs:w-full bg-center bg-cover"
          style={{ backgroundImage: `url(${person7})` }}
        ></div>
        <p className="self-center text-lg col-span-2 text-center px-4 md:px0 md:col-span-1 md:text-base">
          You can be one of us and help to make this site spread in all world.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
