import React from "react";
import Header from "./component/Header";
import Home from "./component/Home";

export default function App() {
  return (
    <div className="bg-white">

      <div className="max-w-8xl mx-auto px-8">
        <Header />
        <Home />
      </div>
    </div>
  );
}
