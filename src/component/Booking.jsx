import React from 'react'
import StandardHeader from './StandardHeader'
import Group149 from "../images/Group149.svg";
import Contact from './Contact';
import Tables from './Tables';
import Footer from './footer';


export default function Booking() {
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
                Book Your Table
                </h1>
                <img src={Group149} alt="" className="mt-6 w-[765px] h-[6px]" />
            </div>
            <Contact/>
            <Tables/>
            <Footer/>
        </div>
    )
}
