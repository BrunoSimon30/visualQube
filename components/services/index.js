import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

export default function Services() {
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
                    Your brand is not just a name—it tells your story, reflects
                    identity, and shapes the impact you desire. Create a bold,
                    unforgettable presence that captivates, connects, and
                    converts. Let’s our branding gurus make your brand
                    ruthlessly iconic!
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
                    First impressions matter—so make yours impressive. A great
                    website isn’t just about looking good; it’s about engaging
                    visitors, building trust, and driving action. Smart, sleek,
                    and stunning—your digital presence starts here.
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
                    Transform your digital dreams into app-tastic realities with
                    our cutting-edge app development. VisualQube not only builds
                    marvelous apps but also crafts irresistible platforms where
                    superb functionality dances tango with blazing innovation.
                    We’re digital wizards, and we grab your vision by the horns
                    and morph it into seamless, dynamic mobile applications.
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
                    Settled just for visibility? It’s not enough—you need
                    dominance. VisualQube goes beyond typical marketing,
                    crafting powerful digital journeys that grab attention,
                    spark engagement, and drive real results. From SEO to social
                    media, PPC to content marketing—your brand deserves a proven
                    strategy that works.
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
                    Empower your business with cutting-edge Data Visualization,
                    Business Intelligence, and Cloud Infrastructure. We provide
                    scalable cloud solutions, intuitive dashboards, and advanced
                    analytics to transform data into actionable insights.
                    Whether you need cloud migration, real-time reporting, or
                    secure infrastructure, we help you make data-driven
                    decisions with confidence.
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
    </>
  );
}
