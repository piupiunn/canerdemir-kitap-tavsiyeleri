import React from "react";
import Book from "../../components/book/Book";
import {
  bookLinks,
  searchLinks,
  youtubeLinks,
  bookBacks,
} from "../../bookLinks";

//style
import "./Bilim.css";

export default function Bilim() {
  return (
    <div className="container">
      <div className="bilim books-flex ">
        <Book
          name={"Türlerin Kökeni"}
          imageSource={bookLinks.DarwinEvrim}
          author={"Charles Darwin - Alfa Bilim"}
          searchLink={searchLinks.DarwinEvrim}
          youtubeLink={youtubeLinks.DarwinErvim}
          bookBack={bookBacks.DarwinEvrim}
          bookInfo={""}
          bookDifficulty={"Giriş "}
          greenBackground3
          greenColor3
        />
        <Book
          name={"İnsanın Türeyişi"}
          imageSource={bookLinks.DarwinTureyis}
          author={"Charles Darwin - Alfa Bilim"}
          searchLink={searchLinks.DarwinTureyis}
          youtubeLink={youtubeLinks.DarwinTureyis}
          bookBack={bookBacks.DarwinTureyis}
          bookInfo={""}
          bookDifficulty={"Giriş "}
          greenBackground4
          greenColor4
        />
        <Book
          name={"Son Moda Saçmalar"}
          imageSource={bookLinks.AlanSacmalar}
          author={"Alan Sokal - Alfa Bilim"}
          searchLink={searchLinks.AlanSacmalar}
          bookBack={bookBacks.AlanSacmalar}
          bookInfo={""}
          bookDifficulty={"Giriş "}
          noYoutube
          onlyOneButton
          darkBackground
          darkColor
        />
      </div>
    </div>
  );
}
