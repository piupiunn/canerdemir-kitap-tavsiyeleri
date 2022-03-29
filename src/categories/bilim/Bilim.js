import React from "react";
import Book from "../../components/book/Book";
import { bookLinks, searchLinks, youtubeLinks } from "../../bookLinks";

//style
import "./Bilim.css";

export default function Bilim() {
  return (
    <div className="bilim">
      <Book
        name={"Türlerin Kökeni"}
        imageSource={bookLinks.DarwinEvrim}
        author={"Charles Darwin - Alfa Bilim"}
        searchLink={searchLinks.DarwinEvrim}
        youtubeLink={youtubeLinks.DarwinErvim}
      />
      <Book
        name={"İnsanın Türeyişi"}
        imageSource={bookLinks.DarwinTureyis}
        author={"Charles Darwin - Alfa Bilim"}
        searchLink={searchLinks.DarwinTureyis}
        youtubeLink={youtubeLinks.DarwinTureyis}
      />
      <Book
        name={"Son Moda Saçmalar"}
        imageSource={bookLinks.AlanSacmalar}
        author={"Alan Sokal - Alfa Bilim"}
        searchLink={searchLinks.AlanSacmalar}
        noYoutube
      />
    </div>
  );
}
