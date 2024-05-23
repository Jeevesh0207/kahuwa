import React, { useEffect, useState } from "react";
import "./StyleNavbar.css";
function Navbar() {
  const MenuToggle = () => {
    const menuID = document.getElementById("menuID");
    const small_menu_option =
      document.getElementsByClassName("small_menu_option")[0];
    if (
      small_menu_option.style.display == "" ||
      small_menu_option.style.display == "none"
    ) {
      small_menu_option.style.display = "flex";
      menuID.className="fa-solid fa-xmark"
    } else {
      small_menu_option.style.display = "none";
      menuID.className="fa-solid fa-bars"
    }
  };

  return (
    <div className="Navbar">
      <div className="logo">
        <img src={require("../../img/logo.png")} />
        <h1>GHS Kahuwa</h1>
      </div>
      <div className="menu">
        <ul>
          <li>
            <i className="fa-solid fa-house"></i>Home
          </li>
          <li>
            <i className="fa-solid fa-user"></i>About
          </li>
          <li>
            <i className="fa-solid fa-landmark-dome"></i>Academics
          </li>
          <li>
            <i className="fa-solid fa-newspaper"></i>News
          </li>
          <li>
            <i className="fa-solid fa-calendar-days"></i>Events
          </li>
          <li>
            <i className="fa-solid fa-graduation-cap"></i>Students
          </li>
          <li>
            <i className="fa-solid fa-user-plus"></i>Admissions
          </li>
          <li>
            <i className="fa-solid fa-phone"></i>Contact
          </li>
          <li className="small_menu">
            <div className="menu_icon"  onClick={MenuToggle}>
              <i className="fa-solid fa-bars" id="menuID"></i>
            </div>
            <div className="small_menu_option">
              <ul>
                <li>
                  <i className="fa-solid fa-house"></i>Home
                </li>
                <li>
                  <i className="fa-solid fa-user"></i>About
                </li>
                <li>
                  <i className="fa-solid fa-landmark-dome"></i>Academics
                </li>
                <li>
                  <i className="fa-solid fa-newspaper"></i>News
                </li>
                <li>
                  <i className="fa-solid fa-calendar-days"></i>Events
                </li>
                <li>
                  <i className="fa-solid fa-graduation-cap"></i>Students
                </li>
                <li>
                  <i className="fa-solid fa-user-plus"></i>Admissions
                </li>
                <li>
                  <i className="fa-solid fa-phone"></i>Contact
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
