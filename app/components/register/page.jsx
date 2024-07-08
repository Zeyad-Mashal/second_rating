"use client";
import React from "react";
import "./register.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import signin from "../../../public/images/signin.svg";
import signup from "../../../public/images/signup.svg";
import Link from "next/link";
const page = () => {
  const sign_in_btn = () => {
    document
      .querySelector(".login_system_container")
      .classList.add("sign_in_mode");
  };
  const sign_up_btn = () => {
    document
      .querySelector(".login_system_container")
      .classList.remove("sign_in_mode");
  };
  const changeDisplaySignIn = () => {
    document.querySelector("#signup").style.display = "none";
    document.querySelector("#signin").style.opacity = "1";
    document.querySelector("#signin").style.display = "flex";
  };
  const changeDisplaySignUp = () => {
    document.querySelector("#signup").style.display = "flex";
    document.querySelector("#signin").style.opacity = "0";
    document.querySelector("#signin").style.display = "none";
  };
  return (
    <section className="login_system">
      <div className="login_system_container">
        <div className="signin_signup">
          <div className="signin_form" id="signin">
            <h2 className="title">Sign In</h2>
            <div className="input_field">
              <FontAwesomeIcon icon={faUser} />
              <input type="text" placeholder="رقم الهاتف" />
            </div>
            <div className="input_field">
              <FontAwesomeIcon icon={faEnvelope} />
              <input type="email" placeholder="البريد الالكتروني" />
            </div>
            <button className="signin_btn">تسجيل دخول</button>
            <p className="signup_btn_page" onClick={changeDisplaySignUp}>
              ليس لديك حساب ؟
            </p>
            <p className="singin_google">
              <span>Sign In With Google</span>
              <FontAwesomeIcon icon={faGoogle} width={20} />
            </p>
          </div>
          <div className="signout_form" id="signup">
            <h2 className="title">Sign Up</h2>
            <div className="input_field">
              <FontAwesomeIcon icon={faUser} />
              <input type="text" placeholder="الاسم" />
            </div>
            <div className="input_field">
              <FontAwesomeIcon icon={faUser} />
              <input type="text" placeholder="رقم الهاتف" />
            </div>
            <div className="input_field">
              <FontAwesomeIcon icon={faEnvelope} />
              <input type="email" placeholder="البريد الالكتروني" />
            </div>
            <button className="signin_btn">أنشاء حساب</button>
            <p className="signin_btn_page" onClick={changeDisplaySignIn}>
              هل لديك حساب ؟
            </p>
            <p className="singin_google">
              <span>Sign Up With Google</span>
              <FontAwesomeIcon icon={faGoogle} width={20} />
            </p>
          </div>
        </div>
        <div className="panels_container">
          <div className="panel left_panel">
            <div className="content">
              <h3>لديك حساب ؟</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error
                quibusdam provident eos nesciunt id molestiae.
              </p>
              <button
                className="signin_btn"
                id="sign_in_btn"
                onClick={sign_in_btn}
              >
                Sign In
              </button>
              <Image src={signup} width={1000} height={1000} />
            </div>
          </div>
          <div className="panel right_panel">
            <div className="content">
              <h3>ليس لديك حساب ؟</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error
                quibusdam provident eos nesciunt id molestiae.
              </p>
              <button
                className="signin_btn"
                id="sign_up_btn"
                onClick={sign_up_btn}
              >
                Sign Up
              </button>
              <Image src={signin} width={1000} height={1000} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
