import Image from 'next/image'
 
import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap';


export default function Workour() {

  const workRef = useRef();
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from(workRef.current.querySelectorAll('.shapework'),{
       y: 100,
       opacity: 0,
       duration: 1,
       scale: 0.8,
       
       ease: "power4.out",
       scrollTrigger: {
        trigger: workRef.current,
        start: "top 40%", // Jab section viewport ke 80% pe aaye
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
      <section ref={workRef} className="work-sec  relative px-8 md:px-24 pb-28 bg-[#030728] md:bg-transparent" >
        <div className="shapework hidden md:block w-shape sticky left-0 right-0 top-0 w-fit m-auto px-8">
          <Image
            src={"/img/work-shape.png"}
            width={1800}
            height={1180}
            alt="visual"
          />
          <div className="text-right absolute top-24  right-60     w-full">
            <h1 className="text-[18.75vw] leading-[18.75vw] text-[#0B1141]">
              Work
            </h1>
          </div>
        </div>
        <div className=" md:hidden py-12">
          <h1 className="text-[30px] leading-[30px] text-white">
              Work
            </h1>
          </div>
        <div className="container mx-auto max-w-screen-2xl">
          
          <div className="work-con  md:pt-32  ">
            <div className="md:grid md:grid-cols-2 gap-6 items-center space-y-6  md:space-y-0">
              <div className="work-l space-y-6 md:space-y-24 ">
                <div className="wrok-bx relative">
                  <div className="work-img">
                    <Image
                      src={"/img/port/b1.png"}
                      width={655}
                      height={833}
                      alt="visual"
                    />
                  </div>
                  <div className="work-ctn space-y-6 absolute bottom-0 left-0 right-0 px-4 md:px-12 py-18">
                    <h2 className="text-[#030728] text-[30px] leading-[30px]  md:text-[2.656vw] capitalize md:leading-[2.656vw]">
                      Wammie
                    </h2>
                    <div className="workist   space-y-2">
                      <div className="flex gap-2">
                        <button
                          className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4 transition duration-300 hover:bg-[#05C7AA] hover:text-[#fff]"
                          
                        >
                          Strategy
                        </button>
                        <button
                          className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4 transition duration-300 hover:bg-[#05C7AA] hover:text-[#fff]"
                          
                        >
                          UI/UX Design
                        </button>
                        <br />
                      </div>
                      <div className="flex gap-2">
                        <button
                          className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4 transition duration-300 hover:bg-[#05C7AA] hover:text-[#fff]"
                          
                        >
                          brand identity
                        </button>
                        <button
                          className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4 transition duration-300 hover:bg-[#05C7AA] hover:text-[#fff]"
                          
                        >
                          Development
                        </button>
                        <br />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="wrok-bx relative">
                  <div className="work-img">
                    <Image
                      src={"/img/port/b2.png"}
                      width={655}
                      height={833}
                      alt="visual"
                    />
                  </div>
                  <div className="work-ctn space-y-6 absolute bottom-0 left-0 right-0 px-4 md:px-12 py-18">
                  <h2 className="text-[#fff] text-[30px] leading-[30px]  md:text-[2.656vw] capitalize md:leading-[2.656vw]">
                      WavePay
                    </h2>
                    <div className="workist   space-y-2">
                      <div className="flex gap-2">
                        <button
                          className=" border border-[#ffff] text-white rounded-4xl px-4 md:px-8 py-2 md:py-4 transition duration-300 hover:bg-[#05C7AA] hover:text-[#fff]"
                          
                        >
                          Strategy
                        </button>
                        <button
                          className=" border border-[#ffff] text-white  rounded-4xl px-4 md:px-8 py-2 md:py-4 transition duration-300 hover:bg-[#05C7AA] hover:text-[#fff]"
                          
                        >
                          UI/UX Design
                        </button>
                        <br />
                      </div>
                      <div className="flex gap-2">
                        <button
                          className=" border border-[#ffff]  text-white  rounded-4xl px-4 md:px-8 py-2 md:py-4 transition duration-300 hover:bg-[#05C7AA] hover:text-[#fff]"
                          
                        >
                          brand identity
                        </button>
                        <button
                          className=" border border-[#ffff] text-white   rounded-4xl px-4 md:px-8 py-2 md:py-4 transition duration-300 hover:bg-[#05C7AA] hover:text-[#fff]"
                          
                        >
                          Development
                        </button>
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              
                <div className="wrok-bx relative">
                  <div className="work-img">
                    <Image
                      src={"/img/port/w2.png"}
                      width={655}
                      height={833}
                      alt="visual"
                    />
                  </div>
                  <div className="work-ctn space-y-6 absolute bottom-0 left-0 right-0 px-4 md:px-12 py-18">
                  <h2 className="text-[#030728] text-[30px] leading-[30px]  md:text-[2.656vw] capitalize md:leading-[2.656vw]">
                      Spring 24
                    </h2>
                    <div className="workist   space-y-2">
                      <div className="flex gap-2">
                        <button
                          className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4 transition duration-300 hover:bg-[#05C7AA] hover:text-[#fff]"
                          
                        >
                          Strategy
                        </button>
                        <button
                          className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4 transition duration-300 hover:bg-[#05C7AA] hover:text-[#fff]"
                          
                        >
                          UI/UX Design
                        </button>
                        <br />
                      </div>
                      <div className="flex gap-2">
                        <button
                          className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4 transition duration-300 hover:bg-[#05C7AA] hover:text-[#fff]"
                          
                        >
                          brand identity
                        </button>
                        <button
                          className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4 transition duration-300 hover:bg-[#05C7AA] hover:text-[#fff]"
                          
                        >
                          Development
                        </button>
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wrok-bx relative">
                  <div className="work-img">
                    <Image
                      src={"/img/port/w4.png"}
                      width={655}
                      height={833}
                      alt="visual"
                    />
                  </div>
                  <div className="work-ctn space-y-6 absolute bottom-0 left-0 right-0 px-4 md:px-12 py-18">
                  <h2 className="text-[#fff] text-[30px] leading-[30px]  md:text-[2.656vw] capitalize md:leading-[2.656vw]">
                      Codlou
                    </h2>
                    <div className="workist   space-y-2">
                      <div className="flex gap-2">
                        <button
                          className=" border border-[#ffff] text-white rounded-4xl px-4 md:px-8 py-2 md:py-4 transition duration-300 hover:bg-[#05C7AA] hover:text-[#fff]"
                          
                        >
                          Strategy
                        </button>
                        <button
                          className=" border border-[#ffff] text-white  rounded-4xl px-4 md:px-8 py-2 md:py-4 transition duration-300 hover:bg-[#05C7AA] hover:text-[#fff]"
                          
                        >
                          UI/UX Design
                        </button>
                        <br />
                      </div>
                      <div className="flex gap-2">
                        <button
                          className=" border border-[#ffff]  text-white  rounded-4xl px-4 md:px-8 py-2 md:py-4 transition duration-300 hover:bg-[#05C7AA] hover:text-[#fff]"
                          
                        >
                          brand identity
                        </button>
                        <button
                          className=" border border-[#ffff] text-white   rounded-4xl px-4 md:px-8 py-2 md:py-4 transition duration-300 hover:bg-[#05C7AA] hover:text-[#fff]"
                          
                        >
                          Development
                        </button>
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wrok-bx relative">
                  <div className="work-img">
                    <Image
                      src={"/img/port/a5.png"}
                      width={655}
                      height={833}
                      alt="visual"
                    />
                  </div>
                  <div className="work-ctn space-y-6 absolute bottom-0 left-0 right-0 px-4 md:px-12 py-18">
                  <h2 className="text-[#030728] text-[30px] leading-[30px]  md:text-[2.656vw] capitalize md:leading-[2.656vw]">
                    Guide Me
                    </h2>
                    <div className="workist   space-y-2">
                      <div className="flex gap-2">
                        <button
                          className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4 transition duration-300 hover:bg-[#05C7AA] hover:text-[#fff]"
                          
                        >
                          Strategy
                        </button>
                        <button
                          className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4 transition duration-300 hover:bg-[#05C7AA] hover:text-[#fff]"
                          
                        >
                          UI/UX Design
                        </button>
                        <br />
                      </div>
                      <div className="flex gap-2">
                        <button
                          className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4 transition duration-300 hover:bg-[#05C7AA] hover:text-[#fff]"
                          
                        >
                          brand identity
                        </button>
                        <button
                          className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4 transition duration-300 hover:bg-[#05C7AA] hover:text-[#fff]"
                          
                        >
                          Development
                        </button>
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wrok-bx relative">
                  <div className="work-img">
                    <Image
                      src={"/img/port/a1.png"}
                      width={655}
                      height={833}
                      alt="visual"
                    />
                  </div>
                  <div className="work-ctn space-y-6 absolute bottom-0 left-0 right-0 px-4 md:px-12 py-18">
                  <h2 className="text-[#fff] text-[30px] leading-[30px]  md:text-[2.656vw] capitalize md:leading-[2.656vw]">
                    Watch Watch
                    </h2>
                    <div className="workist   space-y-2">
                      <div className="flex gap-2">
                        <button
                          className=" border border-[#ffff] text-white rounded-4xl px-4 md:px-8 py-2 md:py-4 transition duration-300 hover:bg-[#05C7AA] hover:text-[#fff]"
                          
                        >
                          Strategy
                        </button>
                        <button
                          className=" border border-[#ffff] text-white  rounded-4xl px-4 md:px-8 py-2 md:py-4 transition duration-300 hover:bg-[#05C7AA] hover:text-[#fff]"
                          
                        >
                          UI/UX Design
                        </button>
                        <br />
                      </div>
                      <div className="flex gap-2">
                        <button
                          className=" border border-[#ffff]  text-white  rounded-4xl px-4 md:px-8 py-2 md:py-4 transition duration-300 hover:bg-[#05C7AA] hover:text-[#fff]"
                          
                        >
                          brand identity
                        </button>
                        <button
                          className=" border border-[#ffff] text-white   rounded-4xl px-4 md:px-8 py-2 md:py-4 transition duration-300 hover:bg-[#05C7AA] hover:text-[#fff]"
                          
                        >
                          Development
                        </button>
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="work-l space-y-6 md:space-y-24">
                
                <div className="wrok-bx relative">
                  <div className="work-img">
                    <Image
                      src={"/img/port/b3.png"}
                      width={655}
                      height={833}
                      alt="visual"
                    />
                  </div>
                  <div className="work-ctn space-y-6 absolute bottom-0 left-0 right-0 px-4 md:px-12 py-18">
                  <h2 className="text-[#030728] text-[30px] leading-[30px]  md:text-[2.656vw] capitalize md:leading-[2.656vw]">
                      Wollo
                    </h2>
                    <div className="workist   space-y-2">
                      <div className="flex gap-2">
                        <button
                          className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4 transition duration-300 hover:bg-[#05C7AA] hover:text-[#fff]"
                          
                        >
                          Strategy
                        </button>
                        <button
                          className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4 transition duration-300 hover:bg-[#05C7AA] hover:text-[#fff]"
                          
                        >
                          UI/UX Design
                        </button>
                        <br />
                      </div>
                      <div className="flex gap-2">
                        <button
                          className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4 transition duration-300 hover:bg-[#05C7AA] hover:text-[#fff]"
                          
                        >
                          brand identity
                        </button>
                        <button
                          className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4 transition duration-300 hover:bg-[#05C7AA] hover:text-[#fff]"
                          
                        >
                          Development
                        </button>
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wrok-bx relative">
                  <div className="work-img">
                    <Image
                      src={"/img/port/w3.png"}
                      width={655}
                      height={833}
                      alt="visual"
                    />
                  </div>
                  <div className="work-ctn space-y-6 absolute bottom-0 left-0 right-0 px-4 md:px-12 py-18">
                  <h2 className="text-[#030728] text-[30px] leading-[30px]  md:text-[2.656vw] capitalize md:leading-[2.656vw]">
                     Buya Trucker
                    </h2>
                    <div className="workist   space-y-2">
                      <div className="flex gap-2">
                        <button
                          className=" border border-[]  rounded-4xl px-4 md:px-8 py-2 md:py-4 transition duration-300 hover:bg-[#05C7AA] hover:text-[#fff]"
                          
                        >
                          Strategy
                        </button>
                        <button
                          className=" border   rounded-4xl px-4 md:px-8 py-2 md:py-4 transition duration-300 hover:bg-[#05C7AA] hover:text-[#fff]"
                          
                        >
                          UI/UX Design
                        </button>
                        <br />
                      </div>
                      <div className="flex gap-2">
                        <button
                          className=" border   rounded-4xl px-4 md:px-8 py-2 md:py-4 transition duration-300 hover:bg-[#05C7AA] hover:text-[#fff]"
                          
                        >
                          brand identity
                        </button>
                        <button
                          className=" border    rounded-4xl px-4 md:px-8 py-2 md:py-4 transition duration-300 hover:bg-[#05C7AA] hover:text-[#fff]"
                          
                        >
                          Development
                        </button>
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wrok-bx relative">
                  <div className="work-img">
                    <Image
                      src={"/img/port/a3.png"}
                      width={655}
                      height={833}
                      alt="visual"
                    />
                  </div>
                  <div className="work-ctn space-y-6 absolute bottom-0 left-0 right-0 px-4 md:px-12 py-18">
                  <h2 className="text-[#fff] text-[30px] leading-[30px]  md:text-[2.656vw] capitalize md:leading-[2.656vw]">
                      Memory Mag
                    </h2>
                    <div className="workist   space-y-2">
                      <div className="flex gap-2">
                        <button
                          className=" border border-[#ffff] text-white rounded-4xl px-4 md:px-8 py-2 md:py-4 transition duration-300 hover:bg-[#05C7AA] hover:text-[#fff]"
                          
                        >
                          Strategy
                        </button>
                        <button
                          className=" border border-[#ffff] text-white  rounded-4xl px-4 md:px-8 py-2 md:py-4 transition duration-300 hover:bg-[#05C7AA] hover:text-[#fff]"
                          
                        >
                          UI/UX Design
                        </button>
                        <br />
                      </div>
                      <div className="flex gap-2">
                        <button
                          className=" border border-[#ffff]  text-white  rounded-4xl px-4 md:px-8 py-2 md:py-4 transition duration-300 hover:bg-[#05C7AA] hover:text-[#fff]"
                          
                        >
                          brand identity
                        </button>
                        <button
                          className=" border border-[#ffff] text-white   rounded-4xl px-4 md:px-8 py-2 md:py-4 transition duration-300 hover:bg-[#05C7AA] hover:text-[#fff]"
                          
                        >
                          Development
                        </button>
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wrok-bx relative">
                  <div className="work-img">
                    <Image
                      src={"/img/port/a2.png"}
                      width={655}
                      height={833}
                      alt="visual"
                    />
                  </div>
                  <div className="work-ctn space-y-6 absolute bottom-0 left-0 right-0 px-4 md:px-12 py-18">
                  <h2 className="text-[#030728] text-[30px] leading-[30px]  md:text-[2.656vw] capitalize md:leading-[2.656vw]">
                      Edu Link
                    </h2>
                    <div className="workist   space-y-2">
                      <div className="flex gap-2">
                        <button
                          className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4 transition duration-300 hover:bg-[#05C7AA] hover:text-[#fff]"
                          
                        >
                          Strategy
                        </button>
                        <button
                          className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4 transition duration-300 hover:bg-[#05C7AA] hover:text-[#fff]"
                          
                        >
                          UI/UX Design
                        </button>
                        <br />
                      </div>
                      <div className="flex gap-2">
                        <button
                          className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4 transition duration-300 hover:bg-[#05C7AA] hover:text-[#fff]"
                          
                        >
                          brand identity
                        </button>
                        <button
                          className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4 transition duration-300 hover:bg-[#05C7AA] hover:text-[#fff]"
                          
                        >
                          Development
                        </button>
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wrok-bx relative">
                  <div className="work-img">
                    <Image
                      src={"/img/port/d1.png"}
                      width={655}
                      height={833}
                      alt="visual"
                    />
                  </div>
                  <div className="work-ctn space-y-6 absolute bottom-0 left-0 right-0 px-4 md:px-12 py-18">
                  <h2 className="text-[#fff] text-[30px] leading-[30px]  md:text-[2.656vw] capitalize md:leading-[2.656vw]">
                     Strong Trainer
                    </h2>
                    <div className="workist   space-y-2">
                      <div className="flex gap-2">
                        <button
                          className=" border border-[#ffff] text-white rounded-4xl px-4 md:px-8 py-2 md:py-4 transition duration-300 hover:bg-[#05C7AA] hover:text-[#fff]"
                          
                        >
                          Strategy
                        </button>
                        <button
                          className=" border border-[#ffff] text-white  rounded-4xl px-4 md:px-8 py-2 md:py-4 transition duration-300 hover:bg-[#05C7AA] hover:text-[#fff]"
                          
                        >
                          UI/UX Design
                        </button>
                        <br />
                      </div>
                      <div className="flex gap-2">
                        <button
                          className=" border border-[#ffff]  text-white  rounded-4xl px-4 md:px-8 py-2 md:py-4 transition duration-300 hover:bg-[#05C7AA] hover:text-[#fff]"
                          
                        >
                          brand identity
                        </button>
                        <button
                          className=" border border-[#ffff] text-white   rounded-4xl px-4 md:px-8 py-2 md:py-4 transition duration-300 hover:bg-[#05C7AA] hover:text-[#fff]"
                          
                        >
                          Development
                        </button>
                        <br />
                      </div>
                    </div>
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
