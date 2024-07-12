import React from "react";
import Navbar from "../Navbar/Navbar";
import "./moreDetails.css";
import Footer from "../Footer/Footer";
const MoreDetails = () => {
  return (
    <>
      <Navbar />
      <section className="moreDetails">
        <div className="moreDetails_container">
          <h2>Motion Graphics</h2>
          <div className="moreDetails_list">
            <div className="moreDetails_form">
              <input type="text" placeholder="الاسم" />
              <input type="text" placeholder="رقم الهاتف" />
              <input type="email" placeholder="ايميل الكتروني" />
              <textarea placeholder="تفاصيل الخدمة المطلوبة"></textarea>
            </div>
            <div className="moreDetails_content">
              <p>
                اهلا بك في خدمات سكند ريتينج يرجي ملئ البيانات و كتابة كل
                متتطلبات الخدمة بالتفصيل لتحديد السعر المناسب لمتطلباتك
              </p>
              <p>
                سيتم التواصل معاك خلال 24 ساعة من خلال فريق سكند ريتينج لمتابعة
                طلبك في اسرع وقت
              </p>
              <div className="moreDetails_btn">
                <button>ارسال</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MoreDetails;
