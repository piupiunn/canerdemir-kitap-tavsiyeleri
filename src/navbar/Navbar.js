import React from "react";
import { NavLink } from "react-router-dom";

//style
import "./Navbar.css";

export default function Navbar({ leftBorder }) {
  return (
    <div className="container-navbar">
      <div className="navbar">
        <NavLink className="left-border" to="/felsefe">
          <p>Felsefe </p>
        </NavLink>

        <NavLink to="/tarih">
          <p>Tarih</p>
        </NavLink>

        <NavLink to="/sanat">
          <p>Sanat</p>
        </NavLink>

        <NavLink to="/bilim">
          <p>Bilim</p>
        </NavLink>

        <NavLink to="/kisisel-gelisim">
          <p>Kişisel Gelişim</p>
        </NavLink>

        <NavLink to="/yonetim">
          <p>Yönetim</p>
        </NavLink>

        <NavLink to="/bilim-kurgu">
          <p>Bilim Kurgu</p>
        </NavLink>

        <NavLink className="right-border" to="/roman">
          <p>Roman</p>
        </NavLink>
      </div>
    </div>
  );
}
