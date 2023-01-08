import React from "react";
import Book from "../../components/book/Book";
import { bookLinks, searchLinks, bookBacks } from "../../bookLinks";

//style
import "./Bilim-Kurgu.css";

export default function BilimKurgu() {
  return (
    <div className="container">
      <div className="bilim-kurgu">
        <Book
          name={"Dune"}
          imageSource={bookLinks.FrankHerbert}
          author={"Frank Herbert - İthaki Yayınları"}
          searchLink={searchLinks.FrankDune}
          bookBack={bookBacks.FrankDune}
          bookInfo={""}
          bookDifficulty={"Giriş "}
          backgroundcolorDune
          colorDune
          noYoutube
          onlyOneButton
        />
      </div>
    </div>
  );
}
