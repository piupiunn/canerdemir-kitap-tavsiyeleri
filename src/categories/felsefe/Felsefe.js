import React from "react";
import Book from "../../components/book/Book";
import { bookLinks, searchLinks, youtubeLinks } from "../../bookLinks";

//style
import "./Felsefe.css";

export default function Felsefe() {
  return (
    <div className="felsefe">
      <Book
        name={"Platon"}
        imageSource={bookLinks.Platon}
        author={"Frank Herbert"}
        searchLink={searchLinks.Platon}
        youtubeLink={youtubeLinks.Platon}
      />
      <Book
        name={"Nietzsche"}
        imageSource={bookLinks.Nietzsche}
        author={"Frank Herbert"}
        searchLink={searchLinks.Nietzsche}
        youtubeLink={youtubeLinks.Nietzsche}
      />
      <Book
        name={"Sokrates"}
        imageSource={bookLinks.Sokrates}
        author={"Frank Herbert"}
        searchLink={searchLinks.Sokrates}
        youtubeLink={youtubeLinks.Sokrates}
      />
      <Book
        name={"Nietzsche"}
        imageSource={bookLinks.NietzscheZerdust}
        author={"Frank Herbert"}
        searchLink={searchLinks.NietzscheZerdust}
        noYoutube
      />
    </div>
  );
}
