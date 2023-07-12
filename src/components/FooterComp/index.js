import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import payment from "./assets/payment.png";
import styles from "./styles.module.css";

export default function FooterComp() {
  return (
    <>
      <div className={styles["info-container"]}>
        <div className={styles["subscribe"]}>
          <h1>City Style</h1>
          <h3>Sports accessories shop</h3>
          <p>Subscribe to our newsletter and get 10% off your first purchase</p>
          <div className={styles["enter-email"]}>
            <input type="text" placeholder="Enter email" />
            <AiOutlineArrowRight
              style={{
                fontSize: "2.4rem",
                color: "white",
                cursor: "pointer",
                backgroundColor: "#36118d",
                borderRadius: "5px",
              }}
            />
          </div>
        </div>
        <div className={styles["describe"]}>
          <label htmlFor="">Company</label>
          <ul>
            <li>About Us</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Our team</li>
            <li>Help Center</li>
            <li>Outlets</li>
          </ul>
        </div>
        <div className={styles["describe"]}>
          <label htmlFor="">Shop</label>
          <ul>
            <li>Gift cards</li>
            <li>Our Products</li>
            <li>My Account</li>
            <li>Shipping</li>
            <li>Returns</li>
            <li>Rewards</li>
          </ul>
        </div>
        <div className={styles["describe"]}>
          <label htmlFor="">Support</label>
          <ul>
            <li>Contact Us</li>
            <li>Payment Options</li>
            <li>Store Locator</li>
            <li>Accessbility</li>
            <li>Affiliates</li>
          </ul>
        </div>
        <div className={styles["describe"]}>
          <label htmlFor="">FAQ</label>
          <ul>
            <li>Rewards FAQ</li>
            <li>Product Care</li>
            <li>Size Guide</li>
          </ul>
        </div>
      </div>
      <div className={styles["payment-partner"]}>
        <span>@2023 All rights reserved. Designed by Ngọc English</span>
        <div className={styles["payment-icon"]}>
          <span>Payment Partners</span>
          <img src={payment} alt="" />
        </div>
      </div>
    </>
  );
}
