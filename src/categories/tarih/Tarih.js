import React from "react";
import Book from "../../components/book/Book";
import { bookLinks, searchLinks, youtubeLinks } from "../../bookLinks";

//style
import "./Tarih.css";

export default function Tarih() {
  return (
    <div className="tarih">
      <Book
        name={"İmparatorluk Çağı"}
        imageSource={bookLinks.HobsbawmImparatorluk}
        author={"Eric Hobsbawm - Dost Yayınevi"}
        searchLink={searchLinks.HobsbawmImparatorluk}
        noYoutube
      />
      <Book
        name={"Devrim Çağı"}
        imageSource={bookLinks.HobsbawmDevrim}
        author={"Eric Hobsbawm - Dost Yayınevi"}
        searchLink={searchLinks.HobsbawmDevrim}
        youtubeLink={youtubeLinks.HobsbawmDevrim}
      />
      <Book
        name={"Sermaye Çağı"}
        imageSource={bookLinks.HobsbawmSermaye}
        author={"Eric Hobsbawm - Dost Yayınevi"}
        searchLink={searchLinks.HobsbawmSermaye}
        noYoutube
      />
      <Book
        name={"Kısa 20. Yüzyıl "}
        imageSource={bookLinks.HobsbawmKısa}
        author={"Eric Hobsbawm - Dost Yayınevi"}
        searchLink={searchLinks.HobsbawmKısa}
        noYoutube
      />
      <Book
        name={"Sanayi ve İmparatorluk"}
        imageSource={bookLinks.HobsbawmSanayiveImp}
        author={"Eric Hobsbawm - Dost Yayınevi"}
        searchLink={searchLinks.HobsbawmSanayiveImp}
        noYoutube
      />
      <Book
        name={"Sapiens"}
        imageSource={bookLinks.HarariSapiens}
        author={"Yuval Noah Harari - Kolektif Kitap"}
        searchLink={searchLinks.HarariSapiens}
      />
      <Book
        name={"Homo Deus"}
        imageSource={bookLinks.HarariHomoDeus}
        author={"Yuval Noah Harari - Kolektif Kitap"}
        searchLink={searchLinks.HarariHomoDeus}
        noYoutube
      />
      <Book
        name={"Tüfek, Mikrop ve Çelik"}
        imageSource={bookLinks.JaredTufekCelik}
        author={"Jared Diamond - Pegasus Yayınları"}
        searchLink={searchLinks.JaredTufekCelik}
        noYoutube
      />
      <Book
        name={"Olaylarla Türkiye Ekonomisi"}
        imageSource={bookLinks.YalınAlpayTarih}
        author={"Yalın Alpay - Hümanist Yayıncılık"}
        searchLink={searchLinks.YalınAlpayTarih}
        noYoutube
      />
    </div>
  );
}
