import React from 'react'
import StandardHeader from './StandardHeader';
import Group48 from "../images/Group48.svg";
import ProductDetails from './ProductDetails';


export default function Cart() {
  return (
     <div className='bg-white'>
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
                    <img src={Group48} alt="" className="mt-6 md:w-[215px] w-[65px] h-[6px]" />
                </div>
                <ProductDetails/>
                </div>
  )
}
