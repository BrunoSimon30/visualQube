import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'

export default function Services() {

  const serRef = useRef();
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
     
    gsap.from(serRef.current.querySelectorAll('.up_hh'),{
      y: 100,
      opacity: 0,
      duration: 1,
      
      ease: "power4.out",
      scrollTrigger: {
       trigger: serRef.current,
       start: "top 70%", // Jab section viewport ke 80% pe aaye
       end: "bottom",
       
     },
      
   })
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: serRef.current,
        start: "top 80%", // Jab section viewport ke 80% pe aaye
        end: "bottom  ",
        // markers: true,
        // pin: true,
        scrub: true,
        // toggleActions: "play pause resume reset",
        // toggleActions: "play none none reverse",
      },
    });
 
    tl.from(
      serRef.current?.querySelectorAll(".up_h"),
      {
        y: 100,
        duration: 1,
        scale: 0.8,
        opacity: 0,
        stagger: 0.4,
        ease: "power3.out",
     
      },
      "run"
    )
 

   }, [])

  return (
    <>
     <section  ref={serRef} className="what-sec bg-[#FCFFF5] py-12 md:py-28 px-8  relative z-10">
        <div className="container mx-auto max-w-screen-2xl space-y-8 md:space-y-24">
          <div className="up_hh W-h text-center space-y-4">
            <h1 className="text-[25px] leading-[30px] md:text-[4.167vw] md:leading-[4.167vw] font-[500] text-[#030728]">
              This is what we do
            </h1>
            <p className="text-[#303030] text-[15px] leading-[25px] md:text-[20px] font-[500] md:leading-[35px]">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla
              <br /> pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt <br />
              mollit anim id est laborum.
            </p>
          </div>
          <div>
            <div className="what-wrap">
              <div className="up_h md:grid md:grid-cols-2 gap-6 items-center border-t border-[#bfbfbf] py-16 space-y-2 md:space-y-0">
                <div className="w-l">
                  <Image
                    src={"/img/wl-1.png"}
                    width={518}
                    height={389}
                    alt="visual"
                  />
                </div>
                <div className="w-r space-y-6 md:space-y-8">
                  <h2 className="text-[25px] leading-[30px] md:text-[2.656vw] md:leading-[2.656vw] font-[500]">
                    Branding
                  </h2>
                  <p className="text-[#303030] text-[15px] leading-[25px] md:text-[20px] md:leading-[35px] font-[500] ">
                    Build a brand that your customers will love. Your brand has
                    big ideas, but do you have a signature moment? We focus
                    on brand identity & impactful web design. Our branding
                    agency can elevate your brand!
                  </p>
                  <div>
                    <Link className="btn-a inline-block" href={'/branding'}>
                      Get Started!
                    </Link>
                  </div>
                </div>
              </div>
              <div className="up_h flex flex-col-reverse md:grid md:grid-cols-2 gap-6 items-center  border-t border-[#bfbfbf] py-16 ">
                <div className="w-r space-y-6 md:space-y-8">
                  <h2 className="text-[25px] leading-[30px] md:text-[2.656vw] md:leading-[2.656vw] font-[500]">
                    Website Design
                  </h2>
                  <p className="text-[#303030] text-[15px] leading-[25px] md:text-[20px] md:leading-[35px] font-[500] ">
                    We craft intelligent web designs that highlight your brand
                    identity, engage site visitors, and leave a lasting
                    impression. A well-designed web page is a smart investment
                    for any business.
                  </p>
                  <div>
                    <Link className="btn-a inline-block" href={'/website-design'}>
                      Get Started!
                    </Link>
                  </div>
                </div>
                <div className="w-l">
                  <Image
                    className="ml-auto"
                    src={"/img/wl-2.png"}
                    width={518}
                    height={389}
                    alt="visual"
                  />
                </div>
              </div>
              <div className="up_h md:grid md:grid-cols-2 gap-6 items-center border-t border-[#bfbfbf] py-16 space-y-2 md:space-y-0">
                <div className="w-l">
                  <Image
                    src={"/img/wl-3.png"}
                    width={518}
                    height={389}
                    alt="visual"
                  />
                </div>
                <div className="w-r space-y-6 md:space-y-8">
                  <h2 className="text-[25px] leading-[30px] md:text-[2.656vw] md:leading-[2.656vw] font-[500]">
                    App Development
                  </h2>
                  <p className="text-[#303030] text-[15px] leading-[25px] md:text-[20px] md:leading-[35px] font-[500] ">
                    Our web designers build world-class websites. We are
                    ambitious builders. We ensure every project aligns with your
                    brand identity and elevates the user experience. Let's
                    develop something amazing!
                  </p>
                  <div>
                    <Link className="btn-a inline-block" href={'/app-design-development'}>
                      Get Started!
                    </Link>
                  </div>
                </div>
              </div>
              <div className="up_h flex flex-col-reverse md:grid md:grid-cols-2 gap-6 items-center  border-t border-[#bfbfbf] py-16 ">
                <div className="w-r space-y-6 md:space-y-8">
                  <h2 className="text-[25px] leading-[30px] md:text-[2.656vw] md:leading-[2.656vw] font-[500]">
                    Digital Marketing
                  </h2>
                  <p className="text-[#303030]  text-[15px] leading-[25px] md:text-[20px] md:leading-[35px] font-[500] ">
                    We craft intelligent web designs that highlight your brand
                    identity, engage site visitors, and leave a lasting
                    impression. A well-designed web page is a smart investment
                    for any business.
                  </p>
                  <div>
                    <Link className="btn-a inline-block" href={'/digital-marketing'}>
                      Get Started!
                    </Link>
                  </div>
                </div>
                <div className="w-l">
                  <Image
                    className="ml-auto"
                    src={"/img/wl-4.png"}
                    width={518}
                    height={389}
                    alt="visual"
                  />
                </div>
              </div>
              <div className="up_h md:grid md:grid-cols-2 gap-6 items-center border-t border-[#bfbfbf] py-16">
                <div className="w-l">
                  <Image
                    src={"/img/wl-5.png"}
                    width={518}
                    height={389}
                    alt="visual"
                  />
                </div>
                <div className="w-r space-y-8">
                  <h2 className="text-[25px] leading-[30px] md:text-[2.656vw] md:leading-[2.656vw] font-[500]">
                    Data & Cloud
                  </h2>
                  <p className="text-[#303030] text-[15px] leading-[25px] md:text-[20px] md:leading-[35px] font-[500]">
                    Our web designers build world-class websites. We are
                    ambitious builders. We ensure every project aligns with your
                    brand identity and elevates the user experience. Let's
                    develop something amazing!
                  </p>
                  <div>
                    <Link className="btn-a inline-block" href={'/data-cloud'}>
                      Get Started!
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
