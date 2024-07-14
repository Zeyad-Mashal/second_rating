"use client";
import React from "react";
import "./NFC.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import Link from "next/link";
export default function NFC() {
  return (
    <section className="nfc">
      <h2>NFC</h2>
      <Link href="/components/allnfc">أظهار الكل</Link>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={10}
        loop={true}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        <SwiperSlide>
          <Link href="/components/cardDetails">
            <div className="nfc_card">
              <div className="nfc_image">
                <Image
                  src="/images/card.jpg"
                  width={800}
                  height={800}
                  alt="product nfc"
                />
              </div>
              <div className="nfc_content">
                <h3>Product Name</h3>
                <p>100 SAR</p>
              </div>
              <div className="nfc_btn">
                <button>Add to Cart</button>
              </div>
            </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <div className="nfc_card">
            <div className="nfc_image">
              <Image
                src="/images/card.jpg"
                width={800}
                height={800}
                alt="product nfc"
              />
            </div>
            <div className="nfc_content">
              <h3>Product Name</h3>
              <p>100 SAR</p>
            </div>
            <div className="nfc_btn">
              <button>Add to Cart</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="nfc_card">
            <div className="nfc_image">
              <Image
                src="/images/card.jpg"
                width={800}
                height={800}
                alt="product nfc"
              />
            </div>
            <div className="nfc_content">
              <h3>Product Name</h3>
              <p>100 SAR</p>
            </div>
            <div className="nfc_btn">
              <button>Add to Cart</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="nfc_card">
            <div className="nfc_image">
              <Image
                src="/images/card.jpg"
                width={800}
                height={800}
                alt="product nfc"
              />
            </div>
            <div className="nfc_content">
              <h3>Product Name</h3>
              <p>100 SAR</p>
            </div>
            <div className="nfc_btn">
              <button>Add to Cart</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="nfc_card">
            <div className="nfc_image">
              <Image
                src="/images/card.jpg"
                width={800}
                height={800}
                alt="product nfc"
              />
            </div>
            <div className="nfc_content">
              <h3>Product Name</h3>
              <p>100 SAR</p>
            </div>
            <div className="nfc_btn">
              <button>Add to Cart</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="nfc_card">
            <div className="nfc_image">
              <Image
                src="/images/card.jpg"
                width={800}
                height={800}
                alt="product nfc"
              />
            </div>
            <div className="nfc_content">
              <h3>Product Name</h3>
              <p>100 SAR</p>
            </div>
            <div className="nfc_btn">
              <button>Add to Cart</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="social_banner">
        <h2>السوشيال ميديا</h2>
        <p>أختر من عروضنا المميزة</p>
      </div>
    </section>
  );
}
