import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

export default function Counter({heading}) {
  const countRefs = useRef([]);
  const sectionRef = useRef(); // Section ka ref

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    countRefs.current.forEach((el) => {
      gsap.fromTo(
        el,
        { innerText: 0 },
        {
          innerText: el.dataset.count,
          duration: 3,
          ease: "power2.out",
          snap: { innerText: 1 },
          onUpdate: function () {
            el.innerText = Math.floor(this.targets()[0].innerText) + "+";
          },
          scrollTrigger: {
            trigger: sectionRef.current, // Jab section viewport me aaye
            // markers: true,
            start: "top 40%", // 80% tak scroll hone par start hoga
            once: true, // Sirf ek bar chale
          },
        }
      );
    });
  }, []);

  return (
    <>
      <section ref={sectionRef} className="count-sec py-16 md:py-32 bg-[#030728] px-8">
        <div className="container mx-auto max-w-screen-2xl space-y-6 md:space-y-24">
          <div>
            <h1 className="text-white text-[30px] leading-[35px] md:text-[4.167vw] md:leading-[4.167vw] font-[500] capitalize md:w-[70%] ">
              {heading}
            </h1>
          </div>
          <div className="md:grid md:grid-cols-3 gap-6 md:divide-x divide-[#05C7AA]">
            <div className="px-2 py-6 text-center">
              <h2
                ref={(el) => (countRefs.current[0] = el)}
                data-count="1300"
                className="text-[#05C7AA] text-[50px]  md:text-[4.167vw] font-bold"
              >
                0
              </h2>
              <p className="text-white text-[20px] md:text-[1.51vw]">Completed Projects</p>
            </div>
            <div className="px-2 py-6 text-center">
              <h2
                ref={(el) => (countRefs.current[1] = el)}
                data-count="600"
                className="text-[#05C7AA] text-[50px]  md:text-[4.167vw] font-bold"
              >
                0
              </h2>
              <p className="text-white text-[20px] md:text-[1.51vw]">Satisfied Clients</p>
            </div>
            <div className="px-2 py-6 text-center">
              <h2
                ref={(el) => (countRefs.current[2] = el)}
                data-count="350"
                className="text-[#05C7AA] text-[50px]  md:text-[4.167vw] font-bold"
              >
                0
              </h2>
              <p className="text-white text-[20px] md:text-[1.51vw]">Designers & Developers</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
