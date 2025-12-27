import { useState } from "react";
 
import Rectangle82 from "../images/Rectangle82.svg";
import Rectangle83 from "../images/Rectangle83.svg";
 // ✅ تعريف البيانات خارج الكمبوننت
const blogsData = [
  {
    img: Rectangle82,
    tag: "Dining",
    date: "July - 15 - 2025",
    title: "Announce big changes to your restaurant",
    descShort: "Many restaurant websites have a press page where they share newspaper and magazine mentions or awards they’ve won.",
    descMore: "Small changes are not always press-worthy, but they are worthy of your own blog. Publish your own press release about new menu items, new locations, or new employees."
  },
  {
    img: Rectangle83,
    tag: "Food",
    date: "Aug - 20 - 2025",
    title: "Hold fun contests",
    descShort: "Short desc...",
    descMore: "More details..."
  },
  {
    img: Rectangle82,
    tag: "Restaurant",
    date: "Sep - 05 - 2025",
    title: "Reflect on experience",
    descShort: "Short desc...",
    descMore: "More details..."
  },
  {
    img: Rectangle82,
    tag: "Food",
    date: "Oct - 10 - 2025",
    title: "New menu launch",
    descShort: "Short desc...",
    descMore: "More details..."
  },
  {
    img: Rectangle82,
    tag: "Dining",
    date: "Nov - 01 - 2025",
    title: "Chef's special tips",
    descShort: "Short desc...",
    descMore: "More details..."
  },
  {
    img: Rectangle83,
    tag: "Restaurant",
    date: "Dec - 05 - 2025",
    title: "Holiday celebration",
    descShort: "Short desc...",
    descMore: "More details..."
  },
];

export default function BlogStacked({ blogs = blogsData }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="w-full bg-white">
      <div className="max-w-8xl mx-auto px-4 md:px-8 lg:px-16 py-16">

        {/* الكروت */}
        <div className="flex flex-col items-center gap-8 w-[996px] h-[2515px]">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="group overflow-hidden transition-all duration-500 w-full h-[773px]"
            >
              {/* الصورة */}
              <div className="relative h-[220px] overflow-hidden rounded-2xl">
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* التاج */}
                <span className="absolute bottom-4 left-4 backdrop-blur px-4 py-1 rounded-lg text-sm">
                  {blog.tag}
                </span>
              </div>

              {/* المحتوى */}
              <div className="pt-4">
                <p className="text-sm text-gray-400 mb-2">
                  Owner Jack Arthur : {blog.date}
                </p>

                <h3 className="text-[18px] font-bold text-[#FF4033] mb-2 leading-snug">
                  {blog.title}
                </h3>

                <p className="text-[14px] text-gray-700 leading-6">
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
                      <span className="transition-all duration-300">
                        {blog.descMore}
                      </span>
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
      </div>
    </section>
  );
}
