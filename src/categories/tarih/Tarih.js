import React from "react";
import Book from "../../components/book/Book";
import { bookLinks, searchLinks } from "../../bookLinks";

//style
import "./Tarih.css";

export default function Tarih() {
  return (
    <div className="tarih">
      <Book
        name={"Platon"}
        imageSource={bookLinks.HobsbawmImparatorluk}
        author={"Frank Herbert"}
        searchLink={searchLinks.HobsbawmImparatorluk}
        style={{ backgroundColor: "#ffbcbc" }}
      />
      <Book
        name={"Platon"}
        imageSource={bookLinks.HobsbawmDevrim}
        author={"Frank Herbert"}
        searchLink={searchLinks.HobsbawmDevrim}
        style={{ backgroundColor: "#bfdeff" }}
      />
      <Book
        name={"Platon"}
        imageSource={bookLinks.HobsbawmSermaye}
        author={"Frank Herbert"}
        searchLink={searchLinks.HobsbawmSermaye}
        style={{ backgroundColor: "#c6ffe8" }}
      />
      <Book
        name={"Platon"}
        imageSource={bookLinks.HobsbawmKısa}
        author={"Frank Herbert"}
        searchLink={searchLinks.HobsbawmKısa}
        style={{ backgroundColor: "#ffd3d3" }}
      />
      <Book
        name={"Platon"}
        imageSource={bookLinks.HobsbawmSanayiveImp}
        author={"Frank Herbert"}
        searchLink={searchLinks.HobsbawmSanayiveImp}
        style={{ backgroundColor: "#fff8e5" }}
      />
      <Book
        name={"Platon"}
        imageSource={bookLinks.HarariSapiens}
        author={"Frank Herbert"}
        searchLink={searchLinks.HarariSapiens}
        style={{ backgroundColor: "#FFFFFF" }}
      />
      <Book
        name={"Platon"}
        imageSource={bookLinks.HarariHomoDeus}
        author={"Frank Herbert"}
        searchLink={searchLinks.HarariHomoDeus}
        style={{ backgroundColor: "#b79275" }}
      />
      <Book
        name={"Platon"}
        imageSource={bookLinks.JaredTufekCelik}
        author={"Frank Herbert"}
        searchLink={searchLinks.JaredTufekCelik}
        style={{ backgroundColor: "#FFFFFF" }}
      />
      <Book
        name={"Platon"}
        imageSource={bookLinks.YalınAlpayTarih}
        author={"Frank Herbert"}
        searchLink={searchLinks.YalınAlpayTarih}
        style={{ backgroundColor: "#d5ccff" }}
      />
    </div>
  );
}
