import React from "react";
import Book from "../../components/book/Book";
import { bookLinks, searchLinks, youtubeLinks } from "../../bookLinks";

//style
import "./Yonetım.css";

export default function Yonetım() {
  return (
    <div className="yonetim">
      <Book
        name={"John Locke"}
        imageSource={bookLinks.JohnLockeYonetim}
        author={"Ebabil Yayınları"}
        searchLink={searchLinks.JohnLockeYonetim}
        noYoutube
      />
      <Book
        name={"John Stuart Mill"}
        imageSource={bookLinks.JohnMillOzgurluk}
        author={"Kutu Yayınları"}
        searchLink={searchLinks.JohnMillOzgurluk}
        noYoutube
      />
      <Book
        name={"Jean-Jacques Rousseau"}
        imageSource={bookLinks.Rousseau}
        author={"Alfa Bilim"}
        searchLink={searchLinks.Rousseau}
        noYoutube
      />
      <Book
        name={"Montesquieu"}
        imageSource={bookLinks.Montesquieu}
        author={"Alfa Bilim"}
        searchLink={searchLinks.Montesquieu}
        noYoutube
      />
      <Book
        name={"Yalın Alpay"}
        imageSource={bookLinks.YalınAlpaySiyaset}
        author={"Alfa Bilim"}
        searchLink={searchLinks.YalınAlpaySiyaset}
        youtubeLink={youtubeLinks.YalınAlpaySiyaset}
      />
    </div>
  );
}
