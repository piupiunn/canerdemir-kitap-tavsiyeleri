import React from "react";
import Book from "../../components/book/Book";
import {
  bookLinks,
  searchLinks,
  youtubeLinks,
  bookBacks,
} from "../../bookLinks";

//style
import "./Roman.css";

export default function Roman() {
  return (
    <div className="container">
      <div className="roman">
        <Book
          name={"Swann'ların Tarafı"}
          imageSource={bookLinks.Proust}
          author={"Marcel Proust - YKY"}
          searchLink={searchLinks.Proust}
          bookBack={bookBacks.Proust}
          bookInfo={""}
          bookDifficulty={""}
          noYoutube
          darkyellowBackground
          colorDarkYellow
          onlyOneButton
        />
        <Book
          name={"Bulantı"}
          imageSource={bookLinks.SarteBulantı}
          author={"Jean-Paul Sartre - Can Yayınları"}
          searchLink={searchLinks.SarteBulantı}
          bookBack={bookBacks.SarteBulantı}
          bookInfo={""}
          bookDifficulty={""}
          noYoutube
          whiteBackground
          colorWhite
          onlyOneButton
        />
        <Book
          name={"Sarsıntı"}
          imageSource={bookLinks.Bernard}
          author={"Thomas Bernhard - YKY"}
          searchLink={searchLinks.Bernard}
          bookBack={bookBacks.Bernard}
          bookInfo={""}
          bookDifficulty={" "}
          noYoutube
          darkredBackground
          colorDarkred
          onlyOneButton
        />
        <Book
          name={"Karamazov Kardeşler"}
          imageSource={bookLinks.Dostoyevski}
          author={"Dostoyevski - İ. B. Kültür Yayınları"}
          searchLink={searchLinks.Dostoyevski}
          bookBack={bookBacks.Dostoyevski}
          bookInfo={""}
          bookDifficulty={" "}
          noYoutube
          colorYellow
          yellowBackground
          onlyOneButton
        />
      </div>
    </div>
  );
}
