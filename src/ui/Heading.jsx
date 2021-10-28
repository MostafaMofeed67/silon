import React from "react";

const Heading = ({ heading, position, text, padding }) => {
  return (
    <div
      className={`${position === "left" ? "" : "items-center"} 
      ${padding ? "pb-4" : "pb-10"} 
      ${padding ? "pt-7" : "pt-16"}  
      px-4 flex flex-col  space-y-4 sm:space-y-3`}
    >
      <h1 className="font-bold text-gray-900 text-3xl capitalize sm:text-xl">
        {heading}
      </h1>
      <span className="w-14 h-1 rounded-full bg-primary inline-block"></span>
      {!text && (
        <>
          <p className="sm:text-sm">
            Here you can check out our new products with fair price on rymo.
          </p>
        </>
      )}
    </div>
  );
};

export default Heading;
