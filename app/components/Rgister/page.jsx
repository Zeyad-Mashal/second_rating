import React from "react";
import Image from "next/image";
import "./Register.css";
const Register = () => {
  return (
    <section className="register">
      <div className="register_container">
        <div className="register_image">
          <Image src="/images/motion.jpg" width={1000} height={1000} />
        </div>
        <div className="register_form">
          <h1>نشاء حساب جديد</h1>
          <div className="register_form">
            <input type="text" placeholder="الاسم" />
            <input type="text" placeholder="البريد الالكتروني" />
            <input type="text" placeholder="رقم الجوال" />
          </div>
          <div className="register_btn">
            <button>تسجيل</button>
          </div>
          <div className="loginDone">
            <p>لديك حساب؟</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
