import React from "react";
import Book from "../../components/book/Book";
import {
  backgrounds,
  bookLinks,
  searchLinks,
  youtubeLinks,
} from "../../bookLinks";

//style
import "./Felsefe.css";

export default function Felsefe() {
  return (
    <div className="felsefe">
      <Book
        name={"Platon"}
        imageSource={bookLinks.Platon}
        author={"Frank Herbert"}
        style={{ backgroundColor: "#C6B5D8", borderRadius: "10px" }}
      />
      <Book
        name={"Nietzsche"}
        imageSource={bookLinks.Nietzsche}
        author={"Frank Herbert"}
        style={{
          backgroundImage: `url(${backgrounds.Nietzsche})`,
          borderRadius: "10px",
        }}
        searchLink={<a href={searchLinks.Nietzsche}>Google Search Link</a>}
        youtubeLinks={<a href={youtubeLinks.Nietzsche}>Youtube Link</a>}
      />
      <Book
        name={"Dune"}
        imageSource={bookLinks.Dune}
        author={"Frank Herbert"}
      />
      <Book
        name={"Dune"}
        imageSource={bookLinks.Dune}
        author={"Frank Herbert"}
      />
      <Book
        name={"Dune"}
        imageSource={bookLinks.Dune}
        author={"Frank Herbert"}
      />
      <Book
        name={"Dune"}
        imageSource={bookLinks.Dune}
        author={"Frank Herbert"}
      />
      <Book
        name={"Dune"}
        imageSource={bookLinks.Dune}
        author={"Frank Herbert"}
      />
      <Book
        name={"Dune"}
        imageSource={bookLinks.Dune}
        author={"Frank Herbert"}
      />
      <Book
        name={"Dune"}
        imageSource={bookLinks.Dune}
        author={"Frank Herbert"}
      />
      <Book
        name={"Dune"}
        imageSource={bookLinks.Dune}
        author={"Frank Herbert"}
      />
      <Book
        name={"Dune"}
        imageSource={bookLinks.Dune}
        author={"Frank Herbert"}
      />
    </div>
  );
}
