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
        imageSource={bookLinks.DarwinErvim}
        author={"Alfa Bilim"}
        searchLink={searchLinks.DarwinErvim}
        youtubeLink={youtubeLinks.Nietzsche}
      />
      <Book
        name={"Charles Darwin"}
        imageSource={bookLinks.DarwinTureyis}
        author={"Alfa Bilim"}
        searchLink={searchLinks.DarwinTureyis}
        youtubeLink={youtubeLinks.Nietzsche}
      />
      <Book
        name={"Alan Sokal, Jean Bricmont"}
        imageSource={bookLinks.AlanSacmalar}
        author={"Alfa Bilim"}
        searchLink={searchLinks.AlanSacmalar}
        youtubeLink={youtubeLinks.Nietzsche}
      />
    </div>
  );
}
