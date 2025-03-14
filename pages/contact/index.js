import Footer from "@/components/footer";
import Header from "@/components/header";
import Link from "next/link";
import React from "react";
import { IoLocation ,IoCallSharp} from "react-icons/io5";
import { FaXTwitter ,FaInstagram } from "react-icons/fa6";

export default function index() {
  return (
    <>
      <Header />
      <section className="wor-sec py-32">
        <div className="container mx-auto max-w-screen-2xl space-y-24">
          <div className="flex items-center gap-12">
            <h1 className="w-full text-[5.729vw] text-[#030233] leading-[5.729vw]">
              <span className="text-[#FFD548] font-cabold">Hey!</span> Tell us
              <br />
              all the things
            </h1>
            <div className="w-full workist   space-y-2">
              <h3 className="text-[#030728] text-[20px] pb-2">
                I'm interested in...
              </h3>
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
          <div className="grid grid-cols-2 gap-24">
            <div className="px-6 py-12 border rounded-2xl space-y-12">
              <div className="pl-12 border bg-white px-4 py-8 rounded-2xl flex items-center gap-12">
                <span className="w-16 h-16 border border-[#000] flex items-center justify-center rounded-4xl text-2xl text-[#05C7AA]">
                  <IoLocation />
                </span>
                <p className="text-[#030728] text-[24px]">
                  Paris, FranceAv. 13 #99,
                  <br />
                  Offices 201 & 204
                </p>
              </div>
              <div className="pl-12 border bg-white px-4 py-8  rounded-2xl flex items-center gap-12">
                <span className="w-16 h-16 border border-[#000] flex items-center justify-center rounded-4xl text-2xl text-[#05C7AA]">
                <IoCallSharp />
                </span>
                <p className="text-[#030728] text-[24px]">
                Let’s Discuss!<br/>
                <Link className="font-semibold" href={'tel:012 345 7890'}>012 345 7890</Link>
                </p>
                
              </div>
              <div className="flex gap-12">
              <div className="w-full  border bg-white px-4 py-4 rounded-full  flex items-center gap-12">
                <span className="w-12 h-12 border border-[#000] flex items-center justify-center rounded-4xl text-2xl text-[#05C7AA]">
                <FaXTwitter />
                </span>
                <p className="text-[#030728] text-[24px]">
                Twitter (X)
                </p>
                
              </div>
              <div className=" w-full border bg-white px-4 py-4  rounded-full flex items-center gap-12">
                <span className="w-12 h-12 border border-[#000] flex items-center justify-center rounded-4xl text-2xl text-[#05C7AA]">
                <FaInstagram  />
                </span>
                <p className="text-[#030728] text-[24px]">
                Instagram
                </p>
                
              </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
