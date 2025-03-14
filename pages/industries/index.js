import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function index() {
  return (
    <>
      <Header />
      <section className="wor-sec py-32">
        <div className="container mx-auto max-w-screen-2xl space-y-24">
          <div className="flex justify-between items-center">
            <h1 className="text-[5.729vw] text-[#030233] leading-[5.729vw]">
              Industries
            </h1>
            <div className="workist   space-y-2">
              <div className="flex gap-2">
                <Link
                  className=" border border-[] rounded-4xl px-8 py-4"
                  href={"/"}
                >
                  All
                </Link>
                <Link
                  className=" border border-[] rounded-4xl px-8 py-4"
                  href={"/"}
                >
                  Branding
                </Link>
                <Link
                  className=" border border-[] rounded-4xl px-8 py-4"
                  href={"/"}
                >
                  Website Design
                </Link>
                <br />
              </div>
              <div className="flex gap-2">
                <Link
                  className=" border border-[] rounded-4xl px-8 py-4"
                  href={"/"}
                >
                  App Development
                </Link>
                <Link
                  className=" border border-[] rounded-4xl px-8 py-4"
                  href={"/"}
                >
                  Digital Marketing
                </Link>
                <br />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="work-sec  relative px-24  pb-32 h-[1180px] flex items-end">
        <div className="w-shape absolute left-0 right-0 top-0 w-fit m-auto">
          <Image src={"/img/work-shape.png"} width={1800} height={1180} />
          <div className="text-right absolute top-52  right-0     w-full">
            <h1 className="text-[18.75vw] leading-[18.75vw] text-white">
              Industries
            </h1>
          </div>
        </div>
        <div className="container mx-auto max-w-screen-2xl    ">
          <div className="work-con  pt-32  ">
            <div className="grid grid-cols-4 gap-12 ">
            {[...Array(8)].map((_, index) => (
        <div
          key={index}
          className="shrink-0 be-box text-center w-[334px] h-[267px] bg-[#FCFFF5] flex items-center justify-center rounded-2xl drop-shadow-md border"
        >
          <div>
            <Image className="m-auto" src="/img/be1.svg" width={100} height={100} alt="Sports" />
            <h2 className="text-[#030728] text-[25px] font-[500]">Sports</h2>
          </div>
        </div>
      ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
