import Cta from "@/components/cta";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Industory from "@/components/Industory";
import Ready from "@/components/ready";
import Testimonial from "@/components/Testimonial";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function index() {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = ["/img/scroll/a3.png", "/img/scroll/d1.png", "/img/scroll/c2.png"]; 

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

  return (
    <>
      <Head>
        <title>High-Quality Design That Impress | Visual Qube</title>
        <meta name="google-site-verification" content="" />
      </Head>
      <Header />
      <section className="about-sec md:h-screen py-20 md:py-0 flex items-center px-8 ">
        <div className="container mx-auto max-w-screen-2xl space-y-4 md:space-y-24">
          <div>
            <h1 className="text-[5.729vw] text-[#030233] leading-[5.729vw]">
              About VisualQube
            </h1>
          </div>
          <div className="md:grid md:grid-cols-2 gap-6 items-center space-y-4 md:space-y-0">
            <div className="ab-img md:w-[583px] md:h-[355px] bg-black overflow-hidden rounded-4xl border border-[#030728] ">
              <video
                className="vid w-[100%] scale-[1.3]"
                id="vid"
                autoPlay={true}
                loop={true}
                muted
                controls={false}
              >
                <source src="/img/vid.webm" />
              </video>
            </div>
            <div>
              <p className="text-[30px] leading-[30px] md:text-[2.604vw] md:leading-[2.90vw] text-[#030728]">
              We Create Impactful Digital Experiences & Redefine Brand Identities.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Cta heading={`Frame Your Future with VisualQube. Focus Now! `} rtc={'rtbcolor'}/>
      <section className="visi-sec py-24 bg-[#030728]   flex items-center px-8  ">
        <div className="container mx-auto max-w-screen-2xl ">
          <div className="space-y-24">
            <div className="visi-con md:flex justify-between space-y-4 md:space-y-0">
              <div className="w-full text-center">
                <Image
                  className="md:mx-auto"
                  src={"/img/v1.png"}
                  width={337}
                  height={253}
                  alt="visual"
                />
              </div>
              <div className="w-full">
                <Image
                  className="md:ml-auto"
                  src={"/img/v2.png"}
                  width={337}
                  height={253}
                  alt="visual"
                />
              </div>
            </div>
            <div>
              <div className="text-center max-w-[800px] m-auto">
                <p className="text-[30px] leading-[40px] md:text-[2.604vw] md:leading-[2.90vw] text-[#FCFFF5]">
                Shape Tomorrow's Leading Companies with Today's Most Creative Minds.
                </p>
              </div>
            </div>
            <div className="visi-con md:flex justify-between space-y-4 md:space-y-0">
              <div className="w-full">
                <Image
                  src={"/img/v3.png"}
                  width={337}
                  height={253}
                  alt="visual"
                />
              </div>
              <div className="w-full">
                <Image
                  className="md:mx-auto"
                  src={"/img/v4.png"}
                  width={337}
                  height={253}
                  alt="visual"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ex-sec py-24 px-8">
        <div className="container mx-auto max-w-screen-2xl space-y-24">
          <div>
            <h1 className="text-[#030728] text-[30px] leading-[35px] md:text-[4.167vw] md:leading-[4.167vw] font-[500]">
            10X Your Success with Innovation, Disruptive Strategies, and Seamless Execution for Lasting Growth.
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
                Transformative Technology 
                </h2>
                <p className="text-[#303030] text-[15px] leading-[25px] md:text-[20px] md:leading-[35px] font-[500]">
                Harness the latest in digital innovation with our bespoke solutions, designed to push your business forward. Experience advanced tech that ensures growth and drives efficiency.
                </p>
              </div>
              <div
                className="border-t border-[#000] py-24 space-y-6 content-section"
                data-index="1"
              >
                <h2 className="text-[30px] leading-[30px] md:text-[2.656vw] md:leading-[2.656vw] font-[500]">
                Strategic Digital Marketing 
                </h2>
                <p className="text-[#303030] text-[15px] leading-[25px] md:text-[20px] md:leading-[35px] font-[500]">
                Boost your brand with our strategic marketing approaches that blend creativity with analytics. Reach new heights with customized campaigns that capture and convert your target audience.
                </p>
              </div>
              <div
                className="border-t border-[#000] py-24 space-y-6 content-section"
                data-index="2"
              >
                <h2 className="text-[30px] leading-[30px] md:text-[2.656vw] md:leading-[2.656vw] font-[500]">
                Robust Data Analytics 
                </h2>
                <p className="text-[#303030] text-[15px] leading-[25px] md:text-[20px] md:leading-[35px] font-[500]">
                Leverage powerful data insights with our unconventional analytics services. Make informed decisions that anticipate market trends while setting new industry standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Cta heading={`Ready to Dominate? Act Now—Before Competitors Do!	`} rtc={'rtwcolor'} />
      <Industory />
      <Testimonial />
      <Ready />
      <Footer />
    </>
  );
}
