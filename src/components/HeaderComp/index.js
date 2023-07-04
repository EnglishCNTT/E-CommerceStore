import React from "react";
import styles from "./styles.module.css";
import logo from "./assets/logo.png";
import search_icon from "./assets/search.png";
import cart_icon from "./assets/shopping-bag.png";
import account_icon from "./assets/account.png";
import { Menu } from "antd";

export default function HeaderComp() {
  return (
    <div className={styles["header"]}>
      {/* <div className="logo"> */}
      <button className={styles["mylogo"]}>
        <img height={80} src={logo} alt="" />
      </button>
      {/* </div> */}
      <ul className={styles["main_menu"]}>
        <li>
          <a className={styles["link-page"]} href="/">
            Trang chủ
          </a>
        </li>
        <li>
          <a className={styles["link-page"]} href="/">
            Áo bóng đá
          </a>
        </li>
        <li>
          <a className={styles["link-page"]} href="/">
            Giày bóng đá
          </a>
        </li>
        <li>
          <a className={styles["link-page"]} href="/">
            Phụ kiện
          </a>
        </li>
      </ul>

      <div className={styles["hidden-menu"]}>
        <Menu>
          <Menu.Item key="0">
            <a className={styles["link-page"]} href="/">
              Trang chủ
            </a>
          </Menu.Item>
          <Menu.Item key="1">
            <a className={styles["link-page"]} href="/">
              Áo bóng đá
            </a>
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item key="3">
            <a className={styles["link-page"]} href="/">
              Giày bóng đá
            </a>
          </Menu.Item>
          <Menu.Item key="4">
            <a className={styles["link-page"]} href="/">
              Phụ kiện
            </a>
          </Menu.Item>
        </Menu>
      </div>

      <div className={styles["for-use"]}>
        <input type="text" placeholder="Tìm kiếm..." />
        <button className={styles["search"]}>
          <img width={20} height={20} src={search_icon} />
        </button>
        <button className={styles["cart"]}>
          <img width={20} height={20} src={cart_icon} />
        </button>
        <button className={styles["account"]}>
          <img width={20} height={20} src={account_icon} />
        </button>
      </div>
    </div>
  );
}
