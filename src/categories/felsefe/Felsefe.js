import React from "react";
import Book from "../../components/book/Book";
import { bookLinks, searchLinks, youtubeLinks } from "../../bookLinks";

//style
import "./Felsefe.css";

export default function Felsefe() {
  return (
    <div className="felsefe">
      <Book
        name={"Platon"}
        imageSource={bookLinks.Platon}
        author={"Say Yayınları"}
        searchLink={searchLinks.Platon}
        youtubeLink={youtubeLinks.Platon}
      />
      <Book
        name={"Nietzsche"}
        imageSource={bookLinks.Nietzsche}
        author={"Say Yayınları"}
        searchLink={searchLinks.Nietzsche}
        youtubeLink={youtubeLinks.Nietzsche}
      />
      <Book
        name={"Sokrates"}
        imageSource={bookLinks.Sokrates}
        author={"Say Yayınları"}
        searchLink={searchLinks.Sokrates}
        youtubeLink={youtubeLinks.Sokrates}
      />
      <Book
        name={"Friedrich Nietzsche"}
        imageSource={bookLinks.NietzscheZerdust}
        author={"İş Bankası Kültür Yayınları"}
        searchLink={searchLinks.NietzscheZerdust}
        youtubeLink={youtubeLinks.NietzscheZerdust}
      />
      <Book
        name={"Friedrich Nietzsche"}
        imageSource={bookLinks.NietzscheOtesinde}
        author={"İş Bankası Kültür Yayınları"}
        searchLink={searchLinks.NietzscheOtesinde}
        noYoutube
      />
      <Book
        name={"Platon"}
        imageSource={bookLinks.PlatonDevlet}
        author={"İş Bankası Kültür Yayınları"}
        searchLink={searchLinks.PlatonDevlet}
        youtubeLink={youtubeLinks.PlatonDevlet}
      />
      <Book
        name={"Batı Felsefesi Tarihi 1"}
        imageSource={bookLinks.RusselSeriBir}
        author={"Bertrand Russell - Alfa Yayınları"}
        searchLink={searchLinks.RusselSeriBir}
        noYoutube
      />
      <Book
        name={"Batı Felsefesi Tarihi 2"}
        imageSource={bookLinks.RusselSeriIkı}
        author={"Bertrand Russell - Alfa Yayınları"}
        searchLink={searchLinks.RusselSeriIkı}
        noYoutube
      />
      <Book
        name={"Batı Felsefesi Tarihi 3"}
        imageSource={bookLinks.RusselSeriUc}
        author={"Bertrand Russell - Alfa Yayınları"}
        searchLink={searchLinks.RusselSeriUc}
        noYoutube
      />
      <Book
        name={"Daha İyi Bir Dünya Arayış"}
        imageSource={bookLinks.Popper}
        author={"Karl Popper - Yapı Kredi Yayınları"}
        searchLink={searchLinks.Popper}
        noYoutube
      />
    </div>
  );
}
