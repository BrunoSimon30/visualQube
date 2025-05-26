import Counter from "@/components/counter";
import Cta from "@/components/cta";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Industory from "@/components/Industory";
import NewLetter from "@/components/Newletter";
import Ready from "@/components/ready";
import Testimonial from "@/components/Testimonial";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { IoCheckmarkSharp } from "react-icons/io5";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap';

export default function index() {
  const workRef = useRef();
  gsap.registerPlugin(ScrollTrigger);
  const [activeIndex, setActiveIndex] = useState(0);
  const images = ["/img/scroll/b1.png", "/img/scroll/b2.png", "/img/scroll/b3.png"]; // Change these paths accordingly

  useEffect(() => {
    const sections = document.querySelectorAll(".content-section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveIndex(Number(entry.target.dataset.index));
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section, index) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);
 
  useGSAP(() => {
    gsap.from(workRef.current.querySelectorAll('.shapework'),{

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
      <Header />
      <section className="main-sec  h-[50vh] md:h-screen bg-[#FCFFF5] flex items-center justify-center px-8">
        <div className="container mx-auto max-w-screen-2xl">
          <div className="md:grid md:grid-cols-2 gap-6 items-center">
            <div className="Mban-l space-y-12">
              <div>
                <h1 className="text-[50px] leading-[50px] md:text-[5.729vw] text-[#030233] md:leading-[5.729vw]">
                  Brand <br />
                  Strategy & Identity
                </h1>
              </div>
              <div className="">
                <p className="text-[#303030] text-[17px]">
                  We craft your brand's story with precision and flair.
                </p>
              </div>
            </div>
            <div className="hidden md:block text-right">
              <Image
                className="ml-auto"
                src={"/img/branding.png"}
                width={740}
                height={555}
                alt="visual"
              />
            </div>
          </div>
        </div>
      </section>
      <Cta heading={`Make Your Brand the Talk of the Town!`} rtc={"rtbcolor"} />
      <Counter heading={`Being A Leading Branding Services Company`} />
      <section className="ex-sec py-24 px-8">
        <div className="container mx-auto max-w-screen-2xl space-y-24">
          <div>
            <h1 className="text-[#030728] text-[30px] leading-[35px] md:text-[4.167vw] md:leading-[4.167vw] font-[500]  md:w-[70%]">
              Discover How We Craft Iconic Brands with Precision and Deliver
              Unmatched Value
            </h1>
          </div>
          <div className="md:flex gap-24">
            <div className="w-full hidden md:block sticky top-20 self-start">
              <Image
                src={images[activeIndex]}
                width={583}
                height={414}
                alt="visual"
                className="rounded-2xl shadow-lg transition-opacity duration-500"
              />
            </div>
            <div className="w-full space-y-24 overflow-y-auto">
              <div
                className="border-t border-[#000] py-24 space-y-6 content-section"
                data-index="0"
              >
                <h2 className="text-[30px] leading-[30px] md:text-[2.656vw] md:leading-[2.656vw] font-[500]">
                  Brand Positioning
                </h2>
                <p className="text-[#303030] text-[15px] leading-[25px] md:text-[20px] md:leading-[35px] font-[500]">
                  We define your market space with absolute insight and
                  creativity that not only captures attention of your audience
                  but also fosters their enduring loyalty and engagement with
                  your brand.
                </p>
              </div>
              <div
                className="border-t border-[#000] py-24 space-y-6 content-section"
                data-index="1"
              >
                <h2 className="text-[30px] leading-[30px] md:text-[2.656vw] md:leading-[2.656vw] font-[500]">
                  Visual Identity
                </h2>
                <p className="text-[#303030] text-[15px] leading-[25px] md:text-[20px] md:leading-[35px] font-[500]">
                  We design a compelling visual identity that deeply resonates
                  with your audience, ensuring your brand stands out vividly in
                  today’s bustling marketplace but also remains memorable and
                  influential.
                </p>
              </div>
              <div
                className="border-t border-[#000] py-24 space-y-6 content-section"
                data-index="2"
              >
                <h2 className="text-[30px] leading-[30px] md:text-[2.656vw] md:leading-[2.656vw] font-[500]">
                  Brand Guidelines
                </h2>
                <p className="text-[#303030] text-[15px] leading-[25px] md:text-[20px] md:leading-[35px] font-[500]">
                  We set the standard with clear, comprehensive, and expert
                  brand guidelines that ensure consistency and effectiveness in
                  every communication, solidifying your brand's identity across
                  all platforms and interactions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Cta heading={`Let's Build a Brand that Stands Out!`} rtc={"rtwcolor"} />
      <Industory />
      <section ref={workRef} className="work-sec  relative px-8 md:px-24 pb-28 bg-[#030728] md:bg-transparent ">
      <div className="shapework hidden md:block w-shape sticky left-0 right-0 top-0 w-fit m-auto px-8">
          <Image
            src={"/img/work-shape.png"}
            width={1800}
            height={1180}
            alt="visual"
          />
          <div className="text-right absolute top-24  right-60     w-full">
            <h1 className="text-[18.75vw] leading-[18.75vw] text-white">
              Work
            </h1>
          </div>
        </div>
        <div className=" md:hidden py-12">
          <h1 className="text-[30px] leading-[30px] text-white">Work</h1>
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
                        <button className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4 transition duration-300 hover:bg-[#05C7AA] hover:text-[#fff]">
                          Strategy
                        </button>
                        <button className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4 transition duration-300 hover:bg-[#05C7AA] hover:text-[#fff]">
                          UI/UX Design
                        </button>
                        <br />
                      </div>
                      <div className="flex gap-2">
                        <button className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4 transition duration-300 hover:bg-[#05C7AA] hover:text-[#fff]">
                          brand identity
                        </button>
                        <button className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4 transition duration-300 hover:bg-[#05C7AA] hover:text-[#fff]">
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
                        <button className=" border border-[] text-white rounded-4xl px-4 md:px-8 py-2 md:py-4 transition duration-300 hover:bg-[#05C7AA] hover:text-[#fff]">
                          Strategy
                        </button>
                        <button className=" border border-[] text-white rounded-4xl px-4 md:px-8 py-2 md:py-4 transition duration-300 hover:bg-[#05C7AA] hover:text-[#fff]">
                          UI/UX Design
                        </button>
                        <br />
                      </div>
                      <div className="flex gap-2">
                        <button className=" border border-[] text-white rounded-4xl px-4 md:px-8 py-2 md:py-4 transition duration-300 hover:bg-[#05C7AA] hover:text-[#fff]">
                          brand identity
                        </button>
                        <button className=" border border-[] text-white rounded-4xl px-4 md:px-8 py-2 md:py-4 transition duration-300 hover:bg-[#05C7AA] hover:text-[#fff]">
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
                        <button className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4 transition duration-300 hover:bg-[#05C7AA] hover:text-[#fff]">
                          Strategy
                        </button>
                        <button className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4 transition duration-300 hover:bg-[#05C7AA] hover:text-[#fff]">
                          UI/UX Design
                        </button>
                        <br />
                      </div>
                      <div className="flex gap-2">
                        <button className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4 transition duration-300 hover:bg-[#05C7AA] hover:text-[#fff]">
                          brand identity
                        </button>
                        <button className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4 transition duration-300 hover:bg-[#05C7AA] hover:text-[#fff]">
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
      <Cta heading={`Let's Build a Brand that Stands Out!`} rtc={"rtwcolor"} />
      <section className="plan-sec py-12 md:py-28 bg-[#FCFFF5] px-8 ">
        <div className="container mx-auto max-w-screen-2xl space-y-18">
          <div className="plan-h text-center space-y-4">
            <h1 className="text-[30px] leading-[30px] md:text-[4.167vw] md:leading-[4.167vw] font-[500] text-[#030728]">
              Plans & Pricing
            </h1>
            <p className="text-[#303030] text-[15px] leading-[25px] md:text-[20px]  md:leading-[35px] font-[500]">
            Flexible plans with transparent pricing. No hidden fees—just powerful solutions built to your needs.<br/> Choose a plan, scale with ease, and grow with smart moves!
            </p>
          </div>
          <div className="plan-wrap space-y-24">
          <div className="tab-box up_h">
                  <div className="plan-bx md:grid md:grid-cols-3 gap-6 space-y-4 md:space-y-0">
                    <div className="plan-box  relative z-[1] border md:border-0">
                      <div className="hidden md:block  absolute z-[-1] left-0 right-0 bottom-0 top-0 m-auto w-fit">
                        <svg
                          className="packwh"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 460 838"
                          fill="none"
                        >
                          <mask id="path-1-inside-1_149_387" fill="white">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M453.316 153.193L313.553 7.59603C309.3 3.16483 303.223 0.633029 295.931 0H161.638H151.915H23.6988C10.9379 0 0 10.7613 0 24.6879V238V307.652V808C0 824.569 13.4315 838 30 838H430C446.569 838 460 824.569 460 808V454.514V318.413V308.285V238V170.918C460 163.954 457.569 157.624 453.316 153.193Z"
                            />
                          </mask>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M453.316 153.193L313.553 7.59603C309.3 3.16483 303.223 0.633029 295.931 0H161.638H151.915H23.6988C10.9379 0 0 10.7613 0 24.6879V238V307.652V808C0 824.569 13.4315 838 30 838H430C446.569 838 460 824.569 460 808V454.514V318.413V308.285V238V170.918C460 163.954 457.569 157.624 453.316 153.193Z"
                            fill="white"
                          />
                          <path
                            d="M313.553 7.59603L312.832 8.28854L313.553 7.59603ZM453.316 153.193L452.594 153.885L453.316 153.193ZM295.931 0V-1H295.975L296.018 -0.996253L295.931 0ZM314.275 6.90353L454.037 152.5L452.594 153.885L312.832 8.28854L314.275 6.90353ZM296.018 -0.996253C303.488 -0.347773 309.814 2.25642 314.275 6.90353L312.832 8.28854C308.786 4.07324 302.959 1.61383 295.845 0.996253L296.018 -0.996253ZM161.638 -1H295.931V1H161.638V-1ZM151.915 -1H161.638V1H151.915V-1ZM23.6988 -1H151.915V1H23.6988V-1ZM-1 24.6879C-1 10.2309 10.3639 -1 23.6988 -1V1C11.5119 1 1 11.2916 1 24.6879H-1ZM-1 238V24.6879H1V238H-1ZM1 238V307.652H-1V238H1ZM1 307.652V808H-1V307.652H1ZM1 808C1 824.017 13.9837 837 30 837V839C12.8792 839 -1 825.121 -1 808H1ZM30 837H430V839H30V837ZM430 837C446.016 837 459 824.017 459 808H461C461 825.121 447.121 839 430 839V837ZM459 808V454.514H461V808H459ZM459 454.514V318.413H461V454.514H459ZM459 318.413V308.285H461V318.413H459ZM459 308.285V238H461V308.285H459ZM461 170.918V238H459V170.918H461ZM454.037 152.5C458.489 157.138 461 163.726 461 170.918H459C459 164.183 456.649 158.11 452.594 153.885L454.037 152.5Z"
                            fill="black"
                            mask="url(#path-1-inside-1_149_387)"
                          />
                        </svg>
                      </div>
                      <div className="px-8  md:px-12 py-12  md:py-24 space-y-4 md:space-y-10">
                        <div>
                          <h2 className="text-[#05C7AA] text-[30px] leading-[30px]  md:text-[1.406vw] md:leading-[1.406vw] font-semibold">
                            Starter Plan
                          </h2>
                        </div>
                        <div className="space-y-5">
                          <div className="flex items-end">
                            <h2 className="text-[30px] leading-[30px] md:text-[4.167vw] md:leading-[4.167vw] text-[#030728]  font-semibold">
                              $199
                            </h2>
                            <h3 className="text-[17px] leading-[17px] md:text-[1.406vw] text-[#656565] font-semibold line-through">
                              $349
                            </h3>
                          </div>
                          <p className="text-[#303030] text-[15px] leading-[25px] md:text-[20px] font-[500]">
                            Basic branding solution for businesses to
                            <br /> kickstart their branding.
                          </p>
                        </div>
                        <div>
                          <Link
                            className="bg-[#FB0] py-4 inline-block w-full rounded text-center text-[18px] transition duration-300 hover:bg-[#030728] hover:text-[#fff]"
                            href={"/order"}
                          >
                            Get Started!
                          </Link>
                        </div>
                        <div data-lenis-prevent className="lsitdiv">
                          <ul className="plan-list">
                            <li>
                              <span>
                                <IoCheckmarkSharp />
                              </span>
                              <p>2 Logo concepts</p>
                            </li>
                            <li>
                              <span>
                                <IoCheckmarkSharp />
                              </span>
                              <p>3 Revisions</p>
                            </li>
                            <li>
                              <span>
                                <IoCheckmarkSharp />
                              </span>
                              <p>100% Ownership Rights</p>
                            </li>
                            <li>
                              <span>
                                <IoCheckmarkSharp />
                              </span>
                              <p>Initial Concepts within 24-48 hours</p>
                            </li>
                            <li>
                              <span>
                                <IoCheckmarkSharp />
                              </span>
                              <p>Dedicated Account Executive</p>
                            </li>
                            <li>
                              <span>
                                <IoCheckmarkSharp />
                              </span>
                              <p>
                                Final logo delivered in high-res formats (JPG,
                                PNG, and vector files like AI or EPS)
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="plan-box  relative z-[1] bg-[#030728] md:bg-transparent">
                      <div className="hidden md:block absolute z-[-1] left-0 right-0 m-auto w-fit">
                        <svg
                          className="packwh"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 460 838"
                          fill="none"
                        >
                          <mask id="path-1-inside-1_149_387" fill="white">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M453.316 153.193L313.553 7.59603C309.3 3.16483 303.223 0.633029 295.931 0H161.638H151.915H23.6988C10.9379 0 0 10.7613 0 24.6879V238V307.652V808C0 824.569 13.4315 838 30 838H430C446.569 838 460 824.569 460 808V454.514V318.413V308.285V238V170.918C460 163.954 457.569 157.624 453.316 153.193Z"
                            />
                          </mask>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M453.316 153.193L313.553 7.59603C309.3 3.16483 303.223 0.633029 295.931 0H161.638H151.915H23.6988C10.9379 0 0 10.7613 0 24.6879V238V307.652V808C0 824.569 13.4315 838 30 838H430C446.569 838 460 824.569 460 808V454.514V318.413V308.285V238V170.918C460 163.954 457.569 157.624 453.316 153.193Z"
                            fill="#030728"
                          />
                          <path
                            d="M313.553 7.59603L312.832 8.28854L313.553 7.59603ZM453.316 153.193L452.594 153.885L453.316 153.193ZM295.931 0V-1H295.975L296.018 -0.996253L295.931 0ZM314.275 6.90353L454.037 152.5L452.594 153.885L312.832 8.28854L314.275 6.90353ZM296.018 -0.996253C303.488 -0.347773 309.814 2.25642 314.275 6.90353L312.832 8.28854C308.786 4.07324 302.959 1.61383 295.845 0.996253L296.018 -0.996253ZM161.638 -1H295.931V1H161.638V-1ZM151.915 -1H161.638V1H151.915V-1ZM23.6988 -1H151.915V1H23.6988V-1ZM-1 24.6879C-1 10.2309 10.3639 -1 23.6988 -1V1C11.5119 1 1 11.2916 1 24.6879H-1ZM-1 238V24.6879H1V238H-1ZM1 238V307.652H-1V238H1ZM1 307.652V808H-1V307.652H1ZM1 808C1 824.017 13.9837 837 30 837V839C12.8792 839 -1 825.121 -1 808H1ZM30 837H430V839H30V837ZM430 837C446.016 837 459 824.017 459 808H461C461 825.121 447.121 839 430 839V837ZM459 808V454.514H461V808H459ZM459 454.514V318.413H461V454.514H459ZM459 318.413V308.285H461V318.413H459ZM459 308.285V238H461V308.285H459ZM461 170.918V238H459V170.918H461ZM454.037 152.5C458.489 157.138 461 163.726 461 170.918H459C459 164.183 456.649 158.11 452.594 153.885L454.037 152.5Z"
                            fill="black"
                            mask="url(#path-1-inside-1_149_387)"
                          />
                        </svg>
                      </div>
                      <div className="px-8  md:px-12 py-14  md:py-24 space-y-4 md:space-y-10">
                        <div className="flex items-end gap-4">
                          <h2 className="text-[#05C7AA] text-[30px] leading-[30px]  md:text-[1.406vw] md:leading-[1.406vw]  font-semibold">
                            Business Plan
                          </h2>
                          <span className="bg-[#FCFFF5] px-4 py-1 rounded-4xl">
                            Popular
                          </span>
                        </div>
                        <div className="space-y-5">
                          <div className="flex items-end">
                            <h2 className="text-[30px] leading-[30px] md:text-[4.167vw] md:leading-[4.167vw] text-white font-semibold">
                              $349
                            </h2>
                            <h3 className="text-[17px] leading-[17px] md:text-[1.406vw] md:leading-[1.406vw] text-white font-semibold line-through">
                              $999
                            </h3>
                          </div>
                          <p className="text-white text-[15px] leading-[25px] md:text-[20px] font-[500]">
                            Basic branding solution for businesses to
                            <br /> kickstart their branding.
                          </p>
                        </div>
                        <div>
                          <Link
                            className="bg-[#05C7AA] py-4 inline-block w-full rounded text-center text-[18px] transition duration-300 hover:bg-[#FB0] hover:text-[#fff]"
                            href={"/order"}
                          >
                            Get Started!
                          </Link>
                        </div>
                        <div className="lsitdiv" data-lenis-prevent>
                          <ul className="plan-list pwhite">
                            <li>
                              <span>
                                <IoCheckmarkSharp />
                              </span>
                              <p>5 Logo concepts</p>
                            </li>
                            <li>
                              <span>
                                <IoCheckmarkSharp />
                              </span>
                              <p>Unlimited Revisions</p>
                            </li>
                            <li>
                              <span>
                                <IoCheckmarkSharp />
                              </span>
                              <p>100% Ownership Rights</p>
                            </li>
                            <li>
                              <span>
                                <IoCheckmarkSharp />
                              </span>
                              <p>Initial Concepts within 24-48 hours</p>
                            </li>
                            <li>
                              <span>
                                <IoCheckmarkSharp />
                              </span>
                              <p>Dedicated Account Manager</p>
                            </li>
                            <li>
                              <span>
                                <IoCheckmarkSharp />
                              </span>
                              <p>Multiple File Formats</p>
                            </li>
                            <li>
                              <span>
                                <IoCheckmarkSharp />
                              </span>
                              <p>
                                Stationery Designs: (BUSINESS CARD,
                                LETTERHEAD,ENVELOPE)
                              </p>
                            </li>
                            <li>
                              <span>
                                <IoCheckmarkSharp />
                              </span>
                              <p>
                                Social media profile images and cover images
                              </p>
                            </li>
                            <li>
                              <span>
                                <IoCheckmarkSharp />
                              </span>
                              <p>Email signature design</p>
                            </li>
                            <li>
                              <span>
                                <IoCheckmarkSharp />
                              </span>
                              <p>Dedicated Designer Support</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="plan-box  relative z-[1] border md:border-0">
                      <div className="hidden md:block  absolute z-[-1] left-0 right-0 bottom-0 top-0 m-auto w-fit">
                        <svg
                          className="packwh"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 460 838"
                          fill="none"
                        >
                          <mask id="path-1-inside-1_149_387" fill="white">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M453.316 153.193L313.553 7.59603C309.3 3.16483 303.223 0.633029 295.931 0H161.638H151.915H23.6988C10.9379 0 0 10.7613 0 24.6879V238V307.652V808C0 824.569 13.4315 838 30 838H430C446.569 838 460 824.569 460 808V454.514V318.413V308.285V238V170.918C460 163.954 457.569 157.624 453.316 153.193Z"
                            />
                          </mask>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M453.316 153.193L313.553 7.59603C309.3 3.16483 303.223 0.633029 295.931 0H161.638H151.915H23.6988C10.9379 0 0 10.7613 0 24.6879V238V307.652V808C0 824.569 13.4315 838 30 838H430C446.569 838 460 824.569 460 808V454.514V318.413V308.285V238V170.918C460 163.954 457.569 157.624 453.316 153.193Z"
                            fill="white"
                          />
                          <path
                            d="M313.553 7.59603L312.832 8.28854L313.553 7.59603ZM453.316 153.193L452.594 153.885L453.316 153.193ZM295.931 0V-1H295.975L296.018 -0.996253L295.931 0ZM314.275 6.90353L454.037 152.5L452.594 153.885L312.832 8.28854L314.275 6.90353ZM296.018 -0.996253C303.488 -0.347773 309.814 2.25642 314.275 6.90353L312.832 8.28854C308.786 4.07324 302.959 1.61383 295.845 0.996253L296.018 -0.996253ZM161.638 -1H295.931V1H161.638V-1ZM151.915 -1H161.638V1H151.915V-1ZM23.6988 -1H151.915V1H23.6988V-1ZM-1 24.6879C-1 10.2309 10.3639 -1 23.6988 -1V1C11.5119 1 1 11.2916 1 24.6879H-1ZM-1 238V24.6879H1V238H-1ZM1 238V307.652H-1V238H1ZM1 307.652V808H-1V307.652H1ZM1 808C1 824.017 13.9837 837 30 837V839C12.8792 839 -1 825.121 -1 808H1ZM30 837H430V839H30V837ZM430 837C446.016 837 459 824.017 459 808H461C461 825.121 447.121 839 430 839V837ZM459 808V454.514H461V808H459ZM459 454.514V318.413H461V454.514H459ZM459 318.413V308.285H461V318.413H459ZM459 308.285V238H461V308.285H459ZM461 170.918V238H459V170.918H461ZM454.037 152.5C458.489 157.138 461 163.726 461 170.918H459C459 164.183 456.649 158.11 452.594 153.885L454.037 152.5Z"
                            fill="black"
                            mask="url(#path-1-inside-1_149_387)"
                          />
                        </svg>
                      </div>
                      <div className="px-8  md:px-12 py-12  md:py-24 space-y-4 md:space-y-10">
                        <div>
                          <h2 className="text-[#05C7AA] text-[30px] leading-[30px]  md:text-[1.406vw] md:leading-[1.406vw]  font-semibold">
                            Pro Plan
                          </h2>
                        </div>
                        <div className="space-y-5">
                          <div className="flex items-end">
                            <h2 className="text-[30px] leading-[30px] md:text-[4.167vw] md:leading-[4.167vw] text-[#030728]  font-semibold">
                              $999
                            </h2>
                            <h3 className="text-[17px] leading-[17px] md:text-[1.406vw] text-[#656565] font-semibold line-through">
                              $1500
                            </h3>
                          </div>
                          <p className="text-[#303030] text-[15px] leading-[25px] md:text-[20px] font-[500]">
                            Basic branding solution for businesses to
                            <br /> kickstart their branding.
                          </p>
                        </div>
                        <div>
                          <Link
                            className="bg-[#6538E6] py-4 inline-block w-full rounded text-center text-white text-[18px] transition duration-300 hover:bg-[#030728] hover:text-[#fff]"
                            href={"/order"}
                          >
                            Get Started!
                          </Link>
                        </div>
                        <div className="lsitdiv" data-lenis-prevent>
                          <ul className="plan-list">
                            <li>
                              <span>
                                <IoCheckmarkSharp />
                              </span>
                              <p>Unlimited Concepts</p>
                            </li>
                            <li>
                              <span>
                                <IoCheckmarkSharp />
                              </span>
                              <p>Unlimited Revisions</p>
                            </li>
                            <li>
                              <span>
                                <IoCheckmarkSharp />
                              </span>
                              <p>100% Ownership Rights</p>
                            </li>
                            <li>
                              <span>
                                <IoCheckmarkSharp />
                              </span>
                              <p>Initial Concepts within 24-48 hours</p>
                            </li>
                            <li>
                              <span>
                                <IoCheckmarkSharp />
                              </span>
                              <p>Dedicated Account Manager</p>
                            </li>
                            <li>
                              <span>
                                <IoCheckmarkSharp />
                              </span>
                              <p>Multiple File Formats</p>
                            </li>
                            <li>
                              <span>
                                <IoCheckmarkSharp />
                              </span>
                              <p>
                                Stationery Designs: (Business Card, Brochure,
                                Letterhead, Envelope, Invoice)
                              </p>
                            </li>
                            <li>
                              <span>
                                <IoCheckmarkSharp />
                              </span>
                              <p>
                                Social media profile images and cover images
                              </p>
                            </li>
                            <li>
                              <span>
                                <IoCheckmarkSharp />
                              </span>
                              <p>Email signature design</p>
                            </li>
                            <li>
                              <span>
                                <IoCheckmarkSharp />
                              </span>
                              <p>Dedicated Designer Support</p>
                            </li>
                            <li>
                              <span>
                                <IoCheckmarkSharp />
                              </span>
                              <p>Brand Guideline</p>
                            </li>
                            <li>
                              <span>
                                <IoCheckmarkSharp />
                              </span>
                              <p>5 Social Media Post designs</p>
                            </li>
                            <li>
                              <span>
                                <IoCheckmarkSharp />
                              </span>
                              <p>Free Icon Design</p>
                            </li>
                            <li>
                              <span>
                                <IoCheckmarkSharp />
                              </span>
                              <p>MS Word Letter Design</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
          </div>
        </div>
      </section>
      <NewLetter />
      <Testimonial rtc={"rtwcolor"} />
      <Ready />
      <Footer />
    </>
  );
}
