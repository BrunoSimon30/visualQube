"use client"; // Only needed for Next.js App Router (if using)
import React, { useRef } from 'react'
import Link from "next/link";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap';

export default function Cta({rtc}) {

  const ctaRef = useRef();
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from(ctaRef.current.querySelectorAll('.ctawrap'),{
       y: 100,
       opacity: 0,
       duration: 1,
       
       ease: "power4.out",
       scrollTrigger: {
        trigger: ctaRef.current,
        start: "top 70%", // Jab section viewport ke 80% pe aaye
        end: "bottom",
        // markers:true,
        
        // scrub: 4,
        // toggleActions: "play pause resume reset",
        toggleActions: "play none none reverse",
      },
       
    })
   }, [])

  return (
    <>
       <section ref={ctaRef}  className="cta-sec bg-[#05C7AA] py-6 md:py-16 px-8 relative">
        <div className='ltri'></div>
        <div className={`rtri ${rtc}`}></div>
            <div className="container mx-auto max-w-screen-2xl">
            <div className='ctawrap'>
            <div className="md:flex md:justify-between md:items-center space-y-4 md:space-y-0 text-center md:text-left">
                <div>
                  <h1 className="text-[#030728]  text-[25px] leading-[30px] md:text-[2.656vw]  md:leading-[2.656vw] font-[500]">
                    Want to grow your business digitally?
                  </h1>
                </div>
                <div>
                  <Link
                    className="bg-[#FCFFF5] rounded py-2 md:py-4  px-6 md:px-8 text-[#030728] text-[13px] md:text-[17px] font-[500] inline-block transition duration-300 hover:bg-[#030728] hover:text-[#fff]"
                    href={"/contact"}
                  >
                    Get Started!
                  </Link>
                </div>
              </div>
            </div>
            </div>
          </section>
    </>
  )
}
