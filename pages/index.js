import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from "next/image";
import Link from "next/link";
import { IoCheckmarkSharp } from "react-icons/io5";

export default function Home() {
  return (
    <>
 <Header/>
      <section className="main-sec  h-screen bg-[#FCFFF5] flex items-center justify-center">
        <div className="container mx-auto max-w-screen-2xl">
          <div className="grid grid-cols-2 gap-6">
            <div className="Mban-l space-y-12">
              <div>
                <h1 className="text-[5.729vw] text-[#030233] leading-[5.729vw]">
                  Digital Experiences That Inspire.
                </h1>
              </div>
              <div className="flex gap-12 items-center">
                <span>
                  <Image src={"/img/banicon.svg"} width={108} height={108} alt='visual' />
                </span>
                <p className="text-[#303030] text-[17px]">
                  We are a creative agency passionate
                  <br /> about technology, design and telling <br />
                  unique stories.
                </p>
              </div>
            </div>
            <div className="text-right">
              <Image
                className="ml-auto"
                src={"/img/manr-icon.png"}
                width={489}
                height={489}
                alt='visual'
              />
            </div>
          </div>
        </div>
      </section>
      <section className="cta-sec bg-[#05C7AA] py-16">
        <div className="container mx-auto max-w-screen-2xl">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-[#030728] text-[2.656vw]  leading-[2.656vw] font-[500]">
                Want to grow your business digitally?
              </h1>
            </div>
            <div>
              <Link
                className="bg-[#FCFFF5] rounded py-4 px-8 text-[#030728] text-[17px] font-[500]"
                href={"/"}
              >
                Get Started!
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="we-sec bg-[#030728]  py-28">
        <div className="container mx-auto max-w-screen-2xl">
          <div className="space-y-24">
            <div>
              <h1 className="text-[4.167vw] leading-[4.167vw] text-white">
                We create impactful
                <br /> digital experiences & redefine
                <br /> brand identities.
              </h1>
            </div>
            <div className="grid grid-cols-2 gap-6 items-center">
              <div>
                <Image src={"/img/we-r.png"} width={431} height={431} alt='visual' />
              </div>
              <div className="space-y-12">
                <p className="text-[20px] leading-[35px] text-white">
                  We use experience and creativity to break the mold and craft
                  digital experiences that defy the status quo. Harnessing the
                  cutting-edge technologies of today, we disrupt, innovate and
                  shape the behaviors of tomorrow.
                </p>
                <p className="text-[20px] leading-[35px] text-white">
                  Our portfolio is not a simple list of projects. It is a map of
                  digital adventures we shared with our clients, whether they
                  are small family businesses and startups or big players on the
                  corporate scene.
                </p>
                <div>
                  <Link
                    className="bg-[#05C7AA] rounded py-4 px-8 text-[#030728] text-[17px] font-[500]"
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
      <section className="what-sec bg-[#FCFFF5] py-28">
        <div className="container mx-auto max-w-screen-2xl space-y-24">
          <div className="W-h text-center space-y-4">
            <h1 className="text-[4.167vw] leading-[4.167vw] font-[500] text-[#030728]">
              This is what we do
            </h1>
            <p className="text-[#303030] text-[20px] font-[500] leading-[35px]">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla
              <br /> pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt <br />
              mollit anim id est laborum.
            </p>
          </div>
          <div>
            <div className="what-wrap">
              <div className="grid grid-cols-2 gap-6 items-center border-t border-[#bfbfbf] py-16">
                <div className="w-l">
                  <Image src={"/img/wl-1.png"} width={518} height={389} alt='visual' />
                </div>
                <div className="w-r space-y-8">
                  <h2 className="text-[2.656vw] leading-[2.656vw] font-[500]">
                    Branding
                  </h2>
                  <p className="text-[#303030] text-[20px] font-[500] leading-[35px]">
                    Build a brand that your customers will love. Your brand has
                    big ideas, but do you have a signature moment? We focus
                    on brand identity & impactful web design. Our branding
                    agency can elevate your brand!
                  </p>
                  <div>
                    <Link className="btn-a inline-block" href={""}>
                      Get Started!
                    </Link>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6 items-center  border-t border-[#bfbfbf] py-16 ">
                <div className="w-r space-y-8">
                  <h2 className="text-[2.656vw] leading-[2.656vw] font-[500]">
                    Website Design
                  </h2>
                  <p className="text-[#303030] text-[20px] font-[500] leading-[35px]">
                    We craft intelligent web designs that highlight your brand
                    identity, engage site visitors, and leave a lasting
                    impression. A well-designed web page is a smart investment
                    for any business.
                  </p>
                  <div>
                    <Link className="btn-a inline-block" href={""}>
                      Get Started!
                    </Link>
                  </div>
                </div>
                <div className="w-l">
                  <Image  className="ml-auto" src={"/img/wl-2.png"} width={518} height={389} alt='visual' />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6 items-center border-t border-[#bfbfbf] py-16">
                <div className="w-l">
                  <Image src={"/img/wl-3.png"} width={518} height={389} alt='visual' />
                </div>
                <div className="w-r space-y-8">
                  <h2 className="text-[2.656vw] leading-[2.656vw] font-[500]">
                    App Development
                  </h2>
                  <p className="text-[#303030] text-[20px] font-[500] leading-[35px]">
                    Our web designers build world-class websites. We are
                    ambitious builders. We ensure every project aligns with your
                    brand identity and elevates the user experience. Let's
                    develop something amazing!
                  </p>
                  <div>
                    <Link className="btn-a inline-block" href={""}>
                      Get Started!
                    </Link>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6 items-center  border-t border-[#bfbfbf] py-16 ">
                <div className="w-r space-y-8">
                  <h2 className="text-[2.656vw] leading-[2.656vw] font-[500]">
                    Digital Marketing
                  </h2>
                  <p className="text-[#303030] text-[20px] font-[500] leading-[35px]">
                    We craft intelligent web designs that highlight your brand
                    identity, engage site visitors, and leave a lasting
                    impression. A well-designed web page is a smart investment
                    for any business.
                  </p>
                  <div>
                    <Link className="btn-a inline-block" href={""}>
                      Get Started!
                    </Link>
                  </div>
                </div>
                <div className="w-l">
                  <Image  className="ml-auto" src={"/img/wl-4.png"} width={518} height={389}  alt='visual'/>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6 items-center border-t border-[#bfbfbf] py-16">
                <div className="w-l">
                  <Image src={"/img/wl-5.png"} width={518} height={389} alt='visual' />
                </div>
                <div className="w-r space-y-8">
                  <h2 className="text-[2.656vw] leading-[2.656vw] font-[500]">
                    Data & Cloud
                  </h2>
                  <p className="text-[#303030] text-[20px] font-[500] leading-[35px]">
                    Our web designers build world-class websites. We are
                    ambitious builders. We ensure every project aligns with your
                    brand identity and elevates the user experience. Let's
                    develop something amazing!
                  </p>
                  <div>
                    <Link className="btn-a inline-block" href={""}>
                      Get Started!
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="work-sec  relative px-24 pb-28">
        <div className="w-shape absolute left-0 right-0 w-fit m-auto">
          <Image src={"/img/work-shape.png"} width={1800} height={1180} alt='visual' />
          <div className="text-right absolute top-24  right-60     w-full">
            <h1 className="text-[18.75vw] leading-[18.75vw] text-white">
              Work
            </h1>
          </div>
        </div>
        <div className="container mx-auto max-w-screen-2xl">
          <div className="work-con  pt-32 ">
            <div className="grid grid-cols-2 gap-6 items-center">
              <div className="work-l space-y-24">
                <div className="wrok-bx relative">
                  <div className="work-img">
                    <Image src={"/img/work1.png"} width={655} height={833} alt='visual'/>
                  </div>
                  <div className="work-ctn space-y-6 absolute bottom-0 left-0 right-0 px-12 py-18">
                    <h2 className="text-[#030728] text-[2.656vw] capitalize leading-[2.656vw]">
                      enim adminim
                    </h2>
                    <div className="workist   space-y-2">
                      <div className="flex gap-2">
                        <Link
                          className=" border border-[] rounded-4xl px-8 py-4"
                          href={"/"}
                        >
                          Strategy
                        </Link>
                        <Link
                          className=" border border-[] rounded-4xl px-8 py-4"
                          href={"/"}
                        >
                          UI/UX Design
                        </Link>
                        <br />
                      </div>
                      <div className="flex gap-2">
                        <Link
                          className=" border border-[] rounded-4xl px-8 py-4"
                          href={"/"}
                        >
                          brand identity
                        </Link>
                        <Link
                          className=" border border-[] rounded-4xl px-8 py-4"
                          href={"/"}
                        >
                          Development
                        </Link>
                        <br />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="wrok-bx relative">
                  <div className="work-img">
                    <Image src={"/img/work2.png"} width={655} height={833} alt='visual' />
                  </div>
                  <div className="work-ctn space-y-6 absolute bottom-0 left-0 right-0 px-12 py-18">
                    <h2 className="text-[#030728] text-[2.656vw] capitalize leading-[2.656vw]">
                      enim adminim
                    </h2>
                    <div className="workist   space-y-2">
                      <div className="flex gap-2">
                        <Link
                          className=" border border-[] rounded-4xl px-8 py-4"
                          href={"/"}
                        >
                          Strategy
                        </Link>
                        <Link
                          className=" border border-[] rounded-4xl px-8 py-4"
                          href={"/"}
                        >
                          UI/UX Design
                        </Link>
                        <br />
                      </div>
                      <div className="flex gap-2">
                        <Link
                          className=" border border-[] rounded-4xl px-8 py-4"
                          href={"/"}
                        >
                          brand identity
                        </Link>
                        <Link
                          className=" border border-[] rounded-4xl px-8 py-4"
                          href={"/"}
                        >
                          Development
                        </Link>
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="work-l space-y-24">
                <div className="wrok-bx relative">
                  <div className="work-img">
                    <Image src={"/img/work3.png"} width={655} height={833} alt='visual' />
                  </div>
                  <div className="work-ctn space-y-6 absolute bottom-0 left-0 right-0 px-12 py-18">
                    <h2 className="text-[#030728] text-[2.656vw] capitalize leading-[2.656vw]">
                      enim adminim
                    </h2>
                    <div className="workist   space-y-2">
                      <div className="flex gap-2">
                        <Link
                          className=" border border-[] rounded-4xl px-8 py-4"
                          href={"/"}
                        >
                          Strategy
                        </Link>
                        <Link
                          className=" border border-[] rounded-4xl px-8 py-4"
                          href={"/"}
                        >
                          UI/UX Design
                        </Link>
                        <br />
                      </div>
                      <div className="flex gap-2">
                        <Link
                          className=" border border-[] rounded-4xl px-8 py-4"
                          href={"/"}
                        >
                          brand identity
                        </Link>
                        <Link
                          className=" border border-[] rounded-4xl px-8 py-4"
                          href={"/"}
                        >
                          Development
                        </Link>
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-sec bg-[#05C7AA] py-16">
        <div className="container mx-auto max-w-screen-2xl">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-[#030728] text-[2.656vw]  leading-[2.656vw] font-[500]">
                Want to grow your business digitally?
              </h1>
            </div>
            <div>
              <Link
                className="bg-[#FCFFF5] rounded py-4 px-8 text-[#030728] text-[17px] font-[500]"
                href={"/"}
              >
                Get Started!
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="plan-sec py-28 bg-[#FCFFF5]">
        <div className="container mx-auto max-w-screen-2xl space-y-18">
          <div className="plan-h text-center space-y-4">
            <h1 className="text-[4.167vw] leading-[4.167vw] font-[500] text-[#030728]">
              Plans & Pricing
            </h1>
            <p className="text-[#303030] text-[20px] font-[500] leading-[35px]">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
              <br /> Excepteur sint occaecat cupidatat non proident.
            </p>
          </div>
          <div className="plan-wrap space-y-24">
            <div className="plan-btn text-center">
              <ul className="plam-menu flex justify-center gap-6">
                <li>
                  <Link
                    className="bg-[#030728] border border-[#030728] text-[#fff] text-[18px] font-[400] rounded-4xl px-8 py-3"
                    href={"/"}
                  >
                    Branding
                  </Link>
                </li>
                <li>
                  <Link
                    className="border border-[#030728] text-[#030728] text-[18px] font-[400] rounded-4xl px-8 py-3"
                    href={"/"}
                  >
                    Website Design
                  </Link>
                </li>
                <li>
                  <Link
                    className="border border-[#030728] text-[#030728] text-[18px] font-[400] rounded-4xl px-8 py-3"
                    href={"/"}
                  >
                    App Development
                  </Link>
                </li>
                <li>
                  <Link
                    className="border border-[#030728] text-[#030728] text-[18px] font-[400] rounded-4xl px-8 py-3"
                    href={"/"}
                  >
                    Digital Marketing
                  </Link>
                </li>
              </ul>
            </div>
            <div className="plan-bx grid grid-cols-3 gap-6">
              <div className="plan-box  relative z-[1]">
                <div className="absolute z-[-1] left-0 right-0 bottom-0 top-0 m-auto w-fit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="460"
                    height="838"
                    viewBox="0 0 460 838"
                    fill="none"
                  >
                    <mask id="path-1-inside-1_149_387" fill="white">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M453.316 153.193L313.553 7.59603C309.3 3.16483 303.223 0.633029 295.931 0H161.638H151.915H23.6988C10.9379 0 0 10.7613 0 24.6879V238V307.652V808C0 824.569 13.4315 838 30 838H430C446.569 838 460 824.569 460 808V454.514V318.413V308.285V238V170.918C460 163.954 457.569 157.624 453.316 153.193Z"
                      />
                    </mask>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M453.316 153.193L313.553 7.59603C309.3 3.16483 303.223 0.633029 295.931 0H161.638H151.915H23.6988C10.9379 0 0 10.7613 0 24.6879V238V307.652V808C0 824.569 13.4315 838 30 838H430C446.569 838 460 824.569 460 808V454.514V318.413V308.285V238V170.918C460 163.954 457.569 157.624 453.316 153.193Z"
                      fill="white"
                    />
                    <path
                      d="M313.553 7.59603L312.832 8.28854L313.553 7.59603ZM453.316 153.193L452.594 153.885L453.316 153.193ZM295.931 0V-1H295.975L296.018 -0.996253L295.931 0ZM314.275 6.90353L454.037 152.5L452.594 153.885L312.832 8.28854L314.275 6.90353ZM296.018 -0.996253C303.488 -0.347773 309.814 2.25642 314.275 6.90353L312.832 8.28854C308.786 4.07324 302.959 1.61383 295.845 0.996253L296.018 -0.996253ZM161.638 -1H295.931V1H161.638V-1ZM151.915 -1H161.638V1H151.915V-1ZM23.6988 -1H151.915V1H23.6988V-1ZM-1 24.6879C-1 10.2309 10.3639 -1 23.6988 -1V1C11.5119 1 1 11.2916 1 24.6879H-1ZM-1 238V24.6879H1V238H-1ZM1 238V307.652H-1V238H1ZM1 307.652V808H-1V307.652H1ZM1 808C1 824.017 13.9837 837 30 837V839C12.8792 839 -1 825.121 -1 808H1ZM30 837H430V839H30V837ZM430 837C446.016 837 459 824.017 459 808H461C461 825.121 447.121 839 430 839V837ZM459 808V454.514H461V808H459ZM459 454.514V318.413H461V454.514H459ZM459 318.413V308.285H461V318.413H459ZM459 308.285V238H461V308.285H459ZM461 170.918V238H459V170.918H461ZM454.037 152.5C458.489 157.138 461 163.726 461 170.918H459C459 164.183 456.649 158.11 452.594 153.885L454.037 152.5Z"
                      fill="black"
                      mask="url(#path-1-inside-1_149_387)"
                    />
                  </svg>
                </div>
                <div className="px-12 py-24 space-y-10">
                  <div>
                    <h2 className="text-[#05C7AA]  text-[1.406vw] font-semibold">
                      Elite Plan
                    </h2>
                  </div>
                  <div className="space-y-5">
                    <div className="flex items-end">
                      <h2 className="text-[4.167vw] text-[#030728] leading-[4.167vw] font-semibold">
                        $240
                      </h2>
                      <h3 className="text-[1.406vw] text-[#656565] font-semibold line-through">
                        $780
                      </h3>
                    </div>
                    <p className="text-[#303030] text-[20px] font-[500]">
                      Basic branding solution for businesses to
                      <br /> kickstart their branding.
                    </p>
                  </div>
                  <div>
                    <Link
                      className="bg-[#FB0] py-4 inline-block w-full rounded text-center text-[18px]"
                      href={""}
                    >
                      Get Started!
                    </Link>
                  </div>
                  <div>
                    <ul className="plan-list">
                      <li>
                        <span>
                          <IoCheckmarkSharp />
                        </span>
                        <p>10 Custom Logo Design Concepts</p>
                      </li>
                      <li>
                        <span>
                          <IoCheckmarkSharp />
                        </span>
                        <p>6 Award Winning Designers</p>
                      </li>
                      <li>
                        <span>
                          <IoCheckmarkSharp />
                        </span>
                        <p>Unlimited Revisions</p>
                      </li>
                      <li>
                        <span>
                          <IoCheckmarkSharp />
                        </span>
                        <p>Free Icon Design</p>
                      </li>
                      <li>
                        <span>
                          <IoCheckmarkSharp />
                        </span>
                        <p>Free Custom Stationery Design </p>
                      </li>
                      <li>
                        <span>
                          <IoCheckmarkSharp />
                        </span>
                        <p>Bi-Fold Brochure Flyer (OR) Tri-Fold Brochure</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="plan-box  relative z-[1]">
                <div className="absolute z-[-1] left-0 right-0 m-auto w-fit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="460"
                    height="838"
                    viewBox="0 0 460 838"
                    fill="none"
                  >
                    <mask id="path-1-inside-1_149_387" fill="white">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M453.316 153.193L313.553 7.59603C309.3 3.16483 303.223 0.633029 295.931 0H161.638H151.915H23.6988C10.9379 0 0 10.7613 0 24.6879V238V307.652V808C0 824.569 13.4315 838 30 838H430C446.569 838 460 824.569 460 808V454.514V318.413V308.285V238V170.918C460 163.954 457.569 157.624 453.316 153.193Z"
                      />
                    </mask>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M453.316 153.193L313.553 7.59603C309.3 3.16483 303.223 0.633029 295.931 0H161.638H151.915H23.6988C10.9379 0 0 10.7613 0 24.6879V238V307.652V808C0 824.569 13.4315 838 30 838H430C446.569 838 460 824.569 460 808V454.514V318.413V308.285V238V170.918C460 163.954 457.569 157.624 453.316 153.193Z"
                      fill="#030728"
                    />
                    <path
                      d="M313.553 7.59603L312.832 8.28854L313.553 7.59603ZM453.316 153.193L452.594 153.885L453.316 153.193ZM295.931 0V-1H295.975L296.018 -0.996253L295.931 0ZM314.275 6.90353L454.037 152.5L452.594 153.885L312.832 8.28854L314.275 6.90353ZM296.018 -0.996253C303.488 -0.347773 309.814 2.25642 314.275 6.90353L312.832 8.28854C308.786 4.07324 302.959 1.61383 295.845 0.996253L296.018 -0.996253ZM161.638 -1H295.931V1H161.638V-1ZM151.915 -1H161.638V1H151.915V-1ZM23.6988 -1H151.915V1H23.6988V-1ZM-1 24.6879C-1 10.2309 10.3639 -1 23.6988 -1V1C11.5119 1 1 11.2916 1 24.6879H-1ZM-1 238V24.6879H1V238H-1ZM1 238V307.652H-1V238H1ZM1 307.652V808H-1V307.652H1ZM1 808C1 824.017 13.9837 837 30 837V839C12.8792 839 -1 825.121 -1 808H1ZM30 837H430V839H30V837ZM430 837C446.016 837 459 824.017 459 808H461C461 825.121 447.121 839 430 839V837ZM459 808V454.514H461V808H459ZM459 454.514V318.413H461V454.514H459ZM459 318.413V308.285H461V318.413H459ZM459 308.285V238H461V308.285H459ZM461 170.918V238H459V170.918H461ZM454.037 152.5C458.489 157.138 461 163.726 461 170.918H459C459 164.183 456.649 158.11 452.594 153.885L454.037 152.5Z"
                      fill="black"
                      mask="url(#path-1-inside-1_149_387)"
                    />
                  </svg>
                </div>
                <div className="px-12 py-24 space-y-10">
                  <div className="flex items-end gap-4">
                    <h2 className="text-[#05C7AA] text-[1.406vw] font-semibold">
                      Business Plan
                    </h2>
                    <span className="bg-[#FCFFF5] px-4 py-1 rounded-4xl">
                      Popular
                    </span>
                  </div>
                  <div className="space-y-5">
                    <div className="flex items-center">
                      <h2 className="text-[4.167vw] leading-[4.167vw] text-white font-semibold">
                        $240
                      </h2>
                      <h3 className="text-[1.406vw] text-white font-semibold line-through">
                        $780
                      </h3>
                    </div>
                    <p className="text-white text-[20px] font-[500]">
                      Basic branding solution for businesses to
                      <br /> kickstart their branding.
                    </p>
                  </div>
                  <div>
                    <Link
                      className="bg-[#05C7AA] py-4 inline-block w-full rounded text-center text-[18px]"
                      href={""}
                    >
                      Get Started!
                    </Link>
                  </div>
                  <div>
                    <ul className="plan-list pwhite">
                      <li>
                        <span>
                          <IoCheckmarkSharp />
                        </span>
                        <p>10 Custom Logo Design Concepts</p>
                      </li>
                      <li>
                        <span>
                          <IoCheckmarkSharp />
                        </span>
                        <p>6 Award Winning Designers</p>
                      </li>
                      <li>
                        <span>
                          <IoCheckmarkSharp />
                        </span>
                        <p>Unlimited Revisions</p>
                      </li>
                      <li>
                        <span>
                          <IoCheckmarkSharp />
                        </span>
                        <p>Free Icon Design</p>
                      </li>
                      <li>
                        <span>
                          <IoCheckmarkSharp />
                        </span>
                        <p>Free Custom Stationery Design </p>
                      </li>
                      <li>
                        <span>
                          <IoCheckmarkSharp />
                        </span>
                        <p>Bi-Fold Brochure Flyer (OR) Tri-Fold Brochure</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="plan-box  relative z-[1]">
                <div className="absolute z-[-1] left-0 right-0 m-auto w-fit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="460"
                    height="838"
                    viewBox="0 0 460 838"
                    fill="none"
                  >
                    <mask id="path-1-inside-1_149_387" fill="white">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M453.316 153.193L313.553 7.59603C309.3 3.16483 303.223 0.633029 295.931 0H161.638H151.915H23.6988C10.9379 0 0 10.7613 0 24.6879V238V307.652V808C0 824.569 13.4315 838 30 838H430C446.569 838 460 824.569 460 808V454.514V318.413V308.285V238V170.918C460 163.954 457.569 157.624 453.316 153.193Z"
                      />
                    </mask>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M453.316 153.193L313.553 7.59603C309.3 3.16483 303.223 0.633029 295.931 0H161.638H151.915H23.6988C10.9379 0 0 10.7613 0 24.6879V238V307.652V808C0 824.569 13.4315 838 30 838H430C446.569 838 460 824.569 460 808V454.514V318.413V308.285V238V170.918C460 163.954 457.569 157.624 453.316 153.193Z"
                      fill="white"
                    />
                    <path
                      d="M313.553 7.59603L312.832 8.28854L313.553 7.59603ZM453.316 153.193L452.594 153.885L453.316 153.193ZM295.931 0V-1H295.975L296.018 -0.996253L295.931 0ZM314.275 6.90353L454.037 152.5L452.594 153.885L312.832 8.28854L314.275 6.90353ZM296.018 -0.996253C303.488 -0.347773 309.814 2.25642 314.275 6.90353L312.832 8.28854C308.786 4.07324 302.959 1.61383 295.845 0.996253L296.018 -0.996253ZM161.638 -1H295.931V1H161.638V-1ZM151.915 -1H161.638V1H151.915V-1ZM23.6988 -1H151.915V1H23.6988V-1ZM-1 24.6879C-1 10.2309 10.3639 -1 23.6988 -1V1C11.5119 1 1 11.2916 1 24.6879H-1ZM-1 238V24.6879H1V238H-1ZM1 238V307.652H-1V238H1ZM1 307.652V808H-1V307.652H1ZM1 808C1 824.017 13.9837 837 30 837V839C12.8792 839 -1 825.121 -1 808H1ZM30 837H430V839H30V837ZM430 837C446.016 837 459 824.017 459 808H461C461 825.121 447.121 839 430 839V837ZM459 808V454.514H461V808H459ZM459 454.514V318.413H461V454.514H459ZM459 318.413V308.285H461V318.413H459ZM459 308.285V238H461V308.285H459ZM461 170.918V238H459V170.918H461ZM454.037 152.5C458.489 157.138 461 163.726 461 170.918H459C459 164.183 456.649 158.11 452.594 153.885L454.037 152.5Z"
                      fill="black"
                      mask="url(#path-1-inside-1_149_387)"
                    />
                  </svg>
                </div>
                <div className="px-12 py-24 space-y-10">
                  <div>
                    <h2 className="text-[#05C7AA] text-[1.406vw] font-semibold">
                      Gold Plan
                    </h2>
                  </div>
                  <div className="space-y-5">
                    <div className="flex items-end">
                      <h2 className="text-[4.167vw] text-[#030728] leading-[4.167vw] font-semibold">
                        $240
                      </h2>
                      <h3 className="text-[1.406vw] text-[#656565] font-semibold line-through">
                        $780
                      </h3>
                    </div>
                    <p className="text-[#303030] text-[20px] font-[500]">
                      Basic branding solution for businesses to
                      <br /> kickstart their branding.
                    </p>
                  </div>
                  <div>
                    <Link
                      className="bg-[#6538E6] py-4 inline-block w-full rounded text-center text-white text-[18px]"
                      href={""}
                    >
                      Get Started!
                    </Link>
                  </div>
                  <div>
                    <ul className="plan-list">
                      <li>
                        <span>
                          <IoCheckmarkSharp />
                        </span>
                        <p>10 Custom Logo Design Concepts</p>
                      </li>
                      <li>
                        <span>
                          <IoCheckmarkSharp />
                        </span>
                        <p>6 Award Winning Designers</p>
                      </li>
                      <li>
                        <span>
                          <IoCheckmarkSharp />
                        </span>
                        <p>Unlimited Revisions</p>
                      </li>
                      <li>
                        <span>
                          <IoCheckmarkSharp />
                        </span>
                        <p>Free Icon Design</p>
                      </li>
                      <li>
                        <span>
                          <IoCheckmarkSharp />
                        </span>
                        <p>Free Custom Stationery Design </p>
                      </li>
                      <li>
                        <span>
                          <IoCheckmarkSharp />
                        </span>
                        <p>Bi-Fold Brochure Flyer (OR) Tri-Fold Brochure</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="news-sec -mb-24 relative z-1">
        <div className="container mx-auto max-w-screen-2xl">
          <div className="flex justify-between bg-[#05C7AA] py-24 px-12 items-center rounded-3xl">
            <h1 className="text-[3.167vw] leading-[3.167vw] font-[500]">
              Get Custom Quotes
            </h1>
            <p className="max-w-[500px] text-[20px] text-[#303030]">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
            <div className="space-y-2">
              <Link
                className="bg-[#FCFFF5] rounded py-4 px-8 text-[#030728] text-[17px] font-[500] block text-center"
                href={"/"}
              >
                Let’s Talk
              </Link>
              <Link
                className="bg-[#FCFFF5] rounded py-4 px-8 text-[#030728] text-[17px] font-[500] block text-center "
                href={"/"}
              >
                Request A Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="testi-sec bg-[#030728] h-screen flex items-center">
        <div className="container mx-auto max-w-screen-2xl">
          <div className="grid grid-cols-3 gap-28 items-center">
            <div className="relative">
              <div className="float-right -mb-12 relative z-10">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="193"
                    height="155"
                    viewBox="0 0 193 155"
                    fill="none"
                  >
                    <path
                      d="M83.3951 16.7568L46.463 87.973L27.9969 92.7606C29.9825 88.3719 32.3652 84.7812 35.1451 81.9884C38.322 79.1956 41.8961 77.7992 45.8673 77.7992C54.2068 77.7992 61.7521 81.1905 68.5031 87.973C75.6512 94.7555 79.2253 103.533 79.2253 114.305C79.2253 125.077 75.2541 134.652 67.3117 143.031C59.7665 151.01 50.6327 155 39.9105 155C29.1883 155 19.856 151.01 11.9136 143.031C3.97119 135.051 0 125.476 0 114.305C0 109.517 0.992798 104.131 2.97839 98.1467C4.96399 91.7632 8.33951 83.7838 13.1049 74.2085L53.0154 0L83.3951 16.7568ZM193 16.7568L156.068 87.973L137.602 92.7606C139.587 88.3719 141.97 84.7812 144.75 81.9884C147.927 79.1956 151.501 77.7992 155.472 77.7992C163.812 77.7992 171.357 81.1905 178.108 87.973C185.256 94.7555 188.83 103.533 188.83 114.305C188.83 125.077 184.859 134.652 176.917 143.031C169.371 151.01 160.238 155 149.515 155C138.793 155 129.461 151.01 121.519 143.031C113.576 135.051 109.605 125.476 109.605 114.305C109.605 109.517 110.598 104.131 112.583 98.1467C114.569 91.7632 117.944 83.7838 122.71 74.2085L162.62 0L193 16.7568Z"
                      fill="#FFBB00"
                    />
                  </svg>
                </span>
              </div>
              <Image src={"/img/we-r.png"} width={431} height={431} alt='visual' />
            </div>
            <div className="col-span-2 space-y-8">
              <p className="text-[3.333vw] text-white">
                These guys are crazy fast, They finished off all assets in 6
                days & got the brand guideline & handover done aweek later.
              </p>
              <div className="test-icn flex items-center gap-4">
                <Image src={"/img/boy.png"} width={95} height={88} alt='visual' />
                <div>
                  <h3 className="text-[1.771vw] text-[#05C7AA] leading-[1.771vw] font-semibold">
                    Stewart Nomad
                  </h3>
                  <p className="text-[1.042vw] text-white">CEO, Megachad</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="indus-sec py-24 bg-white">
        <div className="space-y-24 ">
          <div className="indus-h text-center space-y-4">
            <h1 className="text-[4.167vw] leading-[4.167vw] font-[500] text-[#030728] capitalize">
              Belonging to industries!
            </h1>
            <p className="text-[#303030] text-[20px] font-[500] leading-[35px]">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur
              <br />
              sint occaecat cupidatat non proident..
            </p>
          </div>
          <div className="bewrap space-y-4">
            <div className="bebx-one flex flex-nowrap gap-8 ">
            {[...Array(8)].map((_, index) => (
        <div
          key={index}
          className="shrink-0 be-box text-center w-[334px] h-[267px] bg-[#FCFFF5] flex items-center justify-center rounded-2xl drop-shadow-md border"
        >
          <div>
            <Image className="m-auto" src="/img/be1.svg" width={100} height={100} alt="Sports" />
            <h2 className="text-[#030728] text-[25px] font-[500]">Sports</h2>
          </div>
        </div>
      ))}
            </div>
            <div className="bebx-one flex flex-nowrap gap-8 ">
            {[...Array(8)].map((_, index) => (
        <div
          key={index}
          className="shrink-0 be-box text-center w-[334px] h-[267px] bg-[#FCFFF5] flex items-center justify-center rounded-2xl drop-shadow-md border"
        >
          <div>
            <Image className="m-auto" src="/img/be1.svg" width={100} height={100} alt="Sports" />
            <h2 className="text-[#030728] text-[25px] font-[500]">Sports</h2>
          </div>
        </div>
      ))}
            </div>
          </div>
        </div>
      </section>
      <section className="read-sec py-28 space-y-28">
        <div className="container mx-auto max-w-screen-2xl">
          <div className="indus-h flex items-end">
            <h1 className="text-[4.167vw] leading-[4.167vw] text-[#030728] font-[500]">
              Ready to make a digital impact? <br />
              Let's create something
              <br />
              unforgettable.
            </h1>
            <div>
              <Link
                className="bg-[#05C7AA] rounded py-4 px-8 text-[#030728] text-[17px] font-[500]"
                href={"/"}
              >
                Get Started!
              </Link>
            </div>
          </div>
        </div>
        <div className="red-grd grid grid-cols-4 gap-6 px-14">
          <div className="redimg-bx">
            <Image src={"/img/re1.png"} width={430} height={448} alt='visual' />
          </div>
          <div className="redimg-bx">
            <Image src={"/img/re2.png"} width={430} height={448} alt='visual' />
          </div>
          <div className="redimg-bx">
            <Image src={"/img/re3.png"} width={430} height={448} alt='visual' />
          </div>
          <div className="redimg-bx">
            <Image src={"/img/re4.png"} width={430} height={448} alt='visual' />
          </div>
        </div>
      </section>
     <Footer/>
    </>
  );
}
