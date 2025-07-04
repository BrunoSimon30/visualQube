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
   const [activeTwo, setActiveTwo] = useState("web1");
  const [activeIndex, setActiveIndex] = useState(0);
  const images = ["/img/scroll/d1.png", "/img/scroll/d2.png", "/img/scroll/d3.png"]; 

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
                Digital<br/>
                Marketing
                </h1>
              </div>
              <div className="">
                <p className="text-[#303030] text-[17px]">
                Dominate The Digital World, Get Noticed, And Turn Clicks Into Customers.
                </p>
              </div>
            </div>
            <div className="hidden md:block text-right">
              <Image
                className="ml-auto"
                src={"/img/digital.png"}
                width={700}
                height={500}
                alt="visual"
              />
            </div>
          </div>
        </div>
      </section>
      <Cta heading={`Why Blend In When You Can Go Viral?`} rtc={"rtbcolor"} />
      <Counter heading={`Being A Leading Digital Marketing Services Company`} />
     
      <section className="ex-sec py-24 px-8">
        <div className="container mx-auto max-w-screen-2xl space-y-24">
          <div>
            <h1 className="text-[#030728] text-[30px] leading-[35px] md:text-[4.167vw] md:leading-[4.167vw] font-[500]  md:w-[70%]">
            Rank Higher, Get Clicks, Drive Sales—Our Go-To Services Boost Visibility and Maximize Profits!
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
                Search Engine Optimization
                </h2>
                <p className="text-[#303030] text-[15px] leading-[25px] md:text-[20px] md:leading-[35px] font-[500]">
                Rise to the top of your preferred search engine, crush the rankings, secure your space, and let customers find you before your competitors do—because page two of search results is basically a ghost town.
                </p>
              </div>
              <div
                className="border-t border-[#000] py-24 space-y-6 content-section"
                data-index="1"
              >
                <h2 className="text-[30px] leading-[30px] md:text-[2.656vw] md:leading-[2.656vw] font-[500]">
                Search Engine Marketing
                </h2>
                <p className="text-[#303030] text-[15px] leading-[25px] md:text-[20px] md:leading-[35px] font-[500]">
                Pay-per-click that’s worth every cent! Reach the right audience, drive instant traffic, and turn ad spend into real revenue—maximizing growth, visibility, and brand success!
                </p>
              </div>
              <div
                className="border-t border-[#000] py-24 space-y-6 content-section"
                data-index="2"
              >
                <h2 className="text-[30px] leading-[30px] md:text-[2.656vw] md:leading-[2.656vw] font-[500]">
                Social Media Marketing
                </h2>
                <p className="text-[#303030] text-[15px] leading-[25px] md:text-[20px] md:leading-[35px] font-[500]">
                Engagement that truly connects and keeps your audience hooked! Build a loyal community, spark conversations, and turn your brand into a household name that people trust and love.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Cta heading={`Be Seen. Be Heard. Be Unstoppable.`} rtc={"rtwcolor"} />
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
                              <button className=" border border-[] text-[#fff]  rounded-4xl px-4 md:px-8 py-2 md:py-4 transition duration-300 hover:bg-[#05C7AA] hover:text-[#fff]">
                                Strategy
                              </button>
                              <button className=" border border-[] text-[#fff]  rounded-4xl px-4 md:px-8 py-2 md:py-4 transition duration-300 hover:bg-[#05C7AA] hover:text-[#fff]">
                                UI/UX Design
                              </button>
                              <br />
                            </div>
                            <div className="flex gap-2">
                              <button className=" border border-[] text-[#fff]  rounded-4xl px-4 md:px-8 py-2 md:py-4 transition duration-300 hover:bg-[#05C7AA] hover:text-[#fff]">
                                brand identity
                              </button>
                              <button className=" border border-[] text-[#fff]  rounded-4xl px-4 md:px-8 py-2 md:py-4 transition duration-300 hover:bg-[#05C7AA] hover:text-[#fff]">
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
                           src={"/img/port/d2.png"}
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
                    <div className="work-l space-y-6 md:space-y-24">
                      <div className="wrok-bx relative">
                        <div className="work-img">
                          <Image
                           src={"/img/port/d3.png"}
                            width={655}
                            height={833}
                            alt="visual"
                          />
                        </div>
                        <div className="work-ctn space-y-6 absolute bottom-0 left-0 right-0 px-4 md:px-12 py-18">
                          <h2 className="text-[#030728] text-[30px] leading-[30px]  md:text-[2.656vw] capitalize md:leading-[2.656vw]">
                           Cowhide Outlet
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
      <Cta heading={`Be Seen. Be Heard. Be Unstoppable.`} rtc={"rtwcolor"} />
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
          <div className="space-y-12">
                  <ul className="plam-menu flex flex-wrap justify-center gap-6 space-y-2 md:space-y-0 md:items-center">
                    <li>
                      <button
                        className={`${
                          activeTwo === "web1"
                            ? "bg-[#030728] text-[#fff]"
                            : "bg-transparent text-[#030728]"
                        } border border-[#030728]   text-[18px] font-[400] rounded-4xl px-8 py-3 transition duration-300 hover:bg-[#030728] hover:text-[#fff]`}
                        onClick={() => setActiveTwo("web1")}
                      >
                        SMM
                      </button>
                    </li>
                    <li>
                      <button
                        className={`${
                          activeTwo === "web2"
                            ? "bg-[#030728] text-[#fff]"
                            : "bg-transparent text-[#030728]"
                        } border border-[#030728]   text-[18px] font-[400] rounded-4xl px-8 py-3 transition duration-300 hover:bg-[#030728] hover:text-[#fff]`}
                        onClick={() => setActiveTwo("web2")}
                      >
                        SEO
                      </button>
                    </li>
                    <li>
                      <button
                        className={`${
                          activeTwo === "web3"
                            ? "bg-[#030728] text-[#fff]"
                            : "bg-transparent text-[#030728]"
                        } border border-[#030728]   text-[18px] font-[400] rounded-4xl px-8 py-3 transition duration-300 hover:bg-[#030728] hover:text-[#fff]`}
                        onClick={() => setActiveTwo("web3")}
                      >
                        SEM
                      </button>
                    </li>
                  </ul>
                  {activeTwo === "web1" && (
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
                                Startup Plan
                              </h2>
                            </div>
                            <div className="space-y-5">
                              <div className="flex items-end">
                                <h2 className="text-[30px] leading-[30px] md:text-[4.167vw] md:leading-[4.167vw] text-[#030728]  font-semibold">
                                  $1,599
                                </h2>
                                <h3 className="text-[17px] leading-[17px] md:text-[1.406vw] text-[#656565] font-semibold line-through">
                                  $3,198
                                </h3>
                              </div>
                              <p className="text-[#303030] text-[15px] leading-[25px] md:text-[20px] font-[500]">
                                Basic smm solution for businesses to
                                <br /> kickstart their smm .
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
                            <div className="lsitdiv" data-lenis-prevent>
                              <ul className="plan-list">
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Strategy to align with business goals</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Complete Profile Setup</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>2 Social Media Platforms</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>8 Posts per month</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Advertising $100 (Included in package)</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Monthly Action Plan</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Monthly Progress Report</p>
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
                                Advance Plan
                              </h2>
                              <span className="bg-[#FCFFF5] px-4 py-1 rounded-4xl">
                                Popular
                              </span>
                            </div>
                            <div className="space-y-5">
                              <div className="flex items-end">
                                <h2 className="text-[30px] leading-[30px] md:text-[4.167vw] md:leading-[4.167vw] text-white font-semibold">
                                  $1,799
                                </h2>
                                <h3 className="text-[17px] leading-[17px] md:text-[1.406vw] md:leading-[1.406vw] text-white font-semibold line-through">
                                  $2500
                                </h3>
                              </div>
                              <p className="text-white text-[15px] leading-[25px] md:text-[20px] font-[500]">
                                Basic smm solution for businesses to
                                <br /> kickstart their smm.
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
                                  <p>Strategy to align with business goals</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Complete Profile Setup</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>3 Social Media Platforms</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>10 Posts per month</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Advertising $200 (Included in package)</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Monthly Action Plan</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Monthly Progress Report</p>
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
                                Business Plan
                              </h2>
                            </div>
                            <div className="space-y-5">
                              <div className="flex items-end">
                                <h2 className="text-[30px] leading-[30px] md:text-[4.167vw] md:leading-[4.167vw] text-[#030728]  font-semibold">
                                  $1,999
                                </h2>
                                <h3 className="text-[17px] leading-[17px] md:text-[1.406vw] text-[#656565] font-semibold line-through">
                                  $3500
                                </h3>
                              </div>
                              <p className="text-[#303030] text-[15px] leading-[25px] md:text-[20px] font-[500]">
                                Basic smm solution for businesses to
                                <br /> kickstart their smm.
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
                                  <p>Strategy to align with business goals</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Complete Profile Setup</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>5 Social Media Platforms</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>12 Posts per month</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Advertising $300 (Included in package)</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Monthly Action Plan</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Monthly Progress Report</p>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {activeTwo === "web2" && (
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
                                Startup Plan
                              </h2>
                            </div>
                            <div className="space-y-5">
                              <div className="flex items-end">
                                <h2 className="text-[30px] leading-[30px] md:text-[4.167vw] md:leading-[4.167vw] text-[#030728]  font-semibold">
                                  $799
                                </h2>
                                <h3 className="text-[17px] leading-[17px] md:text-[1.406vw] text-[#656565] font-semibold line-through">
                                  $1400
                                </h3>
                              </div>
                              <p className="text-[#303030] text-[15px] leading-[25px] md:text-[20px] font-[500]">
                                Basic seo solution for businesses to
                                <br /> kickstart their seo .
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
                            <div className="lsitdiv" data-lenis-prevent>
                              <ul className="plan-list">
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>5 Keywords</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Guaranteed Ranking on Google</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Off-site Optimization</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Link Building</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Social Bookmarking</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Basic Analytical Report</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>In-depth Site Analysis</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Content Duplicity Check</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Initial Backlinks Analysis</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Google Penalty Check</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Mobile Usability Check</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Competition Analysis</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Keyword Research</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>
                                    Informational Content Writing & Sharing (2 -
                                    Per Month)
                                  </p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Blog Writing (1 - Per Month)</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>
                                    Press Release Social Bookmarking (5 - Per
                                    Month)
                                  </p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>NAP Syndication</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Google My Business / Bing Local Listing</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Citation Building</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Classified Submissions</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Google Analytics Analysis Report</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>SEO Reports</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Search Engine Rank Report</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Dedicated Accounts Manager</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Monthly Action Plan</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Activity Report</p>
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
                                Identity Plan
                              </h2>
                              <span className="bg-[#FCFFF5] px-4 py-1 rounded-4xl">
                                Popular
                              </span>
                            </div>
                            <div className="space-y-5">
                              <div className="flex items-end">
                                <h2 className="text-[30px] leading-[30px] md:text-[4.167vw] md:leading-[4.167vw] text-white font-semibold">
                                  $1599
                                </h2>
                                <h3 className="text-[17px] leading-[17px] md:text-[1.406vw] md:leading-[1.406vw] text-white font-semibold line-through">
                                  $2500
                                </h3>
                              </div>
                              <p className="text-white text-[15px] leading-[25px] md:text-[20px] font-[500]">
                                Basic seo solution for businesses to
                                <br /> kickstart their seo.
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
                                  <p>10 Keywords</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Guaranteed Ranking on Google</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Off-site Optimization</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>On-site Optimization</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Link Building</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Social Bookmarking</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>In-depth Site Analysis</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Content Duplicacy Check</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Initial Backlinks Analysis</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Google Penalty Check</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Mobile Usability Check</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Competition Analysis</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Keyword Research</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Title & Meta Tags Optimization</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Content Optimization</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Page Speed Analysis & Optimization</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>HTML Code Cleanup & Optimization</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>
                                    Internal Link Structuring & Optimization
                                  </p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Pages H tags Optimization</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Canonicalization/301 Redirect</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Website Page Load Optimization</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Schema Markup Implementation</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Image & Hyperlink Optimization</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Robots.txt Creation/Analysis</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Blog Writing (2 - Per Month)</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>
                                    Informational Content Writing & Sharing (1
                                    Per Month)
                                  </p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Press Release Writing & Distribution</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Press Release Social Bookmarking</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Google Webmaster Tools Setup</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Google Analytics Setup & Integration</p>
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
                                Elite Plan
                              </h2>
                            </div>
                            <div className="space-y-5">
                              <div className="flex items-end">
                                <h2 className="text-[30px] leading-[30px] md:text-[4.167vw] md:leading-[4.167vw] text-[#030728]  font-semibold">
                                  $2499
                                </h2>
                                <h3 className="text-[17px] leading-[17px] md:text-[1.406vw] text-[#656565] font-semibold line-through">
                                  $3500
                                </h3>
                              </div>
                              <p className="text-[#303030] text-[15px] leading-[25px] md:text-[20px] font-[500]">
                                Basic seo solution for businesses to
                                <br /> kickstart their seo.
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
                                  <p>20 Keywords</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Guaranteed Ranking on Google</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Off-site Optimization</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>On-site Optimization</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Link Building</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Social Bookmarking</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>In-depth Site Analysis</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Content Duplicacy Check</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Initial Backlinks Analysis</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Google Penalty Check</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Mobile Usability Check</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Competition Analysis</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Keyword Research</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Page Speed Analysis & Optimization</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Title & Meta Tags Optimization</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Content Optimization</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>HTML Code Cleanup & Optimization</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>
                                    Internal Link Structuring & Optimization
                                  </p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Pages H Tags Optimization</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Canonicalization/301 Redirect</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Website Page Load Optimization</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Robots.txt Creation/Analysis</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Press Release Writing & Distribution</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Press Release Social Bookmarking</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Schema Markup Implementation</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Image & Hyperlink Optimization</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Google Webmaster Tools Setup</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Google Analytics Setup & Integration</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Blog Writing (2 - Per Month)</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>
                                    Informational Content Writing & Sharing (1
                                    Per Month)
                                  </p>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {activeTwo === "web3" && (
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
                                Basic Plan
                              </h2>
                            </div>
                            <div className="space-y-5">
                              <div className="flex items-end">
                                <h2 className="text-[30px] leading-[30px] md:text-[4.167vw] md:leading-[4.167vw] text-[#030728]  font-semibold">
                                  $1,999
                                </h2>
                                <h3 className="text-[17px] leading-[17px] md:text-[1.406vw] text-[#656565] font-semibold line-through">
                                  $2500
                                </h3>
                              </div>
                              <p className="text-[#303030] text-[15px] leading-[25px] md:text-[20px] font-[500]">
                                Basic sem solution for businesses to
                                <br /> kickstart their sem .
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
                            <div className="lsitdiv" data-lenis-prevent>
                              <ul className="plan-list">
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Recurring $400</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Monthly PPC spend Up to $2,000</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Google PPC Network: Yes</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Bing PPC Networks: No</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Google Display Network: Yes</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Strategic Bid Management: Yes</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Google Shopping Management: No</p>
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
                                Intermediate Plan
                              </h2>
                              <span className="bg-[#FCFFF5] px-4 py-1 rounded-4xl">
                                Popular
                              </span>
                            </div>
                            <div className="space-y-5">
                              <div className="flex items-end">
                                <h2 className="text-[30px] leading-[30px] md:text-[4.167vw] md:leading-[4.167vw] text-white font-semibold">
                                  $2,499
                                </h2>
                                <h3 className="text-[17px] leading-[17px] md:text-[1.406vw] md:leading-[1.406vw] text-white font-semibold line-through">
                                  $3500
                                </h3>
                              </div>
                              <p className="text-white text-[15px] leading-[25px] md:text-[20px] font-[500]">
                                Basic sem solution for businesses to
                                <br /> kickstart their sem.
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
                                  <p>Recurring $800</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Monthly PPC spend $2,001 to $5,000</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Google PPC Network: Yes</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Bing PPC Networks: Yes</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Google Display Network: Yes</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Strategic Bid Management: Yes</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Google Shopping Management: No</p>
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
                                Advance Plan
                              </h2>
                            </div>
                            <div className="space-y-5">
                              <div className="flex items-end">
                                <h2 className="text-[30px] leading-[30px] md:text-[4.167vw] md:leading-[4.167vw] text-[#030728]  font-semibold">
                                  $3,799
                                </h2>
                                <h3 className="text-[17px] leading-[17px] md:text-[1.406vw] text-[#656565] font-semibold line-through">
                                  $4500
                                </h3>
                              </div>
                              <p className="text-[#303030] text-[15px] leading-[25px] md:text-[20px] font-[500]">
                                Basic sem solution for businesses to
                                <br /> kickstart their sem.
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
                                  <p>Recurring $1300</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Monthly PPC spend $5,001 to $15,000</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Google PPC Network: Yes</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Bing PPC Networks: Yes</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Google Display Network: Yes</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Strategic Bid Management: Yes</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Google Shopping Management: Yes</p>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
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
