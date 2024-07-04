import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTiktok,
  faSnapchat,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container">
        <h2>بطاقة العمل الرقمية الذكية</h2>
        <p>شارك كل شيء بلمسة وحده</p>
        <div className="socailMedia">
          <FontAwesomeIcon icon={faFacebookF} />
          <FontAwesomeIcon icon={faSnapchat} />
          <FontAwesomeIcon icon={faTiktok} />
          <FontAwesomeIcon icon={faInstagram} />
        </div>
        <div className="footer_content">
          <div className="footer_content_1">
            <h3>تعلم واحصل على المساعدة</h3>
            <p>اتصل بنا</p>
            <p>الأجهزة المتوافقة</p>
          </div>
          <div className="footer_content_2">
            <h3>صمم بطاقتك الان</h3>
            <p>بطاقات</p>
          </div>
        </div>
        <div className="copyright">
          © 2024 Second Rating Saudi Arabia. كل الحقوق محفوظة
        </div>
      </div>
    </footer>
  );
};

export default Footer;
