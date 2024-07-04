import React from "react";
import Image from "next/image";
import "./allnfc.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
const allNFC = () => {
  return (
    <>
      <Navbar />
      <section className="allnfc">
        <dic className="allnfc_container">
          <h2 className="allnfc_title">NFC</h2>
          <div className="allnfc_list">
            <div className="allnfc_item">
              <Image src="/images/card.jpg" width={500} height={100} />
              <div className="allnfc_item_content">
                <h3>أسم البطاقة</h3>
                <p className="item_desc">100 SAR</p>
              </div>
              <div className="nfc_item_btn">
                <button>اضف الي السلة</button>
              </div>
            </div>
            <div className="allnfc_item">
              <Image src="/images/card.jpg" width={500} height={100} />
              <div className="allnfc_item_content">
                <h3>أسم البطاقة</h3>
                <p className="item_desc">100 SAR</p>
              </div>
              <div className="nfc_item_btn">
                <button>اضف الي السلة</button>
              </div>
            </div>
            <div className="allnfc_item">
              <Image src="/images/card.jpg" width={500} height={100} />
              <div className="allnfc_item_content">
                <h3>أسم البطاقة</h3>
                <p className="item_desc">100 SAR</p>
              </div>
              <div className="nfc_item_btn">
                <button>اضف الي السلة</button>
              </div>
            </div>
            <div className="allnfc_item">
              <Image src="/images/card.jpg" width={500} height={100} />
              <div className="allnfc_item_content">
                <h3>أسم البطاقة</h3>
                <p className="item_desc">100 SAR</p>
              </div>
              <div className="nfc_item_btn">
                <button>اضف الي السلة</button>
              </div>
            </div>
            <div className="allnfc_item">
              <Image src="/images/card.jpg" width={500} height={100} />
              <div className="allnfc_item_content">
                <h3>أسم البطاقة</h3>
                <p className="item_desc">100 SAR</p>
              </div>
              <div className="nfc_item_btn">
                <button>اضف الي السلة</button>
              </div>
            </div>
            <div className="allnfc_item">
              <Image src="/images/card.jpg" width={500} height={100} />
              <div className="allnfc_item_content">
                <h3>أسم البطاقة</h3>
                <p className="item_desc">100 SAR</p>
              </div>
              <div className="nfc_item_btn">
                <button>اضف الي السلة</button>
              </div>
            </div>
            <div className="allnfc_item">
              <Image src="/images/card.jpg" width={500} height={100} />
              <div className="allnfc_item_content">
                <h3>أسم البطاقة</h3>
                <p className="item_desc">100 SAR</p>
              </div>
              <div className="nfc_item_btn">
                <button>اضف الي السلة</button>
              </div>
            </div>
            <div className="allnfc_item">
              <Image src="/images/card.jpg" width={500} height={100} />
              <div className="allnfc_item_content">
                <h3>أسم البطاقة</h3>
                <p className="item_desc">100 SAR</p>
              </div>
              <div className="nfc_item_btn">
                <button>اضف الي السلة</button>
              </div>
            </div>
            <div className="allnfc_item">
              <Image src="/images/card.jpg" width={500} height={100} />
              <div className="allnfc_item_content">
                <h3>أسم البطاقة</h3>
                <p className="item_desc">100 SAR</p>
              </div>
              <div className="nfc_item_btn">
                <button>اضف الي السلة</button>
              </div>
            </div>
          </div>
        </dic>
      </section>
      <Footer />
    </>
  );
};

export default allNFC;
