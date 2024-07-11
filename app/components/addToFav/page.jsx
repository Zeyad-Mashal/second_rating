"use client";
import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./addToFav.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
const addToFav = () => {
  const removeFav = () => {
    document.querySelector(".addToFav_item").remove();
  };
  return (
    <>
      <Navbar />
      <section className="addToFav">
        <div className="addToFav_container">
          <h2>منتاجاتك المفضلة من سكند ريتينج</h2>
          <div className="addToFav_list">
            <div className="addToFav_item">
              <Image src="/images/card.jpg" width={500} height={500} />
              <div className="addToFav_item_content">
                <h3>أسم المنتج</h3>
                <p>100 ريال</p>
                <FontAwesomeIcon icon={faHeart} onClick={removeFav} />
              </div>
            </div>
            <div className="addToFav_item">
              <Image src="/images/card.jpg" width={500} height={500} />
              <div className="addToFav_item_content">
                <h3>أسم المنتج</h3>
                <p>100 ريال</p>
                <FontAwesomeIcon icon={faHeart} onClick={removeFav} />
              </div>
            </div>
            <div className="addToFav_item">
              <Image src="/images/card.jpg" width={500} height={500} />
              <div className="addToFav_item_content">
                <h3>أسم المنتج</h3>
                <p>100 ريال</p>
                <FontAwesomeIcon icon={faHeart} onClick={removeFav} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default addToFav;
