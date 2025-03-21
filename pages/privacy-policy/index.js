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
      <h2 class="text-[#030728] text-[30px] capitalize font-semibold"> 
Welcome to VisualQube. 
      </h2>
      <p class=" text-[#303030]  text-[20px]">
Your privacy and the security of your personal information are of paramount importance to us. By accessing or using our website, products, or services, you confirm your agreement to the practices described in this Privacy Policy. If you do not agree with our policies and practices, please do not use our services.
      </p>
     </div>
      <div>
      <h2 class="text-[#030728] text-[30px] capitalize font-semibold"> 
Collection of Information. 
      </h2>
      <p class=" text-[#303030]  text-[20px]">
      At VisualQube, we collect various types of information to enhance your experience and improve our services. This includes personal information that you voluntarily provide such as your name, email address, telephone number, and any other information that can personally identify you. We also collect technical information automatically as you navigate through our site, such as usage details, IP addresses, and information collected through cookies and other tracking technologies.
      </p>
     </div>
     <div>
      <h2 class="text-[#030728] text-[30px] capitalize font-semibold"> 
Use of Collected Information. 
      </h2>
      <p class=" text-[#303030]  text-[20px]">
      The information we collect helps us to provide, maintain, and improve our services. It enables us to manage your account, provide customer support, and communicate with you effectively. We use your information to personalize your experience with us and to recommend content that might be of interest to you. We also use this information to monitor and analyze trends, usage, and activities in connection with our services.
      </p>
     </div>
     <div>
      <h2 class="text-[#030728] text-[30px] capitalize font-semibold"> 
Sharing of Information. 
      </h2>
      <p class=" text-[#303030]  text-[20px]">
      VisualQube does not sell or rent your personal information to third parties. We may share information with third-party partners and service providers who work on our behalf, provided that they do not have an independent use of the information we disclose to them, and have agreed to adhere to the rules set forth in this Privacy Policy. Additionally, we may disclose personal information if required by law, such as to comply with a subpoena or other legal process, when we believe in good faith that disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or respond to a government request.
      </p>
     </div>
     <div>
      <h2 class="text-[#030728] text-[30px] capitalize font-semibold"> 
Data Security. 
      </h2>
      <p class=" text-[#303030]  text-[20px]">
      We implement measures designed to protect your personal information from unauthorized access, use, alteration, and destruction. However, no security system is impenetrable and we cannot guarantee the security of our databases, nor can we guarantee that the information you supply will not be intercepted while being transmitted to us over the Internet.
      </p>
     </div>
     <div>
      <h2 class="text-[#030728] text-[30px] capitalize font-semibold"> 
Data Retention. 
      </h2>
      <p class=" text-[#303030]  text-[20px]">
      We will retain your information for as long as your account is active or as needed to provide you services. We will also retain and use your information as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements.
      </p>
     </div>
     <div>
      <h2 class="text-[#030728] text-[30px] capitalize font-semibold"> 
Your Rights and Choices. 
      </h2>
      <p class=" text-[#303030]  text-[20px]">
      You may have certain rights and choices regarding our collection, use, and disclosure of your information. Depending on your location, these rights can include accessing or rectifying information we hold about you, requesting the deletion of information, or requesting that we stop processing information about you. You may also have the right to withdraw consent to the use of your information.
      </p>
     </div>
     <div>
      <h2 class="text-[#030728] text-[30px] capitalize font-semibold"> 
Changes to Our Privacy Policy. 
      </h2>
      <p class=" text-[#303030]  text-[20px]">
      VisualQube reserves the right to update or modify this Privacy Policy at any time and from time to time without prior notice. Please review this policy periodically, and especially before you provide any personal information. Your continued use of our services after any changes or revisions to this Privacy Policy shall indicate your agreement with the terms of such revised Privacy Policy
      </p>
     </div>
     <div>
      <h2 class="text-[#030728] text-[30px] capitalize font-semibold"> 
Contact Us. 
      </h2>
      <p class=" text-[#303030]  text-[20px]">
     If you have any questions about this Privacy Policy or our information-handling practices, please contact us by email or postal mail. We welcome your questions and suggestions about our Privacy Policy and will use our best efforts to respond in a timely manner.
Thank you for choosing VisualQube. We are committed to continuously enhancing our services and safeguarding your personal information, ensuring that you have a fulfilling and secure experience.

      </p>
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
