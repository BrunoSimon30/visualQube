import Footer from "@/components/footer";
import Header from "@/components/header";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { IoLocation, IoCallSharp } from "react-icons/io5";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    emailAddress: "",
    phoneNumber: "",
    message: "",
    service: "",
  });

  const [loading, setLoading] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const router = useRouter();
  const pathName = router.pathname;
  const webUrl = "https://visualqube.com";
  const url = `${webUrl}${pathName}`;

  useEffect(() => {
    setFormData((prevData) => ({ ...prevData, url: url }));
  }, [url]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    setFormData((prevData) => ({ ...prevData, service }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedService) {
      toast.error("Please select a service.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post("https://api.visualqube.com:3087/api/contact", formData);
      console.log("Response:", response.data);
      toast.success("Sent successfully!", { position: "bottom-right", autoClose: 2000, theme: "dark" });

      setFormData({ firstName: "", emailAddress: "", phoneNumber: "", message: "", service: "" });
      setSelectedService("");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to send your message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>High-Quality Design That Impress | Visual Qube</title>
        <meta name="google-site-verification" content="" />
      </Head>
      <Header />
      <ToastContainer />
      <section className="wor-sec py-32 px-8">
        <div className="container mx-auto max-w-screen-2xl space-y-24">
          <div className="md:flex items-center gap-12">
            <h1 className="w-full text-[5.729vw] text-[#030233] leading-[5.729vw]">
              <span className="text-[#FFD548] font-cabold">Hey!</span> Tell us
              <br />
              all the things
            </h1>
            <div className="w-full workist space-y-2">
              <h3 className="text-[#030728] text-[20px] pb-2">I'm interested in...</h3>
              <div className="flex gap-2 flex-wrap">
                {["All", "Branding", "Website Design", "App Development", "Digital Marketing"].map((service) => (
                  <button
                    key={service}
                    type="button"
                    className={`border rounded-4xl px-4 md:px-8 py-4 ${
                      selectedService === service ? "bg-[#FFD548] text-black" : ""
                    }`}
                    onClick={() => handleServiceSelect(service)}
                  >
                    {service}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="md:grid md:grid-cols-2 gap-24">
            <div className="hidden md:block px-6 py-12 border rounded-2xl space-y-12">
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
              <div className="pl-12 border bg-white px-4 py-8 rounded-2xl flex items-center gap-12">
                <span className="w-16 h-16 border border-[#000] flex items-center justify-center rounded-4xl text-2xl text-[#05C7AA]">
                  <IoCallSharp />
                </span>
                <p className="text-[#030728] text-[24px]">
                  Let’s Discuss!
                  <br />
                  <a className="font-semibold" href="tel:0123457890">
                    012 345 7890
                  </a>
                </p>
              </div>
              <div className="flex gap-12">
                <div className="w-full border bg-white px-4 py-4 rounded-full flex items-center gap-6">
                  <span className="w-12 h-12 border border-[#000] flex items-center justify-center rounded-4xl text-2xl text-[#05C7AA]">
                    <FaXTwitter />
                  </span>
                  <p className="text-[#030728] text-[20px]">Twitter (X)</p>
                </div>
                <div className="w-full border bg-white px-4 py-4 rounded-full flex items-center gap-6">
                  <span className="w-12 h-12 border border-[#000] flex items-center justify-center rounded-4xl text-2xl text-[#05C7AA]">
                    <FaInstagram />
                  </span>
                  <p className="text-[#030728] text-[20px]">Instagram</p>
                </div>
              </div>
            </div>
            <div className="conf">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#030233]">
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="bg-transparent outline-none w-full"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#030233]">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="emailAddress"
                    value={formData.emailAddress}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className="bg-transparent outline-none w-full"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#030233]">
                    Phone Number:
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="bg-transparent outline-none w-full"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#030233]">
                    Message:
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your message"
                    rows="4"
                    className="bg-transparent outline-none w-full"
                    required
                  />
                </div>
                <div>
                  <button type="submit" disabled={loading}>
                    {loading ? "Submitting..." : "Leave a Request"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
