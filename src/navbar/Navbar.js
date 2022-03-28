import React from "react";
import { NavLink } from "react-router-dom";

//style
import "./Navbar.css";

export default function Navbar({ leftBorder }) {
  return (
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
      <NavLink className="right-border" to="/yonetim">
        <p>Yönetim</p>
      </NavLink>
    </div>
  );
}
