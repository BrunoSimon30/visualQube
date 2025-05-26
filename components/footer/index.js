import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="footer-sec bg-white px-8  ">
        <div className="container mx-auto max-w-screen-2xl">
          <div className="up ft-btm py-12 md:py-28">
            <div className="md:grid md:grid-cols-4 gap-12  space-y-6 md:space-y-0">
              <div className="ft-link space-y-2 md:space-y-6">
                <h3 className="text-[25px] md:text-[2vw]  text-black font-[600] capitalize tall">
                  About us
                </h3>
                <p>
                  VisualQube delivers unique, impressive digital solutions,
                  enhancing brands with smart technology and designing standout
                  websites and apps that truly shine.
                </p>
              </div>
              <div className="ft-link space-y-2 md:space-y-6">
                <h3 className="text-[25px] md:text-[2vw]  text-black font-[600] capitalize tall">
                  Quick link
                </h3>
                <div className="flex gap-6 md:gap-24">
                  <ul className="ft-lin ">
                    <li>
                      <Link href="/">home</Link>
                    </li>
                    <li>
                      <Link href="/about">About</Link>
                    </li>
                    <li>
                      <Link href="/services">Services</Link>
                    </li>
                    <li>
                      <Link href="/work">Work</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="ft-link space-y-2 md:space-y-6">
                <h3 className="text-[25px] md:text-[2vw] text-black font-[600] capitalize tall">
                  Services
                </h3>
                <ul className="ft-lin ">
                  <li>
                    <Link href="/branding">Branding</Link>
                  </li>
                  <li>
                    <Link href="/website-design">Website Design</Link>
                  </li>
                  <li>
                    <Link href="/app-design-development">
                      App Design & Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/digital-marketing">Digital Marketing</Link>
                  </li>
                  <li>
                    <Link href="/data-cloud">Data & Cloud </Link>
                  </li>
                </ul>
              </div>
              <div className="ft-link space-y-2 md:space-y-6">
                <h3 className="text-[25px] md:text-[2vw] text-black font-[600] capitalize tall">
                  Contact
                </h3>
                <ul className="ft-lin ">
                  <li>
                    <Link href="mailto:info@visualqube.com">
                      info@visualqube.com
                    </Link>
                  </li>
                  <li>
                    <Link href="tel:+1 888-602-6540">+1 888-602-6540</Link>
                  </li>
                  <li>
                    <p>11658 S. Copper Sky Dr, South Jordan, UT, 84009, USA</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:flex justify-between items-end pb-6 md:pb-18 space-y-5 md:space-y-0">
            <div>
              <Image
                src={"/img/ft-logo.svg"}
                width={700}
                height={150}
                alt="visual"
              />
            </div>
            <div className="text-center md:text-right space-y-2 md:space-y-0">
              <p className="text-[#6C6C6C] font-[500] text-[17px]">
                © Visualqube, LLC
              </p>
              <div className="flex gap-8 justify-center md:justify-end">
                <Link
                  className="text-[#303030] text-[17px] font-[500] transition duration-300   hover:text-[#05C7AA]"
                  href={"/privacy-policy"}
                >
                  Privacy Policy
                </Link>
                <p className="text-[#303030] text-[17px] font-[500]">|</p>
                <Link
                  className="text-[#303030] text-[17px] font-[500] transition duration-300   hover:text-[#05C7AA]"
                  href={"/terms-and-conditions"}
                >
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
