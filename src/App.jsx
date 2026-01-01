import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./component/Home";
import Menu from "./component/Menu";
import Booking from "./component/Booking";
import Blog from "./component/Blog";
import AboutUs from "./component/AboutUs";
import SplashLoader from "./component/SplashLoader";
import Login from "./component/Login";
import Register from "./component/Register";
import ItemsDetails from "./component/ItemsDetails";
import SmoothScroll from "./component/SmoothScroll";


export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // مدة ظهور اللودر

    return () => clearTimeout(timer);
  }, []);

  // 🔹 يظهر كل مرة حتى مع الريفريش
  if (loading) return <SplashLoader />;

  return (
    <SmoothScroll>
    <div className="bg-white">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/ItemsDetails" element={<ItemsDetails />} />
          
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="*" element={<div>404 - Not Found</div>} />
        </Routes>
      </main>
    </div>
    </SmoothScroll>
  );
}
