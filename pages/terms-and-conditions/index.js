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
          Visualqube, LLC Terms and Conditions
        </h2>
        <p class="text-[#303030] text-[20px]">
          Effective Date: March 5, 2025<br/>
          Last Updated: March 5, 2025
        </p>
        <p class="text-[#303030] text-[20px] mt-4">
          Welcome to Visualqube, LLC – where your vision meets our creative superpowers.
          By accessing or using our website, products, or services, you (“you,” “user,” or “client”) agree to the following Terms and Conditions (“T&C”).
          If you don’t like rules, this is your sign to exit.
        </p>
      </div>
  
      <div>
        <h2 class="text-[#030728] text-[30px] capitalize font-semibold">
          1. Use of Services
        </h2>
        <p class="text-[#303030] text-[20px]">
          Visualqube, LLC provides top-tier services in digital marketing, branding, website design, app development, and more.<br/>
          You agree to:
          <ul class="list-disc pl-5">
            <li>Use our services for lawful purposes only.</li>
            <li>Respect others' rights — no harassment, no harm, no chaos.</li>
            <li>Stay out of our backend — hacking, breaching, and sneaky business will not be tolerated.</li>
          </ul>
        </p>
      </div>
  
      <div>
        <h2 class="text-[#030728] text-[30px] capitalize font-semibold">
          2. Ownership and Intellectual Property
        </h2>
        <p class="text-[#303030] text-[20px]">
          Everything on our site — from the clever copy to the gorgeous visuals — belongs to Visualqube, LLC or its licensed partners.<br/>
          You cannot:
          <ul class="list-disc pl-5">
            <li>Copy, resell, license, modify, or exploit our content.</li>
            <li>Reverse engineer or deep-link into our website.</li>
            <li>Pass off our work as your own.</li>
          </ul>
          Respect the craft, respect the creators.
        </p>
      </div>
  
      <div>
        <h2 class="text-[#030728] text-[30px] capitalize font-semibold">
          3. Modifications to Terms
        </h2>
        <p class="text-[#303030] text-[20px]">
          We can update these T&Cs whenever necessary.<br/>
          No postcards, no secret scrolls — just a fresh version posted online.<br/>
          Your continued use means you accept any updates.
        </p>
      </div>
  
      <div>
        <h2 class="text-[#030728] text-[30px] capitalize font-semibold">
          4. Privacy Policy
        </h2>
        <p class="text-[#303030] text-[20px]">
          Your privacy matters.<br/>
          Our use of your information is governed by our Privacy Policy, which is part of this agreement.<br/>
          By using our services, you’re giving the thumbs-up to that too.
        </p>
      </div>
  
      <div>
        <h2 class="text-[#030728] text-[30px] capitalize font-semibold">
          5. User Content and Responsibilities
        </h2>
        <p class="text-[#303030] text-[20px]">
          You are fully responsible for the content you upload or provide:
          <ul class="list-disc pl-5">
            <li>You guarantee it's yours (or you have permission).</li>
            <li>You grant us rights to use it solely for delivering services.</li>
            <li>You vow not to upload anything sketchy, illegal, or offensive.</li>
          </ul>
        </p>
      </div>
  
      <div>
        <h2 class="text-[#030728] text-[30px] capitalize font-semibold">
          6. Confidentiality
        </h2>
        <p class="text-[#303030] text-[20px]">
          If it's private — it stays private.<br/>
          Any sensitive information shared between us (pricing, project details, etc.) remains confidential unless already public.
        </p>
      </div>
  
      <div>
        <h2 class="text-[#030728] text-[30px] capitalize font-semibold">
          7. Feedback
        </h2>
        <p class="text-[#303030] text-[20px]">
          Got thoughts, ideas, improvements? We love it.<br/>
          By submitting feedback:
          <ul class="list-disc pl-5">
            <li>You allow us to use it freely.</li>
            <li>You waive any right to compensation.</li>
            <li>You agree it's not confidential.</li>
          </ul>
        </p>
      </div>
  
      <div>
        <h2 class="text-[#030728] text-[30px] capitalize font-semibold">
          8. Warranty Disclaimer
        </h2>
        <p class="text-[#303030] text-[20px]">
          Our services are provided “as is” and “as available.”<br/>
          We don’t guarantee flawless perfection, uninterrupted service, or virus-free experiences.<br/>
          Sometimes tech just has a bad day. We ride it out together.
        </p>
      </div>
  
      <div>
        <h2 class="text-[#030728] text-[30px] capitalize font-semibold">
          9. Limitation of Liability
        </h2>
        <p class="text-[#303030] text-[20px]">
          Visualqube, LLC’s liability to you is limited:<br/>
          No responsibility for lost profits, indirect damages, or weird catastrophic stuff.
        </p>
      </div>
  
      <div>
        <h2 class="text-[#030728] text-[30px] capitalize font-semibold">
          10. Refund Policy
        </h2>
        <p class="text-[#303030] text-[20px]">
          Refunds MAY be approved if:
          <ul class="list-disc pl-5">
            <li>You reject the initial deliverable without requesting revisions.</li>
            <li>You cancel before any work is started (admin fees apply).</li>
            <li>We cannot complete your project due to internal reasons.</li>
          </ul>
          Refunds WILL NOT be approved if:
          <ul class="list-disc pl-5">
            <li>Discounted or promotional package was purchased.</li>
            <li>Initial or revised designs were approved.</li>
            <li>You requested revisions.</li>
            <li>You ghosted us for 14+ consecutive days.</li>
            <li>You changed your mind or business model.</li>
            <li>Final deliverables were approved or delivered.</li>
            <li>Third-party services (SEO, hosting, domain registration, etc.) were involved.</li>
            <li>Scope changed massively without a new agreement.</li>
          </ul>
          Special Notes:<br/>
          <ul class="list-disc pl-5">
            <li>Bundles: Refunds only apply to the unsatisfactory service, not the entire package.</li>
            <li>Post-Refund Ownership: After a refund, Visualqube, LLC retains full ownership of any deliverables. You can’t use anything we made.</li>
          </ul>
          Requesting a Refund:<br/>
          Send an email to <a href="mailto:billing@visualqube.com" class="text-blue-500">billing@visualqube.com</a> with your project ID, full name, and reason for refund. We'll review and respond within 5–7 business days.
        </p>
      </div>
  
      <div>
        <h2 class="text-[#030728] text-[30px] capitalize font-semibold">
          11. Promotional Offers and Discounts
        </h2>
        <p class="text-[#303030] text-[20px]">
          Promotions and discounts are subject to change, revocation, or modification without notice.<br/>
          Fair use policies apply to all deals.
        </p>
      </div>
  
      <div>
        <h2 class="text-[#030728] text-[30px] capitalize font-semibold">
          12. Dispute Resolution
        </h2>
        <p class="text-[#303030] text-[20px]">
          Any dispute, claim, or disagreement will be resolved via binding arbitration in the State of Utah.<br/>
          Small claims court is available for qualifying claims — but again, in Utah only.
        </p>
      </div>
  
      <div>
        <h2 class="text-[#030728] text-[30px] capitalize font-semibold">
          13. Governing Law
        </h2>
        <p class="text-[#303030] text-[20px]">
          These Terms are governed exclusively by the laws of the State of Utah, USA.
        </p>
      </div>
  
      <div>
        <h2 class="text-[#030728] text-[30px] capitalize font-semibold">
          14. Termination
        </h2>
        <p class="text-[#303030] text-[20px]">
          We may terminate your account or services at any time, with or without cause, effective immediately.<br/>
          If you want to leave, you can stop using our services anytime — no hard feelings.
        </p>
      </div>
  
      <div>
        <h2 class="text-[#030728] text-[30px] capitalize font-semibold">
          15. Entire Agreement
        </h2>
        <p class="text-[#303030] text-[20px]">
          These T&Cs + our Privacy Policy + any posted legal notices = our full agreement.<br/>
          No side deals, no secret handshakes.
        </p>
      </div>
      <div>
        <h2 class="text-[#030728] text-[30px] capitalize font-semibold">
          16. Delivery Method / Shipping Policy
        </h2>
        <div class="space-y-3">
        <p class="text-[#303030] text-[20px]">
          All deliverables are sent <strong>digitally and/or electronically</strong> . We operate strictly on a milestone-based delivery system, meaning each stage of the project is completed and delivered as agreed upon in the project scope or contract. Once a milestone is approved, the corresponding deliverables are shared via email or any preferred communication channel mutually agreed upon between Visualqube and the client.
        </p>
         <p class="text-[#303030] text-[20px]">
          We do <strong>not offer any physical shipping</strong> or printed deliveries. All files, assets, or materials are transferred electronically. It is the client’s responsibility to ensure that their provided communication channels (e.g., email address, Slack, Trello, etc.) are active and accessible throughout the duration of the project.
        </p>
          <p class="text-[#303030] text-[20px]">Once a deliverable is sent, Visualqube will consider that milestone fulfilled unless the client raises a concern or revision request as per the agreed revision policy.</p>
          </div>
      </div>
  
      <div>
        <h2 class="text-[#030728] text-[30px] capitalize font-semibold">
          Final Words
        </h2>
        <p class="text-[#303030] text-[20px]">
          Thanks for trusting Visualqube, LLC.<br/>
          We’re here to launch your dreams, not just build websites.<br/>
          Got questions? Drop us a line at <a href="mailto:Info@visualqube.com" class="text-blue-500">Info@visualqube.com</a> — we actually read our emails. 👀<br/>
          Let's make magic happen. 🚀
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
