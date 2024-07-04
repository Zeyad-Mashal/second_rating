"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Hero.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero">
      <Swiper
        spaceBetween={10}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src="/images/banner1.jpg"
            width={2000}
            height={2000}
            alt="home banner"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/banner2.jpg"
            width={2000}
            height={2000}
            alt="home banner"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/banner3.jpg"
            width={2000}
            height={2000}
            alt="home banner"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/banner4.jpg"
            width={2000}
            height={2000}
            alt="home banner"
          />
        </SwiperSlide>
      </Swiper>
      <div className="custom_banner">
        <h3>عروض بطاقات سكند ريتينج</h3>
        <p>اختر بطاقتك المميزة ألان من سكندر ريتنج مع خاصية تصميم البطاقة</p>
        <Link href="/components/create">
          <button>قم بتصميم بطاقات الأن</button>
        </Link>
      </div>
    </section>
  );
}
