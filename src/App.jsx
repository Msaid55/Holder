import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./component/Home";
import Menu from "./component/Menu";
import Booking from "./component/Booking";
import Blog from "./component/Blog";
import SplashLoader from "./component/SplashLoader";

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
    <div className="bg-white">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<div>404 - Not Found</div>} />
        </Routes>
      </main>
    </div>
  );
}
