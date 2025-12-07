
import dish from "../images/dish.svg";
import Frame from "../images/Frame.svg";
import Frame2 from "../images/Frame2.svg";
import Frame3 from "../images/Frame3.svg";
import Frame4 from "../images/Frame4.svg";


export default function Hero2() {
  return (
    <div className="relative w-[570px] h-[570px] animate-dish-enter">
      
      <img
        src={dish}
        alt="dish"
        className="w-full h-full object-contain"
      />

      
      <div className="absolute top-6 left-0.5 flex items-center gap-2 bg-[#065B5E] text-white px-4 py-3 rounded-[10px] shadow-md float-card-1">
       
        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#065B5E] text-xs font-bold">
          <img src={Frame} alt="" />
        </div>
        <span className="text-sm font-semibold">Fast Delivery</span>
      </div>

      
      <div className="absolute top-20 right-2.5 flex items-center gap-2 bg-[#B4E08E] text-black px-5 py-3 rounded-[10px] shadow-md float-card-2">
        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#5B8A36] text-xs font-bold">
          <img src={Frame2} alt="" />
        </div>
        <span className="text-sm font-semibold">Nearest Place</span>
      </div>

      
      <div className="absolute bottom-40 -left-20 flex items-center gap-2 bg-[#FF4B2B] text-white px-6 py-3 rounded-[10px] shadow-md float-card-3">
        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#FF4B2B] text-xs font-bold">
          <img src={Frame3} alt="" />
        </div>
        <span className="text-sm font-semibold">Book Your Table</span>
      </div>

      
      <div className="absolute bottom-12 right-2 flex items-center gap-2 bg-[#FFB020] text-white px-5 py-3 rounded-[10px] shadow-md float-card-4">
        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#FFB020] text-xs font-bold">
          <img src={Frame4} alt="" />
        </div>
        <span className="text-sm font-semibold">Customer Review</span>
      </div>
    </div>
  );
}
