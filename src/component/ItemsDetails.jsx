import React, { useEffect } from "react";
import StandardHeader from "./StandardHeader";
import Group48 from "../images/Group48.svg";
import ItemsCounter from "./ItemsCounter";
import Footer from "./Footer";
import FoodBenefits from "./FoodBenefits";
import { useLocation } from "react-router-dom";
import ProductReviews from "./ProductReviews"; // add this

export default function ItemsDetails() {
  const location = useLocation();
  const selected = location.state?.item; // the item you opened

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <div className="bg-white relative">
      <StandardHeader />

      {/* Centered Title */}
      <div
        className="
          absolute 
          top-55 left-1/2 
          -translate-x-1/2 -translate-y-1/2
          z-30 
          flex flex-col items-center justify-center 
          text-white 
          pointer-events-none mt-10 md:mt-0
        "
      >
        <h1 className="text-[30px] md:text-[90px] font-bold leading-none">
          Items Details
        </h1>
        <img
          src={Group48}
          alt=""
          className="mt-6 md:w-[215px] w-[65px] h-[6px]"
        />
      </div>

      <ItemsCounter />
      <FoodBenefits />

      {/* Reviews section */}
      {selected && (
        <ProductReviews
          productId={`${selected.category}-${selected.title}`.replaceAll(" ", "")}
          productName={selected.title}
        />
      )}

      <Footer />
    </div>
  );
}
