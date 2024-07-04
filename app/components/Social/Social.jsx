"use client";
import React from "react";
import Image from "next/image";
import "./Social.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
const Social = () => {
  return (
    <section className="social">
      <h2>SOCIAL MEDIA MANAGEMENT</h2>
      <div className="wrapper_container">
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
            <div className="card-wrapper">
              {/* header */}
              <div className="card-header">
                <Image
                  src="/images/basic.png"
                  width={500}
                  height={500}
                  alt="price"
                />
                <h2>Basic</h2>
              </div>
              {/* details */}
              <div className="card-details">
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faCheck} className="check" />
                    <span>Writing interactive and marketing ideas</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} className="check" />
                    <span>
                      Follow hashtags and trends related to the nature of the
                      company’s work and include them in publications
                    </span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} className="check" />
                    <span>Prepare a business plan for 3 months</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} className="check" />
                    <span>Connect all social media</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} className="check" />
                    <span>Design of 16 posts</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} className="check" />
                    <span>
                      Create 6 simple videos to increase interaction for the
                      following platforms (Instagram, Twitter, Facebook, and
                      LinkedIn)
                    </span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} className="check" />
                    <span>
                      Create 6 simple montage videos (for Snapchat and Tik Tok)
                    </span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} className="check" />
                    <span>
                      Writing a scenario and script for 10 videos that are
                      filmed by the client spontaneously
                    </span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} className="check" />
                    <span>Managing advertising campaigns for free </span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} className="check" />
                    <span> Create a monthly report</span>
                  </li>
                </ul>
              </div>
              {/* price */}
              <div className="card-price">
                <p>
                  <sup>SAR</sup>
                  2400
                  <sub>/month</sub>
                </p>
              </div>
              {/* button */}
              <button className="card-button">Add To Cart</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-wrapper">
              {/* header */}
              <div className="card-header">
                <Image
                  src="/images/basic.png"
                  width={500}
                  height={500}
                  alt="price"
                />
                <h2>Advanced</h2>
              </div>
              {/* details */}
              <div className="card-details">
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faCheck} className="check" />
                    <span>Writing interactive and marketing ideas</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} className="check" />
                    <span>
                      Follow hashtags and trends related to the nature of the
                      company’s work and include them in publications
                    </span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} className="check" />
                    <span>Prepare a business plan for 3 months</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} className="check" />
                    <span>Connect all social media</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} className="check" />
                    <span>Design of 30 posts</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} className="check" />
                    <span>
                      Create 15 simple videos to increase interaction for the
                      following platforms (Instagram, Twitter, Facebook, and
                      LinkedIn)
                    </span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} className="check" />
                    <span>
                      Create 12 simple montage videos (for Snapchat and Tik Tok)
                    </span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} className="check" />
                    <span>
                      Writing a scenario and script for 18 videos that are
                      filmed by the client spontaneously
                    </span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} className="check" />
                    <span>Managing advertising campaigns for free </span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} className="check" />
                    <span>Create a QR code for social media accounts</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} className="check" />
                    <span> Create a monthly report</span>
                  </li>
                </ul>
              </div>
              {/* price */}
              <div className="card-price">
                <p>
                  <sup>SAR</sup>
                  3499
                  <sub>/month</sub>
                </p>
              </div>
              {/* button */}
              <button className="card-button">Add To Cart</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-wrapper">
              {/* header */}
              <div className="card-header">
                <Image
                  src="/images/basic.png"
                  width={500}
                  height={500}
                  alt="price"
                />
                <h2>Premium</h2>
              </div>
              {/* details */}
              <div className="card-details">
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faCheck} className="check" />
                    <span>Writing interactive and marketing ideas</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} className="check" />
                    <span>
                      Follow hashtags and trends related to the nature of the
                      company’s work and include them in publications
                    </span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} className="check" />
                    <span>Prepare a business plan for 3 months</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} className="check" />
                    <span>Connect all social media</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} className="check" />
                    <span>Design of 45 posts</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} className="check" />
                    <span>
                      Create 15 simple videos to increase interaction for the
                      following platforms (Instagram, Twitter, Facebook, and
                      LinkedIn)
                    </span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} className="check" />
                    <span>
                      Create 15 simple montage videos (for Snapchat and Tik Tok)
                    </span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} className="check" />
                    <span>
                      Writing a scenario and script for 45 videos that are
                      filmed by the client spontaneously
                    </span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} className="check" />
                    <span>Managing advertising campaigns for free </span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} className="check" />
                    <span>Create a QR code for social media accounts</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} className="check" />
                    <span>Create a welcome response to me</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} className="check" />
                    <span> Create a monthly report</span>
                  </li>
                </ul>
              </div>
              {/* price */}
              <div className="card-price">
                <p>
                  <sup>SAR</sup>
                  5199
                  <sub>/month</sub>
                </p>
              </div>
              {/* button */}
              <button className="card-button">Add To Cart</button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="seo_banner">
        <h2>محركات البحث الخاصة بسكند ريتينج</h2>
        <p>تقدم شركة سكند ريتنج العديد من باقات محركات البحث المميزة</p>
      </div>
    </section>
  );
};

export default Social;
