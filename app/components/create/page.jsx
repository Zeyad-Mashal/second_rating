import React from "react";
import "./create.css";
import Navbar from "../Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWifi } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
const CreateCard = () => {
  return (
    <>
      <Navbar />
      <section className="create">
        <div className="create_container">
          <h2 className="create_title">
            اهلا بك في ورشة ساكند ريتينج لتصميم البطاقات
          </h2>
          <div className="create_card_grid">
            <div className="card_view">
              <div className="card_model">
                <div className="card_model_top">
                  <h4>Second Rating</h4>
                  <FontAwesomeIcon icon={faWifi} />
                </div>
                <div className="card_model_bottom">
                  <h4>اسمك هنا</h4>
                  <Image
                    src={"/images/qr.png"}
                    alt="QR code"
                    width={500}
                    height={500}
                  />
                </div>
              </div>
              <div className="card_model card_back">
                <div className="card_model_bottom card_back_view">
                  <Image
                    src={"/images/qr.png"}
                    alt="QR code"
                    width={500}
                    height={500}
                  />
                </div>
              </div>
            </div>
            <div className="card_controls">
              <h3>صمم بطاقتك من هنا</h3>
              <input type="text" placeholder="اسمك علي البطاقة" />
              <input type="text" placeholder="الصورة علي ظهر البطاقة" />
              <input type="text" placeholder="اكتب اسم اللون " />
              <button className="create_btn">حفظ</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CreateCard;
