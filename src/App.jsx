import React from "react";
import Header from "./component/Header";
import Hero1 from "./component/Hero1";

export default function App() {
  return (
    <div className="bg-white">
      {/* نفس الكونتينر للهيدر والهيرو */}
      <div className="max-w-[1200px] mx-auto px-8">
        <Header />
        <Hero1 />
      </div>
    </div>
  );
}
