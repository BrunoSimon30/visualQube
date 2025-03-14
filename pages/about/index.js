import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from "next/image";
import React from "react";

export default function index() {
  return (
    <>
      <Header />
      <section className="about-sec h-screen flex items-center">
        <div className="container mx-auto max-w-screen-2xl space-y-24">
          <div>
            <h1 className="text-[5.729vw] text-[#030233] leading-[5.729vw]">
              About VisualQube
            </h1>
          </div>
          <div className="grid grid-cols-2 gap-6 items-center">
            <div className="ab-img">
              <Image
                src="/img/ab.png"
                alt="About VisualQube"
                width={583}
                height={355}
                 
              />
            </div>
            <div>
              <p className="text-[2.604vw] leading-[2.90vw] text-[#030728]">
                We create impactful digital experiences & redefine brand
                identities.F
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="visi-sec py-24 bg-[#030728]   flex items-center">
        <div className="container mx-auto max-w-screen-2xl ">
          <div className="space-y-24">
            <div className="visi-con flex justify-between">
              <div className="w-full text-center">
                <Image
                  className="mx-auto"
                  src={"/img/v1.png"}
                  width={337}
                  height={253}
                   alt='visual'
                />
              </div>
              <div className="w-full">
                <Image
                  className="ml-auto"
                  src={"/img/v2.png"}
                  width={337}
                  height={253}
                  alt='visual'
                />
              </div>
            </div>
            <div>
              <div className="text-center max-w-[800px] m-auto">
                <p className="text-[2.604vw] leading-[2.90vw] text-[#FCFFF5]">
                  Design tomorrow’s most valuable companies with today’s most
                  exceptional humans.
                </p>
              </div>
            </div>
            <div className="visi-con flex justify-between">
              <div className="w-full">
                <Image src={"/img/v3.png"} width={337} height={253}  alt='visual'/>
              </div>
              <div className="w-full">
                <Image
                  className="mx-auto"
                  src={"/img/v4.png"}
                  width={337}
                  height={253}
                  alt='visual'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ex-sec py-24">
        <div className="container mx-auto max-w-screen-2xl space-y-24">
          <div>
            <h1 className="text-[#030728] text-[4.167vw]  leading-[4.167vw] font-[500]">
              Excepteur sint occaecat cupidatat <br />
              non proident sunt in culpa qui officia
              <br /> deserunt mollit.
            </h1>
          </div>
          <div className="flex gap-24">
            <div className="w-full">
              <Image src={"/img/ex1.png"} width={583} height={414} alt='visual' />
            </div>
            <div className="w-full">
              <div className="border-t border-[#000] py-24 space-y-6">
                <h2 className="text-[2.656vw] leading-[2.656vw] font-[500]">
                  dolore magna
                </h2>
                <p className="text-[#303030] text-[20px] font-[500] leading-[35px]">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui anim id est
                  laborum.
                </p>
              </div>
              <div className="border-t border-[#000] py-24 space-y-6">
                <h2 className="text-[2.656vw] leading-[2.656vw] font-[500]">
                  dolore magna
                </h2>
                <p className="text-[#303030] text-[20px] font-[500] leading-[35px]">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui anim id est
                  laborum.
                </p>
              </div>
              <div className="border-t border-[#000] py-24 space-y-6">
                <h2 className="text-[2.656vw] leading-[2.656vw] font-[500]">
                  dolore magna
                </h2>
                <p className="text-[#303030] text-[20px] font-[500] leading-[35px]">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui anim id est
                  laborum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
