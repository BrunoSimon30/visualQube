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
      <h2 class="text-[#030728] text-[30px] capitalize font-semibold">Terms & Conditions</h2>
      <p class=" text-[#303030]  text-[20px]">Welcome to Your Visual Qube! By accessing and utilizing our website and services, you agree to abide by the following Terms and Conditions. Please read them carefully.</p>
     </div>
     <div>
      <h2 class="text-[#030728] text-[30px] capitalize font-semibold">Intellectual Property</h2>
      <p class=" text-[#303030]  text-[20px]">All content, including but not limited to text, graphics, logos, images, and software, on our website belongs to Your Visual Qube and is protected by applicable copyright and intellectual property laws.</p>
     </div>
     <div>
      <h2 class="text-[#030728] text-[30px] capitalize font-semibold">Service Engagement</h2>
      <p class=" text-[#303030]  text-[20px]">Engaging with our services may require you to agree to additional terms specific to the service offered. Please review and accept those terms before proceeding.</p>
     </div>
     <div>
      <h2 class="text-[#030728] text-[30px] capitalize font-semibold">User Conduct</h2>
      <p class=" text-[#303030]  text-[20px]">You agree not to use our website or services for any unlawful or prohibited purposes. Respect the privacy of others and refrain from engaging in harmful activities.</p>
     </div>
     <div>
      <h2 class="text-[#030728] text-[30px] capitalize font-semibold">Website Modifications</h2>
      <p class=" text-[#303030]  text-[20px]">We reserve the right to modify, suspend, or discontinue any part of our website or services at any time without prior notice.</p>
     </div>
     <div>
      <h2 class="text-[#030728] text-[30px] capitalize font-semibold">Third-Party Links</h2>
      <p class=" text-[#303030]  text-[20px]">Our website may contain links to third-party websites. We are not responsible for the content, privacy practices, or terms of such external websites.</p>
     </div>
     <div>
      <h2 class="text-[#030728] text-[30px] capitalize font-semibold">Limitation of Liability</h2>
      <p class=" text-[#303030]  text-[20px]">Your Visual Qube shall not be liable for any direct, indirect, incidental, or consequential damages arising out of your use of our website or services.</p>
     </div>
     <div class="space-y-4">
      <h2 class="text-[#030728] text-[30px] capitalize font-semibold">To claim a Refund</h2>
      <p class=" text-[#303030]  text-[20px]">At Your Visual Qube, to claim a refund follow these steps:</p>
       <ul class="list-disc list-inside text-[#303030]  text-[20px] space-y-2">
        <li>Dial our Toll-Free Number <a class=" text-[#f51a1a]" href="tel:#(123)123-123"># (123) 123-1234 </a>and speak with your respective Project Manager to initiate the refund process. </li>
        <li>Start a Live Chat and speak with a representative to begin the refund request.</li>
        <li>Send us an Email to initiate the refund.</li>
    </ul>
     </div>
      <div class="space-y-4">
      <h2 class="text-[#030728] text-[30px] capitalize font-semibold">Refund Policy</h2>
      <p class=" text-[#303030]  text-[20px]">Your Visual Qube ensures 100% customer satisfaction through our Revision Policy, allowing free revisions to improve the initial design brief with the guidance of our account manager.</p>
      <ul class="list-disc list-inside text-[#303030]  text-[20px] space-y-2">
        
        <li>If you wish to request a refund, ensure that you haven't published or used the designs online. Contact us within five days of the initial design delivery if you're dissatisfied. After this period, it will be assumed that the initial designs were satisfactory.</li>
        <li>No refund requests will be entertained if there has been no action on your order for 30 days after placing it. However, you can reactivate your design order by paying 30% of the service amount.</li>
        <li>Refund policies for Combo/Special packages will be similar to single packages, and proof of purchase will be required.</li>
        
    </ul>
   
    <p class=" text-[#303030]  text-[20px]">
    Refunds will be provided based on the following arrangements:<br/>

Full refund before order delivery (less 10% processing and service fee). 66% refund within 48 hours of initial design delivery (less 10% processing and service fee). 33% refund between 48-120 hours of initial design delivery (less 10% processing and service fee). No refund after 120 hours of initial design delivery (less 10% processing and service fee), but contact us for any issues.<br/>

To claim a refund, contact our support staff. We reserve the right to approve or disapprove refund requests based on user agreement violations.<br/>

Refunds will be processed within 10-12 business days or in monthly installments for amounts exceeding $1000.<br/>

Rejection of refund policy may occur for various reasons listed in our policy, such as selecting a Combo package, irrelevant cancelation reasons, change of mind, long periods of non-contact, approval of primary design, policy violations, approaching other designers or companies for the same project, missing information in the creative brief, demanding overall design changes, and more.<br/>

Refund policies specific to websites are outlined in our policy, including partial refunds for incomplete work, no refunds for approved designs or live websites, and non-refundable products or services like Downloadable Software, Domain Name Registration, and Web Hosting.<br/>

For cases not covered by the standard policy, refund requests will be evaluated on a case-by-case basis, ensuring fairness in each situation.
    </p>
      </div>
       
      <div>
      <h2 class="text-[#030728] text-[30px] capitalize font-semibold">Governing Law and Jurisdiction</h2>
      <p class=" text-[#303030]  text-[20px]">These Terms and Conditions shall be governed by the laws of (Your Jurisdiction), and any disputes shall be subject to the exclusive jurisdiction of the courts of (Your Jurisdiction).
<br/>
By using Your Visual Qube website and services, you acknowledge and agree to these Terms and Conditions in their entirety. If you do not agree with any part of these terms, please refrain from using our website and services.</p>
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
