import React from "react";
import Book from "../../components/book/Book";
import {
  bookLinks,
  searchLinks,
  youtubeLinks,
  bookBacks,
} from "../../bookLinks";

//style
import "./Sanat.css";

export default function Sanat() {
  return (
    <div className="container">
      <div className="sanat">
        <Book
          name={"Sanatın Öyküsü"}
          imageSource={bookLinks.GombrichSanatınOykusu}
          author={"E.H. Gombrich - Remzi Kitabevi"}
          searchLink={searchLinks.GombrichSanatınOykusu}
          youtubeLink={youtubeLinks.GombrichSanatınOykusu}
          bookBack={bookBacks.GombrichSanatınOykusu}
          bookInfo={""}
          bookDifficulty={"Giriş"}
          pinkBackground
          colorPink
        />
        <Book
          name={"Görme Biçimleri"}
          imageSource={bookLinks.JohnBergerGorme}
          author={"John Berger - Metis Yayınları"}
          searchLink={searchLinks.JohnBergerGorme}
          bookBack={bookBacks.JohnBergerGorme}
          bookInfo={""}
          bookDifficulty={"Giriş "}
          noYoutube
          onlyOneButton
          grayBackground
          colorGray
        />
        <Book
          name={"Sanatta Anlamın Görüntüsü"}
          imageSource={bookLinks.LeppertSanat}
          author={"Richard Leppert - Ayrıntı Yayınları"}
          searchLink={searchLinks.LeppertSanat}
          bookBack={bookBacks.LeppertSanat}
          bookInfo={""}
          bookDifficulty={"İleri"}
          noYoutube
          onlyOneButton
          blue2Background
          colorBlue2
        />
        <Book
          name={"Sanatta Bireyin Doğuşu"}
          imageSource={bookLinks.LegrosSanat}
          author={"Tzvetan Todorov - YKY"}
          searchLink={searchLinks.LegrosSanat}
          bookBack={bookBacks.LegrosSanat}
          bookInfo={""}
          bookDifficulty={"İleri "}
          noYoutube
          onlyOneButton
          darkgreenBackground
          colorDarkgreen
        />
        <Book
          name={"Küratörlük"}
          imageSource={bookLinks.VesnaKuratorluk}
          author={"Vesna Madzoski - Koç Üni. Yayınları"}
          searchLink={searchLinks.VesnaKuratorluk}
          bookBack={bookBacks.VesnaKuratorluk}
          bookInfo={""}
          bookDifficulty={"Orta "}
          noYoutube
          onlyOneButton
          lightyellowBackground
          colorLightyellow
        />
        <Book
          name={"Neden Bu Sanat?"}
          imageSource={bookLinks.BarrettCagdasSanat}
          author={"Terry Barrett - Hayalperest Kitap"}
          searchLink={searchLinks.BarrettCagdasSanat}
          youtubeLink={youtubeLinks.BarrettCagdasSanat}
          bookBack={bookBacks.BarrettCagdasSanat}
          bookInfo={""}
          bookDifficulty={"Orta "}
          noYoutube
          onlyOneButton
          purple2Background
          colorPurple2
        />
        <Book
          name={"Sanatı Eleştirmek"}
          imageSource={bookLinks.BarrettElestirmek}
          author={"Terry Barrett - Hayalperest Kitap"}
          searchLink={searchLinks.BarrettElestirmek}
          youtubeLink={youtubeLinks.BarrettElestirmek}
          bookBack={bookBacks.BarrettElestirmek}
          bookInfo={""}
          bookDifficulty={"Orta "}
          purple2Background
          colorPurple2
        />
        <Book
          name={"Yapıt Söküm"}
          imageSource={bookLinks.YalınAlpayYapıt}
          author={"Yalın Alpay - Destek Yayınları"}
          searchLink={searchLinks.YalınAlpayYapıt}
          bookBack={bookBacks.YalınAlpayYapıt}
          bookInfo={""}
          bookDifficulty={"Orta "}
          noYoutube
          onlyOneButton
          darkyellowBackground
          colorDarkYellow
        />
      </div>
    </div>
  );
}
