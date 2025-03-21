import Footer from "@/components/footer";
import Header from "@/components/header";
import Ready from "@/components/ready";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function index() {
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
  const [activetab, setActivetab] = useState("tab1");
  return (
    <>
      <Head>
        <title>High-Quality Design That Impress | Visual Qube</title>
        <meta name="google-site-verification" content="" />
      </Head>
      <Header />
      <section className="wor-sec py-20 md:py-32  px-8  ">
        <div className="container mx-auto max-w-screen-2xl space-y-24">
          <div className="md:flex justify-between items-center space-y-4 md:space-y-0">
            <h1 className="text-[5.729vw] text-[#030233] leading-[5.729vw]">
              Industries
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

      {activetab === "tab1" && (
       <section className="work-sec  relative px-8 md:px-24  pb-32 md:h-[1180px] flex items-end">
       <div className="w-shape hidden md:block absolute left-0 right-0 top-0 w-fit m-auto">
         <Image src={"/img/work-shape.png"} width={1800} height={1180} />
         <div className="text-right absolute top-52  right-0     w-full">
           <h1 className="text-[18.75vw] leading-[18.75vw] text-white">
             Industries
           </h1>
         </div>
       </div>
       <div className="container mx-auto max-w-screen-2xl    ">
         <div className="work-con  md:pt-32  ">
           <div className="md:grid md:grid-cols-4 gap-12 space-y-4 md:space-y-0">
             {silItems?.map((v, index) => (
               <div
                 key={index}
                 className="work-w shrink-0  bg-[#FCFFF5] flex items-center justify-center rounded-2xl drop-shadow-md border mx-4"
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
           </div>
         </div>
       </div>
     </section>
      )}
      {activetab === "tab2" && (
         <section className="work-sec  relative px-8 md:px-24  pb-32 md:h-[1180px] flex items-end">
       <div className="w-shape hidden md:block absolute left-0 right-0 top-0 w-fit m-auto">
         <Image src={"/img/work-shape.png"} width={1800} height={1180} />
         <div className="text-right absolute top-52  right-0     w-full">
           <h1 className="text-[18.75vw] leading-[18.75vw] text-white">
             Industries
           </h1>
         </div>
       </div>
       <div className="container mx-auto max-w-screen-2xl    ">
         <div className="work-con  md:pt-32  ">
           <div className="md:grid md:grid-cols-4 gap-12 space-y-4 md:space-y-0">
             {silItems?.map((v, index) => (
               <div
                 key={index}
                 className="shrink-0 w-[300px] h-[267px] bg-[#FCFFF5] flex items-center justify-center rounded-2xl drop-shadow-md border mx-4"
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
           </div>
         </div>
       </div>
     </section>
      )}
      {activetab === "tab3" && (
          <section className="work-sec  relative px-8 md:px-24  pb-32 md:h-[1180px] flex items-end">
       <div className="w-shape hidden md:block absolute left-0 right-0 top-0 w-fit m-auto">
         <Image src={"/img/work-shape.png"} width={1800} height={1180} />
         <div className="text-right absolute top-52  right-0     w-full">
           <h1 className="text-[18.75vw] leading-[18.75vw] text-white">
             Industries
           </h1>
         </div>
       </div>
       <div className="container mx-auto max-w-screen-2xl    ">
         <div className="work-con  md:pt-32  ">
           <div className="md:grid md:grid-cols-4 gap-12 space-y-4 md:space-y-0">
             {silItems?.map((v, index) => (
               <div
                 key={index}
                 className="shrink-0 w-[300px] h-[267px] bg-[#FCFFF5] flex items-center justify-center rounded-2xl drop-shadow-md border mx-4"
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
           </div>
         </div>
       </div>
     </section>
      )}
      {activetab === "tab4" && (
       <section className="work-sec  relative px-8 md:px-24  pb-32 md:h-[1180px] flex items-end">
       <div className="w-shape hidden md:block absolute left-0 right-0 top-0 w-fit m-auto">
         <Image src={"/img/work-shape.png"} width={1800} height={1180} />
         <div className="text-right absolute top-52  right-0     w-full">
           <h1 className="text-[18.75vw] leading-[18.75vw] text-white">
             Industries
           </h1>
         </div>
       </div>
       <div className="container mx-auto max-w-screen-2xl    ">
         <div className="work-con  md:pt-32  ">
           <div className="md:grid md:grid-cols-4 gap-12 space-y-4 md:space-y-0">
             {silItems?.map((v, index) => (
               <div
                 key={index}
                 className="shrink-0 w-[300px] h-[267px] bg-[#FCFFF5] flex items-center justify-center rounded-2xl drop-shadow-md border mx-4"
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
           </div>
         </div>
       </div>
     </section>
      )}
      {activetab === "tab5" && (
        <section className="work-sec  relative px-8 md:px-24  pb-32 md:h-[1180px] flex items-end">
       <div className="w-shape hidden md:block absolute left-0 right-0 top-0 w-fit m-auto">
         <Image src={"/img/work-shape.png"} width={1800} height={1180} />
         <div className="text-right absolute top-52  right-0     w-full">
           <h1 className="text-[18.75vw] leading-[18.75vw] text-white">
             Industries
           </h1>
         </div>
       </div>
       <div className="container mx-auto max-w-screen-2xl    ">
         <div className="work-con  md:pt-32  ">
           <div className="md:grid md:grid-cols-4 gap-12 space-y-4 md:space-y-0">
             {silItems?.map((v, index) => (
               <div
                 key={index}
                 className="shrink-0 w-[300px] h-[267px] bg-[#FCFFF5] flex items-center justify-center rounded-2xl drop-shadow-md border mx-4"
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
           </div>
         </div>
       </div>
     </section>
      )}

      <Ready />
      <Footer />
    </>
  );
}
