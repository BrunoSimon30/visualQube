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
              Our Work
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
      <Footer />
    </>
  );
}
