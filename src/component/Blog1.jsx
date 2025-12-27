import { useState } from "react";
import Group83 from "../images/Group83.svg";
import Rectangle82 from "../images/Rectangle82.svg";
import Rectangle83 from "../images/Rectangle83.svg";
import Rectangle84 from "../images/Rectangle84.svg";
 

export default function Blog1() {
    const blogs = [
        {
            img: Rectangle82,
            tag: "Dining",
            date: "July - 15 - 2025",
            title: "Announce big changes to your restaurant",
            descShort: "Many restaurant websites have a press page where they share newspaper and magazine mentions or awards they’ve won.",
            descMore: " Small changes are not always press-worthy, but they are worthy of your own blog. Publish your own press release about new menu items, new locations, or new employees.",


        },
        {
            img: Rectangle83,
            tag: "Food",
            date: "Aug - 20 - 2025",
            title: "Hold fun contests to engage your readers",
            descShort: "Pizza Express celebrated their anniversary with a photo contest, asking readers to post photos of their favourite Pizza Express experiences on.",
            descMore: "Facebook, Twitter, or Instagram with the hashtag how to enter, and prize details, were explained in a thorough blog post, which also makes it easier to share on social media.",
        },
        {
            img: Rectangle84,
            tag: "Restaurant",
            date: "Sep - 05 - 2025",
            title: "Reflect on the restaurant experience",
            descShort: "What do people expect from restaurants? What’s something great about your restaurant’s guest experience that customers might not see somewhere else? What can detract from a great restaurant experience.",
            descMore: "and what can add to it? These kinds of thought-leadership posts are a great way to break up promotional content.",
        },
    ];
    const [open, setOpen] = useState(false);
    return (
        <section className="w-full bg-white">
            <div className="max-w-8xl mx-auto px-4 md:px-8 lg:px-16 py-16">

                {/* العنوان */}
                <div className="flex flex-col items-center gap-1 mb-12">
                    <h1 className="text-[#007a59] text-[30px] sm:text-[26px] md:text-[28px] font-bold">
                        Blog
                    </h1>
                    <img src={Group83} alt="" className="w-[65px] h-[6px]" />
                </div>

                {/* الكاردات */}
                <div className="flex flex-wrap gap-5 justify-between">
                    {blogs.map((blog, index) => (
                         <div
                            key={index}
                            className="group overflow-hidden transition-all duration-500 w-full md:w-[48%] lg:w-[32%]"
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

                                    {!open && (
                                        <span
                                            onClick={() => setOpen(true)}
                                            className="text-[#FF4033] cursor-pointer font-medium ml-1"
                                        >
                                            Read more...
                                        </span>
                                    )}

                                    {open && (
                                        <>
                                            <span className="transition-all duration-300">
                                                {blog.descMore}
                                            </span>
                                            <span
                                                onClick={() => setOpen(false)}
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
