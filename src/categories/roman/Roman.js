import React from "react";
import Book from "../../components/book/Book";
import { bookLinks, searchLinks, youtubeLinks } from "../../bookLinks";

//style
import "./Roman.css";

export default function Roman() {
  return (
    <div className="roman">
      <Book
        name={"Swann'ların Tarafı"}
        imageSource={bookLinks.Proust}
        author={"Marcel Proust - YKY"}
        searchLink={searchLinks.Proust}
        noYoutube
      />
      <Book
        name={"Bulantı"}
        imageSource={bookLinks.SarteBulantı}
        author={"Jean-Paul Sartre - Can Yayınları"}
        searchLink={searchLinks.SarteBulantı}
        noYoutube
      />
      <Book
        name={"Sarsıntı"}
        imageSource={bookLinks.Bernard}
        author={"Thomas Bernhard - YKY"}
        searchLink={searchLinks.Bernard}
        noYoutube
      />
      <Book
        name={"Karamazov Kardeşler"}
        imageSource={bookLinks.Dostoyevski}
        author={"Dostoyevski - İ. B. Kültür Yayınları"}
        searchLink={searchLinks.Dostoyevski}
        noYoutube
      />
    </div>
  );
}
