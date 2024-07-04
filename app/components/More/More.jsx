"use client";
import React from "react";
import Image from "next/image";
import "./More.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
const More = () => {
  return (
    <section className="more">
      <div className="more_container">
        <h2>خدمات أخري</h2>
        <div className="more_list">
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
              <div className="more_item">
                <Image src="/images/websites.jpg" width={500} height={500} />
                <div className="item_content">
                  <h2 className="item_title">Motion Graphics</h2>
                  <p className="item_info">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laudantium numquam minus consequatur blanditiis fugiat,
                    deleniti eum repellendus, voluptatum, praesentium molestiae
                    adipisci corrupti illum in delectus!
                  </p>
                  <button className="item_btn">View More</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="more_item">
                <Image src="/images/photos.jpg" width={500} height={500} />
                <div className="item_content">
                  <h2 className="item_title">Motion Graphics</h2>
                  <p className="item_info">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laudantium numquam minus consequatur blanditiis fugiat,
                    deleniti eum repellendus, voluptatum, praesentium molestiae
                    adipisci corrupti illum in delectus!
                  </p>
                  <button className="item_btn">View More</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="more_item">
                <Image src="/images/motion.jpg" width={500} height={500} />
                <div className="item_content">
                  <h2 className="item_title">Motion Graphics</h2>
                  <p className="item_info">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laudantium numquam minus consequatur blanditiis fugiat,
                    deleniti eum repellendus, voluptatum, praesentium molestiae
                    adipisci corrupti illum in delectus!
                  </p>
                  <button className="item_btn">View More</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="more_item">
                <Image src="/images/filming.jpg" width={500} height={500} />
                <div className="item_content">
                  <h2 className="item_title">Motion Graphics</h2>
                  <p className="item_info">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laudantium numquam minus consequatur blanditiis fugiat,
                    deleniti eum repellendus, voluptatum, praesentium molestiae
                    adipisci corrupti illum in delectus!
                  </p>
                  <button className="item_btn">View More</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="more_item">
                <Image src="/images/visual.jpg" width={500} height={500} />
                <div className="item_content">
                  <h2 className="item_title">Motion Graphics</h2>
                  <p className="item_info">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laudantium numquam minus consequatur blanditiis fugiat,
                    deleniti eum repellendus, voluptatum, praesentium molestiae
                    adipisci corrupti illum in delectus!
                  </p>
                  <button className="item_btn">View More</button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default More;
