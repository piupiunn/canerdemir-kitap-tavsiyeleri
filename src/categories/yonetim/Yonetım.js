import React from "react";
import Book from "../../components/book/Book";
import {
  bookLinks,
  searchLinks,
  youtubeLinks,
  bookBacks,
} from "../../bookLinks";

//style
import "./Yonetım.css";

export default function Yonetım() {
  return (
    <div className="container">
      <div className="yonetim">
        <Book
          name={"Yönetim Üzerine İkinci İnceleme"}
          imageSource={bookLinks.JohnLockeYonetim}
          author={"John Locke - Serbest Kitaplar"}
          searchLink={searchLinks.JohnLockeYonetim}
          bookBack={bookBacks.JohnLockeYonetim}
          bookInfo={""}
          bookDifficulty={"Giriş "}
          noYoutube
          onlyOneButton
          dark3Background
          colorDark3
        />
        <Book
          name={"Özgürlük Üzerine"}
          imageSource={bookLinks.JohnMillOzgurluk}
          author={"John Stuart Mill - Kutu Yayınları"}
          searchLink={searchLinks.JohnMillOzgurluk}
          bookBack={bookBacks.JohnMillOzgurluk}
          bookInfo={""}
          bookDifficulty={"Giriş "}
          noYoutube
          onlyOneButton
          black3Background
          colorRed5
        />
        <Book
          name={"Toplum Sözleşmesi"}
          imageSource={bookLinks.Rousseau}
          author={"Jean-Jacques Rousseau - İ. B. Kültür Yayınları"}
          searchLink={searchLinks.Rousseau}
          bookBack={bookBacks.Rousseau}
          bookInfo={""}
          bookDifficulty={"Giriş "}
          noYoutube
          onlyOneButton
          yellowBackground
          colorYellow
        />
        <Book
          name={"Kanunların Ruhu Üzerine"}
          imageSource={bookLinks.Montesquieu}
          author={"Montesquieu - İ. B. Kültür Yayınları"}
          searchLink={searchLinks.Montesquieu}
          bookBack={bookBacks.Montesquieu}
          bookInfo={""}
          bookDifficulty={"Giriş "}
          noYoutube
          onlyOneButton
          yellowBackground
          colorYellow
        />
        <Book
          name={"Yalanın Siyaseti"}
          imageSource={bookLinks.YalınAlpaySiyaset}
          author={"Destek Yayınları"}
          searchLink={searchLinks.YalınAlpaySiyaset}
          youtubeLink={youtubeLinks.YalınAlpaySiyaset}
          bookBack={bookBacks.YalınAlpaySiyaset}
          bookInfo={""}
          bookDifficulty={"Giriş "}
          red5Background
          colorRed5
        />
        <Book
          name={"Kitle ve İktidar"}
          imageSource={bookLinks.Elias}
          author={"Elias Canetti - Ayrıntı Yayınları"}
          searchLink={searchLinks.Elias}
          bookBack={bookBacks.Elias}
          bookInfo={""}
          bookDifficulty={"Orta "}
          noYoutube
          onlyOneButton
          blue5Background
          colorBlue5
        />
      </div>
    </div>
  );
}
