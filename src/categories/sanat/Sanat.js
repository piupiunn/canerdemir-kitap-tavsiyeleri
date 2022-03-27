import React from "react";
import Book from "../../components/book/Book";
import { bookLinks, searchLinks } from "../../bookLinks";
import "./Sanat.css";

//style
import "./Sanat.css";

export default function Sanat() {
  return (
    <div className="sanat">
      <Book
        name={"Platon"}
        imageSource={bookLinks.GombrichSanatınOykusu}
        author={"Frank Herbert"}
        searchLink={searchLinks.GombrichSanatınOykusu}
      />
      <Book
        name={"Platon"}
        imageSource={bookLinks.JohnBergerGorme}
        author={"Frank Herbert"}
        searchLink={searchLinks.JohnBergerGorme}
      />
      <Book
        name={"Platon"}
        imageSource={bookLinks.LeppertSanat}
        author={"Frank Herbert"}
        searchLink={searchLinks.LeppertSanat}
      />
      <Book
        name={"Platon"}
        imageSource={bookLinks.LegrosSanat}
        author={"Frank Herbert"}
        searchLink={searchLinks.LegrosSanat}
      />
      <Book
        name={"Platon"}
        imageSource={bookLinks.VesnaKuratorluk}
        author={"Frank Herbert"}
        searchLink={searchLinks.VesnaKuratorluk}
      />
      <Book
        name={"Platon"}
        imageSource={bookLinks.BarrettCagdasSanat}
        author={"Frank Herbert"}
        searchLink={searchLinks.BarrettCagdasSanat}
      />
      <Book
        name={"Platon"}
        imageSource={bookLinks.BarrettElestirmek}
        author={"Frank Herbert"}
        searchLink={searchLinks.BarrettElestirmek}
      />
    </div>
  );
}
