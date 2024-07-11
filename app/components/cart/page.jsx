"use client";
import Image from "next/image";
import React, { useState } from "react";
import "./cart.css";
import Navbar from "../Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Footer from "../Footer/Footer";
const Cart = () => {
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
  const removeCartProduct = () => {
    document.querySelector(".cart_item").remove();
  };
  return (
    <>
      <Navbar />
      <section className="cart">
        <div className="cart_container">
          <h2>سلة سكند ريتنج</h2>
          <div className="cart_list">
            <div className="cart_item">
              <FontAwesomeIcon icon={faTrash} onClick={removeCartProduct} />
              <Image src="/images/card.jpg" width={500} height={500} />
              <div className="cart_item_content">
                <h4>اسم المنتج هنا</h4>
                <p>100 SAR</p>
                <div className="card_quantity">
                  <button onClick={handleDecrement}>-</button>
                  <span>{quantity}</span>
                  <button onClick={handleIncrement}>+</button>
                </div>
              </div>
            </div>
            <div className="cart_item">
              <FontAwesomeIcon icon={faTrash} onClick={removeCartProduct} />
              <Image src="/images/card.jpg" width={500} height={500} />
              <div className="cart_item_content">
                <h4>اسم المنتج هنا</h4>
                <p>100 SAR</p>
                <div className="card_quantity">
                  <button onClick={handleDecrement}>-</button>
                  <span>{quantity}</span>
                  <button onClick={handleIncrement}>+</button>
                </div>
              </div>
            </div>
            <div className="cart_item">
              <FontAwesomeIcon icon={faTrash} onClick={removeCartProduct} />
              <Image src="/images/card.jpg" width={500} height={500} />
              <div className="cart_item_content">
                <h4>اسم المنتج هنا</h4>
                <p>100 SAR</p>
                <div className="card_quantity">
                  <button onClick={handleDecrement}>-</button>
                  <span>{quantity}</span>
                  <button onClick={handleIncrement}>+</button>
                </div>
              </div>
            </div>
            <div className="totalPrice">اجمالي : {totalPrice} ريال</div>

            <button className="checkCart">أتمام العملية</button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Cart;
