import Footer from "@/components/footer";
import Header from "@/components/header";
import Ready from "@/components/ready";
import Workour from "@/components/work";
import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";

export default function index() {
  const [activetab, setActivetab] = useState("tab1");

  return (
    <>
      <Head>
        <title>High-Quality Design That Impress | Visual Qube</title>
        <meta name="google-site-verification" content="" />
      </Head>
      <Header />
      <section className="wor-sec py-32 px-8  ">
        <div className="container mx-auto max-w-screen-2xl space-y-24">
          <div className="md:flex justify-between items-center space-y-4 md:space-y-0">
            <h1 className="text-[5.729vw] text-[#030233] leading-[5.729vw]">
              Our Work
            </h1>
            <div className="workist   space-y-2">
              <div className="flex gap-2">
                <button
                  className={`${
                    activetab === "tab1"
                      ? "bg-[#030728] text-[#fff]"
                      : "bg-transparent text-[#030728]"
                  } border  rounded-4xl px-4 md:px-8 py-4  `}
                  onClick={() => setActivetab("tab1")}
                >
                  All
                </button>
                <button
                  className={`${
                    activetab === "tab2"
                      ? "bg-[#030728] text-[#fff]"
                      : "bg-transparent text-[#030728]"
                  } border  rounded-4xl px-4 md:px-8 py-4  `}
                  onClick={() => setActivetab("tab2")}
                >
                  Branding
                </button>
                <button
                  className={`${
                    activetab === "tab3"
                      ? "bg-[#030728] text-[#fff]"
                      : "bg-transparent text-[#030728]"
                  } border  rounded-4xl px-4 md:px-8 py-4  `}
                  onClick={() => setActivetab("tab3")}
                >
                  Website Design
                </button>
                <br />
              </div>
              <div className="flex gap-2">
                <button
                  className={`${
                    activetab === "tab4"
                      ? "bg-[#030728] text-[#fff]"
                      : "bg-transparent text-[#030728]"
                  } border  rounded-4xl px-4 md:px-8 py-4  `}
                  onClick={() => setActivetab("tab4")}
                >
                  App Development
                </button>
                <button
                  className={`${
                    activetab === "tab5"
                      ? "bg-[#030728] text-[#fff]"
                      : "bg-transparent text-[#030728]"
                  } border  rounded-4xl px-4 md:px-8 py-4  `}
                  onClick={() => setActivetab("tab5")}
                >
                  Digital Marketing
                </button>
                <br />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="tab-content">
      {activetab === "tab1" && (
          <section className="work-sec  relative px-8 md:px-24 pb-28 bg-[#030728] md:bg-transparent ">
          <div className="hidden md:block w-shape absolute left-0 right-0 w-fit m-auto px-8">
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
            <div className="work-con  md:pt-32 ">
              <div className="md:grid md:grid-cols-2 gap-6 items-center space-y-6  md:space-y-0">
                <div className="work-l space-y-6 md:space-y-24">
                  <div className="wrok-bx relative">
                    <div className="work-img">
                      <Image
                        src={"/img/work1.png"}
                        width={655}
                        height={833}
                        alt="visual"
                      />
                    </div>
                    <div className="work-ctn space-y-6 absolute bottom-0 left-0 right-0 px-4 md:px-12 py-18">
                      <h2 className="text-[#030728] text-[30px] leading-[30px]  md:text-[2.656vw] capitalize md:leading-[2.656vw]">
                        enim adminim
                      </h2>
                      <div className="workist   space-y-2">
                        <div className="flex gap-2">
                          <button
                            className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4"
                            
                          >
                            Strategy
                          </button>
                          <button
                            className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4"
                            
                          >
                            UI/UX Design
                          </button>
                          <br />
                        </div>
                        <div className="flex gap-2">
                          <button
                            className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4"
                            
                          >
                            brand identity
                          </button>
                          <button
                            className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4"
                            
                          >
                            Development
                          </button>
                          <br />
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div className="wrok-bx relative  ">
                    <div className="work-img">
                      <Image
                        src={"/img/work2.png"}
                        width={655}
                        height={833}
                        alt="visual"
                      />
                    </div>
                    <div className="work-ctn space-y-6 absolute bottom-0 left-0 right-0 px-4 md:px-12 py-18">
                      <h2 className="text-[#030728] text-[30px] leading-[30px]  md:text-[2.656vw] capitalize md:leading-[2.656vw]">
                        enim adminim
                      </h2>
                      <div className="workist   space-y-2">
                        <div className="flex gap-2">
                          <button
                            className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4"
                            
                          >
                            Strategy
                          </button>
                          <button
                            className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4"
                            
                          >
                            UI/UX Design
                          </button>
                          <br />
                        </div>
                        <div className="flex gap-2">
                          <button
                            className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4"
                            
                          >
                            brand identity
                          </button>
                          <button
                            className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4"
                            
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
                        src={"/img/work3.png"}
                        width={655}
                        height={833}
                        alt="visual"
                      />
                    </div>
                    <div className="work-ctn space-y-6 absolute bottom-0 left-0 right-0 px-4 md:px-12 py-18">
                      <h2 className="text-[#030728] text-[30px] leading-[30px]  md:text-[2.656vw] capitalize md:leading-[2.656vw]">
                        enim adminim
                      </h2>
                      <div className="workist   space-y-2">
                        <div className="flex gap-2">
                          <button
                            className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4"
                            
                          >
                            Strategy
                          </button>
                          <button
                            className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4"
                            
                          >
                            UI/UX Design
                          </button>
                          <br />
                        </div>
                        <div className="flex gap-2">
                          <button
                            className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4"
                            
                          >
                            brand identity
                          </button>
                          <button
                            className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4"
                            
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
      )}
      {activetab === "tab2" && (
          <section className="work-sec  relative px-8 md:px-24 pb-28 bg-[#030728] md:bg-transparent ">
          <div className="hidden md:block w-shape absolute left-0 right-0 w-fit m-auto px-8">
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
            <div className="work-con  md:pt-32 ">
              <div className="md:grid md:grid-cols-2 gap-6 items-center space-y-6  md:space-y-0">
                <div className="work-l space-y-6 md:space-y-24">
                  <div className="wrok-bx relative">
                    <div className="work-img">
                      <Image
                        src={"/img/work1.png"}
                        width={655}
                        height={833}
                        alt="visual"
                      />
                    </div>
                    <div className="work-ctn space-y-6 absolute bottom-0 left-0 right-0 px-4 md:px-12 py-18">
                      <h2 className="text-[#030728] text-[30px] leading-[30px]  md:text-[2.656vw] capitalize md:leading-[2.656vw]">
                        enim adminim
                      </h2>
                      <div className="workist   space-y-2">
                        <div className="flex gap-2">
                          <button
                            className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4"
                            
                          >
                            Strategy
                          </button>
                          <button
                            className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4"
                            
                          >
                            UI/UX Design
                          </button>
                          <br />
                        </div>
                        <div className="flex gap-2">
                          <button
                            className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4"
                            
                          >
                            brand identity
                          </button>
                          <button
                            className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4"
                            
                          >
                            Development
                          </button>
                          <br />
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div className="wrok-bx relative  ">
                    <div className="work-img">
                      <Image
                        src={"/img/work2.png"}
                        width={655}
                        height={833}
                        alt="visual"
                      />
                    </div>
                    <div className="work-ctn space-y-6 absolute bottom-0 left-0 right-0 px-4 md:px-12 py-18">
                      <h2 className="text-[#030728] text-[30px] leading-[30px]  md:text-[2.656vw] capitalize md:leading-[2.656vw]">
                        enim adminim
                      </h2>
                      <div className="workist   space-y-2">
                        <div className="flex gap-2">
                          <button
                            className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4"
                            
                          >
                            Strategy
                          </button>
                          <button
                            className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4"
                            
                          >
                            UI/UX Design
                          </button>
                          <br />
                        </div>
                        <div className="flex gap-2">
                          <button
                            className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4"
                            
                          >
                            brand identity
                          </button>
                          <button
                            className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4"
                            
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
                        src={"/img/work3.png"}
                        width={655}
                        height={833}
                        alt="visual"
                      />
                    </div>
                    <div className="work-ctn space-y-6 absolute bottom-0 left-0 right-0 px-4 md:px-12 py-18">
                      <h2 className="text-[#030728] text-[30px] leading-[30px]  md:text-[2.656vw] capitalize md:leading-[2.656vw]">
                        enim adminim
                      </h2>
                      <div className="workist   space-y-2">
                        <div className="flex gap-2">
                          <button
                            className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4"
                            
                          >
                            Strategy
                          </button>
                          <button
                            className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4"
                            
                          >
                            UI/UX Design
                          </button>
                          <br />
                        </div>
                        <div className="flex gap-2">
                          <button
                            className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4"
                            
                          >
                            brand identity
                          </button>
                          <button
                            className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4"
                            
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
      )}
      {activetab === "tab3" && (
          <section className="work-sec  relative px-8 md:px-24 pb-28 bg-[#030728] md:bg-transparent ">
          <div className="hidden md:block w-shape absolute left-0 right-0 w-fit m-auto px-8">
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
            <div className="work-con  md:pt-32 ">
              <div className="md:grid md:grid-cols-2 gap-6 items-center space-y-6  md:space-y-0">
                <div className="work-l space-y-6 md:space-y-24">
                  <div className="wrok-bx relative">
                    <div className="work-img">
                      <Image
                        src={"/img/work1.png"}
                        width={655}
                        height={833}
                        alt="visual"
                      />
                    </div>
                    <div className="work-ctn space-y-6 absolute bottom-0 left-0 right-0 px-4 md:px-12 py-18">
                      <h2 className="text-[#030728] text-[30px] leading-[30px]  md:text-[2.656vw] capitalize md:leading-[2.656vw]">
                        enim adminim
                      </h2>
                      <div className="workist   space-y-2">
                        <div className="flex gap-2">
                          <button
                            className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4"
                            
                          >
                            Strategy
                          </button>
                          <button
                            className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4"
                            
                          >
                            UI/UX Design
                          </button>
                          <br />
                        </div>
                        <div className="flex gap-2">
                          <button
                            className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4"
                            
                          >
                            brand identity
                          </button>
                          <button
                            className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4"
                            
                          >
                            Development
                          </button>
                          <br />
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div className="wrok-bx relative  ">
                    <div className="work-img">
                      <Image
                        src={"/img/work2.png"}
                        width={655}
                        height={833}
                        alt="visual"
                      />
                    </div>
                    <div className="work-ctn space-y-6 absolute bottom-0 left-0 right-0 px-4 md:px-12 py-18">
                      <h2 className="text-[#030728] text-[30px] leading-[30px]  md:text-[2.656vw] capitalize md:leading-[2.656vw]">
                        enim adminim
                      </h2>
                      <div className="workist   space-y-2">
                        <div className="flex gap-2">
                          <button
                            className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4"
                            
                          >
                            Strategy
                          </button>
                          <button
                            className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4"
                            
                          >
                            UI/UX Design
                          </button>
                          <br />
                        </div>
                        <div className="flex gap-2">
                          <button
                            className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4"
                            
                          >
                            brand identity
                          </button>
                          <button
                            className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4"
                            
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
                        src={"/img/work3.png"}
                        width={655}
                        height={833}
                        alt="visual"
                      />
                    </div>
                    <div className="work-ctn space-y-6 absolute bottom-0 left-0 right-0 px-4 md:px-12 py-18">
                      <h2 className="text-[#030728] text-[30px] leading-[30px]  md:text-[2.656vw] capitalize md:leading-[2.656vw]">
                        enim adminim
                      </h2>
                      <div className="workist   space-y-2">
                        <div className="flex gap-2">
                          <button
                            className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4"
                            
                          >
                            Strategy
                          </button>
                          <button
                            className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4"
                            
                          >
                            UI/UX Design
                          </button>
                          <br />
                        </div>
                        <div className="flex gap-2">
                          <button
                            className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4"
                            
                          >
                            brand identity
                          </button>
                          <button
                            className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4"
                            
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
      )}
      {activetab === "tab4" && (
          <section className="work-sec  relative px-8 md:px-24 pb-28 bg-[#030728] md:bg-transparent ">
          <div className="hidden md:block w-shape absolute left-0 right-0 w-fit m-auto px-8">
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
            <div className="work-con  md:pt-32 ">
              <div className="md:grid md:grid-cols-2 gap-6 items-center space-y-6  md:space-y-0">
                <div className="work-l space-y-6 md:space-y-24">
                  <div className="wrok-bx relative">
                    <div className="work-img">
                      <Image
                        src={"/img/work1.png"}
                        width={655}
                        height={833}
                        alt="visual"
                      />
                    </div>
                    <div className="work-ctn space-y-6 absolute bottom-0 left-0 right-0 px-4 md:px-12 py-18">
                      <h2 className="text-[#030728] text-[30px] leading-[30px]  md:text-[2.656vw] capitalize md:leading-[2.656vw]">
                        enim adminim
                      </h2>
                      <div className="workist   space-y-2">
                        <div className="flex gap-2">
                          <button
                            className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4"
                            
                          >
                            Strategy
                          </button>
                          <button
                            className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4"
                            
                          >
                            UI/UX Design
                          </button>
                          <br />
                        </div>
                        <div className="flex gap-2">
                          <button
                            className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4"
                            
                          >
                            brand identity
                          </button>
                          <button
                            className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4"
                            
                          >
                            Development
                          </button>
                          <br />
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div className="wrok-bx relative  ">
                    <div className="work-img">
                      <Image
                        src={"/img/work2.png"}
                        width={655}
                        height={833}
                        alt="visual"
                      />
                    </div>
                    <div className="work-ctn space-y-6 absolute bottom-0 left-0 right-0 px-4 md:px-12 py-18">
                      <h2 className="text-[#030728] text-[30px] leading-[30px]  md:text-[2.656vw] capitalize md:leading-[2.656vw]">
                        enim adminim
                      </h2>
                      <div className="workist   space-y-2">
                        <div className="flex gap-2">
                          <button
                            className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4"
                            
                          >
                            Strategy
                          </button>
                          <button
                            className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4"
                            
                          >
                            UI/UX Design
                          </button>
                          <br />
                        </div>
                        <div className="flex gap-2">
                          <button
                            className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4"
                            
                          >
                            brand identity
                          </button>
                          <button
                            className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4"
                            
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
                        src={"/img/work3.png"}
                        width={655}
                        height={833}
                        alt="visual"
                      />
                    </div>
                    <div className="work-ctn space-y-6 absolute bottom-0 left-0 right-0 px-4 md:px-12 py-18">
                      <h2 className="text-[#030728] text-[30px] leading-[30px]  md:text-[2.656vw] capitalize md:leading-[2.656vw]">
                        enim adminim
                      </h2>
                      <div className="workist   space-y-2">
                        <div className="flex gap-2">
                          <button
                            className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4"
                            
                          >
                            Strategy
                          </button>
                          <button
                            className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4"
                            
                          >
                            UI/UX Design
                          </button>
                          <br />
                        </div>
                        <div className="flex gap-2">
                          <button
                            className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4"
                            
                          >
                            brand identity
                          </button>
                          <button
                            className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4"
                            
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
      )}
      {activetab === "tab5" && (
          <section className="work-sec  relative px-8 md:px-24 pb-28 bg-[#030728] md:bg-transparent ">
          <div className="hidden md:block w-shape absolute left-0 right-0 w-fit m-auto px-8">
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
            <div className="work-con  md:pt-32 ">
              <div className="md:grid md:grid-cols-2 gap-6 items-center space-y-6  md:space-y-0">
                <div className="work-l space-y-6 md:space-y-24">
                  <div className="wrok-bx relative">
                    <div className="work-img">
                      <Image
                        src={"/img/work1.png"}
                        width={655}
                        height={833}
                        alt="visual"
                      />
                    </div>
                    <div className="work-ctn space-y-6 absolute bottom-0 left-0 right-0 px-4 md:px-12 py-18">
                      <h2 className="text-[#030728] text-[30px] leading-[30px]  md:text-[2.656vw] capitalize md:leading-[2.656vw]">
                        enim adminim
                      </h2>
                      <div className="workist   space-y-2">
                        <div className="flex gap-2">
                          <button
                            className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4"
                            
                          >
                            Strategy
                          </button>
                          <button
                            className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4"
                            
                          >
                            UI/UX Design
                          </button>
                          <br />
                        </div>
                        <div className="flex gap-2">
                          <button
                            className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4"
                            
                          >
                            brand identity
                          </button>
                          <button
                            className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4"
                            
                          >
                            Development
                          </button>
                          <br />
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div className="wrok-bx relative  ">
                    <div className="work-img">
                      <Image
                        src={"/img/work2.png"}
                        width={655}
                        height={833}
                        alt="visual"
                      />
                    </div>
                    <div className="work-ctn space-y-6 absolute bottom-0 left-0 right-0 px-4 md:px-12 py-18">
                      <h2 className="text-[#030728] text-[30px] leading-[30px]  md:text-[2.656vw] capitalize md:leading-[2.656vw]">
                        enim adminim
                      </h2>
                      <div className="workist   space-y-2">
                        <div className="flex gap-2">
                          <button
                            className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4"
                            
                          >
                            Strategy
                          </button>
                          <button
                            className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4"
                            
                          >
                            UI/UX Design
                          </button>
                          <br />
                        </div>
                        <div className="flex gap-2">
                          <button
                            className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4"
                            
                          >
                            brand identity
                          </button>
                          <button
                            className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4"
                            
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
                        src={"/img/work3.png"}
                        width={655}
                        height={833}
                        alt="visual"
                      />
                    </div>
                    <div className="work-ctn space-y-6 absolute bottom-0 left-0 right-0 px-4 md:px-12 py-18">
                      <h2 className="text-[#030728] text-[30px] leading-[30px]  md:text-[2.656vw] capitalize md:leading-[2.656vw]">
                        enim adminim
                      </h2>
                      <div className="workist   space-y-2">
                        <div className="flex gap-2">
                          <button
                            className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4"
                            
                          >
                            Strategy
                          </button>
                          <button
                            className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4"
                            
                          >
                            UI/UX Design
                          </button>
                          <br />
                        </div>
                        <div className="flex gap-2">
                          <button
                            className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4"
                            
                          >
                            brand identity
                          </button>
                          <button
                            className=" border border-[] rounded-4xl px-4 md:px-8 py-2 md:py-4"
                            
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
      )}
      </div>
 
      <Ready />
      <Footer />
    </>
  );
}
