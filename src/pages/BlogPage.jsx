import React from "react";
import imgBlog1 from "../assets/img/blog/blog1.jpg";
import imgBlog2 from "../assets/img/blog/blog2.jpg";
import imgBlog3 from "../assets/img/blog/blog3.jpg";
import imgBlog4 from "../assets/img/blog/blog4.jpg";
import imgBlog5 from "../assets/img/blog/blog5.jpg";
import imgBlog6 from "../assets/img/blog/blog6.jpg";
import imgBlog7 from "../assets/img/blog/blog7.jpg";
import ButtonBuy from "../ui/ButtonBuy";
import Heading from "../ui/Heading";

const blogData = [
  {
    imgUrl: imgBlog1,
    blogDay: "Sunday",
    blogDate: "October 27 2020",
    blogHead: "Gray Cap",
    blogCta:
      " In sport, a cap is a player's appearance in a game at international level. The term dates from the practice in the United Kingdom of awarding a cap to every player in an international match of association football.",
  },
  {
    imgUrl: imgBlog2,
    blogDay: "Friday",
    blogDate: "March 10 2021",
    blogHead: "hand bag",
    blogCta:
      "Gucci Diana small tote bag. Combining recognizable elements of the House, the small tote bag is defined by its bamboo handles and Double G hardware. Crafted from white leather, the accessory is further accentuated by two neon bands.",
  },
  {
    imgUrl: imgBlog3,
    blogDay: "Thursday",
    blogDate: "July 15 2021",
    blogHead: "Jacket",
    blogCta:
      "Jacket definition is - a garment for the upper body usually having a front opening, collar, lapels, sleeves, and pockets. How to use jacket in a sentence.",
  },
  {
    imgUrl: imgBlog4,
    blogDay: "Wednesday",
    blogDate: "December 24 2020",
    blogHead: "Sport Shoes",
    blogCta:
      "So impressed with how comfortable and light these trainers are, decided to experiment with levitation.",
  },
];

const content = blogData.map((blog) => (
  <div
    key={blog.imgUrl}
    className="w-full max-w-[53rem]  mx-auto flex items-center shadow-lg p-10 lg:flex-col rounded-xl md:p-8"
  >
    <div className="min-w-[17rem] max-w-[17rem] h-52   transform -translate-x-16 lg:-translate-x-0 lg:min-w-full lg:-translate-y-16">
      <img
        src={blog.imgUrl}
        alt=""
        className="w-full h-full object-cover rounded-xl shadow"
      />
    </div>
    <div>
      <div className="flex flex-col text-sm text-gray-400 capitalize">
        <span>{blog.blogDay}</span>
        <span>{blog.blogDate}</span>
      </div>
      <h3 className="text-2xl text-primary uppercase tracking-wide my-2 sm:text-base">
        {blog.blogHead}
      </h3>
      <p className="text-sm mb-4 sm:text-xs">{blog.blogCta}</p>
      <ButtonBuy to="/products">Shop Now</ButtonBuy>
    </div>
  </div>
));

const BlogPage = () => {
  return (
    <div className="pt-[92px] container ">
      <Heading heading="Our Blog" position="left" />
      <div className="flex flex-col gap-8 lg:gap-20 lg:mt-8">{content}</div>
      <Heading heading="Latest News" position="left" />
      <div className="grid grid-cols-3 gap-5 lg:grid-cols-1">
        <div className="shadow-md">
          <div className="h-56">
            <img src={imgBlog5} alt="" className="h-full w-full object-cover" />
          </div>
          <div className="flex flex-col gap-3 p-5 sm:p3">
            <h2 className="text-xl font-semibold text-gray-700">
              Online Shopping
            </h2>
            <span className="text-xs font-semibold">By Mustafa Mufeed</span>
            <p className="text-sm sm:text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              earum voluptate pariatur mollitia quidem quisquam!
            </p>
            <span className="self-start text-xs text-primary cursor-pointer border-b border-white border-solid hover:border-primary">
              Read More
            </span>
          </div>
        </div>
        <div className="shadow-md">
          <div className="h-56">
            <img src={imgBlog6} alt="" className="h-full w-full object-cover" />
          </div>
          <div className="flex flex-col gap-3 p-5 sm:p3">
            <h2 className="text-xl font-semibold text-gray-700">
              Credit Card Offers
            </h2>
            <span className="text-xs font-semibold">By Alaa Reda</span>
            <p className="text-sm sm:text-xs">
              Cum nesciunt veritatis sunt voluptatum dolore unde tempora itaque
              excepturi consequuntur et.
            </p>
            <span className="self-start text-xs text-primary cursor-pointer border-b border-white border-solid hover:border-primary">
              Read More
            </span>
          </div>
        </div>
        <div className="shadow-md">
          <div className="h-56">
            <img src={imgBlog7} alt="" className="h-full w-full object-cover" />
          </div>
          <div className="flex flex-col gap-3 p-5 sm:p3">
            <h2 className="text-xl font-semibold text-gray-700">
              Sale Up To 50%
            </h2>
            <span className="text-xs font-semibold">By Hossam Tal3t</span>
            <p className="text-sm sm:text-xs">
              suscipit quis illo aperiam? Quae architecto labore similique
              recusandae commodi est awius?
            </p>
            <span className="self-start text-xs text-primary cursor-pointer border-b border-white border-solid hover:border-primary">
              Read More
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
