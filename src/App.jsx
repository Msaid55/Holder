import React from "react";
import Header from "./component/Header";
import Hero1 from "./component/Hero1";

export default function App() {
  return (
    <div className="bg-white">

      <div className="max-w-8xl mx-auto px-8">
        <Header />
        <Hero1 />
      </div>
    </div>
  );
}
