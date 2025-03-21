import Cta from "@/components/cta";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Industory from "@/components/Industory";
import MainBanner from "@/components/MainBanner";
import NewLetter from "@/components/Newletter";
import Plan from "@/components/plan";
import Ready from "@/components/ready";
import Services from "@/components/services";
import Testimonial from "@/components/Testimonial";
import Wecreate from "@/components/wecreate";
import Workour from "@/components/work";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>High-Quality Design That Impress | Visual Qube</title>
        <meta name="google-site-verification" content="" />
      </Head> 
      <Header />
      <MainBanner />
      <Cta heading={`Digital is Where the Magic Happens. Don’t Miss the Show! `} rtc={'rtbcolor'} />
      <Wecreate />
      <Services />
      <Workour />
      <Cta heading={`The Digital Race Is On—Lead It, Don’t Chase It. `} rtc={'rtwcolor'} />
      <Plan />
      <NewLetter />
      <Testimonial rtc={'rtwcolor'}/>
      <Industory />
      <Ready />
      <Footer />
    </>
  );
}
