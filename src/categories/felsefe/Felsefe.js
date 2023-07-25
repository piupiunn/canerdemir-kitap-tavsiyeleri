import React from "react";
import Book from "../../components/book/Book";
import {
  bookLinks,
  searchLinks,
  youtubeLinks,
  bookBacks,
} from "../../bookLinks";

//style
import "./Felsefe.css";

export default function Felsefe() {
  return (
    <div className="container">
      <div className="felsefe books-flex ">
        <Book
          name={"Platon"}
          imageSource={bookLinks.Platon}
          author={"Say Yayınları"}
          searchLink={searchLinks.Platon}
          youtubeLink={youtubeLinks.Platon}
          bookBack={bookBacks.Platon}
          bookInfo={""}
          bookDifficulty={"Giriş "}
          purpleBackground
          colorPurple
        />
        <Book
          name={"Nietzsche"}
          imageSource={bookLinks.Nietzsche}
          author={"Say Yayınları"}
          searchLink={searchLinks.Nietzsche}
          youtubeLink={youtubeLinks.Nietzsche}
          bookBack={bookBacks.Nietzsche}
          bookInfo={""}
          bookDifficulty={"Giriş "}
          greenBackground
          colorGreen
        />
        <Book
          name={"Sokrates"}
          imageSource={bookLinks.Sokrates}
          author={"Say Yayınları"}
          searchLink={searchLinks.Sokrates}
          youtubeLink={youtubeLinks.Sokrates}
          bookBack={bookBacks.Sokrates}
          bookInfo={""}
          bookDifficulty={"Giriş "}
          redBackground
          colorRed
        />
        <Book
          name={"Böyle Söyledi Zerdüşt"}
          imageSource={bookLinks.NietzscheZerdust}
          author={"F. Nietzsche - İ. B. Kültür Yayınları"}
          searchLink={searchLinks.NietzscheZerdust}
          youtubeLink={youtubeLinks.NietzscheZerdust}
          bookBack={bookBacks.NietzscheZerdust}
          bookInfo={""}
          bookDifficulty={"Orta "}
          colorYellow
          yellowBackground
        />
        <Book
          name={"İyinin ve Kötünün Ötesinde "}
          imageSource={bookLinks.NietzscheOtesinde}
          author={"Nietzsche - İ. B. Kültür Yayınları"}
          searchLink={searchLinks.NietzscheOtesinde}
          bookBack={bookBacks.NietzscheOtesinde}
          bookInfo={""}
          bookDifficulty={"Orta "}
          noYoutube
          colorYellow
          yellowBackground
          onlyOneButton
        />
        <Book
          name={"Devlet"}
          imageSource={bookLinks.PlatonDevlet}
          author={"Platon - İ. B. Kültür Yayınları"}
          searchLink={searchLinks.PlatonDevlet}
          youtubeLink={youtubeLinks.PlatonDevlet}
          bookBack={bookBacks.PlatonDevlet}
          bookInfo={""}
          bookDifficulty={"Orta "}
          colorYellow
          yellowBackground
        />
        <Book
          name={"Batı Felsefesi Tarihi 1"}
          imageSource={bookLinks.RusselSeriBir}
          author={"Bertrand Russell - Alfa Yayınları"}
          searchLink={searchLinks.RusselSeriBir}
          bookBack={bookBacks.RusselSeriBir}
          bookInfo={""}
          bookDifficulty={"Giriş "}
          noYoutube
          onlyOneButton
          colorBrown
          brownBackground
        />
        <Book
          name={"Batı Felsefesi Tarihi 2"}
          imageSource={bookLinks.RusselSeriIkı}
          author={"Bertrand Russell - Alfa Yayınları"}
          searchLink={searchLinks.RusselSeriIkı}
          bookBack={bookBacks.RusselSeriIkı}
          bookInfo={""}
          bookDifficulty={"Giriş "}
          noYoutube
          onlyOneButton
          greenBackground2
          colorGreen2
        />
        <Book
          name={"Batı Felsefesi Tarihi 3"}
          imageSource={bookLinks.RusselSeriUc}
          author={"Bertrand Russell - Alfa Yayınları"}
          searchLink={searchLinks.RusselSeriUc}
          bookBack={bookBacks.RusselSeriUc}
          bookInfo={""}
          bookDifficulty={"Giriş "}
          noYoutube
          onlyOneButton
          lightblueBackground
          colorLightBlue
        />
        <Book
          name={"Hayat Problem Çözmektir"}
          imageSource={bookLinks.Popper}
          author={"Karl Popper - Yapı Kredi Yayınları"}
          searchLink={searchLinks.Popper}
          bookBack={bookBacks.Popper}
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
