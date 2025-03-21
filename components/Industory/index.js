import Image from "next/image";
import Marquee from "react-fast-marquee";
import React, { useRef } from "react";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Industory() {
   
  const silItems =[
    {
      titel : 'sports',
      img : '/img/indus/sports.svg'
    },
    {
      titel : 'Fashion',
      img : '/img/indus/fashion.svg'
    },
    {
      titel : 'Skin Care',
      img : '/img/indus/skin.svg'
    },
    {
      titel : 'Security',
      img : '/img/indus/lock.svg'
    },
    {
      titel : 'Science',
      img : '/img/indus/react.svg'
    },
    {
      titel : 'Photography',
      img : '/img/indus/cam.svg'
    },
    {
      titel : 'Law Firms',
      img : '/img/indus/law.svg'
    },
    {
      titel : 'Corporate ',
      img : '/img/indus/cop.svg'
    },
  ]
  const IndusRef = useRef();
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
  
    const tl = gsap.timeline({
         scrollTrigger: {
           trigger: IndusRef.current,
           start: "top 30%", // Jab section viewport ke 80% pe aaye
           end: "bottom  ",
          //  markers: true,
           // pin: true,
           // scrub: true,
           // toggleActions: "play pause resume reset",
          //  toggleActions: "play none none reverse",
         },
       });
    
       tl.from(
        IndusRef.current?.querySelectorAll(".up_h"),
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
      <section ref={IndusRef} className="indus-sec py-24 bg-white overflow-hidden  ">
        <div className="space-y-24">
          <div className="up_h indus-h text-center space-y-4 px-8">
            <h1 className="text-[30px] leading-[30px] md:text-[4.167vw] md:leading-[4.167vw] font-[500] text-[#030728] capitalize">
            Leading Digital Mastery <br/>Across Industries
            </h1>
            <p className="text-[#303030] text-[15px] leading-[25px] md:text-[20px] font-[500] md:leading-[35px]">
            Discover solutions specific to your respective industry and start transforming and<br/> dominating markets. Jumpstart your journey to digital excellence now! 
            </p>
          </div>

          <div className="space-y-6 up_h">
            <Marquee speed={50} gradient={false} className="space-x-8  ">
              {silItems?.map((v, index) => (
                <div
                  key={index}
                  className="shrink-0 w-[334px] h-[267px] bg-[#FCFFF5] flex items-center justify-center rounded-2xl drop-shadow-md border mx-4"
                >
                  <div>
                    <Image
                      className="m-auto"
                      src={v?.img}
                      width={100}
                      height={100}
                      alt={v.titel}
                    />
                    <h2 className="text-[#030728] text-[25px] font-[500] text-center">
                     {v?.titel}
                    </h2>
                  </div>
                </div>
              ))}
            </Marquee>

            <Marquee
              speed={50}
              direction="right"
              gradient={false}
              className="space-x-8 "
            >
              {silItems?.map((v, index) => (
                <div
                  key={index}
                  className="shrink-0 w-[334px] h-[267px] bg-[#FCFFF5] flex items-center justify-center rounded-2xl drop-shadow-md border mx-4"
                >
                  <div>
                    <Image
                      className="m-auto"
                      src={v?.img}
                      width={100}
                      height={100}
                      alt={v.titel}
                    />
                    <h2 className="text-[#030728] text-[25px] font-[500] text-center">
                     {v?.titel}
                    </h2>
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </section>
    </>
  );
}
