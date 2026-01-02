import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ScrollReveal from "scrollreveal";

export default function UseScrollReveal() {
  const location = useLocation();

  useEffect(() => {
    const reveal = () => {
      ScrollReveal().reveal(".reveal", {
        origin: "bottom",
        distance: "60px",
        duration: 800,
        delay: 100,
        easing: "ease-out",
        reset: false,
        interval: 120,
        cleanup: true,
      });
    };

    // تشغيل الانيميشن أول مرة
    reveal();

    // إعادة التفعيل لما الصفحة تتغير (route change)
    const handleRefresh = () => {
      reveal();
    };

    window.addEventListener("reveal_refresh", handleRefresh);

    return () => {
      window.removeEventListener("reveal_refresh", handleRefresh);
    };
  }, [location.pathname]); // 👈 مهم جداً

  return null;
}
