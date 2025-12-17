import React, { useEffect, useRef, useState } from "react";
import Group48 from "../images/Group48.svg"; // نفس الخط الصغير اللي تحت العنوان
import Rectangle from "../images/Rectangle.png";  
import Rectangle1 from "../images/Rectangle1.svg";
import Rectangle2 from "../images/Rectangle2.svg";
import Rectangle3 from "../images/Rectangle3.svg";
import Rectangle4 from "../images/Rectangle4.svg";

import Ellipse1 from "../images/Ellipse1.svg";
import Ellipse2 from "../images/Ellipse2.svg";
import Ellipse3 from "../images/Ellipse3.svg";
import Ellipse4 from "../images/Ellipse4.svg";



const data = [
  {
    img: Rectangle1 ,
    text:
      "Lorem ipsum dolor sit amet consectetur. Eget varius rutrum consequat ut. Commodo ridiculus aenean at volutpat at.",
    name: "Daniel Thomas",
    job: "Designer",
    avatar: Ellipse1,
    stars: 5,
  },
  {
    img: Rectangle2,
    text:
      "Lorem ipsum dolor sit amet consectetur. Eget varius rutrum consequat ut. Commodo ridiculus aenean at volutpat at.",
    name: "Thomas Joe",
    job: "Student",
    avatar: Ellipse2,
    stars: 5,
  },
  {
    img:Rectangle3 ,
    text:
      "Lorem ipsum dolor sit amet consectetur. Eget varius rutrum consequat ut. Commodo ridiculus aenean at volutpat at.",
    name: "William Damian",
    job: "Housewife",
    avatar: Ellipse3,
    stars: 5,
  },
  {
    img: Rectangle4,
    text:
      "Lorem ipsum dolor sit amet consectetur. Eget varius rutrum consequat ut. Commodo ridiculus aenean at volutpat at.",
    name: "James Charlie",
    job: "Business",
    avatar: Ellipse4,
    stars: 5,
  },
];

export default function Customer() {
  const trackRef = useRef(null);

  const scrollByCard = (dir = 1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector("[data-card='1']");
    const w = card ? card.getBoundingClientRect().width : 360;
    el.scrollBy({ left: dir * (w + 24), behavior: "smooth" });
  };

  return (
    <section className="w-full relative overflow-hidden py-16">
      {/* BG image */}
      <div className="absolute inset-0">
        <img src={Rectangle} alt="" className="w-full h-full object-cover" />
        {/* blur + dark overlay */}
        <div className="absolute inset-0 backdrop-blur-md bg-black/55" />
      </div>

      <div className="relative max-w-8xl mx-auto px-4 md:px-8 lg:px-16">
        {/* Title */}
        <div className="flex flex-col items-center text-center">
          <h2 className="text-white text-3xl font-bold">Happy Customer</h2>
          <img src={Group48} alt="" className="w-[140px] mt-2" />
        </div>

        {/* Desktop: carousel */}
        <div className="hidden md:block mt-10">
          <div className="flex justify-end gap-3 mb-4">
            <button
              onClick={() => scrollByCard(-1)}
              className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center"
            >
              ‹
            </button>
            <button
              onClick={() => scrollByCard(1)}
              className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center"
            >
              ›
            </button>
          </div>

          <div
            ref={trackRef}
            className="
              flex gap-6 overflow-x-auto scroll-smooth
              pb-6
              [scrollbar-width:none] [-ms-overflow-style:none]
            "
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {/* hide scrollbar (webkit) */}
            <style>{`
              .hideScroll::-webkit-scrollbar{display:none;}
            `}</style>

            {data.map((c, i) => (
              <div
                key={i}
                data-card="1"
                className="
                  min-w-[360px] max-w-[360px]
                  text-white
                "
              >
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={c.img}
                    alt=""
                    className="w-full h-[190px] object-cover"
                  />
                </div>

                <p className="text-sm leading-relaxed mt-4 text-white/90">
                  {c.text}
                </p>

                <div className="flex items-center gap-4 mt-5">
                  <img
                    src={c.avatar}
                    alt=""
                    className="w-12 h-12 rounded-full object-cover border-2 border-white/30"
                  />

                  <div className="flex-1">
                    <div className="font-semibold">{c.name}</div>
                    <div className="text-xs text-white/70">{c.job}</div>
                    <div className="flex gap-1 mt-1">
                      {Array.from({ length: c.stars }).map((_, s) => (
                        <span key={s} className="text-yellow-400 text-base">
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: stacked cards */}
        <div className="md:hidden mt-10 space-y-10">
          {data.map((c, i) => (
            <div key={i} className="text-white">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={c.img}
                  alt=""
                  className="w-full h-[200px] object-cover"
                />
              </div>

              <p className="text-sm leading-relaxed mt-4 text-white/90">
                {c.text}
              </p>

              <div className="flex items-center gap-4 mt-5">
                <img
                  src={c.avatar}
                  alt=""
                  className="w-12 h-12 rounded-full object-cover border-2 border-white/30"
                />

                <div className="flex-1">
                  <div className="font-semibold">{c.name}</div>
                  <div className="text-xs text-white/70">{c.job}</div>
                  <div className="flex gap-1 mt-1">
                    {Array.from({ length: c.stars }).map((_, s) => (
                      <span key={s} className="text-yellow-400 text-base">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="h-px bg-white/10 mt-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
