import Footer from "@/components/footer";
import Header from "@/components/header";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const termsData = [
  {
    id: "your-agreement",
    content: `
     <div>
      <h2 class="text-[#030728] text-[30px] capitalize font-semibold">Privacy Policy</h2>
      <p class=" text-[#303030]  text-[20px]">At Your Visual Qube, we value your privacy and are committed to safeguarding your personal information. Our Privacy Policy outlines how we collect, use, disclose, and protect the data you provide while accessing our website and utilizing our services. By engaging with Your Visual Qube, you consent to the practices described in this Privacy Policy.</p>
     </div>
     <div>
     <h2 class="text-[#030728] text-[30px] capitalize font-semibold">Information Collection</h2>
     <p class=" text-[#303030]  text-[20px]">We may collect personal information, such as name, email address, contact details, and browsing data, when you interact with our website, subscribe to our newsletters, or avail our services.</p>
     </div>
      <div>
     <h2 class="text-[#030728] text-[30px] capitalize font-semibold">Data Usage</h2>
     <p class=" text-[#303030]  text-[20px]">The information we gather is utilized to personalize your experience, process transactions, improve our website, and respond to your inquiries promptly.</p>
     </div>
      <div>
     <h2 class="text-[#030728] text-[30px] capitalize font-semibold">Third-Party Disclosure</h2>
     <p class=" text-[#303030]  text-[20px]">We may share your data with trusted third-party service providers that assist us in delivering our services. Rest assured that we take measures to ensure your information is protected by these partners.</p>
     </div>
      <div>
     <h2 class="text-[#030728] text-[30px] capitalize font-semibold">Cookies and Tracking Technologies</h2>
     <p class=" text-[#303030]  text-[20px]">Our website uses cookies and tracking technologies to enhance your browsing experience. You have the option to modify your browser settings to control cookie usage.</p>
     </div>
      <div>
     <h2 class="text-[#030728] text-[30px] capitalize font-semibold">Data Security</h2>
     <p class=" text-[#303030]  text-[20px]">Your Visual Qube employs industry-standard security measures to safeguard your personal information against unauthorized access, disclosure, alteration, or destruction.
     No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. All other categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.</p>
     </div>
      <div>
     <h2 class="text-[#030728] text-[30px] capitalize font-semibold">Data Retention</h2>
     <p class=" text-[#303030]  text-[20px]">We retain your data only for as long as necessary to fulfill the purposes outlined in this Privacy Policy and comply with legal obligations.</p>
     </div>
      <div>
     <h2 class="text-[#030728] text-[30px] capitalize font-semibold">Children's Privacy</h2>
     <p class=" text-[#303030]  text-[20px]">Our services are not intended for children under 13 years of age. We do not knowingly collect or retain personal information from children.

By using Your Visual Qube website and services, you acknowledge and agree to this Privacy Policy in their entirety. If you do not agree with any part of these policies, please refrain from using our website and services.</p>
     </div>
  
      
      `,
  },
];

export default function index() {
  return (
    <>
      <Head>
        <title>High-Quality Design That Impress | Visual Qube</title>
        <meta name="google-site-verification" content="" />
      </Head>
      <Header />
      <section className="wor-sec py-32 px-8  ">
        <div className="container mx-auto max-w-screen-2xl space-y-24">
          <div className="md:flex justify-between items-center space-y-4 md:space-y-0">
            <h1 className="text-[5.729vw] text-[#030233] leading-[5.729vw]">
              Privacy Policy
            </h1>
          </div>
        </div>
      </section>
      <section className="term-sec py-32 px-6 xl:px-0">
        <div className="container mx-auto max-w-screen-2xl space-y-6">
          <div>
            <h2 className="text-[#030728] text-[25px] font-semibold">
              11-03-2025
            </h2>
          </div>
          {termsData.map((section) => (
            <div
              className="text-[#030728] space-y-6"
              key={section.id}
              dangerouslySetInnerHTML={{ __html: section.content }}
            ></div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
