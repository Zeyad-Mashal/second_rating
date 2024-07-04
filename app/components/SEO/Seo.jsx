"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Seo.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
const Seo = () => {
  return (
    <section className="Seo">
      <h2>SEO</h2>
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
                    <span>setup console & analytics</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} className="check" />
                    <span>onpage optimization</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} className="check" />
                    <span>improve user experience</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} className="check" />
                    <span>technical seo</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} className="check" />
                    <span>speed audit</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} className="check" />
                    <span>monthly report</span>
                  </li>
                </ul>
              </div>
              {/* price */}
              <div className="card-price">
                <p>
                  <sup>SAR</sup>
                  999
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
                    <span>setup console & analytics</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} className="check" />
                    <span>onpage optimization</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} className="check" />
                    <span>improve user experience</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} className="check" />
                    <span>technical seo</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} className="check" />
                    <span>speed audit</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} className="check" />
                    <span>monthly report</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} className="check" />
                    <span>fix technical issue</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} className="check" />
                    <span>keywords & content recommendation</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} className="check" />
                    <span>content creation</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} className="check" />
                    <span>monthly report</span>
                  </li>
                </ul>
              </div>
              {/* price */}
              <div className="card-price">
                <p>
                  <sup>SAR</sup>
                  1999
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
                    <span>setup console & analytics</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} className="check" />
                    <span>onpage optimization</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} className="check" />
                    <span>improve user experience</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} className="check" />
                    <span>technical seo</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} className="check" />
                    <span>speed audit</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} className="check" />
                    <span>monthly report</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} className="check" />
                    <span>fix technical issue</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} className="check" />
                    <span>keywords & content recommendation</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} className="check" />
                    <span>content creation</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} className="check" />
                    <span>local seo optimization</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} className="check" />
                    <span>off page optimization</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} className="check" />
                    <span>competitors analysis</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} className="check" />
                    <span>setup google tag maneger</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} className="check" />
                    <span>monthly report</span>
                  </li>
                </ul>
              </div>
              {/* price */}
              <div className="card-price">
                <p>
                  <sup>SAR</sup>
                  2999
                  <sub>/month</sub>
                </p>
              </div>
              {/* button */}
              <button className="card-button">Add To Cart</button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Seo;
