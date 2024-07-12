"use client";
import Link from "next/link";
import React from "react";
import "./navbar.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faCartShopping,
  faLanguage,
  faUser,
  faBars,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  const openMenu = () => {
    document
      .querySelector(".navbar_list_mobile")
      .classList.replace("d-none", "d-flex");
  };
  const closeMenu = () => {
    document
      .querySelector(".navbar_list_mobile")
      .classList.replace("d-flex", "d-none");
  };
  return (
    <nav className="navbar_disc">
      <div className="navbar_container">
        <div className="navbar_logo">
          <Image src="/images/logo.png" width={64} height={64} alt="logo" />
        </div>
        <div className="navbar_links">
          <ul>
            <li>
              <Link href="/">الرئيسية</Link>
            </li>
            <li>
              <Link href="/">البطاقات الذكية</Link>
            </li>
            <li>
              <Link href="/">السوشيال ميديا</Link>
            </li>
            <li>
              <Link href="/">محركات البحث</Link>
            </li>
            <li>
              <Link href="/">خدمات أخري</Link>
            </li>
          </ul>
        </div>

        <div className="navbar_tools">
          <Link href="/components/addToFav">
            <FontAwesomeIcon icon={faHeart} />
          </Link>
          <Link href="/components/cart">
            <FontAwesomeIcon icon={faCartShopping} />
          </Link>
          <Link href="/">
            <FontAwesomeIcon icon={faLanguage} />
          </Link>
          <Link href="/components/register">
            <FontAwesomeIcon icon={faUser} />
          </Link>
          <FontAwesomeIcon
            icon={faBars}
            className="bars_menu"
            onClick={openMenu}
          />
        </div>
      </div>

      <div className="navbar_list_mobile d-none">
        <div className="close_menu">
          <FontAwesomeIcon
            icon={faCircleXmark}
            width={28}
            onClick={closeMenu}
          />
        </div>
        <ul className="navbar_list_menu">
          <li>
            <Link href="/">الرئيسية</Link>
          </li>
          <li>
            <Link href="/">البطاقات الذكية</Link>
          </li>
          <li>
            <Link href="/">السوشيال ميديا</Link>
          </li>
          <li>
            <Link href="/">محركات البحث</Link>
          </li>
          <li>
            <Link href="/">خدمات أخري</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
