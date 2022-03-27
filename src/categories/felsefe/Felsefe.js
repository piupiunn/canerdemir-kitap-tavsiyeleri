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
        style={{ backgroundColor: "#d5ccff" }}
      />
      <Book
        name={"Nietzsche"}
        imageSource={bookLinks.Nietzsche}
        author={"Say Yayınları"}
        searchLink={searchLinks.Nietzsche}
        youtubeLink={youtubeLinks.Nietzsche}
        style={{ backgroundColor: "#daffce" }}
      />
      <Book
        name={"Sokrates"}
        imageSource={bookLinks.Sokrates}
        author={"Say Yayınları"}
        searchLink={searchLinks.Sokrates}
        youtubeLink={youtubeLinks.Sokrates}
        style={{ backgroundColor: "#ffced5" }}
      />
      <Book
        name={"Friedrich Nietzsche"}
        imageSource={bookLinks.NietzscheZerdust}
        author={"İş Bankası Kültür Yayınları"}
        searchLink={searchLinks.NietzscheZerdust}
        style={{ backgroundColor: "#ffff" }}
        noYoutube
      />
      <Book
        name={"Friedrich Nietzsche"}
        imageSource={bookLinks.NietzscheOtesinde}
        author={"İş Bankası Kültür Yayınları"}
        searchLink={searchLinks.NietzscheOtesinde}
        style={{ backgroundColor: "#ffff" }}
        noYoutube
      />
      <Book
        name={"Platon"}
        imageSource={bookLinks.PlatonDevlet}
        author={"İş Bankası Kültür Yayınları"}
        searchLink={searchLinks.PlatonDevlet}
        style={{ backgroundColor: "#fff" }}
        noYoutube
      />
      <Book
        name={"Batı Felsefesi Tarihi 1"}
        imageSource={bookLinks.RusselSeriBir}
        author={"Bertrand Russell - Alfa Yayınları"}
        searchLink={searchLinks.RusselSeriBir}
        style={{ backgroundColor: "#ffd6c4" }}
        noYoutube
      />
      <Book
        name={"Batı Felsefesi Tarihi 2"}
        imageSource={bookLinks.RusselSeriIkı}
        author={"Bertrand Russell - Alfa Yayınları"}
        searchLink={searchLinks.RusselSeriIkı}
        style={{ backgroundColor: "#e1ffdb" }}
        noYoutube
      />
      <Book
        name={"Batı Felsefesi Tarihi 3"}
        imageSource={bookLinks.RusselSeriUc}
        author={"Bertrand Russell - Alfa Yayınları"}
        searchLink={searchLinks.RusselSeriUc}
        style={{ backgroundColor: "#effeff" }}
        noYoutube
      />
      <Book
        name={"Daha İyi Bir Dünya Arayış"}
        imageSource={bookLinks.Popper}
        author={"Karl Popper - Yapı Kredi Yayınları"}
        searchLink={searchLinks.Popper}
        style={{ backgroundColor: "#fff5d8" }}
        noYoutube
      />
    </div>
  );
}
