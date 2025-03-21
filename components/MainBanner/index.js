import React, { useRef } from 'react'
import Image from "next/image";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function MainBanner() {
const mainBan = useRef();

  useGSAP(() => {
    gsap.from(mainBan.current.querySelectorAll('.MainBanwrap'),{
       y: 100,
       opacity: 0,
       duration: 2,
       delay: 0.5,
       ease: "power4.out",
       
    })
    gsap.to(mainBan.current, {
      scrollTrigger: {
        trigger: mainBan.current,
        scroller: "body",
        start: "top top",
        end: "bottom top",
        pin: true,
        pinSpacing: false,
        scrub: 1,
        // markers: true,
      },
    });
   }, [])

  return (
    <>
      <section ref={mainBan} className="main-sec  h-[65vh] md:h-screen bg-[#FCFFF5] flex items-center justify-center px-8 relative z-[-1]">
        <div className="container mx-auto max-w-screen-2xl">
       <div className='MainBanwrap'>
       <div className="md:grid md:grid-cols-2 gap-6">
            <div className="Mban-l space-y-12">
              <div>
                <h1 className="text-[45px] leading-[50px] md:text-[5.729vw] text-[#030233] md:leading-[5.729vw]">
                Create Digital Experiences That Wow.
                </h1>
              </div>
              <div className="flex gap-12 items-center">
                <span>
                  <Image
                    src={"/img/banicon.svg"}
                    width={108}
                    height={108}
                    alt="visual"
                  />
                </span>
                <p className="text-[#303030] text-[17px]">
                VisualQube is a tech-driven marketing <br/>agency creating digital experiences that <br/>captivate, engage, and inspire.
                </p>
              </div>
            </div>
            <div className="Mban-r hidden md:block text-right">
              <Image
                className="ml-auto"
                src={"/img/manr-icon.png"}
                width={489}
                height={489}
                alt="visual"
              />
            </div>
          </div>
       </div>
        </div>
      </section>
    </>
  )
}
