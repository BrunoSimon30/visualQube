import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function index() {
  return (
    <>
      <Header />
      <section className="ser-sec py-24 relative z-[1]">
        <div className="ser-shape absolute right-0 bottom-20 z-[-1]">
             <Image
                            className="ml-auto"
                            src={"/img/manr-icon.png"}
                            width={400}
                            height={400}
                            alt='visual'
                          />
        </div>
        <div className="container mx-auto max-w-screen-2xl space-y-8">
          <div className="flex justify-between items-center">
            <h1 className="text-[5.729vw] text-[#030233] leading-[5.729vw]">
              Services
            </h1>
            <div>
              <Image src={"/img/ser1.png"} width={705} height={489} alt='visual' />
            </div>
          </div>
          <div>
            <h1 className="text-[2.604vw] leading-[2.604vw] text-[#030728] font-[500]">
              We create impactful digital<br/>experiences & redefine brand<br/>
              identities.
            </h1>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
