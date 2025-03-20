"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { IoCheckmarkSharp } from "react-icons/io5";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

export default function Plan() {
  const [activeTab, setActiveTab] = useState("tab1");
  const planRef = useRef();
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.fromTo(
      ".tab-content",
      { opacity: 0,y: 100 ,duration: 0.9,},
      { opacity: 1,y: 1 , duration: 0.9, ease: "power2.out" }
    );

   

  }, [activeTab]);
  useGSAP(() => {
     
     const tl = gsap.timeline({
          scrollTrigger: {
            trigger: planRef.current,
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
          planRef.current?.querySelectorAll(".up_h"),
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
      <section ref={planRef} className="plan-sec py-12 md:py-28 bg-[#FCFFF5] px-8 ">
        <div className="container mx-auto max-w-screen-2xl space-y-18">
          <div className="up_h plan-h text-center space-y-4">
            <h1 className="text-[30px] leading-[30px] md:text-[4.167vw] md:leading-[4.167vw] font-[500] text-[#030728]">
              Plans & Pricing
            </h1>
            <p className="text-[#303030] text-[15px] leading-[25px] md:text-[20px]  md:leading-[35px] font-[500]">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
              <br /> Excepteur sint occaecat cupidatat non proident.
            </p>
          </div>
          <div className="plan-wrap space-y-24">
            <div className="plan-btn text-center up_h">
              <ul className="plam-menu flex flex-wrap justify-center gap-6 space-y-2 md:space-y-0 md:items-center">
                <li>
                  <button
                    className={`${
                      activeTab === "tab1"
                        ? "bg-[#030728] text-[#fff]"
                        : "bg-transparent text-[#030728]"
                    } border border-[#030728]   text-[18px] font-[400] rounded-4xl px-8 py-3 transition duration-300 hover:bg-[#030728] hover:text-[#fff]`}
                    onClick={() => setActiveTab("tab1")}
                  >
                    Branding
                  </button>
                </li>
                <li>
                  <button
                    className={`${
                      activeTab === "tab2"
                        ? "bg-[#030728] text-[#fff]"
                        : "bg-transparent text-[#030728]"
                    } border border-[#030728]   text-[18px] font-[400] rounded-4xl px-8 py-3 transition duration-300 hover:bg-[#030728] hover:text-[#fff]`}
                    onClick={() => setActiveTab("tab2")}
                  >
                                        Website Design
                  </button>
                </li>
          
                <li>
                  <button
                    className={`${
                      activeTab === "tab3"
                        ? "bg-[#030728] text-[#fff]"
                        : "bg-transparent text-[#030728]"
                    } border border-[#030728]   text-[18px] font-[400] rounded-4xl px-8 py-3 transition duration-300 hover:bg-[#030728] hover:text-[#fff]`}
                    onClick={() => setActiveTab("tab3")}
                  >
                    App Development
                  </button>
                </li>
                <li>
                  <button
                    className={`${
                      activeTab === "tab4"
                        ? "bg-[#030728] text-[#fff]"
                        : "bg-transparent text-[#030728]"
                    } border border-[#030728]   text-[18px] font-[400] rounded-4xl px-8 py-3 transition duration-300 hover:bg-[#030728] hover:text-[#fff]`}
                    onClick={() => setActiveTab("tab4")}
                  >
                    Digital Marketing
                  </button>
                </li>
              </ul>
            </div>
            <div className="tab-content ">
              {activeTab === "tab1" && (
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
                            Elite Plan
                          </h2>
                        </div>
                        <div className="space-y-5">
                          <div className="flex items-end">
                            <h2 className="text-[30px] leading-[30px] md:text-[4.167vw] md:leading-[4.167vw] text-[#030728]  font-semibold">
                              $240
                            </h2>
                            <h3 className="text-[17px] leading-[17px] md:text-[1.406vw] text-[#656565] font-semibold line-through">
                              $780
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
                            href={""}
                          >
                            Get Started!
                          </Link>
                        </div>
                        <div className="lsitdiv">
                          <ul className="plan-list">
                            <li>
                              <span>
                                <IoCheckmarkSharp />
                              </span>
                              <p>10 Custom Logo Design Concepts</p>
                            </li>
                            <li>
                              <span>
                                <IoCheckmarkSharp />
                              </span>
                              <p>6 Award Winning Designers</p>
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
                              <p>Free Icon Design</p>
                            </li>
                            <li>
                              <span>
                                <IoCheckmarkSharp />
                              </span>
                              <p>Free Custom Stationery Design </p>
                            </li>
                            <li>
                              <span>
                                <IoCheckmarkSharp />
                              </span>
                              <p>
                                Bi-Fold Brochure Flyer (OR) Tri-Fold Brochure
                              </p>
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
                              <p>Free Icon Design</p>
                            </li>
                            <li>
                              <span>
                                <IoCheckmarkSharp />
                              </span>
                              <p>Free Custom Stationery Design </p>
                            </li>
                            <li>
                              <span>
                                <IoCheckmarkSharp />
                              </span>
                              <p>
                                Bi-Fold Brochure Flyer (OR) Tri-Fold Brochure
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
                              $240
                            </h2>
                            <h3 className="text-[17px] leading-[17px] md:text-[1.406vw] md:leading-[1.406vw] text-white font-semibold line-through">
                              $780
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
                            href={""}
                          >
                            Get Started!
                          </Link>
                        </div>
                        <div className="lsitdiv">
                          <ul className="plan-list pwhite">
                            <li>
                              <span>
                                <IoCheckmarkSharp />
                              </span>
                              <p>10 Custom Logo Design Concepts</p>
                            </li>
                            <li>
                              <span>
                                <IoCheckmarkSharp />
                              </span>
                              <p>6 Award Winning Designers</p>
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
                              <p>Free Icon Design</p>
                            </li>
                            <li>
                              <span>
                                <IoCheckmarkSharp />
                              </span>
                              <p>Free Custom Stationery Design </p>
                            </li>
                            <li>
                              <span>
                                <IoCheckmarkSharp />
                              </span>
                              <p>
                                Bi-Fold Brochure Flyer (OR) Tri-Fold Brochure
                              </p>
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
                            Gold Plan
                          </h2>
                        </div>
                        <div className="space-y-5">
                          <div className="flex items-end">
                            <h2 className="text-[30px] leading-[30px] md:text-[4.167vw] md:leading-[4.167vw] text-[#030728]  font-semibold">
                              $240
                            </h2>
                            <h3 className="text-[17px] leading-[17px] md:text-[1.406vw] text-[#656565] font-semibold line-through">
                              $780
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
                            href={""}
                          >
                            Get Started!
                          </Link>
                        </div>
                        <div className="lsitdiv">
                          <ul className="plan-list">
                            <li>
                              <span>
                                <IoCheckmarkSharp />
                              </span>
                              <p>10 Custom Logo Design Concepts</p>
                            </li>
                            <li>
                              <span>
                                <IoCheckmarkSharp />
                              </span>
                              <p>6 Award Winning Designers</p>
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
                              <p>Free Icon Design</p>
                            </li>
                            <li>
                              <span>
                                <IoCheckmarkSharp />
                              </span>
                              <p>Free Custom Stationery Design </p>
                            </li>
                            <li>
                              <span>
                                <IoCheckmarkSharp />
                              </span>
                              <p>
                                Bi-Fold Brochure Flyer (OR) Tri-Fold Brochure
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === "tab2" && (
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
                            Elite Plan
                          </h2>
                        </div>
                        <div className="space-y-5">
                          <div className="flex items-end">
                            <h2 className="text-[30px] leading-[30px] md:text-[4.167vw] md:leading-[4.167vw] text-[#030728]  font-semibold">
                              $240
                            </h2>
                            <h3 className="text-[17px] leading-[17px] md:text-[1.406vw] text-[#656565] font-semibold line-through">
                              $780
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
                            href={""}
                          >
                            Get Started!
                          </Link>
                        </div>
                        <div>
                          <ul className="plan-list">
                            <li>
                              <span>
                                <IoCheckmarkSharp />
                              </span>
                              <p>10 Custom Logo Design Concepts</p>
                            </li>
                            <li>
                              <span>
                                <IoCheckmarkSharp />
                              </span>
                              <p>6 Award Winning Designers</p>
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
                              <p>Free Icon Design</p>
                            </li>
                            <li>
                              <span>
                                <IoCheckmarkSharp />
                              </span>
                              <p>Free Custom Stationery Design </p>
                            </li>
                            <li>
                              <span>
                                <IoCheckmarkSharp />
                              </span>
                              <p>
                                Bi-Fold Brochure Flyer (OR) Tri-Fold Brochure
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
                              $240
                            </h2>
                            <h3 className="text-[17px] leading-[17px] md:text-[1.406vw] md:leading-[1.406vw] text-white font-semibold line-through">
                              $780
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
                            href={""}
                          >
                            Get Started!
                          </Link>
                        </div>
                        <div>
                          <ul className="plan-list pwhite">
                            <li>
                              <span>
                                <IoCheckmarkSharp />
                              </span>
                              <p>10 Custom Logo Design Concepts</p>
                            </li>
                            <li>
                              <span>
                                <IoCheckmarkSharp />
                              </span>
                              <p>6 Award Winning Designers</p>
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
                              <p>Free Icon Design</p>
                            </li>
                            <li>
                              <span>
                                <IoCheckmarkSharp />
                              </span>
                              <p>Free Custom Stationery Design </p>
                            </li>
                            <li>
                              <span>
                                <IoCheckmarkSharp />
                              </span>
                              <p>
                                Bi-Fold Brochure Flyer (OR) Tri-Fold Brochure
                              </p>
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
                            Gold Plan
                          </h2>
                        </div>
                        <div className="space-y-5">
                          <div className="flex items-end">
                            <h2 className="text-[30px] leading-[30px] md:text-[4.167vw] md:leading-[4.167vw] text-[#030728]  font-semibold">
                              $240
                            </h2>
                            <h3 className="text-[17px] leading-[17px] md:text-[1.406vw] text-[#656565] font-semibold line-through">
                              $780
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
                            href={""}
                          >
                            Get Started!
                          </Link>
                        </div>
                        <div>
                          <ul className="plan-list">
                            <li>
                              <span>
                                <IoCheckmarkSharp />
                              </span>
                              <p>10 Custom Logo Design Concepts</p>
                            </li>
                            <li>
                              <span>
                                <IoCheckmarkSharp />
                              </span>
                              <p>6 Award Winning Designers</p>
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
                              <p>Free Icon Design</p>
                            </li>
                            <li>
                              <span>
                                <IoCheckmarkSharp />
                              </span>
                              <p>Free Custom Stationery Design </p>
                            </li>
                            <li>
                              <span>
                                <IoCheckmarkSharp />
                              </span>
                              <p>
                                Bi-Fold Brochure Flyer (OR) Tri-Fold Brochure
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === "tab3" && (
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
                            Elite Plan
                          </h2>
                        </div>
                        <div className="space-y-5">
                          <div className="flex items-end">
                            <h2 className="text-[30px] leading-[30px] md:text-[4.167vw] md:leading-[4.167vw] text-[#030728]  font-semibold">
                              $240
                            </h2>
                            <h3 className="text-[17px] leading-[17px] md:text-[1.406vw] text-[#656565] font-semibold line-through">
                              $780
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
                            href={""}
                          >
                            Get Started!
                          </Link>
                        </div>
                        <div>
                          <ul className="plan-list">
                            <li>
                              <span>
                                <IoCheckmarkSharp />
                              </span>
                              <p>10 Custom Logo Design Concepts</p>
                            </li>
                            <li>
                              <span>
                                <IoCheckmarkSharp />
                              </span>
                              <p>6 Award Winning Designers</p>
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
                              <p>Free Icon Design</p>
                            </li>
                            <li>
                              <span>
                                <IoCheckmarkSharp />
                              </span>
                              <p>Free Custom Stationery Design </p>
                            </li>
                            <li>
                              <span>
                                <IoCheckmarkSharp />
                              </span>
                              <p>
                                Bi-Fold Brochure Flyer (OR) Tri-Fold Brochure
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
                              $240
                            </h2>
                            <h3 className="text-[17px] leading-[17px] md:text-[1.406vw] md:leading-[1.406vw] text-white font-semibold line-through">
                              $780
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
                            href={""}
                          >
                            Get Started!
                          </Link>
                        </div>
                        <div>
                          <ul className="plan-list pwhite">
                            <li>
                              <span>
                                <IoCheckmarkSharp />
                              </span>
                              <p>10 Custom Logo Design Concepts</p>
                            </li>
                            <li>
                              <span>
                                <IoCheckmarkSharp />
                              </span>
                              <p>6 Award Winning Designers</p>
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
                              <p>Free Icon Design</p>
                            </li>
                            <li>
                              <span>
                                <IoCheckmarkSharp />
                              </span>
                              <p>Free Custom Stationery Design </p>
                            </li>
                            <li>
                              <span>
                                <IoCheckmarkSharp />
                              </span>
                              <p>
                                Bi-Fold Brochure Flyer (OR) Tri-Fold Brochure
                              </p>
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
                            Gold Plan
                          </h2>
                        </div>
                        <div className="space-y-5">
                          <div className="flex items-end">
                            <h2 className="text-[30px] leading-[30px] md:text-[4.167vw] md:leading-[4.167vw] text-[#030728]  font-semibold">
                              $240
                            </h2>
                            <h3 className="text-[17px] leading-[17px] md:text-[1.406vw] text-[#656565] font-semibold line-through">
                              $780
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
                            href={""}
                          >
                            Get Started!
                          </Link>
                        </div>
                        <div>
                          <ul className="plan-list">
                            <li>
                              <span>
                                <IoCheckmarkSharp />
                              </span>
                              <p>10 Custom Logo Design Concepts</p>
                            </li>
                            <li>
                              <span>
                                <IoCheckmarkSharp />
                              </span>
                              <p>6 Award Winning Designers</p>
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
                              <p>Free Icon Design</p>
                            </li>
                            <li>
                              <span>
                                <IoCheckmarkSharp />
                              </span>
                              <p>Free Custom Stationery Design </p>
                            </li>
                            <li>
                              <span>
                                <IoCheckmarkSharp />
                              </span>
                              <p>
                                Bi-Fold Brochure Flyer (OR) Tri-Fold Brochure
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === "tab4" && (
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
                            Elite Plan
                          </h2>
                        </div>
                        <div className="space-y-5">
                          <div className="flex items-end">
                            <h2 className="text-[30px] leading-[30px] md:text-[4.167vw] md:leading-[4.167vw] text-[#030728]  font-semibold">
                              $240
                            </h2>
                            <h3 className="text-[17px] leading-[17px] md:text-[1.406vw] text-[#656565] font-semibold line-through">
                              $780
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
                            href={""}
                          >
                            Get Started!
                          </Link>
                        </div>
                        <div>
                          <ul className="plan-list">
                            <li>
                              <span>
                                <IoCheckmarkSharp />
                              </span>
                              <p>10 Custom Logo Design Concepts</p>
                            </li>
                            <li>
                              <span>
                                <IoCheckmarkSharp />
                              </span>
                              <p>6 Award Winning Designers</p>
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
                              <p>Free Icon Design</p>
                            </li>
                            <li>
                              <span>
                                <IoCheckmarkSharp />
                              </span>
                              <p>Free Custom Stationery Design </p>
                            </li>
                            <li>
                              <span>
                                <IoCheckmarkSharp />
                              </span>
                              <p>
                                Bi-Fold Brochure Flyer (OR) Tri-Fold Brochure
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
                              $240
                            </h2>
                            <h3 className="text-[17px] leading-[17px] md:text-[1.406vw] md:leading-[1.406vw] text-white font-semibold line-through">
                              $780
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
                            href={""}
                          >
                            Get Started!
                          </Link>
                        </div>
                        <div>
                          <ul className="plan-list pwhite">
                            <li>
                              <span>
                                <IoCheckmarkSharp />
                              </span>
                              <p>10 Custom Logo Design Concepts</p>
                            </li>
                            <li>
                              <span>
                                <IoCheckmarkSharp />
                              </span>
                              <p>6 Award Winning Designers</p>
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
                              <p>Free Icon Design</p>
                            </li>
                            <li>
                              <span>
                                <IoCheckmarkSharp />
                              </span>
                              <p>Free Custom Stationery Design </p>
                            </li>
                            <li>
                              <span>
                                <IoCheckmarkSharp />
                              </span>
                              <p>
                                Bi-Fold Brochure Flyer (OR) Tri-Fold Brochure
                              </p>
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
                            Gold Plan
                          </h2>
                        </div>
                        <div className="space-y-5">
                          <div className="flex items-end">
                            <h2 className="text-[30px] leading-[30px] md:text-[4.167vw] md:leading-[4.167vw] text-[#030728]  font-semibold">
                              $240
                            </h2>
                            <h3 className="text-[17px] leading-[17px] md:text-[1.406vw] text-[#656565] font-semibold line-through">
                              $780
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
                            href={""}
                          >
                            Get Started!
                          </Link>
                        </div>
                        <div>
                          <ul className="plan-list">
                            <li>
                              <span>
                                <IoCheckmarkSharp />
                              </span>
                              <p>10 Custom Logo Design Concepts</p>
                            </li>
                            <li>
                              <span>
                                <IoCheckmarkSharp />
                              </span>
                              <p>6 Award Winning Designers</p>
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
                              <p>Free Icon Design</p>
                            </li>
                            <li>
                              <span>
                                <IoCheckmarkSharp />
                              </span>
                              <p>Free Custom Stationery Design </p>
                            </li>
                            <li>
                              <span>
                                <IoCheckmarkSharp />
                              </span>
                              <p>
                                Bi-Fold Brochure Flyer (OR) Tri-Fold Brochure
                              </p>
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
        </div>
      </section>
   
      );
    </>
  );
}
