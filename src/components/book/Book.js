import React from "react";

//style
import "./Book.css";

export default function Book({
  name,
  imageSource,
  author,
  style,
  searchLink,
  youtubeLink,
  noYoutube,
  onlyOneButton,
  bookInfo,
  bookBack,
  bookDifficulty,

  purpleBackground,
  greenBackground,
  redBackground,
  yellowBackground,
  brownBackground,
  greenBackground2,
  lightblueBackground,
  darkyellowBackground,
  whiteBackground,
  darkredBackground,
  darkredBackground2,
  darkblueBackground,
  darkgreenBackground,
  darkredBackground3,
  lightbrownBackground,
  remix1Background,
  dark1Background,
  yellow2Background,
  darkblue2Background,
  pinkBackground,
  grayBackground,
  lightyellowBackground,
  purple2Background,
  blue2Background,
  greenBackground3,
  greenBackground4,
  darkBackground,
  red2Background,
  blue3Background,
  red3Background,
  orangeBackground,
  blackBackground,
  yellow3Background,
  pink2Background,
  blue4Background,
  red4Background,
  black2Background,
  dark3Background,
  black3Background,
  red5Background,
  blue5Background,

  colorPurple,
  colorGreen,
  colorRed,
  colorYellow,
  colorBrown,
  colorGreen2,
  colorLightBlue,
  colorDarkYellow,
  colorWhite,
  colorDarkred,
  colorDarkred2,
  colorDarkblue,
  colorDarkgreen,
  colorDarkred3,
  colorLightbrown,
  colorRemix1,
  colorDark1,
  colorYellow2,
  colorDark2,
  colorPink,
  colorGray,
  colorLightyellow,
  colorPurple2,
  colorBlue2,
  colorGreen3,
  colorGreen4,
  colorDark,
  colorRed2,
  colorBlue3,
  colorRed3,
  colorOrange,
  colorBlack,
  colorYellow3,
  colorPink2,
  colorBlue4,
  colorRed4,
  colorBlack2,
  colorDark3,
  colorBlack3,
  colorRed5,
  colorBlue5,
}) {
  return (
    <div
      className={`book-box
       ${purpleBackground && "background-purple"}       
       ${greenBackground && "background-green"}
       ${redBackground && "background-red"}
       ${yellowBackground && "background-yellow"}
       ${brownBackground && "background-brown"}
       ${greenBackground2 && "background-green2"}
       ${lightblueBackground && "background-light-blue"}
       ${darkyellowBackground && "background-dark-yellow "}
       ${whiteBackground && "background-white "}
       ${darkredBackground && "background-dark-red "}
       ${darkredBackground2 && "background-dark-red2 "}
       ${darkblueBackground && "background-dark-blue"}
       ${darkgreenBackground && "background-dark-green "}
       ${darkredBackground3 && "background-dark-red3 "}
       ${lightbrownBackground && "background-lightbrown"}
       ${remix1Background && "background-remix1"}
       ${dark1Background && "background-black1"}
       ${yellow2Background && "background-yellow2"}
       ${darkblue2Background && "background-darkblue2 "}
       ${pinkBackground && "background-pink "}
       ${grayBackground && "background-gray"}
       ${darkgreenBackground && "background-darkgreen"}
       ${lightyellowBackground && "background-lightyellow "}
       ${purple2Background && "background-purple2  "}
       ${blue2Background && "background-blue2"}
       ${greenBackground3 && "background-green3"}
       ${greenBackground4 && "background-green4 "}
       ${darkBackground && "background-dark"}
       ${red2Background && "background-red2"}
       ${blue3Background && "background-blue3"}
       ${red3Background && "background-red3"}
       ${orangeBackground && "background-orange"}
       ${blackBackground && "background-black"}
       ${yellow3Background && "background-yellow3"}
       ${pink2Background && "background-pink2"}
       ${blue4Background && "background-blue4"}
       ${red4Background && "background-red4"}
       ${black2Background && "background-black4"}
       ${dark3Background && "background-dark3"}
       ${black3Background && "background-black3"}
       ${red5Background && "background-red5"}
       ${blue5Background && "background-blue5"}

        `}
    >
      <div className="book">
        <div className="book-info">
          <img
            className="book-front-img"
            src={imageSource}
            alt="kitabin-kapak-fotografi"
          />
        </div>

        <div className="book-right">
          <div className="book-right-inside">
            <div className="book-title">
              <h1 style={style}>{name}</h1>
              <h4 style={style}>{author}</h4>
            </div>

            <p className="book-info-details">{bookInfo}</p>
          </div>
        </div>

        <div className="book-backside-info">
          <p>
            Arka Kapaktan; <br /> {bookBack}
          </p>
        </div>
      </div>
      <div className="book-reading-difficulty-parent">
        <p className="book-reading-difficulty">{bookDifficulty}</p>
      </div>
      <div className="buttons2">
        <a
          className={`${noYoutube && "center-button"}`}
          href={searchLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className={`buttons-inside2 
                   ${onlyOneButton && "only-one-button"}
                   ${colorPurple && "color-purple"} 
                   ${colorYellow && "color-yellow"} 
                   ${colorGreen && "color-green"}
                   ${colorRed && "color-red "}
                   ${colorBrown && "color-brown"}
                   ${colorGreen2 && "color-green2"}
                   ${colorLightBlue && "color-light-blue"}
                   ${colorDarkYellow && "color-dark-yellow"}
                   ${colorWhite && "color-white "}
                   ${colorDarkred && "color-dark-red"}
                   ${colorDarkred2 && "color-dark-red2"}
                   ${colorDarkblue && "color-dark-blue"}
                   ${colorDarkgreen && "color-dark-green "}
                   ${colorDarkred3 && "color-dark-red3 "}
                   ${colorLightbrown && "color-lightbrown "}
                   ${colorRemix1 && "color-remix1 "}
                   ${colorDark1 && "color-black1 "}
                   ${colorYellow2 && "color-yellow2 "}
                   ${colorDark2 && "color-darkblue2 "}
                   ${colorPink && "color-pink"}
                   ${colorGray && "color-gray"}
                   ${colorDarkgreen && "color-darkgreen"}
                   ${colorLightyellow && "color-lightyellow"}
                   ${colorPurple2 && "color-purple2"}
                   ${colorBlue2 && "color-blue2 "}
                   ${colorGreen3 && "color-white2  "}
                   ${colorGreen4 && "color-white3  "}
                   ${colorRed2 && "color-red2  "}
                   ${colorBlue3 && "color-blue3  "}
                   ${colorRed3 && "color-red3  "}
                   ${colorOrange && "color-orange  "}
                   ${colorBlack && "color-black  "}
                   ${colorYellow3 && "color-yellow3  "}
                   ${colorPink2 && "color-pink2  "}
                   ${colorBlue4 && "color-blue4  "}
                   ${colorRed4 && "color-red4  "}
                   ${colorBlack2 && "color-black2  "}
                   ${colorDark && "color-dark  "}
                   ${colorDark3 && "color-dark3  "}
                   ${colorBlack3 && "color-black3  "}
                   ${colorRed5 && "color-red5  "}
                   ${colorBlue5 && "color-blue5  "}                   
                   `}
          >
            Google
          </button>
        </a>

        <a
          className={`${noYoutube && "no-youtube"} `}
          href={youtubeLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className={`buttons-inside2
                   ${colorPurple && "color-purple"} 
                   ${colorYellow && "color-yellow"} 
                   ${colorGreen && "color-green"} 
                   ${colorRed && "color-red "}
                   ${colorBrown && "color-brown "}
                   ${colorGreen2 && "color-green2 "}
                   ${colorLightBlue && "color-light-blue"}
                   ${colorDarkYellow && "color-dark-yellow"}
                   ${colorWhite && "color-white "}
                   ${colorDarkred && "color-dark-red"}
                   ${colorDarkred2 && "color-dark-red2"}
                   ${colorDarkblue && "color-dark-blue"}
                   ${colorDarkgreen && "color-dark-green "}
                   ${colorDarkred3 && "color-dark-red3 "}
                   ${colorLightbrown && "color-lightbrown "}
                   ${colorRemix1 && "color-remix1 "}
                   ${colorDark1 && "color-black1 "}
                   ${colorDark2 && "color-darkblue2 "}
                   ${colorPink && "color-pink"}
                   ${colorGray && "color-gray"}
                   ${colorDarkgreen && "color-darkgreen"}
                   ${colorDarkgreen && "color-darkgreen"}
                   ${colorLightyellow && "color-lightyellow"}
                   ${colorPurple2 && "color-purple2"}
                   ${colorBlue2 && "color-blue2 "}
                   ${colorGreen3 && "color-white2  "}
                   ${colorGreen4 && "color-white3  "}
                   ${colorRed2 && "color-red2  "}
                   ${colorBlue3 && "color-blue3  "}
                   ${colorRed3 && "color-red3  "}
                   ${colorOrange && "color-orange  "}
                   ${colorBlack && "color-black  "}
                   ${colorYellow3 && "color-yellow3  "}
                   ${colorPink2 && "color-pink2  "}
                   ${colorBlue4 && "color-blue4  "}
                   ${colorRed4 && "color-red4  "}
                   ${colorBlack2 && "color-black2  "}
                   ${colorDark && "color-dark  "}
                   ${colorDark3 && "color-dark3  "}
                   ${colorBlack3 && "color-black3  "}
                   ${colorRed5 && "color-red5  "}
                   ${colorBlue5 && "color-blue5  "}
                   `}
          >
            Youtube
          </button>
        </a>
      </div>
    </div>
  );
}
