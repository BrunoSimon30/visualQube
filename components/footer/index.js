import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <>
     <footer className="footer-sec bg-white">
        <div className="container mx-auto max-w-screen-2xl">
          <div className="up ft-btm py-28">
            <div className="md:grid md:grid-cols-4 gap-12  space-y-6 md:space-y-0">
              <div className="ft-link space-y-2 md:space-y-6">
                <h3 className="text-[25px] md:text-[2vw]  text-black font-[600] capitalize tall">
                  About us
                </h3>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident fugiat nulla voluptate.
                </p>
              </div>
              <div className="ft-link space-y-2 md:space-y-6">
                <h3 className="text-[25px] md:text-[2vw]  text-black font-[600] capitalize tall">
                  Quick link
                </h3>
                <div className="flex gap-6 md:gap-24">
                  <ul className="ft-lin ">
                    <li>
                      <Link href="">home</Link>
                    </li>
                    <li>
                      <Link href="">About</Link>
                    </li>
                    <li>
                      <Link href="">Services</Link>
                    </li>
                    <li>
                      <Link href="">Work</Link>
                    </li>
                  </ul>
                  <ul className="ft-lin ">
                    <li>
                      <Link href="">Testimonials</Link>
                    </li>
                    <li>
                      <Link href="">Contact</Link>
                    </li>
                   
                  </ul>
                </div>
              </div>
              <div className="ft-link space-y-2 md:space-y-6">
                <h3 className="text-[25px] md:text-[2vw] text-black font-[600] capitalize tall">
                Services
                </h3>
                <ul className="ft-lin ">
                  <li>
                    <Link href="">Websites</Link>
                  </li>
                  <li>
                    <Link href="">Social Media</Link>
                  </li>
                  <li>
                    <Link href="">Branding & Design</Link>
                  </li>
                  <li>
                    <Link href="">Employer Branding</Link>
                  </li>
                </ul>
              </div>
              <div className="ft-link space-y-2 md:space-y-6">
                <h3 className="text-[25px] md:text-[2vw] text-black font-[600] capitalize tall">
                  Contact
                </h3>
                <ul className="ft-lin ">
                  <li>
                    <Link href="mailto:info@visualqube.com">
                    info@visualqube.com 
                    </Link>
                  </li>
                  <li>
                    <Link href="tel:+12 34 567 89 00">+12 34 567 89 00</Link>
                  </li>
                  <li>
                   <p>
                   ESE Agency Grubenstrasse,<br/>
                   8045 Zürich Schweiz
                   </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center pb-18">
            <div>
              <Image src={'/img/ft-logo.svg'} width={700} height={150} alt='visual' />
            </div>
            <div>
              <p className="text-[#6C6C6C] font-[500] text-[17px]">© Visualqube, LLC</p>
              <div className="flex gap-8 ">
                <Link className="text-[#303030] text-[17px] font-[500]" href={''}>Privacy Policy</Link>
                <p className="text-[#303030] text-[17px] font-[500]">|</p>
                <Link className="text-[#303030] text-[17px] font-[500]"  href={''}>Terms & Conditions</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
