import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import "./register.css";
const Register = () => {
  return (
    <section className="register">
      <div className="register_container">
        <div className="register_form">
          <div className="register_title">Register</div>
          <label for="username">Username</label>
          <input type="text" placeholder="Email or Phone" id="username" />
          <label for="phone">Phone Number</label>
          <input type="text" placeholder="Phone" id="phone" />
          <label for="email">Email</label>
          <input type="text" placeholder="email" id="email" />
          <button>Log In</button>
          <div class="social">
            <div class="go">
              <FontAwesomeIcon icon={faGoogle} width={25} /> Google
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
