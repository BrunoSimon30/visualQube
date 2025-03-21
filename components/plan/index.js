"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { IoCheckmarkSharp } from "react-icons/io5";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import Lenis from "lenis";

export default function Plan() {
  const [activeTab, setActiveTab] = useState("tab1");
  const [activeTwo, setActiveTwo] = useState("web1");
  const planRef = useRef();
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.fromTo(
      ".tab-content",
      { opacity: 0, y: 100, duration: 0.9 },
      { opacity: 1, y: 1, duration: 0.9, ease: "power2.out" }
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
    );
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      syncTouch: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <>
      <section
        ref={planRef}
        className="plan-sec py-12 md:py-28 bg-[#FCFFF5] px-8 "
      >
        <div className="container mx-auto max-w-screen-2xl space-y-18">
          <div className="up_h plan-h text-center space-y-4">
            <h1 className="text-[30px] leading-[30px] md:text-[4.167vw] md:leading-[4.167vw] font-[500] text-[#030728]">
              Plans & Pricing
            </h1>
            <p className="text-[#303030] text-[15px] leading-[25px] md:text-[20px]  md:leading-[35px] font-[500]">
              Flexible plans with transparent pricing. No hidden fees—just
              powerful solutions built to your needs.
              <br /> Choose a plan, scale with ease, and grow with smart moves!
            </p>
          </div>
          <div className="plan-wrap space-y-12">
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
                    Website Design & Development
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
                            href={"/contact"}
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
                            href={"/contact"}
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
                            href={"/contact"}
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
              )}
              {activeTab === "tab2" && (
                <div className="space-y-12">
                  <ul className="plam-menu flex   justify-center gap-6 space-y-2 md:space-y-0 md:items-center">
                    <li>
                      <button
                        className={`${
                          activeTwo === "web1"
                            ? "bg-[#030728] text-[#fff]"
                            : "bg-transparent text-[#030728]"
                        } border border-[#030728] text-[13px]  md:text-[18px] font-[400] rounded-4xl px-8 py-3 transition duration-300 hover:bg-[#030728] hover:text-[#fff]`}
                        onClick={() => setActiveTwo("web1")}
                      >
                        Website Design
                      </button>
                    </li>
                    <li>
                      <button
                        className={`${
                          activeTwo === "web2"
                            ? "bg-[#030728] text-[#fff]"
                            : "bg-transparent text-[#030728]"
                        } border border-[#030728]   text-[13px]  md:text-[18px] font-[400] rounded-4xl px-8 py-3 transition duration-300 hover:bg-[#030728] hover:text-[#fff]`}
                        onClick={() => setActiveTwo("web2")}
                      >
                        Ecommerce
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
                                  $1599
                                </h2>
                                <h3 className="text-[17px] leading-[17px] md:text-[1.406vw] text-[#656565] font-semibold line-through">
                                  $3,198
                                </h3>
                              </div>
                              <p className="text-[#303030] text-[15px] leading-[25px] md:text-[20px] font-[500]">
                                Basic Website solution for businesses to
                                <br /> kickstart their Website .
                              </p>
                            </div>
                            <div>
                              <Link
                                className="bg-[#FB0] py-4 inline-block w-full rounded text-center text-[18px] transition duration-300 hover:bg-[#030728] hover:text-[#fff]"
                                href={"/contact"}
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
                                  <p>10 Unique Pages Website Design</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>
                                    Custom, Interactive, Dynamic & High End
                                    Design
                                  </p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>
                                    Customize WordPress (or) PHP Development
                                  </p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Interactive Sliding Banners</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>10 Stock Images</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>10 Banner Designs</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Special Hoover Effects</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>8 Revisions</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>
                                    Content Management System (WordPress or
                                    Custom)
                                  </p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Mobile Responsive</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>10 Professional Email ID's</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Google Friendly Sitemap</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Search Engine Submission</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Complete W3C Certified HTML</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>
                                    Industry specified Team of Award Winning
                                    Designers and Developers
                                  </p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Complete Deployment</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Value Added Services</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Dedicated Project Manager</p>
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
                                  <p>100% Satisfaction Guarantee</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>100% Money Back Guarantee</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>*NO MONTHLY OR ANY HIDDEN FEE*</p>
                                </li>
                              </ul>
                              <h3 className="pb-4 text-[25px] font-semibold text-center">
                                You'll Get
                              </h3>
                              <ul className="plan-list">
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>
                                    90 Days Free Maintenance (Post-launch
                                    support)
                                  </p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>How-to-use Training Manual for CMS</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>
                                    Industry Specified Team of Expert Designers
                                    and Developers
                                  </p>
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
                                  <p>24/7 Customer Support</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>8 Revisions</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>100% Satisfaction Guarantee</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>100% Unique Design Guarantee</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Money Back Guarantee</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>100% Ownership Rights</p>
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
                                Corporate Plan
                              </h2>
                              <span className="bg-[#FCFFF5] px-4 py-1 rounded-4xl">
                                Popular
                              </span>
                            </div>
                            <div className="space-y-5">
                              <div className="flex items-end">
                                <h2 className="text-[30px] leading-[30px] md:text-[4.167vw] md:leading-[4.167vw] text-white font-semibold">
                                  $2599
                                </h2>
                                <h3 className="text-[17px] leading-[17px] md:text-[1.406vw] md:leading-[1.406vw] text-white font-semibold line-through">
                                  $5,198
                                </h3>
                              </div>
                              <p className="text-white text-[15px] leading-[25px] md:text-[20px] font-[500]">
                                Basic Website solution for businesses to
                                <br /> kickstart their Website.
                              </p>
                            </div>
                            <div>
                              <Link
                                className="bg-[#05C7AA] py-4 inline-block w-full rounded text-center text-[18px] transition duration-300 hover:bg-[#FB0] hover:text-[#fff]"
                                href={"/contact"}
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
                                  <p>25 Pages Website Design</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>
                                    Custom Made, Interactive, Dynamic & High End
                                    Design
                                  </p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Customized WordPress & PHP Development</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Interactive Sliding Banners</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Up to 15 Custom Made Banner Designs</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>15 Stock Images</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>8 Revisions</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Special Hoover Effects</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Content Management System</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Custom Dynamic Forms (Optional)</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>
                                    Signup Area (For Newsletters, Offers etc.)
                                  </p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Search Bar</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>
                                    Live Feeds of Social Networks integration
                                    (Optional)
                                  </p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Mobile Responsive</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Up to 15 Professional Email ID's</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Google Friendly Sitemap</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Search Engine Submission</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Complete W3C Certified HTML</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>
                                    Industry specified Team of Award Winning
                                    Designers and Developers
                                  </p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Complete Deployment</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Value Added Services</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Dedicated Project Manager</p>
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
                                  <p>100% Satisfaction Guarantee</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>100% Money Back Guarantee</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>*NO MONTHLY OR ANY HIDDEN FEE*</p>
                                </li>
                              </ul>
                              <h3 className="pb-4 text-[25px] text-white font-semibold text-center">
                                You'll Get
                              </h3>
                              <ul className="plan-list pwhite">
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>
                                    90 Days Free Maintenance (Post-launch
                                    support)
                                  </p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>How-to-use Training Manual for CMS</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>
                                    Industry Specified Team of Expert Designers
                                    and Developers
                                  </p>
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
                                  <p>24/7 Customer Support</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>8 Revisions</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>100% Satisfaction Guarantee</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>100% Unique Design Guarantee</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Money Back Guarantee</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>100% Ownership Rights</p>
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
                                Enterprise Plan
                              </h2>
                            </div>
                            <div className="space-y-5">
                              <div className="flex items-end">
                                <h2 className="text-[30px] leading-[30px] md:text-[4.167vw] md:leading-[4.167vw] text-[#030728]  font-semibold">
                                  $4,599
                                </h2>
                                <h3 className="text-[17px] leading-[17px] md:text-[1.406vw] text-[#656565] font-semibold line-through">
                                  $9,198
                                </h3>
                              </div>
                              <p className="text-[#303030] text-[15px] leading-[25px] md:text-[20px] font-[500]">
                                Basic Website solution for businesses to
                                <br /> kickstart their Website.
                              </p>
                            </div>
                            <div>
                              <Link
                                className="bg-[#6538E6] py-4 inline-block w-full rounded text-center text-white text-[18px] transition duration-300 hover:bg-[#030728] hover:text-[#fff]"
                                href={"/contact"}
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
                                  <p>Custom designed Homepage (6x concepts)</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>20 Custom designed Inner pages</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>
                                    Custom Made, Interactive, Dynamic & User
                                    Friendly Design
                                  </p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Custom Wordpress/PHP Development</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Customized CMS Integration</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>
                                    Cross platform (Desktop, iPhone, Android,
                                    etc) responsive compatibility
                                  </p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Striking Hover Effects</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Interactive jQuery Slider Banner</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>15 Premium Stock Photos</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>10 Custom Banner Designs</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>2 Landing Page Designs</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Custom Dynamic Forms</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>
                                    Online Reservation/ Appointment/ Scheduling
                                    Tool
                                  </p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Online Payment Integration</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>
                                    Live Chat/Bot Chat Integration (Optional)
                                  </p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Multi Lingual</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>3rd Party API Integrations</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>
                                    Signup Area (For Newsletters, Offers etc.)
                                  </p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>
                                    Downloadable items (eBooks, PDFs, Podcast,
                                    Videos)
                                  </p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>
                                    Social Media Integration (Facebook, Twitter,
                                    LinkedIn)
                                  </p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>
                                    Social Media Live Feeds Widget (Facebook,
                                    Instagram, Pinterest)
                                  </p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>
                                    SEO friendly coding (Meta-tags, Meta Titles,
                                    Meta Description, Keywords, etc)
                                  </p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>On-page SEO configuration</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>
                                    Search Engine Indexing (Google, Yahoo, and
                                    Bing)
                                  </p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Mailing List Plugin (Optional)</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>2 Years Domain Registration (Optional)</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>10 Business Email Address</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Fast Load Time</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Security plugins</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Google Analytic Installation</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Google Webmaster Tool</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Google Friendly Sitemap</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>W3C Certified HTML</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Cross Browser Compatible</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Complete Deployment</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>48-72 Hours Turnaround Time</p>
                                </li>
                              </ul>
                              <h3 className="pb-4 text-[25px] font-semibold text-center">
                                You'll Get
                              </h3>
                              <ul className="plan-list">
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>
                                    90 Days Free Maintenance (Post-launch
                                    support)
                                  </p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>How-to-use Training Manual for CMS</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>
                                    Industry Specified Team of Expert Designers
                                    and Developers
                                  </p>
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
                                  <p>24/7 Customer Support</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>8 Revisions</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>100% Satisfaction Guarantee</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>100% Unique Design Guarantee</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Money Back Guarantee</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>100% Ownership Rights</p>
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
                                Beginners Ecommerce
                              </h2>
                            </div>
                            <div className="space-y-5">
                              <div className="flex items-end">
                                <h2 className="text-[30px] leading-[30px] md:text-[4.167vw] md:leading-[4.167vw] text-[#030728]  font-semibold">
                                  $3099
                                </h2>
                                <h3 className="text-[17px] leading-[17px] md:text-[1.406vw] text-[#656565] font-semibold line-through">
                                  $6,198
                                </h3>
                              </div>
                              <p className="text-[#303030] text-[15px] leading-[25px] md:text-[20px] font-[500]">
                                Basic Ecommerce solution for businesses to
                                <br /> kickstart their Ecommerce.
                              </p>
                            </div>
                            <div>
                              <Link
                                className="bg-[#FB0] py-4 inline-block w-full rounded text-center text-[18px] transition duration-300 hover:bg-[#030728] hover:text-[#fff]"
                                href={"/contact"}
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
                                  <p>Upto 15 Unique Pages Website</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Conceptual and Dynamic Website</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Content Management System (CMS)</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Mobile Responsive</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Easy Product Search</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Product Reviews</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Up To 100 Products</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>50 Categories</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Shopping Cart Integration</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Payment Integration</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Sales & Inventory Management</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Jquery Slider</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Free Google Friendly Sitemap</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Custom Email Addresses</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Complete W3C Certified HTML</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Social Media Designs</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Complete Deployment</p>
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
                                  <p>100% Ownership Rights</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>100% Satisfaction Guarantee</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>100% Unique Design Guarantee</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>100% Money Back Guarantee</p>
                                </li>
                              </ul>
                              <h3 className="pb-4 text-[25px] font-semibold text-center">
                                You'll Get
                              </h3>
                              <ul className="plan-list">
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>5 Business Email Address</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>
                                    180 Days Free Maintenance (Post-launch
                                    support)
                                  </p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>How-to-use Training Manual for CMS</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>
                                    Industry Specified Team of Expert Designers
                                    and Developers
                                  </p>
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
                                  <p>24/7 Customer Support</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>8 Revisions</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>100% Satisfaction Guarantee</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>100% Unique Design Guarantee</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Money Back Guarantee *</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>100% Ownership Rights</p>
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
                            <div className="flex items-end gap-2">
                              <h2 className="text-[#05C7AA] text-[30px] leading-[30px]  md:text-[1.406vw] md:leading-[1.406vw]  font-semibold">
                                Corporate Ecommerce
                              </h2>
                              <span className="bg-[#FCFFF5] text-[14px] px-4 py-1 rounded-4xl">
                                Popular
                              </span>
                            </div>
                            <div className="space-y-5">
                              <div className="flex items-end">
                                <h2 className="text-[30px] leading-[30px] md:text-[4.167vw] md:leading-[4.167vw] text-white font-semibold">
                                  $5099
                                </h2>
                                <h3 className="text-[17px] leading-[17px] md:text-[1.406vw] md:leading-[1.406vw] text-white font-semibold line-through">
                                  $10,198
                                </h3>
                              </div>
                              <p className="text-white text-[15px] leading-[25px] md:text-[20px] font-[500]">
                                Basic Ecommerce solution for businesses to
                                <br /> kickstart their Ecommerce.
                              </p>
                            </div>
                            <div>
                              <Link
                                className="bg-[#05C7AA] py-4 inline-block w-full rounded text-center text-[18px] transition duration-300 hover:bg-[#FB0] hover:text-[#fff]"
                                href={"/contact"}
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
                                  <p>100 Unique Pages Website</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Conceptual and Dynamic Website</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Content Management System (CMS)</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Mobile Responsive</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Easy Product Search</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Product Reviews</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>500 Products</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>50 Categories</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Full Shopping Cart Integration</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Payment Module Integration</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Sales & Inventory Management</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Jquery Slider</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Free Google Friendly Sitemap</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Custom Email Addresses</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Complete W3C Certified HTML</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Facebook Page Design</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Twitter Page Design</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>YouTube Page Design</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Instagram Page Design</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Complete Deployment</p>
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
                                  <p>100% Ownership Rights</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>100% Satisfaction Guarantee</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>100% Unique Design Guarantee</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>100% Money Back Guarantee</p>
                                </li>
                              </ul>
                              <h3 className="pb-4 text-[25px] font-semibold text-center">
                                You'll Get
                              </h3>
                              <ul className="plan-list pwhite">
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>5 Business Email Address</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>
                                    180 Days Free Maintenance (Post-launch
                                    support)
                                  </p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>How-to-use Training Manual for CMS</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>
                                    Industry Specified Team of Expert Designers
                                    and Developers
                                  </p>
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
                                  <p>24/7 Customer Support</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>8 Revisions</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>100% Satisfaction Guarantee</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>100% Unique Design Guarantee</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Money Back Guarantee *</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>100% Ownership Rights</p>
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
                                Elite Ecommerce
                              </h2>
                            </div>
                            <div className="space-y-5">
                              <div className="flex items-end">
                                <h2 className="text-[30px] leading-[30px] md:text-[4.167vw] md:leading-[4.167vw] text-[#030728]  font-semibold">
                                  $7099
                                </h2>
                                <h3 className="text-[17px] leading-[17px] md:text-[1.406vw] text-[#656565] font-semibold line-through">
                                  $14,198
                                </h3>
                              </div>
                              <p className="text-[#303030] text-[15px] leading-[25px] md:text-[20px] font-[500]">
                                Basic Ecommerce solution for businesses to
                                <br /> kickstart their Ecommerce.
                              </p>
                            </div>
                            <div>
                              <Link
                                className="bg-[#6538E6] py-4 inline-block w-full rounded text-center text-white text-[18px] transition duration-300 hover:bg-[#030728] hover:text-[#fff]"
                                href={"/contact"}
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
                                  <p>30 Logo Design Concepts</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>By 6 Award Winning Designers</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Icon Design</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>8 Revisions</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Print Media</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>
                                    Stationary Design (Business Card, Letterhead
                                    & Envelope)
                                  </p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Invoice Design, Email Signature</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>
                                    Bi-Fold Brochure (OR) 2 Sided Flyer Design
                                  </p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Product Catalog Design</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Signage Design (OR) Label Design</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>T-Shirt Design (OR) Car Wrap Design</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Website</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>E-Commerce Store Design</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Product Detail Page Design</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Unique Banner Slider</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Featured Products Showcase</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Full Shopping Cart Integration</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>500 Products</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>50 Categories</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Product Rating & Reviews</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Easy Product Search</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Payment Gateway Integration</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Multi-currency Support</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Content Management System</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Customer Log-in Area</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Mobile Responsive</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Social Media Plugins Integration</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Tell a Friend Feature</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Social Media Pages</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>
                                    Facebook, Twitter, YouTube, Google+ &
                                    Pinterest Page Designs
                                  </p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Value Added Services</p>
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
                                  <p>8 Revisions</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>All Final File Formats</p>
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
                                  <p>100% Satisfaction Guarantee</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>100% Unique Design Guarantee</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>100% Money Back Guarantee *</p>
                                </li>
                              </ul>
                              <h3 className="pb-4 text-[25px] font-semibold text-center">
                                You'll Get
                              </h3>
                              <ul className="plan-list">
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>5 Business Email Address</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>
                                    180 Days Free Maintenance (Post-launch
                                    support)
                                  </p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>How-to-use Training Manual for CMS</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>
                                    Industry Specified Team of Expert Designers
                                    and Developers
                                  </p>
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
                                  <p>24/7 Customer Support</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>8 Revisions</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>100% Satisfaction Guarantee</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>100% Unique Design Guarantee</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>Money Back Guarantee *</p>
                                </li>
                                <li>
                                  <span>
                                    <IoCheckmarkSharp />
                                  </span>
                                  <p>100% Ownership Rights</p>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
              {activeTab === "tab3" && (
                <div className="space-y-12">
                  <ul className="plam-menu flex   justify-center gap-6 space-y-2 md:space-y-0 md:items-center">
                    <li>
                      <button
                        className={`${
                          activeTwo === "web1"
                            ? "bg-[#030728] text-[#fff]"
                            : "bg-transparent text-[#030728]"
                        } border border-[#030728]   text-[13px]  md:text-[18px] font-[400] rounded-4xl px-8 py-3 transition duration-300 hover:bg-[#030728] hover:text-[#fff]`}
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
                        } border border-[#030728]   text-[13px]  md:text-[18px] font-[400] rounded-4xl px-8 py-3 transition duration-300 hover:bg-[#030728] hover:text-[#fff]`}
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
                        } border border-[#030728]  text-[13px]  md:text-[18px] font-[400] rounded-4xl px-8 py-3 transition duration-300 hover:bg-[#030728] hover:text-[#fff]`}
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
                                href={"/contact"}
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
                                href={"/contact"}
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
                                href={"/contact"}
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
                                href={"/contact"}
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
                                href={"/contact"}
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
                                href={"/contact"}
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
                                href={"/contact"}
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
                                href={"/contact"}
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
                                href={"/contact"}
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
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
