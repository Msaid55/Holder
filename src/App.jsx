import React from "react";
import Header from "./component/Header";
import Home from "./component/Home";
import { Routes, Route} from 'react-router-dom'
 


export default function App() {
  return (
    <div className="bg-white">
  <Header/>         

<main>
<Routes>
<Route path="/" element={<Home />} />
<Route path="*" element={<div>404 - Not Found</div>} />
</Routes>
</main>
  
  </div>
  );
}
