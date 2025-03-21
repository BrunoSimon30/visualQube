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
     By accessing or using our website, products, or services, you confirm your agreement to be bound by these terms and conditions. If you do not agree to these terms, please refrain from using our services.
      </p>
     </div>
    <div>
      <h2 class="text-[#030728] text-[30px] capitalize font-semibold">
       Use of Services. 
      </h2>
      <p class=" text-[#303030]  text-[20px]">
     VisualQube provides a variety of digital marketing, branding, website design, app development, and other technological services. These services are provided under the condition that they are used for lawful purposes and in a manner that does not infringe on the rights of, or restrict or inhibit the use and enjoyment of, this service by any third party. This restriction includes conduct which is unlawful or which may harass, harm, or cause distress to anyone.
      </p>
     </div>
     <div>
      <h2 class="text-[#030728] text-[30px] capitalize font-semibold">
       Modification of Terms. 
      </h2>
      <p class=" text-[#303030]  text-[20px]">
     We reserve the right to change or modify these terms at any time without prior notice. Your continued use of VisualQube’s services after any such changes constitutes your acceptance of the new terms.
      </p>
     </div>
     <div>
      <h2 class="text-[#030728] text-[30px] capitalize font-semibold">
       Privacy Policy. 
      </h2>
      <p class=" text-[#303030]  text-[20px]">
     Your privacy is important to us. Our use of your personal information is governed by our Privacy Policy, which is incorporated into these terms by reference. By using our services, you agree to the processing of your data as described in the Privacy Policy and warrant that all data provided by you is accurate.
      </p>
     </div>
     <div>
      <h2 class="text-[#030728] text-[30px] capitalize font-semibold">
       Intellectual Property. 
      </h2>
      <p class=" text-[#303030]  text-[20px]">
     All content included on our site, such as text, graphics, logos, button icons, images, and software, is the property of VisualQube or its content suppliers and protected by international copyright and intellectual property laws. You agree not to reproduce, duplicate, copy, sell, resell, or exploit any portion of the service, use of the service, or access to the service without express written permission by us.
      </p>
     </div>
     <div>
      <h2 class="text-[#030728] text-[30px] capitalize font-semibold">
       User Obligations. 
      </h2>
      <p class=" text-[#303030]  text-[20px]">
     You agree to use our website and services responsibly. This includes not using our services for any unlawful purpose, not attempting to breach the security of our website, and not interfering with or disrupting the services or servers or networks connected to our services.
      </p>
     </div>
     <div>
      <h2 class="text-[#030728] text-[30px] capitalize font-semibold">
       Disclaimer of Warranties. 
      </h2>
      <p class=" text-[#303030]  text-[20px]">
     VisualQube provides its services "as is" and without any warranty or condition, express, implied or statutory. We specifically disclaim any implied warranties of title, merchantability, fitness for a particular purpose and non-infringement. We do not guarantee continuous, uninterrupted access to our services, and operation of our website and services may be interfered with by numerous factors outside of our control.
      </p>
     </div>
         <div>
      <h2 class="text-[#030728] text-[30px] capitalize font-semibold">
       Limitation of Liability. 
      </h2>
      <p class=" text-[#303030]  text-[20px]">
     In no event shall VisualQube, its directors, officers, employees, or affiliates be liable for lost profits or any special, incidental, indirect or consequential damages arising out of or in connection with our site, our services, or this agreement (however arising, including negligence). Our liability, and the liability of our directors, officers, employees, and affiliates, to you or any third parties in any circumstance is limited to the amount of fees you pay to us in the 12 months prior to the action giving rise to liability.
      </p>
     </div>
         <div>
      <h2 class="text-[#030728] text-[30px] capitalize font-semibold">
       Indemnification. 
      </h2>
      <p class=" text-[#303030]  text-[20px]">
     You agree to indemnify and hold VisualQube and (as applicable) our parent, subsidiaries, affiliates, VisualQube partners, officers, directors, agents, employees, and suppliers harmless from any claim or demand, including reasonable attorneys’ fees, made by any third party due to or arising out of your breach of this agreement or the documents it incorporates by reference, or your violation of any law or the rights of a third party.
      </p>
     </div>
      <div>
      <h2 class="text-[#030728] text-[30px] capitalize font-semibold">
       Governing Law. 
      </h2>
      <p class=" text-[#303030]  text-[20px]">
     These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which our company is established, without regard to its conflict of law principles.
      </p>
     </div>
      <div>
      <h2 class="text-[#030728] text-[30px] capitalize font-semibold">
       Dispute Resolution. 
      </h2>
      <p class=" text-[#303030]  text-[20px]">
     Any disputes related to these terms or your use of the services will be resolved by arbitration, except that you may assert claims in small claims court if your claims qualify.
      </p>
     </div>
     <div>
      <h2 class="text-[#030728] text-[30px] capitalize font-semibold">
       Termination. 
      </h2>
      <p class=" text-[#303030]  text-[20px]">
     We may terminate your access to all or any part of our services at any time, with or without cause, with or without notice, effective immediately, which may result in the forfeiture and destruction of all information associated with your membership. If you wish to terminate your account, you may simply discontinue using our services.
Thank you for choosing VisualQube. We hope our services provide significant value to your endeavors and help you achieve your digital aspirations. If you have any questions or concerns about these terms, please contact us for clarification.

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
            Terms & Conditions
            </h1>
          </div>
        </div>
      </section>
      <section className="term-sec pb-32 px-6 xl:px-0">
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
