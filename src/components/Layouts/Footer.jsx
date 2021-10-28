import React from "react";

import imgBrand from "../../assets/img/logo2.png";
import imgIns1 from "../../assets/img/insta/1.jpg";
import imgIns2 from "../../assets/img/insta/2.jpg";
import imgIns3 from "../../assets/img/insta/3.jpg";
import imgIns4 from "../../assets/img/insta/4.jpg";
import imgIns5 from "../../assets/img/insta/5.jpg";
import imgPayment from "../../assets/img/payment.png";
import imgFacebook from "../../assets/img/svg/bxl-facebook.svg";
import imgInsta from "../../assets/img/svg/bxl-instagram.svg";
import imgTwitter from "../../assets/img/svg/bxl-twitter.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-900 mt-16 py-16 md:py-10 text-gray-500 sm:mt-5">
      <div className="container grid grid-cols-4 md:grid-cols-1 gap-x-8 gap-y-16 md:gap-x-8 md:gap-y-8">
        <div className="space-y-4">
          <img src={imgBrand} alt="" />
          <p className="text-xs leading-relaxed">
            Fringiest unna partition rhonchus dolor purged lucites venetians
            lecturers magnon fringiest diam maenadism ultimatums mi egad maurist
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="text-gray-100 font-bold text-xl">Featured</h3>
          <ul className="uppercase text-xs space-y-2">
            <li className="cursor-pointer hover:text-gray-300">men</li>
            <li className="cursor-pointer hover:text-gray-300">women</li>
            <li className="cursor-pointer hover:text-gray-300">boys</li>
            <li className="cursor-pointer hover:text-gray-300">girls</li>
            <li className="cursor-pointer hover:text-gray-300">new arrivals</li>
            <li className="cursor-pointer hover:text-gray-300">shoes</li>
            <li className="cursor-pointer hover:text-gray-300">cloths</li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-gray-100 font-bold text-xl">Contact Us</h3>
          <div className="uppercase">
            <h4 className="font-semibold text-gray-300">Address</h4>
            <p className="text-xs">123 Street name, city, egypt</p>
          </div>
          <div className="uppercase">
            <h4 className="font-semibold text-gray-300">phone</h4>
            <p className="text-xs">01501344134</p>
          </div>
          <div className="uppercase">
            <h4 className="font-semibold text-gray-300">e-mail</h4>
            <p className="text-xs">mostafamofeed83@gmail.com</p>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-gray-100 font-bold text-xl">Instagram</h3>
          <div className="grid grid-cols-3 gap-4 md:grid-cols-2  ">
            <div className="overflow-hidden">
              <img
                src={imgIns1}
                alt=""
                className="md:w-full md:h-36 object-cover transform hover:scale-110 transition duration-500 duration-500"
              />
            </div>
            <div className="overflow-hidden">
              <img
                src={imgIns2}
                alt=""
                className="md:w-full md:h-36 object-cover transform hover:scale-110 transition duration-500 duration-500"
              />
            </div>
            <div className="overflow-hidden">
              <img
                src={imgIns3}
                alt=""
                className="md:w-full md:h-36 object-cover transform hover:scale-110 transition duration-500 duration-500"
              />
            </div>
            <div className="overflow-hidden">
              <img
                src={imgIns4}
                alt=""
                className="md:w-full md:h-36 object-cover transform hover:scale-110 transition duration-500 duration-500"
              />
            </div>
            <div className="overflow-hidden">
              <img
                src={imgIns5}
                alt=""
                className="md:w-full md:h-36 object-cover transform hover:scale-110 transition duration-500 duration-500"
              />
            </div>
          </div>
        </div>
        <div>
          <img src={imgPayment} alt="" />
        </div>
        <p className="text-sm col-span-2 md:col-span-1 ">
          &copy; rymo eCommerce &copy; 2021 All Rights Reserved <br /> Created
          by
          <a
            href="https://www.facebook.com/profile.php?id=100053790544558"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary text-gray-300 transition duration-500 ease-in-out ml-1 border-b  hover:border-primary border-solid text-xs"
          >
            Mustafa Mufeed
          </a>
        </p>
        <div className="flex gap-5">
          <div className="bg-gray-200 overflow-hidden hover:bg-primary transition duration-500 ease-in-out cursor-pointer w-8 h-8 rounded-full flex justify-center items-center">
            <img src={imgFacebook} alt="" className="w-5 h-5" />
          </div>
          <div className="bg-gray-200 overflow-hidden hover:bg-primary transition duration-500 ease-in-out cursor-pointer w-8 h-8 rounded-full flex justify-center items-center">
            <img src={imgTwitter} alt="" className="w-5 h-5" />
          </div>
          <div className="bg-gray-200 overflow-hidden hover:bg-primary transition duration-500 ease-in-out cursor-pointer w-8 h-8 rounded-full flex justify-center items-center">
            <img src={imgInsta} alt="" className="w-5 h-5" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
