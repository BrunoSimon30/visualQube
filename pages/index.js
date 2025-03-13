import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="bg-red-400 w-full  py-6">
        <div className="container mx-auto max-w-screen-2xl">
          <div className="flex items-cen ter">
            <div className="logo">
              <Image src={"/img/logo.svg"} width={284} height={52} />
            </div>
            <div>
              <nav>
                <ul className="menu">
                  <li>
                    <Link href={"/"}>Services</Link>
                  </li>
                  <li>
                    <Link href={"/"}>Our Work</Link>
                  </li>
                  <li>
                    <Link href={"/"}>Industries</Link>
                  </li>
                  <li>
                    <Link href={"/"}>About</Link>
                  </li>
                  <li>
                    <Link href={"/"}>Contact</Link>
                  </li>
                </ul>
              </nav>
              <div>
                <Link href={"/"}>(123) 456 7890</Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="main-sec  h-screen bg-slate-600">
        <div className="container mx-auto max-w-screen-2xl">
          <div className="grid grid-cols-2 gap-6">
            <div className="Mban-l">
              <div>
                <h1>Digital Experiences That Inspire.</h1>
              </div>
              <div>
                <span>
                  <Image src={"/img/banicon.svg"} width={108} height={108} />
                </span>
                <p>
                  We are a creative agency passionate about technology, design
                  and telling unique stories.
                </p>
              </div>
            </div>
            <div>
              <Image src={"/img/manr-icon.png"} width={489} height={489} />
            </div>
          </div>
        </div>
      </section>
      <section className="cta-sec">
        <div className="container mx-auto max-w-screen-2xl">
          <div className="flex">
            <div>
              <h1>Want to grow your business digitally?</h1>
            </div>
            <div>
              <Link href={"/"} className="btn">
                Get Started!
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="we-sec">
        <div className="container mx-auto max-w-screen-2xl">
          <div>
            <h1>
              We create impactful digital experiences & redefine brand
              identities.
            </h1>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <Image src={"/img/we-r.png"} width={431} height={431} />
            </div>
            <div>
              <p>
                We use experience and creativity to break the mold and craft
                digital experiences that defy the status quo. Harnessing the
                cutting-edge technologies of today, we disrupt, innovate and
                shape the behaviors of tomorrow.
              </p>
              <p>
                {" "}
                Our portfolio is not a simple list of projects. It is a map of
                digital adventures we shared with our clients, whether they are
                small family businesses and startups or big players on the
                corporate scene.
              </p>
              <div>
                <Link href={"/"}>Get Started!</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="what-sec">
        <div className="container mx-auto max-w-screen-2xl">
          <div className="W-h">
            <h1>This is what we do</h1>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
          <div>
          <div className="grid grid-cols-2 gap-6">
            <div className="w-l">
              <Image src={'/img/wl-1.png'} width={518} height={389}/>
            </div>
            <div className="w-r">
              <h2>Branding</h2>
              <p>Build a brand that your customers will love. Your brand has big ideas, but do you have a signature moment? We focus on brand identity & impactful web design. Our branding agency can elevate your brand!
              </p>
              <div>
                <Link href={''}>Get Started!</Link>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
    </>
  );
}
