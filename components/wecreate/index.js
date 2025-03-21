import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

export default function Wecreate() {
  const weRef = useRef();
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.to(weRef.current, {
      scrollTrigger: {
        trigger: weRef.current,
        scroller: "body",
        start: "top top",
        end: "bottom top",
        pin: true,
        pinSpacing: false,
        scrub: 1,
        // markers: true,
      },
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: weRef.current,
        start: "top 20%", // Jab section viewport ke 80% pe aaye
        end: "bottom 50%",
        // markers: true,
        // pin: true,
        // scrub: 4,
        // toggleActions: "play pause resume reset",
        // toggleActions: "play none none reverse",
      },
    });

    tl.from(
      weRef.current?.querySelectorAll(".up_h"),
      {
        y: 100,
        duration: 1,
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
        ref={weRef}
        className="we-sec bg-[#030728]  py-16 md:py-28 px-8 relative "
      >
        <div className="container mx-auto max-w-screen-2xl">
          <div className="space-y-12 md:space-y-24">
            <div className="up_h">
              <h1 className="text-[25px] leading-[30px] md:text-[4.167vw] md:leading-[4.167vw] text-white">
                Lead The Future With Bold Digital Innovation. Let’s Innovate!
              </h1>
            </div>
            <div className="md:grid md:grid-cols-2 gap-6 items-center space-y-8 md:space-y-0">
              <div className="up_h">
                <Image
                  src={"/img/we-r.png"}
                  width={431}
                  height={431}
                  alt="visual"
                />
              </div>
              <div className="space-y-12 up_h">
                <p className="text-[15px] leading-[25px] md:text-[20px] md:leading-[35px] text-white">
                  Harnessing creative minds and advanced technology, VisualQube
                  builds digital experiences that captivate and redefine. Every
                  solution we deliver pushes boundaries with innovation, and
                  they are designed to blast into the digital frontier.
                </p>
                <p className="text-[15px] leading-[25px] md:text-[20px] md:leading-[35px] text-white">
                  From bold brand identities to cutting-edge solutions, expect
                  seamless experiences that disrupt the conventional. Whether
                  launching a startup or scaling an enterprise, the right
                  approach ensures success.
                </p>
                <div>
                  <Link
                    className="bg-[#05C7AA] rounded py-2 md:py-4  px-6 md:px-8 text-[#030728] text-[13px] md:text-[17px] font-[500] transition duration-300 hover:bg-[#fff] "
                    href={"/"}
                  >
                    Get Started!
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
