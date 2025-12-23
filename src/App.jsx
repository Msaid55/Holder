
 
import Home from "./component/Home";
import Menu from "./component/Menu";
import Booking from "./component/Booking";
import { Routes, Route} from 'react-router-dom'
 


export default function App() {
  return (
<div className="">
<main>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/Menu" element={<Menu />} />
<Route path="/Booking" element={<Booking />} />
<Route path="*" element={<div>404 - Not Found</div>} />
</Routes>
</main>
  
  </div>
  );
}
