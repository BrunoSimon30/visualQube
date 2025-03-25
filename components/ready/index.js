import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
 


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// Import required modules
import { Autoplay, Pagination } from 'swiper/modules';

export default function Ready() {

  const BtnImg = [
    {
      img: '/img/btm/b1.png', 
    },
    {
      img: '/img/btm/b2.png', 
    },
    {
      img: '/img/btm/b3.png', 
    },
    {
      img: '/img/btm/w1.png', 
    },
    {
      img: '/img/btm/w2.png', 
    },
    {
      img: '/img/btm/w3.png', 
    },
    {
      img: '/img/btm/w4.png', 
    },
    {
      img: '/img/btm/w5.png', 
    },
    {
      img: '/img/btm/w6.png', 
    },
    {
      img: '/img/btm/a1.png', 
    },
    {
      img: '/img/btm/a2.png', 
    },
    {
      img: '/img/btm/a3.png', 
    },
    {
      img: '/img/btm/a4.png', 
    },
    {
      img: '/img/btm/a5.png', 
    },
    {
      img: '/img/btm/d1.png', 
    },
    {
      img: '/img/btm/d2.png', 
    },

    {
      img: '/img/btm/d3.png', 
    },


  ]
 
  return (
    <>
      <section  className="read-sec py-16 md:py-28 space-y-12 md:space-y-28 px-8 bg-[#FCFFF5] ">
        <div className="container mx-auto max-w-screen-2xl">
          <div className="indus-h md:flex items-end space-y-4 md:space-y-0">
            <h1 className="text-[30px] leading-[30px] md:text-[4.167vw] md:leading-[4.167vw] text-[#030728] font-[500]">
            Geared for Digital Disruption?<br/>
            Let's Sculpt the Never <br/>Before-Seen.	
            </h1>
            <div>
              <Link
                className="bg-[#05C7AA] rounded py-4 px-6 md:px-8 text-[#030728] text-[13px] md:text-[17px] font-[500] inline-block transition duration-300 hover:bg-[#030728] hover:text-[#fff]"
                href={"/contact"}
              >
                Get Started!
              </Link>
            </div>
          </div>
        </div>

        {/* Swiper with Responsive Breakpoints */}
        <Swiper
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          
          modules={[Autoplay, Pagination]}
          className="mySwiper"
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },  // Mobile
            768: { slidesPerView: 2, spaceBetween: 20 },  // Tablet
            1024: { slidesPerView: 4, spaceBetween: 30 }  // Desktop
          }}
        >
          {BtnImg?.map((v, index) => (
            <SwiperSlide key={index}>
              <div className="redimg-bx">
                <Image src={v?.img} width={430} height={448} alt="visual" />
              </div>
            </SwiperSlide> 
          ))}
        </Swiper>
      </section>
    </>
  );
}
