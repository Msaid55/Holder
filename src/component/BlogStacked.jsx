import { useState } from "react";

import Rectangle82 from "../images/Rectangle82.svg";
import Rectangle83 from "../images/Rectangle83.svg";
import Rectangle84 from "../images/Rectangle84.svg";
import Rectangle85 from "../images/Rectangle85.svg";
import Rectangle86 from "../images/Rectangle86.svg";
import Rectangle87 from "../images/Rectangle87.svg";

/* ================== DATA ================== */
const blogsData = [
  {
    img: Rectangle82,
    tag: "Dining",
    date: "July - 15 - 2025",
    title: "Announce big changes to your restaurant",
    descShort:
      "Many restaurant websites have a press page where they share newspaper and magazine mentions or awards they’ve won. Small changes are not always press-worthy, but they are worthy of your own blog. Publish your own press release about new menu items, new locations, or new employees. Many restaurant websites have a press page where they share newspaper and magazine mentions or awards they’ve won. Small changes are not always press-worthy, but they are worthy of your own blog. Publish your own press release about new menu items, new locations, or new employees. Many restaurant websites have a press page where they share newspaper and magazine mentions or awards they’ve won. Small changes are not always press-worthy, but they are worthy of your own blog. Publish your own press release about new menu items, new locations, or new employees. Many restaurant websites have a press page where they share newspaper and magazine mentions or awards they’ve won.",
    descMore:
      "Small changes are not always press-worthy, but they are worthy of your own blog. Publish your own press release about new menu items, new locations, or new employees.",
  },
  {
    img: Rectangle83,
    tag: "Food",
    date: "Aug - 20 - 2025",
    title: "Hold fun contests to engage your readers",
    descShort:
      "Pizza Express celebrated their anniversary with a photo contest, asking readers to post photos of their favourite Pizza Express experiences on Facebook, Twitter, or Instagram with the hashtag how to enter, and prize details, were explained in a thorough blog post, which also makes it easier to share on social media.Pizza Express celebrated their anniversary with a photo contest, asking readers to post photos of their favourite Pizza Express experiences on Facebook, Twitter, or Instagram with the hashtag how to enter, and prize details, were explained in a thorough blog post, which also makes it easier to share on social media. Pizza Express celebrated their anniversary with a photo contest, asking readers to post photos of their favourite Pizza Express experiences on Facebook, Twitter, or Instagram with the hashtag how to enter, and prize details, were explained in a thorough blog post, which also makes it easier to share on social media. Pizza Express celebrated their anniversary with a photo contest, asking readers to post photos of their favourite Pizza Express experiences on Facebook, Twitter, or Instagram with the hashtag how to enter, and prize details, were explained in a thorough blog post, which also makes it easier to share on social media.",
    descMore:
      " Pizza Express celebrated their anniversary with a photo contest, asking readers to post photos of their favourite Pizza Express experiences on Facebook, Twitter, or Instagram with the hashtag how to enter, and prize details, were explained in a thorough blog post, which also makes it easier to share on social media.",
  },
  {
    img: Rectangle84,
    tag: "Restaurant",
    date: "Sep - 05 - 2025",
    title: "Reflect on the restaurant experience",
    descShort:
      "What do people expect from restaurants? What’s something great about your restaurant’s guest experience that customers might not see somewhere else? What can detract from a great restaurant experience, and what can add to it? These kinds of thought-leadership posts are a great way to break up promotional content.What do people expect from restaurants? What’s something great about your restaurant’s guest experience that customers might not see somewhere else? What can detract from a great restaurant experience, and what can add to it? These kinds of thought-leadership posts are a great way to break up promotional content. What do people expect from restaurants? What’s something great about your restaurant’s guest experience that customers might not see somewhere else? What can detract from a great restaurant experience, and what can add to it? These kinds of thought-leadership posts are a great way to break up promotional content. What do people expect from restaurants? What’s something great about your restaurant’s guest experience that customers might not see somewhere else? What can detract from a great restaurant experience, and what can add to it? These kinds of thought-leadership posts are a great way to break up promotional content.",
    descMore:
      " What do people expect from restaurants? What’s something great about your restaurant’s guest experience that customers might not see somewhere else? What can detract from a great restaurant experience, and what can add to it? These kinds of thought-leadership posts are a great way to break up promotional content.",
  },
  {
    img: Rectangle85,
    tag: "Food",
    date: "Oct - 10 - 2025",
    title: "New menu launch",
    descShort: "Many restaurant websites have a press page where they share newspaper and magazine mentions or awards they’ve won.",
    descMore: "Small changes are not always press-worthy, but they are worthy of your own blog. Publish your own press release about new menu items, new locations, or new employees.",
  },
  {
    img: Rectangle86,
    tag: "Dining",
    date: "Nov - 01 - 2025",
    title: "Chef's special tips",
    descShort: "Pizza Express celebrated their anniversary with a photo contest, asking readers to post photos of their favourite Pizza Express experiences on Facebook, Twitter, or Instagram with the hashtag how to enter, and prize details.",
    descMore: " were explained in a thorough blog post, which also makes it easier to share on social media.",
  },
  {
    img: Rectangle87,
    tag: "Restaurant",
    date: "Dec - 05 - 2025",
    title: "Holiday celebration",
    descShort: "What do people expect from restaurants? What’s something great about your restaurant’s guest experience that customers might not see somewhere else? What can detract from a great restaurant experience. and what can add to it? These kinds of thought-leadership posts are a great way to break up promotional content.",
    descMore: "Join us for festive meals and warm moments.",
  },
];

/* ================== COMPONENT ================== */
export default function BlogStacked({ blogs = blogsData }) {
  const [openIndex, setOpenIndex] = useState(null);
  const [startIndex, setStartIndex] = useState(0);

  const itemsPerPage = 3;

  return (
    <section className="w-full bg-white">
      <div className="max-w-8xl mx-auto px-4 md:px-8 lg:px-16 py-16 flex flex-col items-center">

        {/* Desktop / Laptop */}
        <div className="hidden md:flex flex-col items-center gap-8 md:w-[996px] overflow-y-auto">
          {blogs
            .slice(startIndex, startIndex + itemsPerPage)
            .map((blog, index) => {
              const realIndex = startIndex + index;
              return (
                <div
                  key={realIndex}
                  className="group overflow-hidden transition-all duration-500 w-full bg-white rounded-2xl"
                >
                  {/* Image */}
                  <div className="relative md:h-[497px] h-[228px] overflow-hidden rounded-2xl">
                    <img
                      src={blog.img}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <span className="absolute bottom-4 left-4 backdrop-blur px-4 py-1 rounded-lg text-sm">
                      {blog.tag}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="pt-4">
                    <p className="text-sm text-gray-400 mb-1">
                      Owner Jack Arthur : {blog.date}
                    </p>
                    <h3 className="text-[18px] font-bold text-[#FF4033] mb-1">
                      {blog.title}
                    </h3>
                    <p className="text-[14px] text-black leading-6">
                      {blog.descShort}
                      {openIndex !== realIndex && (
                        <span
                          onClick={() => setOpenIndex(realIndex)}
                          className="text-[#FF4033] cursor-pointer font-medium ml-1"
                        >
                          Read more...
                        </span>
                      )}
                      {openIndex === realIndex && (
                        <>
                          <span> {blog.descMore}</span>
                          <span
                            onClick={() => setOpenIndex(null)}
                            className="text-[#FF4033] cursor-pointer font-medium ml-1"
                          >
                            Read less
                          </span>
                        </>
                      )}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>

        {/* Mobile / Small screens */}
        
<div className="flex md:hidden flex-col items-center gap-8 w-full max-w-[386.5px] px-4">
  {blogs.slice(startIndex, startIndex + itemsPerPage).map((blog, index) => (
    <div
      key={startIndex + index}
      className="group overflow-hidden transition-all duration-500 w-full h-[440px] bg-white rounded-2xl"
    >
      {/* Image */}
      <div className="relative h-[228px] overflow-hidden rounded-2xl">
        <img
          src={blog.img}
          alt={blog.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <span className="absolute bottom-4 left-4 backdrop-blur px-4 py-1 rounded-lg text-sm">
          {blog.tag}
        </span>
      </div>

      {/* Content */}
      <div className="pt-4">
        <p className="text-sm text-gray-400 mb-1">
          Owner Jack Arthur : {blog.date}
        </p>
        <h3 className="text-[18px] font-bold text-[#FF4033] mb-1">
          {blog.title}
        </h3>
        <p className="text-[14px] text-black leading-6">
          {blog.descShort}
          {openIndex !== index && (
            <span
              onClick={() => setOpenIndex(index)}
              className="text-[#FF4033] cursor-pointer font-medium ml-1"
            >
              Read more...
            </span>
          )}
          {openIndex === index && (
            <>
              <span> {blog.descMore}</span>
              <span
                onClick={() => setOpenIndex(null)}
                className="text-[#FF4033] cursor-pointer font-medium ml-1"
              >
                Read less
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  ))}
</div>


        {/* Arrows (Desktop only) */}
        <div className="flex items-center gap-6 mt-10">
          <button
            onClick={() =>
              setStartIndex((prev) => Math.max(prev - itemsPerPage, 0))
            }
            disabled={startIndex === 0}
            className="px-5 py-2 border rounded-full disabled:opacity-40 bg-[#FF4033]"
          >
            ←
          </button>

          <button
            onClick={() =>
              setStartIndex((prev) =>
                prev + itemsPerPage < blogs.length
                  ? prev + itemsPerPage
                  : prev
              )
            }
            disabled={startIndex + itemsPerPage >= blogs.length}
            className="px-5 py-2 border rounded-full disabled:opacity-40 bg-[#007a59]"
          >
            →
          </button>
        </div>

      </div>
    </section>
  );
}
