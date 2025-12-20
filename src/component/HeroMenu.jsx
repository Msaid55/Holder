import React from 'react'
import BGitems from "../images/BGitems.png";
export default function HeroMenu() {
  return (
    <div className='w-full relative overflow-hidden py-16'>
        <div className="absolute inset-0">
            <img src={BGitems} alt="" className=" object-cover" />          
        </div>
    </div>
  )
}
