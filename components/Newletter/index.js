import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Link from 'next/link'
import React, { useRef } from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger";


export default function NewLetter() {
   const newsRef = useRef();
   gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    const tl = gsap.timeline({
         scrollTrigger: {
           trigger: newsRef.current,
           start: "top 50%", // Jab section viewport ke 80% pe aaye
           end: "bottom  ",
           // markers: true,
           // pin: true,
           // scrub: true,
           // toggleActions: "play pause resume reset",
           // toggleActions: "play none none reverse",
         },
       });
    
       tl.from(
         newsRef.current?.querySelectorAll(".up_h"),
         {
           y: 100,
           duration: 1,
          
           opacity: 0,
           stagger: 0.4,
           ease: "power3.out",
        
         },
         "run"
       )

 }, []);
  return (
    <>
 <section ref={newsRef} className="news-sec md:-mb-24 relative z-1">
        <div className="container mx-auto max-w-screen-2xl">
          <div className="up_h md:flex justify-between bg-[#05C7AA] py-12 md:py-24 px-12 items-center md:rounded-3xl space-y-3 md:space-y-0">
            <h1 className="text-[30px] leading-[30px] md:text-[3.167vw] md:leading-[3.167vw] font-[500]">
              Get Custom Quotes
            </h1>
            <p className="max-w-[500px] text-[15px] leading-[25px]  md:text-[20px] md:leading-[30px]  text-[#303030]">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
            <div className="space-y-2">
              <Link
                className="bg-[#FCFFF5] rounded py-4 px-8 text-[#030728] text-[17px] font-[500] block text-center transition duration-300 hover:bg-[#030728] hover:text-[#fff]"
                href={"/"}
              >
                Let’s Talk
              </Link>
              <Link
                className="bg-[#FCFFF5] rounded py-4 px-8 text-[#030728] text-[17px] font-[500] block text-center transition duration-300 hover:bg-[#030728] hover:text-[#fff]"
                href={"/contact"}
              >
                Request A Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
