import React from "react";
import HeaderComp from "../HeaderComp";
import styles from "./styles.module.css";
import image1 from "./assets/1.jpg";
import image2 from "./assets/2.jpg";
import image3 from "./assets/3.jpg";
import image4 from "./assets/4.jpg";
import homepage1 from "./assets/homepagepc.jpg";
import manimg from "./assets/man.jpg";
import womenimg from "./assets/women.jpg";
import kidimg from "./assets/kid.jpg";
import goalkeeper from "./assets/goalkeeper.jpg";

import { Card } from "antd";
const { Meta } = Card;

export default function HomePage() {
  return (
    <>
      <div className={styles["supporting"]}>
        <span>Support +(84) 123456789</span>
        <span>
          Free VietNam shipping on all order $100+
          <a href=""> Learn more</a>
        </span>
        <div className={styles["endlinesp"]}>
          <span>Shipping</span>
          <span>FAQ</span>
          <span>Contact</span>
          <span>English|$</span>
        </div>
      </div>
      <HeaderComp />

      <div className={styles["homepage-img"]}>
        <img src={homepage1} alt="" />
      </div>

      <div className={styles["shopnow-content"]}>
        <h1>2023/24 TRAINING COLLECTION</h1>
        <h3>
          Worn by the players and staff of the first team, our collection
          includes tracksuits, jerseys, shorts and training 1/4 zip tops!
        </h3>
        <button className={styles["shop-btn"]}>Shop now</button>
      </div>

      <div className={styles["new-arrivals"]}>
        <h1>New Arrivals</h1>
        <div className={styles["list-cards"]}>
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src={manimg} />}
          >
            <Meta  title="Men's Home Kit" description="$99" />
          </Card>
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src={womenimg} />}
          >
            <Meta title="Women's Home Kit" description="$99" />
          </Card>
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src={kidimg} />}
          >
            <Meta title="Kids's Home Kit" description="$99" />
          </Card>
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src={goalkeeper} />}
          >
            <Meta title="GoalKeeper Kit" description="$99" />
          </Card>
        </div>
      </div>
    </>
  );
}
