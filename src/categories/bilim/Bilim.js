import React from "react";
import Book from "../../components/book/Book";
import { bookLinks, searchLinks, youtubeLinks } from "../../bookLinks";

//style
import "./Bilim.css";

export default function Bilim() {
  return (
    <div className="bilim">
      <Book
        name={"Charles Darwin"}
        imageSource={bookLinks.DarwinEvrim}
        author={"Alfa Bilim"}
        searchLink={searchLinks.DarwinEvrim}
        youtubeLink={youtubeLinks.DarwinErvim}
      />
      <Book
        name={"Charles Darwin"}
        imageSource={bookLinks.DarwinTureyis}
        author={"Alfa Bilim"}
        searchLink={searchLinks.DarwinTureyis}
        youtubeLink={youtubeLinks.DarwinTureyis}
      />
      <Book
        name={"Alan Sokal, Jean Bricmont"}
        imageSource={bookLinks.AlanSacmalar}
        author={"Alfa Bilim"}
        searchLink={searchLinks.AlanSacmalar}
        noYoutube
      />
    </div>
  );
}
