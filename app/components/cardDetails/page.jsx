"use client";
import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Image from "next/image";
import "./cardDetails.css";
import HowToUse from "../HowToUse/HowToUse";
import Footer from "../Footer/Footer";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
const CardDetails = () => {
  const pricePerUnit = 100;
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(pricePerUnit);
  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    setTotalPrice(newQuantity * pricePerUnit);
  };
  const handleDecrement = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      setTotalPrice(newQuantity * pricePerUnit);
    }
  };
  return (
    <>
      <Navbar />
      <section className="card_details">
        <div className="card_details_container">
          <h2>Second Rating NFC Cards</h2>
          <div className="card_details_list">
            <div className="card_details_item">
              <div className="card_details_item_img">
                <Swiper
                  slidesPerView={1}
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
                    <Image
                      src="/images/card.jpg"
                      width={1000}
                      height={1000}
                      alt="card image"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src="/images/card.jpg"
                      width={1000}
                      height={1000}
                      alt="card image"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src="/images/card.jpg"
                      width={1000}
                      height={1000}
                      alt="card image"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="card_details_content">
                <h3>Card Name here</h3>
                <span>100 SAR</span>
                <div className="flex align-middle justify-center gap-5 quantity_addtocart">
                  <div className="card_quantity">
                    <button onClick={handleDecrement}>-</button>
                    <span>{quantity}</span>
                    <button onClick={handleIncrement}>+</button>
                    {/* <div>اجمالي : {totalPrice.toFixed(2)}SAR</div> */}
                  </div>
                  <div className="card_addToCart">
                    <button>Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
            <HowToUse />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CardDetails;
