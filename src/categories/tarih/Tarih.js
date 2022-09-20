import React from "react";
import Book from "../../components/book/Book";
import {
  bookLinks,
  searchLinks,
  youtubeLinks,
  bookBacks,
} from "../../bookLinks";

//style
import "./Tarih.css";

export default function Tarih() {
  return (
    <div className="container">
      <div className="tarih">
        <Book
          name={"İmparatorluk Çağı"}
          imageSource={bookLinks.HobsbawmImparatorluk}
          author={"Eric Hobsbawm - Dost Yayınevi"}
          searchLink={searchLinks.HobsbawmImparatorluk}
          bookBack={bookBacks.HobsbawmImparatorluk}
          bookInfo={""}
          bookDifficulty={"Orta "}
          noYoutube
          onlyOneButton
          darkredBackground2
          colorDarkred2
        />
        <Book
          name={"Devrim Çağı"}
          imageSource={bookLinks.HobsbawmDevrim}
          author={"Eric Hobsbawm - Dost Yayınevi"}
          searchLink={searchLinks.HobsbawmDevrim}
          youtubeLink={youtubeLinks.HobsbawmDevrim}
          bookBack={bookBacks.HobsbawmDevrim}
          bookInfo={""}
          bookDifficulty={"Orta "}
          darkblueBackground
          colorDarkblue
        />
        <Book
          name={"Sermaye Çağı"}
          imageSource={bookLinks.HobsbawmSermaye}
          author={"Eric Hobsbawm - Dost Yayınevi"}
          searchLink={searchLinks.HobsbawmSermaye}
          bookBack={bookBacks.HobsbawmSermaye}
          bookInfo={""}
          bookDifficulty={"Orta "}
          noYoutube
          onlyOneButton
          darkgreenBackground
          colorDarkgreen
        />
        <Book
          name={"Kısa 20. Yüzyıl "}
          imageSource={bookLinks.HobsbawmKısa}
          author={"Eric Hobsbawm - Dost Yayınevi"}
          searchLink={searchLinks.HobsbawmKısa}
          bookBack={bookBacks.HobsbawmKısa}
          bookInfo={""}
          bookDifficulty={"Orta "}
          noYoutube
          onlyOneButton
          darkredBackground3
          colorDarkred3
        />
        <Book
          name={"Sanayi ve İmparatorluk"}
          imageSource={bookLinks.HobsbawmSanayiveImp}
          author={"Eric Hobsbawm - Dost Yayınevi"}
          searchLink={searchLinks.HobsbawmSanayiveImp}
          bookBack={bookBacks.HobsbawmSanayiveImp}
          bookInfo={""}
          bookDifficulty={"Orta "}
          noYoutube
          onlyOneButton
          lightbrownBackground
          colorLightbrown
        />
        <Book
          name={"Sapiens"}
          imageSource={bookLinks.HarariSapiens}
          author={"Yuval Noah Harari - Kolektif Kitap"}
          searchLink={searchLinks.HarariSapiens}
          youtubeLink={youtubeLinks.HarariSapiens}
          bookBack={bookBacks.HarariSapiens}
          bookInfo={""}
          bookDifficulty={"Giriş "}
          remix1Background
          colorRemix1
        />
        <Book
          name={"Homo Deus"}
          imageSource={bookLinks.HarariHomoDeus}
          author={"Yuval Noah Harari - Kolektif Kitap"}
          searchLink={searchLinks.HarariHomoDeus}
          youtubeLink={youtubeLinks.HarariHomoDeus}
          bookBack={bookBacks.HarariHomoDeus}
          bookInfo={""}
          bookDifficulty={"Giriş "}
          dark1Background
          colorDark1
        />
        <Book
          name={"Tüfek, Mikrop ve Çelik"}
          imageSource={bookLinks.JaredTufekCelik}
          author={"Jared Diamond - Pegasus Yayınları"}
          searchLink={searchLinks.JaredTufekCelik}
          bookBack={bookBacks.JaredTufekCelik}
          bookInfo={""}
          bookDifficulty={"Giriş "}
          noYoutube
          onlyOneButton
          yellow2Background
          colorYellow2
        />
        <Book
          name={"Olaylarla Türkiye Ekonomisi"}
          imageSource={bookLinks.YalınAlpayTarih}
          author={"Yalın Alpay - Hümanist Yayıncılık"}
          searchLink={searchLinks.YalınAlpayTarih}
          bookBack={bookBacks.YalınAlpayTarih}
          bookInfo={""}
          bookDifficulty={"Orta "}
          noYoutube
          onlyOneButton
          darkblue2Background
          colorDark2
        />
      </div>
    </div>
  );
}
