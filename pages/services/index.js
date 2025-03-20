import Cta from "@/components/cta";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Industory from "@/components/Industory";
import Ready from "@/components/ready";
import Services from "@/components/services";
import Testimonial from "@/components/Testimonial";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function index() {
  return (
    <>
      <Head>
        <title>High-Quality Design That Impress | Visual Qube</title>
        <meta name="google-site-verification" content="" />
      </Head>
      <Header />
      <section className="ser-sec pt-24 md:pt-32  md:py-32 relative z-[1] px-8 ">
        <div className="hidden md:block ser-shape absolute right-0 bottom-20 z-[-1]  ">
          <Image
            className="ml-auto"
            src={"/img/manr-icon.png"}
            width={400}
            height={400}
            alt="visual"
          />
        </div>
        <div className="container mx-auto max-w-screen-2xl space-y-8">
          <div className="md:flex justify-between items-center space-y-4 md:space-y-0">
            <h1 className="text-[30px] leading-[30px] md:text-[5.729vw] text-[#030233] md:leading-[5.729vw]">
              Services
            </h1>
            <div className="md:w-[700px] md:h-[489px] overflow-hidden rounded-4xl border border-[#030728] ">
            <video
               className="vid w-[100%] scale-[1.5]"
          id="vid"
          autoPlay={true}
          loop={true}
          muted
          controls={false}
        >
          <source src="/img/vid.webm" />
        </video>
            </div>
          </div>
          <div>
            <h1 className="text-[20px] leading-[30px] md:text-[2.604vw] md:leading-[2.604vw] text-[#030728] font-[500]">
              We create impactful digital
              <br />
              experiences & redefine brand
              <br />
              identities.
            </h1>
          </div>
        </div>
      </section>
      <Services/>
      <Cta/>
      <Industory/>
      <Testimonial/>
      <Ready/>
      <Footer />
    </>
  );
}
