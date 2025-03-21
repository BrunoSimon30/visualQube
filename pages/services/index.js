import Cta from "@/components/cta";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Industory from "@/components/Industory";
import Ready from "@/components/ready";
import Testimonial from "@/components/Testimonial";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function index() {
  const serRef = useRef();
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from(serRef.current.querySelectorAll(".up_hh"), {
      y: 100,
      opacity: 0,
      duration: 1,

      ease: "power4.out",
      scrollTrigger: {
        trigger: serRef.current,
        start: "top 70%", // Jab section viewport ke 80% pe aaye
        end: "bottom",
      },
    });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: serRef.current,
        start: "top 80%", // Jab section viewport ke 80% pe aaye
        end: "bottom  ",
        // markers: true,
        // pin: true,
        scrub: true,
        // toggleActions: "play pause resume reset",
        // toggleActions: "play none none reverse",
      },
    });

    tl.from(
      serRef.current?.querySelectorAll(".up_h"),
      {
        y: 100,
        duration: 1,
        scale: 0.8,
        opacity: 0,
        stagger: 0.4,
        ease: "power3.out",
      },
      "run"
    );
  }, []);
  return (
    <>
      <Head>
        <title>High-Quality Design That Impress | Visual Qube</title>
        <meta name="google-site-verification" content="" />
      </Head>
      <Header />
      <section className="ser-sec pt-24 md:pt-32  md:py-32 relative z-[1] px-8 ">
        <div className="hidden md:block ser-shape absolute right-0 bottom-20 z-[-1]  ">
          <Image
            className="ml-auto"
            src={"/img/manr-icon.png"}
            width={400}
            height={400}
            alt="visual"
          />
        </div>
        <div className="container mx-auto max-w-screen-2xl space-y-8">
          <div className="md:flex justify-between items-center space-y-4 md:space-y-0">
            <h1 className="text-[30px] leading-[30px] md:text-[5.729vw] text-[#030233] md:leading-[5.729vw]">
              Services
            </h1>
            <div className="md:w-[700px] md:h-[489px] overflow-hidden rounded-4xl border border-[#030728] ">
              <video
                className="vid w-[100%] scale-[1.5]"
                id="vid"
                autoPlay={true}
                loop={true}
                muted
                controls={false}
              >
                <source src="/img/vid.webm" />
              </video>
            </div>
          </div>
          <div>
            <h1 className="text-[20px] leading-[30px] md:text-[2.604vw] md:leading-[2.604vw] text-[#030728] font-[500]">
              We Create Impactful Digital <br />
              Experiences & Redefine
              <br /> Brand Identities.
            </h1>
          </div>
        </div>
      </section>
      <section
        ref={serRef}
        className="what-sec bg-[#FCFFF5] py-12 md:py-28 px-8  relative z-10"
      >
        <div className="container mx-auto max-w-screen-2xl space-y-8 md:space-y-24">
          <div className="up_hh W-h text-center space-y-4">
            <h1 className="text-[25px] leading-[30px] md:text-[4vw] md:leading-[4vw] font-[500] text-[#030728]">
              Stop the Guesswork, <br />
              Start Scaling.
            </h1>
            <p className="text-[#303030] text-[15px] leading-[25px] md:text-[20px] font-[500] md:leading-[35px]">
              At VisualQube, bold strategy meets real, measurable growth. <br />
              We elevate start-ups from the very bottom up and transform brands
              <br />
              into leaders of digital innovation and market dominance.
            </p>
          </div>
          <div>
            <div className="what-wrap">
              <div className="up_h md:grid md:grid-cols-2 gap-6 items-center border-t border-[#bfbfbf] py-16 space-y-2 md:space-y-0">
                <div className="w-l">
                  <Image
                    src={"/img/wl-1.png"}
                    width={518}
                    height={389}
                    alt="visual"
                  />
                </div>
                <div className="w-r space-y-6 md:space-y-8">
                  <h2 className="text-[25px] leading-[30px] md:text-[2.656vw] md:leading-[2.656vw] font-[500]">
                    Branding
                  </h2>
                  <p className="text-[#303030] text-[15px] leading-[25px] md:text-[20px] md:leading-[35px] font-[500] ">
                    A strong brand isn’t just about aesthetics—it’s about
                    perception, trust, and the emotions it evokes. Your brand
                    communicates your values, mission, and unique selling points
                    at a glance. Your brand tells your story, reflects identity,
                    and shapes the impact you desire. Create a bold,
                    unforgettable presence that captivates, connects, and
                    converts.
                  </p>
                  <p className="text-[#303030] text-[15px] leading-[25px] md:text-[20px] md:leading-[35px] font-[500] ">
                    At VisualQube, we craft compelling brand identities that
                    create lasting impressions, ensuring your audience connects
                    with you on a deeper level. Let’s our branding gurus make
                    your brand ruthlessly iconic!
                  </p>
                  <div>
                    <Link className="btn-a inline-block" href={"/branding"}>
                      Get Started!
                    </Link>
                  </div>
                </div>
              </div>
              <div className="up_h flex flex-col-reverse md:grid md:grid-cols-2 gap-6 items-center  border-t border-[#bfbfbf] py-16 ">
                <div className="w-r space-y-6 md:space-y-8">
                  <h2 className="text-[25px] leading-[30px] md:text-[2.656vw] md:leading-[2.656vw] font-[500]">
                    Website Design
                  </h2>
                  <p className="text-[#303030] text-[15px] leading-[25px] md:text-[20px] md:leading-[35px] font-[500] ">
                    Your website must be responsive and intuitive and should
                    function as smoothly as it looks. It creates a digital
                    experience that adapts to the needs of audience you target.
                    From fast-loading pages to user-friendly interfaces, we
                    ensure that your visitors not only stay longer but also
                    return. Embrace the power of seamless integration and
                    dynamic content that speaks directly to your customer's
                    journey.
                  </p>
                  <p className="text-[#303030] text-[15px] leading-[25px] md:text-[20px] md:leading-[35px] font-[500] ">
                    First impressions matter—so make yours impressive. With a
                    great website, engage your visitors, build trust, and drive
                    action. Smart, sleek, and stunning—your digital success
                    story begins with a click.
                  </p>
                  <div>
                    <Link
                      className="btn-a inline-block"
                      href={"/website-design"}
                    >
                      Get Started!
                    </Link>
                  </div>
                </div>
                <div className="w-l">
                  <Image
                    className="ml-auto"
                    src={"/img/wl-2.png"}
                    width={518}
                    height={389}
                    alt="visual"
                  />
                </div>
              </div>
              <div className="up_h md:grid md:grid-cols-2 gap-6 items-center border-t border-[#bfbfbf] py-16 space-y-2 md:space-y-0">
                <div className="w-l">
                  <Image
                    src={"/img/wl-3.png"}
                    width={518}
                    height={389}
                    alt="visual"
                  />
                </div>
                <div className="w-r space-y-6 md:space-y-8">
                  <h2 className="text-[25px] leading-[30px] md:text-[2.656vw] md:leading-[2.656vw] font-[500]">
                    App Development
                  </h2>
                  <p className="text-[#303030] text-[15px] leading-[25px] md:text-[20px] md:leading-[35px] font-[500] ">
                    Transform brilliant ideas into exceptional digital platforms
                    with VisualQube. Tailor your visions with cutting-edge
                    technology and innovative design to produce apps that are
                    both functional and revolutionary.
                  </p>
                  <p className="text-[#303030] text-[15px] leading-[25px] md:text-[20px] md:leading-[35px] font-[500] ">
                    With VisualQube, experience the creation of irresistible
                    platforms where outstanding functionality meets
                    groundbreaking innovation. Your vision is meticulously
                    shaped into seamless, dynamic mobile applications that
                    captivate and excel in the digital landscape.
                  </p>
                  <div>
                    <Link
                      className="btn-a inline-block"
                      href={"/app-design-development"}
                    >
                      Get Started!
                    </Link>
                  </div>
                </div>
              </div>
              <div className="up_h flex flex-col-reverse md:grid md:grid-cols-2 gap-6 items-center  border-t border-[#bfbfbf] py-16 ">
                <div className="w-r space-y-6 md:space-y-8">
                  <h2 className="text-[25px] leading-[30px] md:text-[2.656vw] md:leading-[2.656vw] font-[500]">
                    Digital Marketing
                  </h2>
                  <p className="text-[#303030]  text-[15px] leading-[25px] md:text-[20px] md:leading-[35px] font-[500] ">
                    Simply being seen isn't sufficient in today's digital age.
                    Your brand demands a strong presence that outperforms the
                    competition and attract buyers. VisualQube understands this
                    necessity and is dedicated to taking your digital footprint
                    to the next level.
                  </p>
                  <p className="text-[#303030]  text-[15px] leading-[25px] md:text-[20px] md:leading-[35px] font-[500] ">
                    Don’t need to settle just for visibility—you need dominance.
                    VisualQube goes beyond marketing, crafting powerful digital
                    journeys that grab attention, spark engagement, and drive
                    real results. From SEO to social media, PPC to content
                    marketing—your brand deserves a proven strategy that works.
                  </p>
                  <div>
                    <Link
                      className="btn-a inline-block"
                      href={"/digital-marketing"}
                    >
                      Get Started!
                    </Link>
                  </div>
                </div>
                <div className="w-l">
                  <Image
                    className="ml-auto"
                    src={"/img/wl-4.png"}
                    width={518}
                    height={389}
                    alt="visual"
                  />
                </div>
              </div>
              <div className="up_h md:grid md:grid-cols-2 gap-6 items-center border-t border-[#bfbfbf] py-16">
                <div className="w-l">
                  <Image
                    src={"/img/wl-5.png"}
                    width={518}
                    height={389}
                    alt="visual"
                  />
                </div>
                <div className="w-r space-y-8">
                  <h2 className="text-[25px] leading-[30px] md:text-[2.656vw] md:leading-[2.656vw] font-[500]">
                    Data & Cloud
                  </h2>
                  <p className="text-[#303030] text-[15px] leading-[25px] md:text-[20px] md:leading-[35px] font-[500]">
                    The right data and cloud services are crucial for staying
                    ahead in the fast-paced world of technology. VisualQube
                    provides the expertise and tools necessary to tap into the
                    full potential of your digital resources.
                  </p>
                  <p className="text-[#303030] text-[15px] leading-[25px] md:text-[20px] md:leading-[35px] font-[500]">
                    Power your business with smart data solutions and
                    hassle-free cloud integration. We optimize, secure, and
                    scale your digital infrastructure—ensuring efficiency,
                    agility, and above all, growth. We’ve got you covered
                    whether you need data analytics or cloud migration. We're
                    your reliable data safeguard during cloud outages!
                  </p>
                  <div>
                    <Link className="btn-a inline-block" href={"/data-cloud"}>
                      Get Started!
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     <Cta heading={`Go Big, Go Bold — Let VisualQube Propel You to the Top! `} rtc={'rtwcolor'} />
      <Industory />
      <Testimonial />
      <Ready />
      <Footer />
    </>
  );
}
