import React from "react";
import Book from "../../components/book/Book";
import { bookLinks, searchLinks, youtubeLinks } from "../../bookLinks";

//style
import "./Sanat.css";

export default function Sanat() {
  return (
    <div className="sanat">
      <Book
        name={"Sanatın Öyküsü"}
        imageSource={bookLinks.GombrichSanatınOykusu}
        author={"E.H. Gombrich - Remzi Kitabevi"}
        searchLink={searchLinks.GombrichSanatınOykusu}
        youtubeLink={youtubeLinks.GombrichSanatınOykusu}
      />
      <Book
        name={"Görme Biçimleri"}
        imageSource={bookLinks.JohnBergerGorme}
        author={"John Berger - Metis Yayınları"}
        searchLink={searchLinks.JohnBergerGorme}
        noYoutube
      />
      <Book
        name={"Sanatta Anlamın Görüntüsü"}
        imageSource={bookLinks.LeppertSanat}
        author={"Richard Leppert - Ayrıntı Yayınları"}
        searchLink={searchLinks.LeppertSanat}
        noYoutube
      />
      <Book
        name={"Sanatta Bireyin Doğuşu"}
        imageSource={bookLinks.LegrosSanat}
        author={"Tzvetan Todorov - YKY"}
        searchLink={searchLinks.LegrosSanat}
        noYoutube
      />
      <Book
        name={"Küratörlük"}
        imageSource={bookLinks.VesnaKuratorluk}
        author={"Vesna Madzoski - Koç Üni. Yayınları"}
        searchLink={searchLinks.VesnaKuratorluk}
        noYoutube
      />
      <Book
        name={"Neden Bu Sanat?"}
        imageSource={bookLinks.BarrettCagdasSanat}
        author={"Terry Barrett - Hayalperest Kitap"}
        searchLink={searchLinks.BarrettCagdasSanat}
        youtubeLink={youtubeLinks.BarrettCagdasSanat}
      />
      <Book
        name={"Sanatı Eleştirmek"}
        imageSource={bookLinks.BarrettElestirmek}
        author={"Terry Barrett - Hayalperest Kitap"}
        searchLink={searchLinks.BarrettElestirmek}
        youtubeLink={youtubeLinks.BarrettElestirmek}
      />
      <Book
        name={"Yapıt Söküm"}
        imageSource={bookLinks.YalınAlpayYapıt}
        author={"Yalın Alpay - Destek Yayınları"}
        searchLink={searchLinks.YalınAlpayYapıt}
        noYoutube
      />
    </div>
  );
}
