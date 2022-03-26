import React from "react";
import Book from "../../components/book/Book";
import { backgrounds, bookLinks, searchLinks } from "../../bookLinks";

//style
import "./Tarih.css";

export default function Tarih() {
  return (
    <div className="tarih">
      <Book
        name={"Platon"}
        imageSource={bookLinks.Platon}
        author={"Frank Herbert"}
        style={{ backgroundColor: "#ffff", borderRadius: "10px" }}
      />
    </div>
  );
}
