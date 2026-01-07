import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ScrollReveal from "scrollreveal";

export default function UseScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    const sr = ScrollReveal();

    const run = () => {
      const els = document.querySelectorAll(".reveal");
      if (!els.length) return;

      try {
        sr.clean(".reveal"); //  يمسح أي reveal قديم
      } catch {}

      sr.reveal(".reveal", {
        origin: "bottom",
        distance: "60px",
        duration: 800,
        delay: 100,
        easing: "ease-out",
        reset: false,
        interval: 150,
        cleanup: true,
        mobile: true,
      });
    };

    //  مهم: نخليها بعد ما الـDOM يرسم + بعد ScrollToTop
    const raf = requestAnimationFrame(() => {
      setTimeout(run, 120);
    });

    return () => {
      cancelAnimationFrame(raf);
      try {
        sr.clean(".reveal"); // تنظيف عند الخروج من الصفحة
      } catch {}
    };
  }, [pathname]);
}
