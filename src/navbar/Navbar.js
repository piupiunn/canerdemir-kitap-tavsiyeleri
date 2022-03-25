import React from "react";
import { NavLink } from "react-router-dom";

//style
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <NavLink to="/felsefe">
        <p>Felsefe</p>
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
    </div>
  );
}
