import { useState } from "react";
import Group48 from "../images/Group48.svg";
import Header2 from "./Header2";
import Allitems from "./Allitems";

export default function HeadItem() {
  const [activeTab, setActiveTab] = useState("Break Fast");

  return (
    <div className="w-full bg-white">
      <div className="max-w-8xl mx-auto px-4 py-10">

        <div className="flex justify-center">
          <div className="flex flex-col items-center gap-1">
            <h1 className="text-[#007a59] text-[28px] font-bold">
              All Items
            </h1>
            <img src={Group48} alt="" className="w-[125px] h-1.5" />
          </div>
        </div>

        <Header2 active={activeTab} setActive={setActiveTab} />
        <Allitems activeTab={activeTab} />
      </div>
    </div>
  );
}
