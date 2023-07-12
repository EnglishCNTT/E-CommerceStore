import React from "react";
import { AiFillHome } from "react-icons/ai";
import { FaTshirt } from "react-icons/fa";
import { GiRunningShoe } from "react-icons/gi";
import { BsBoxes } from "react-icons/bs";

export const SidebarData = [
  {
    title: "Trang chủ",
    path: "/",
    icon: <AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Áo bóng đá",
    path: "/",
    icon: <FaTshirt />,
    cName: "nav-text",
  },
  {
    title: "Giày bóng đá",
    path: "/",
    icon: <GiRunningShoe />,
    cName: "nav-text",
  },
  {
    title: "Phụ kiện",
    path: "/",
    icon: <BsBoxes />,
    cName: "nav-text",
  },
];
