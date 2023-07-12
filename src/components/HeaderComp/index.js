import React from "react";
import { useState } from "react";
import styles from "./styles.module.css";
import logo from "./assets/logo.png";
import search_icon from "./assets/search.png";
import cart_icon from "./assets/shopping-bag.png";
import account_icon from "./assets/account.png";
import bar_icon from "./assets/bars-solid.svg";
import close_icon from "./assets/xmark-solid.svg";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { FaBars, FaSearch } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { SidebarData } from "./SidebarData";

export default function HeaderComp() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      {/* Nav Mobile */}
      <div className={styles["navbarhidden"]}>
        <Link to="#" className={styles["menubar"]}>
          <FaBars onClick={showSidebar} />
        </Link>
        <button className={styles["mylogo-mobile"]}>
          <img height={80} src={logo} alt="" />
        </button>
        <button className={styles["cart-mobile"]}>
          <img width={20} height={20} src={cart_icon} />
        </button>
        <button className={styles["account-mobile"]}>
          <img width={20} height={20} src={account_icon} />
        </button>
      </div>

      <nav className={styles[sidebar ? "active" : "nav-menu"]}>
        <ul className={styles["nav-menu-items"]}>
          <li className={styles["navbar-toggle"]}>
            <input type="text" placeholder="Tìm kiếm..." />
            {/* <FaSearch /> */}
            <button className={styles["search"]}>
              <img width={20} height={20} src={search_icon} />
            </button>
            <Link to="#" className={styles["menu-bars"]}>
              <AiOutlineClose onClick={showSidebar} />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={styles[item.cName]}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Nav PC */}

      <div className={styles["nav-pc"]}>
        <div className="logo">
          <button className={styles["mylogo"]}>
            <img height={80} src={logo} alt="" />
          </button>
        </div>
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
    </>
  );
}
