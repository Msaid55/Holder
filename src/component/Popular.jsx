import React from "react";
import "./PopularItems.css";
import {FiShoppingBag} from "react-icons/fi";


import Group48 from "../images/Group48.svg";
import itms30 from "../images/itms30.svg";
import Itms31 from "../images/Itms31.svg";
import Eitms33 from "../images/Eitms33.svg";
import Kiwifruit34 from "../images/Kiwifruit34.svg";

export default function PopularItems() {
  const items = [
    {
      title: "Caesar Salad",
      price: "$25",
      img: itms30,
    },
    {
      title: "Blueberry Ice Cream",
      price: "$10",
      img: Itms31,
    },
    {
      title: "Cobb Salad",
      price: "$20",
      img: Eitms33,
    },
    {
      title: "Virgin Mojito",
      price: "$15",
      img: Kiwifruit34,
    },
  ];

  return (
    <div className="popular-wrapper w-full">
      <div className="max-w-8xl mx-auto px-4 md:px-8 lg:px-16 py-10">
        {/* العنوان + الدكورات + النقاط على اليمين */}
        <div className="popular-header flex justify-center mb-28">
          <div className="flex flex-col items-center justify-center gap-1">
            <h1 className="text-[#007a59] text-[30px] sm:text-[26px] md:text-[28px] font-bold text-center">
              Popular Items
            </h1>
            <img src={Group48} alt="" className="w-[195px] h-1.5 mt-1" />
          </div>
        </div>

        {/* الكروت */}
        <div className="popular-grid">
          {items.map((item, index) => (
            <div className="pro-card w-[285px] h-[417px]" key={index}>
              <div className="card-image-wrap">
                <img src={item.img} alt={item.title} className="product-img" />
              </div>

              <div className="card-body-2">
                <div className="title-price-row w-[237px] h-[45px] flex items-center justify-between">
                    <h3 className="card-title text-[20px]">{item.title}</h3>
                    <div className="price-text">{item.price}</div>
                </div>
                <div className="rating-row">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i} className="star">
                          ★
                        </span>
                      ))}
                  </div>

                <div className="order-row">
                  <button className="order-btn">Order Now</button>
                  <button className="icon-circle">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full text-[#FF4033] cursor-pointer">
                                <FiShoppingBag size={24} />
                              </div>
                    {/* لو عايزها شوبنج باج بدل اللّوك:
                        <i className="fa-solid fa-bag-shopping"></i>
                    */}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}