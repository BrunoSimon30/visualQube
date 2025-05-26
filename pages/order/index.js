import Footer from "@/components/footer";
import Header from "@/components/header";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
 
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";
import Link from "next/link";
import { CiUser,CiMail,CiPhone,CiLocationOn ,CiBarcode    } from "react-icons/ci";
import { PiCityThin } from "react-icons/pi";

export default function OrderPage() {
  return (
    <>
      <Head>
        <title>High-Quality Design That Impress | Visual Qube</title>
        <meta name="google-site-verification" content="" />
      </Head>
      <Header />

      <section className="wor-sec py-24 md:py-36 px-8">
        <div className="container mx-auto max-w-screen-2xl space-y-16 md:space-y-24">
          <div className="orderwrap space-y-8">
            <div className="text-center  pt-14 md:pt-6">
              <h1 className="text-2xl lg:text-[4vw] text-[#030233] leading-[4vw] capitalize">
                <span className="text-[#FFD548]  ">We</span> would like to
                <br /> hear from you
              </h1>
              <p className="text-[#030728] text-md pb-2 hidden md:block">
                Heads up! We require that you sign up for a Visualqube services
                and packages. <br />
                We make all your dreams come true in a successful project.
              </p>
            </div>
            <div className="order-form">
              <div className="container mx-auto max-w-5xl bg-white p-6 shadow rounded-md">
                <h2 className="text-2xl font-semibold mb-6 text-center bg-black text-white py-3 ">
                  Amount Payable $1599
                </h2>

                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Billing Details */}
                  <div>
                    <h3 className="text-2xl font-semibold mb-8 text-[#030233]">
                      Billing Details
                    </h3>
                    <div className="mb-4">
                      <label className="block mb-1 font-medium text-gray-700">
                        Full Name
                      </label>
                     <div className="relative">
                     <span className="absolute right-2 top-3 text-lg"><CiUser /></span>
                      <input
                        type="text"
                        className="w-full pl-2 pr-8 py-2 border rounded-md border-gray-700"
                      />
                     </div>
                    </div>
                    <div className="mb-4">
                      <label className="block mb-1 font-medium text-gray-700">
                        Email Address
                      </label>
                      <div className="relative">
                     <span className="absolute right-2 top-3 text-lg"><CiMail  /></span>
                      <input
                        type="email"
                        className="w-full pl-2 pr-8 py-2 border rounded-md border-gray-700"
                      />
                     </div>
                    </div>
                    <div className="mb-4">
                      <label className="block mb-1 font-medium text-gray-700">
                        Phone Number
                      </label>
                      <div className="relative">
                     <span className="absolute right-2 top-3 text-lg"><CiPhone   /></span>
                      <input
                        type="text"
                        className="w-full pl-2 pr-8 py-2 border rounded-md border-gray-700"
                      />
                     </div>
                    </div>
                    <div className="mb-4">
                      <label className="block mb-1 font-medium text-gray-700">
                        Street Address
                      </label>
                      <div className="relative">
                     <span className="absolute right-2 top-3 text-lg"><CiLocationOn/></span>
                      <input
                        type="text"
                        className="w-full pl-2 pr-8 py-2 border rounded-md border-gray-700"
                      />
                     </div>
                    </div>
                    <div className="mb-4">
                      <label className="block mb-1 font-medium text-gray-700">
                        City
                      </label>
                      <div className="relative">
                     <span className="absolute right-2 top-3 text-lg"><PiCityThin/></span>
                      <input
                        type="text"
                        className="w-full pl-2 pr-8 py-2 border rounded-md border-gray-700"
                      />
                     </div>
                    </div>
                    <div className="mb-4">
                      <label className="block mb-1 font-medium text-gray-700">
                        Zip
                      </label>
                      <div className="relative">
                     <span className="absolute right-2 top-3 text-lg"><CiBarcode /></span>
                      <input
                        type="text"
                        className="w-full pl-2 pr-8 py-2 border rounded-md border-gray-700"
                      />
                     </div>
                    </div>
                  </div>

                  {/* Confirm Purchase */}
                  <div>
                    <h3 className="text-2xl font-semibold mb-6 text-[#030233]">
                      Confirm Purchase
                    </h3>
                    <div className="mb-4">
                      <label className="block mb-1 font-medium text-gray-700">
                        Owner
                      </label>
                     
                      <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-md border-gray-700"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block mb-1 font-medium text-gray-700">
                        CVV
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-md border-gray-700"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block mb-1 font-medium text-gray-700">
                        Card Number
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-md border-gray-700"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block mb-1 font-medium text-gray-700">
                        Expiration Date
                      </label>
                      <div className="flex gap-4">
                        <select className="flex-1 px-4 py-2 border rounded-md">
                          {[
                            "January",
                            "February",
                            "March",
                            "April",
                            "May",
                            "June",
                            "July",
                            "August",
                            "September",
                            "October",
                            "November",
                            "December",
                          ].map((month) => (
                            <option key={month}>{month}</option>
                          ))}
                        </select>
                        <select className="flex-1 px-4 py-2 border rounded-md">
                          {Array.from({ length: 10 }, (_, i) => 2023 + i).map(
                            (year) => (
                              <option key={year}>{year}</option>
                            )
                          )}
                        </select>
                      </div>
                    </div>
                    <div className="mt-6">
                      {/* Payment Method Icons */}
                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        {[
                          "visa",
                          "applepay",
                          "diners",
                          "discover",
                          "amex",
                          "jcb",
                          "mastercard",
                        ].map((type) => (
                          <img
                            key={type}
                            src={`/img/icon/${type}.png`}
                            alt={type}
                            className="h-10"
                          />
                        ))}
                      </div>
 
                      {/* Privacy Policy */}
                      <div className="flex items-start gap-2 mb-4">
                        <input type="checkbox" className="mt-1" />
                        <p className="text-sm text-gray-600">
                          Your personal data will be used to process your order,
                          support your experience throughout this website, and
                          for other purposes described in our{" "}
                          <Link href="/terms-and-conditions" target="_blank" className="text-red-600 underline">
                            Terms Of Use
                          </Link>
                          ,{" "}
                          <Link href="/privacy-policy" target="_blank" className="text-red-600 underline">
                            Privacy Policy
                          </Link>{" "}
                          of , USA
                        </p>
                      </div>

                      {/* Subscription Terms */}
                      <div className="flex items-start gap-2 mb-4">
                        <input
                          type="checkbox"
                          checked
                          readOnly
                          className="mt-1"
                        />
                        <p className="text-sm text-gray-600">
                          By completing your purchase, you agree to the
                          subscription terms, including a recurring charge on
                          the 5th of every month. You can cancel your
                          subscription anytime by contacting us online.
                          Cancellation will prevent future charges but does not
                          provide refunds for prior payments. Subscription fees
                          are non-refundable, and cancellation ensures access to
                          benefits until the end of the current billing cycle.
                        </p>
                      </div>
                    </div>
                    <p className="text-sm mt-4 mb-4">
                      Billing Descriptor: <strong>Visualqube</strong>
                    </p>

                    <button
                      type="submit"
                      className="w-full bg-orange-500 text-white font-semibold py-2 rounded-md hover:bg-orange-600 transition"
                    >
                      Submit Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
