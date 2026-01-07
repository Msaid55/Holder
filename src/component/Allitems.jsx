import { FiShoppingBag } from "react-icons/fi";
import { NavLink, Link } from "react-router-dom";
import Meat1 from "../images/Meat1.svg";
import Meal2 from "../images/Meal2.svg";
import Meal3 from "../images/Meal3.svg";
import Meal4 from "../images/Meal4.svg";
import Meal5 from "../images/Meal5.svg";
import Meal6 from "../images/Meal6.svg";
import Meal7 from "../images/Meal7.svg";

import Drink1 from "../images/Drink1.svg";
import Drink2 from "../images/Drink2.svg";
import Drink3 from "../images/Drink3.svg";
import Drink4 from "../images/Drink4.svg";
import Drink5 from "../images/Drink5.svg";
import Drink6 from "../images/Drink6.svg";
import Drink7 from "../images/Drink7.svg";
import Drink8 from "../images/Drink8.svg";

import Desirt1 from "../images/Desirt1.svg";
import Desirt2 from "../images/Desirt2.svg";
import Desirt3 from "../images/Desirt3.svg";
import Desirt4 from "../images/Desirt4.svg";
import Desirt5 from "../images/Desirt5.svg";
import Desirt6 from "../images/Desirt6.svg";
import Desirt7 from "../images/Desirt7.svg";
import Desirt8 from "../images/Desirt8.svg";

import UseScrollReveal from "./UseScrollReveal";
import toast from "react-hot-toast";
import { addToCart } from "./useCart";
import { MdOutlineStar } from "react-icons/md";

export default function Allitems({ activeTab = "Break Fast" }) {
  UseScrollReveal();

  const items = [
    // Break Fast
    { title: "Croissant", price: "$55", img: Meat1, category: "Break Fast" },
    { title: "Muffin", price: "$30", img: Meal2, category: "Break Fast" },
    { title: "Waffles", price: "$45", img: Meal3, category: "Break Fast" },
    { title: "Bacon", price: "$25", img: Meal4, category: "Break Fast" },
    { title: "Oatmeal", price: "$60", img: Meal6, category: "Break Fast" },
    { title: "Coleslaw", price: "$35", img: Meat1, category: "Break Fast" },
    { title: "Toast", price: "$18", img: Meal2, category: "Break Fast" },
    { title: "Pancakes", price: "$40", img: Meal3, category: "Break Fast" },

    // Lunch
    { title: "Caesar Salad", price: "$25", img: Meal5, category: "Lunch" },
    { title: "Cobb Salad", price: "$20", img: Meal7, category: "Lunch" },
    { title: "Waffles", price: "$45", img: Meal3, category: "Lunch" },
    { title: "Bacon", price: "$25", img: Meal4, category: "Lunch" },
    { title: "Oatmeal", price: "$60", img: Meal6, category: "Lunch" },
    { title: "Coleslaw", price: "$35", img: Meat1, category: "Lunch" },
    { title: "Toast", price: "$18", img: Meal2, category: "Lunch" },
    { title: "Pancakes", price: "$40", img: Meal3, category: "Lunch" },

    // Dinner
    { title: "Steak Plate", price: "$75", img: Meat1, category: "Dinner" },
    { title: "Grilled Chicken", price: "$50", img: Meal4, category: "Dinner" },
    { title: "Waffles", price: "$45", img: Meal3, category: "Dinner" },
    { title: "Bacon", price: "$25", img: Meal4, category: "Dinner" },
    { title: "Oatmeal", price: "$60", img: Meal6, category: "Dinner" },
    { title: "Coleslaw", price: "$35", img: Meat1, category: "Dinner" },
    { title: "Toast", price: "$18", img: Meal2, category: "Dinner" },
    { title: "Pancakes", price: "$40", img: Meal3, category: "Dinner" },

    // Pizza
    { title: "Margherita", price: "$45", img: Meal3, category: "Pizza" },
    { title: "Pepperoni", price: "$55", img: Meal3, category: "Pizza" },
    { title: "Waffles", price: "$45", img: Meal3, category: "Pizza" },
    { title: "Bacon", price: "$25", img: Meal4, category: "Pizza" },
    { title: "Oatmeal", price: "$60", img: Meal6, category: "Pizza" },
    { title: "Coleslaw", price: "$35", img: Meat1, category: "Pizza" },
    { title: "Toast", price: "$18", img: Meal2, category: "Pizza" },
    { title: "Pancakes", price: "$40", img: Meal3, category: "Pizza" },

    // Burger
    { title: "Classic Burger", price: "$35", img: Meal4, category: "Burger" },
    { title: "Cheese Burger", price: "$40", img: Meal4, category: "Burger" },
    { title: "Waffles", price: "$45", img: Meal3, category: "Burger" },
    { title: "Bacon", price: "$25", img: Meal4, category: "Burger" },
    { title: "Oatmeal", price: "$60", img: Meal6, category: "Burger" },
    { title: "Coleslaw", price: "$35", img: Meat1, category: "Burger" },
    { title: "Toast", price: "$18", img: Meal2, category: "Burger" },
    { title: "Pancakes", price: "$40", img: Meal3, category: "Burger" },

    // Drinks
    { title: "Virgin Mojito", price: "$15", img: Drink1, category: "Drinks" },
    { title: "Lemon Juice", price: "$12", img: Drink2, category: "Drinks" },
    { title: "Lemon Juice", price: "$12", img: Drink3, category: "Drinks" },
    { title: "Lemon Juice", price: "$12", img: Drink4, category: "Drinks" },
    { title: "Lemon Juice", price: "$12", img: Drink5, category: "Drinks" },
    { title: "Lemon Juice", price: "$12", img: Drink6, category: "Drinks" },
    { title: "Lemon Juice", price: "$12", img: Drink7, category: "Drinks" },
    { title: "Lemon Juice", price: "$12", img: Drink8, category: "Drinks" },

    // Desert
    { title: "Matcha Latte", price: "$10", img: Desirt1, category: "Desert" },
    { title: "Blue Lagoon", price: "$20", img: Desirt2, category: "Desert" },
    { title: "Cola with Ice & Lemon", price: "$20", img: Desirt3, category: "Desert" },
    { title: "Chocolate Cake", price: "$20", img: Desirt4, category: "Desert" },
    { title: "Chocolate Cake", price: "$20", img: Desirt5, category: "Desert" },
    { title: "Chocolate Cake", price: "$20", img: Desirt6, category: "Desert" },
    { title: "Chocolate Cake", price: "$20", img: Desirt7, category: "Desert" },
    { title: "Chocolate Cake", price: "$20", img: Desirt8, category: "Desert" },
  ];

  const filteredItems = items
    .filter((item) => item.category === activeTab)
    .slice(0, 8)
    .map((it) => ({ ...it, id: `${it.category}-${it.title}`.replaceAll(" ", "") }));

  const handleOrderNow = (product) => {
    addToCart(product, 1);
    toast.success(`${product.title} added to cart 🛒`);
  };

  return (
    <div>
      <div className="w-full">
        <div>
          <div
            className=" grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10 reveal"
          >
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="relative bg-white rounded-3xl px-6 pt-8 pb-6  shadow-[0_14px_40px_rgba(0,0,0,0.05)]  overflow-visible group"
              >
                <div
                  className="absolute bottom-0 left-0 w-full h-[75%]  bg-[#e9f4f2] rounded-xl origin-bottom scale-y-0 transition-all duration-300 ease-in-out group-hover:scale-y-100"
                />

                {/* image -> details */}
                <NavLink
                  to="/ItemsDetails"
                  state={{ item, items }}
                  className="relative z-20 flex justify-center"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-[212px] h-[213px] object-contain mt-[-40px] transition-all duration-300 group-hover:-translate-y-2"
                  />
                </NavLink>
                    {/* contant */}
                <div className="relative z-30 mt-14">
                  <div className="flex items-center justify-between w-[230px] h-[45px]">
                    <h3 className="text-[20px] font-bold text-[#111]">
                    
                    </h3>
                    <div className="text-[18px] font-extrabold text-[#111]">
                      {item.price}
                    </div>
                  </div>
                    {/* 5stars */}
                  <div className="flex gap-1 mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className="text-[#ffb400] text-[14px]">
                        <MdOutlineStar />
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mt-5">
                    {/*  Order Now -> add only */}
                    <button
                      onClick={() => handleOrderNow(item)}
                      className="px-8 py-2.5 rounded-full bg-[#007a59] text-white text-[16px] font-semibold transition duration-200  hover:bg-[#036149]
                      "
                    >
                      Add To Cart
                    </button>

                    {/* cart icon -> cart page */}
                    <Link
                      to="/cart"
                      className=" w-[45px] h-[45px] rounded-full border border-[#FF4033]  text-[#FF4033] flex items-center justify-center  transition-all duration-200 cursor-pointer hover:bg-[#FF4033] hover:text-white hover:scale-110
                      "
                    >
                      <div className="w-10 h-10 flex items-center justify-center rounded-full">
                        <FiShoppingBag size={24} />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

            {/* button see more go to menu */}
          <div className="flex reveal justify-center mt-10">
            <a
              href="/Menu"
              className="  px-12 py-3 rounded-full   bg-[#FF4033] text-white  text-[16px] font-semibold  transition duration-200 hover:bg-[#e6392d]  w-[168px] h-[56px] flex items-center justify-center
              "
            >
              See More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
