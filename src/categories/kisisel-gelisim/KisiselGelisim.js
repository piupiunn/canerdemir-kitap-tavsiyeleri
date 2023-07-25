import React from "react";
import Book from "../../components/book/Book";
import { bookLinks, searchLinks, bookBacks } from "../../bookLinks";

//style
import "./KisiselGelisim.css";

export default function KisiselGelisim() {
  return (
    <div className="container">
      <div className="kisisel-gelisim books-flex ">
        <Book
          name={"Aşık Olmak"}
          imageSource={bookLinks.Ayala}
          author={"Ayala M. Pines - İletişim Yayınları"}
          searchLink={searchLinks.Ayala}
          bookBack={bookBacks.Ayala}
          bookInfo={""}
          bookDifficulty={"Giriş "}
          noYoutube
          onlyOneButton
          red2Background
          colorRed2
        />
        <Book
          name={"Hayır Demeyi Bilmek"}
          imageSource={bookLinks.Marie}
          author={"Marrie Haddou - İletişim Yayınları"}
          searchLink={searchLinks.Marie}
          bookBack={bookBacks.Marie}
          bookInfo={""}
          bookDifficulty={"Giriş "}
          noYoutube
          onlyOneButton
          blue3Background
          colorBlue3
        />
        <Book
          name={"Dinle Küçük Adam"}
          imageSource={bookLinks.Wilhelm}
          author={"Wilhelm Reich - Cem Yayınevi"}
          searchLink={searchLinks.Wilhelm}
          bookBack={bookBacks.Wilhelm}
          bookInfo={""}
          bookDifficulty={"Giriş "}
          noYoutube
          onlyOneButton
          red3Background
          colorRed3
        />
        <Book
          name={"Kendiyle Dost Olmak"}
          imageSource={bookLinks.Schmid}
          author={"Wilhelm Schmid - İletişim Yayınları"}
          searchLink={searchLinks.Schmid}
          bookBack={bookBacks.Schmid}
          bookInfo={""}
          bookDifficulty={"Giriş "}
          noYoutube
          onlyOneButton
          orangeBackground
          colorOrange
        />
        <Book
          name={"Beni Hiç Anlamıyorsun"}
          imageSource={bookLinks.Deborah}
          author={"Deborah Tannen - İletişim Yayınları"}
          searchLink={searchLinks.Deborah}
          bookBack={bookBacks.Deborah}
          bookInfo={""}
          bookDifficulty={"Giriş "}
          noYoutube
          onlyOneButton
          blackBackground
          colorBlack
        />
        <Book
          name={"Mutlu Yaşam Üzerine"}
          imageSource={bookLinks.Seneca}
          author={"Seneca - İ. B. Kültür Yayınları"}
          searchLink={searchLinks.Seneca}
          bookBack={bookBacks.Seneca}
          bookInfo={""}
          bookDifficulty={"Giriş "}
          noYoutube
          onlyOneButton
          yellowBackground
          colorYellow
        />
        <Book
          name={"Zor Bir Ailede Büyümek"}
          imageSource={bookLinks.Susan}
          author={"Susan Forward - İletişim Yayınları"}
          searchLink={searchLinks.Susan}
          bookBack={bookBacks.Susan}
          bookInfo={""}
          bookDifficulty={"Giriş "}
          noYoutube
          onlyOneButton
          yellow3Background
          colorYellow3
        />
        <Book
          name={"Zor Kişiliklerle Yaşamak"}
          imageSource={bookLinks.Francois}
          author={"Christophe Andre - İletişim Yayınları"}
          searchLink={searchLinks.Francois}
          bookBack={bookBacks.Francois}
          bookInfo={""}
          bookDifficulty={"Giriş "}
          noYoutube
          onlyOneButton
          pink2Background
          colorPink2
        />
        <Book
          name={"Manevi Taciz"}
          imageSource={bookLinks.Hirigoyen}
          author={"Marie F. Hirigoyen - İletişim Yayınları"}
          searchLink={searchLinks.Hirigoyen}
          bookBack={bookBacks.Hirigoyen}
          bookInfo={""}
          bookDifficulty={"Giriş "}
          noYoutube
          onlyOneButton
          blue4Background
          colorBlue4
        />
        <Book
          name={"Dost Kazanma Sanatı"}
          imageSource={bookLinks.Dale}
          author={"Dale Carnegie - Epsilon Yayınları"}
          searchLink={searchLinks.Dale}
          bookBack={bookBacks.Dale}
          bookInfo={""}
          bookDifficulty={"Giriş "}
          noYoutube
          onlyOneButton
          red4Background
          colorRed4
        />
        <Book
          name={"İktidar"}
          imageSource={bookLinks.Greene}
          author={"Robert Greene -Altın Kitaplar"}
          searchLink={searchLinks.Greene}
          bookBack={bookBacks.Greene}
          bookInfo={""}
          bookDifficulty={"Giriş "}
          noYoutube
          onlyOneButton
          black2Background
          colorBlack2
        />
      </div>
    </div>
  );
}
