import About from "./About";
import Android from "./Android";
import Blog1 from "./Blog1";
import Boxs from "./Boxs";
import Flfl from "./Flfl";
import HeadItem from "./HeadItem";
import Hero1 from "./Hero1";
import Ourchafe from "./Ourchafe";
import Popular from "./Popular";
import Customer from "./Customer";
import FAQ from "./FAQ";
import Footer from "./Footer";
import Header from "./Header";
 

export default function 
() {
  return (
    <div className="bg-white">
        <Header/>
        <Hero1/>
        <Flfl/>
        <Boxs/>
        <About/>
        <Popular/>
        <HeadItem/>
        <Ourchafe/>
        <Customer/>
        <Blog1/>
        <Android/>
        <FAQ/>
        <Footer/>
        
    </div>
  )
}
