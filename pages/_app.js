import "@/styles/globals.css";
import Lenis from "lenis";
import { Outfit } from "next/font/google";
import { useEffect } from "react";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);
  return (
    <>
     <main className={outfit.variable}>
     <Component {...pageProps} />
     </main>
    
    </>
  );
}
