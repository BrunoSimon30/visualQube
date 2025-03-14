import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <>
         <header className="bg-[#FCFFF5] w-full  py-8">
        <div className="container mx-auto max-w-screen-2xl">
          <div className="flex items-cen ter justify-between items-center">
            <div className="logo">
              <Image src={"/img/logo.svg"} width={284} height={52} alt='visual' />
            </div>
            <div className="flex gap-12 items-center">
              <nav>
                <ul className="menu flex gap-12">
                  <li>
                    <Link
                      className="text-[18px] text-[#303030] font-[500]"
                      href={"/services"}
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-[18px] text-[#303030] font-[500]"
                      href={"/work"}
                    >
                      Our Work
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-[18px] text-[#303030] font-[500]"
                      href={"/industries"}
                    >
                      Industries
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-[18px] text-[#303030] font-[500]"
                      href={"/about"}
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-[18px] text-[#303030] font-[500]"
                      href={"/contact"}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
              <div>
                <Link className="btn-a" href={"/"}>
                  (123) 456 7890
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
