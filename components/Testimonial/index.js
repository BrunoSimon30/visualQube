import Image from 'next/image'
import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";


export default function Testimonial({rtc}) {
  const testRef = useRef();
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    const tl = gsap.timeline({
         scrollTrigger: {
           trigger: testRef.current,
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
        testRef.current?.querySelectorAll(".up_h"),
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
       <section ref={testRef} className="testi-sec bg-[#030728] md:h-screen py-24 md:py-0 flex items-center px-8 relative">
       <div className='ltri'></div>
       <div className={`rtri ${rtc}`}></div>
            <div className="container mx-auto max-w-screen-2xl">
              <div className="up_h md:grid md:grid-cols-3 gap-28 items-center">
                <div className="relative hidden md:block">
                  <div className="float-right -mb-12 relative z-10">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="193"
                        height="155"
                        viewBox="0 0 193 155"
                        fill="none"
                      >
                        <path
                          d="M83.3951 16.7568L46.463 87.973L27.9969 92.7606C29.9825 88.3719 32.3652 84.7812 35.1451 81.9884C38.322 79.1956 41.8961 77.7992 45.8673 77.7992C54.2068 77.7992 61.7521 81.1905 68.5031 87.973C75.6512 94.7555 79.2253 103.533 79.2253 114.305C79.2253 125.077 75.2541 134.652 67.3117 143.031C59.7665 151.01 50.6327 155 39.9105 155C29.1883 155 19.856 151.01 11.9136 143.031C3.97119 135.051 0 125.476 0 114.305C0 109.517 0.992798 104.131 2.97839 98.1467C4.96399 91.7632 8.33951 83.7838 13.1049 74.2085L53.0154 0L83.3951 16.7568ZM193 16.7568L156.068 87.973L137.602 92.7606C139.587 88.3719 141.97 84.7812 144.75 81.9884C147.927 79.1956 151.501 77.7992 155.472 77.7992C163.812 77.7992 171.357 81.1905 178.108 87.973C185.256 94.7555 188.83 103.533 188.83 114.305C188.83 125.077 184.859 134.652 176.917 143.031C169.371 151.01 160.238 155 149.515 155C138.793 155 129.461 151.01 121.519 143.031C113.576 135.051 109.605 125.476 109.605 114.305C109.605 109.517 110.598 104.131 112.583 98.1467C114.569 91.7632 117.944 83.7838 122.71 74.2085L162.62 0L193 16.7568Z"
                          fill="#FFBB00"
                        />
                      </svg>
                    </span>
                  </div>
                  <Image
                    src={"/img/we-r.png"}
                    width={431}
                    height={431}
                    alt="visual"
                  />
                </div>
                <div className="col-span-2 space-y-8">
                  <p className="text-[30px] leading-[40px] md:text-[3.333vw] md:leading-[3.333vw] text-white">
                    These guys are crazy fast, They finished off all assets in 6
                    days & got the brand guideline & handover done aweek later.
                  </p>
                  <div className="test-icn flex items-center gap-4">
                    <Image
                      src={"/img/boy.png"}
                      width={95}
                      height={88}
                      alt="visual"
                    />
                    <div>
                      <h3 className="text-[20px] leading-[25px] md:text-[1.771vw] text-[#05C7AA] md:leading-[1.771vw] font-semibold">
                        Stewart Nomad
                      </h3>
                      <p className="text-[18px] leading-[25px] md:text-[1.042vw] text-white">
                        CEO, Megachad
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
    </>
  )
}
