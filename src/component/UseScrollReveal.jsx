import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export default function UseScrollReveal() {
  useEffect(() => {
    ScrollReveal().reveal(".reveal", {
      origin: "bottom",
      distance: "60px",
      duration: 800,
      delay: 100,
      easing: "ease-out",
      reset: false,
      interval: 150,
    });
  }, []);
}
