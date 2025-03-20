import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const HeaderRef = useRef();
  const dropdownRef = useRef();

  useGSAP(() => {
    gsap.from(HeaderRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
    });
  }, []);

  return (
    <header
      ref={HeaderRef}
      className="bg-[#FCFFF5] w-full py-4 fixed z-20 top-0 left-0"
    >
      <div className="container mx-auto max-w-screen-2xl px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="logo">
            <Link href={"/"}>
              <Image src="/img/logo.svg" width={180} height={40} alt="visual" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 items-center">
            <ul className="menu flex gap-8">
              <li>
                <Link
                  className="text-[18px] text-[#303030] font-medium transition duration-700 hover:text-[#05C7AA]"
                  href="/about"
                >
                  About
                </Link>
              </li>

              {/* Services Dropdown */}
              <li className="relative group">
                <button
                  className="text-[18px] text-[#303030] font-medium flex items-center gap-1 transition duration-700 hover:text-[#05C7AA]"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  Services <FiChevronDown />
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <ul
                    ref={dropdownRef}
                    className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg py-2 w-48"
                  >
                    <li>
                      <Link
                        className="block px-4 py-2 text-[#303030] font-semibold hover:bg-gray-200"
                        href="/services"
                      >
                        🔥 All Services
                      </Link>
                    </li>
                 
                    <li>
                      <Link
                        className="block px-4 py-2 text-[#303030] hover:bg-gray-200"
                        href="/branding"
                      >
                       Branding
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="block px-4 py-2 text-[#303030] hover:bg-gray-200"
                        href="/website-design"
                      >
                      Website Design
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="block px-4 py-2 text-[#303030] hover:bg-gray-200"
                        href="/app-design-development"
                      >
                       App Design & Dev 
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="block px-4 py-2 text-[#303030] hover:bg-gray-200"
                        href="/digital-marketing"
                      >
                      Digital Marketing
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="block px-4 py-2 text-[#303030] hover:bg-gray-200"
                        href="/data-cloud"
                      >
                     Data & Cloud
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              <li>
                <Link
                  className="text-[18px] text-[#303030] font-medium transition duration-700 hover:text-[#05C7AA]"
                  href="/work"
                >
                  Our Work
                </Link>
              </li>
              <li>
                <Link
                  className="text-[18px] text-[#303030] font-medium transition duration-700 hover:text-[#05C7AA]"
                  href="/industries"
                >
                  Industries
                </Link>
              </li>

              <li>
                <Link
                  className="text-[18px] text-[#303030] font-medium transition duration-700 hover:text-[#05C7AA]"
                  href="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <Link className="btn-a" href="tel:(123) 456 7890">
              (123) 456 7890
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={32} /> : <FiMenu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg p-6">
          <ul className="flex flex-col gap-4">
            <li>
              <button
                className="text-[18px] text-[#303030] font-medium flex items-center gap-1"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Services <FiChevronDown />
              </button>

              {isDropdownOpen && (
                <ul className="ml-6 mt-2 space-y-2">
                 <li>
                      <Link
                        className="block px-4 py-2 text-[#303030] font-semibold hover:bg-gray-200"
                        href="/services"
                      >
                        🔥 All Services
                      </Link>
                    </li>
                 
                    <li>
                      <Link
                        className="block px-4 py-2 text-[#303030] hover:bg-gray-200"
                        href="/branding"
                      >
                       Branding
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="block px-4 py-2 text-[#303030] hover:bg-gray-200"
                        href="/website-design"
                      >
                      Website Design
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="block px-4 py-2 text-[#303030] hover:bg-gray-200"
                        href="/app-design-development"
                      >
                       App Design & Dev 
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="block px-4 py-2 text-[#303030] hover:bg-gray-200"
                        href="/digital-marketing"
                      >
                      Digital Marketing
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="block px-4 py-2 text-[#303030] hover:bg-gray-200"
                        href="/data-cloud"
                      >
                     Data & Cloud
                      </Link>
                    </li>
                </ul>
              )}
            </li>

            <li>
              <Link className="text-[18px] text-[#303030] font-medium" href="/work">
                Our Work
              </Link>
            </li>
            <li>
              <Link className="text-[18px] text-[#303030] font-medium" href="/industries">
                Industries
              </Link>
            </li>
            <li>
              <Link className="text-[18px] text-[#303030] font-medium" href="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="text-[18px] text-[#303030] font-medium" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <Link className="block mt-4 text-center font-medium" href="tel:(123) 456 7890">
            (123) 456 7890
          </Link>
        </div>
      )}
    </header>
  );
}
