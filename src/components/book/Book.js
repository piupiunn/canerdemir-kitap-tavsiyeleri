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
  styleButton,
}) {
  return (
    <div className="book-box">
      <div className="book">
        <h3 style={style}>{name}</h3>
        <h4 style={style}>{author}</h4>
        <div className="book-info">
          <img src={imageSource} alt="" />
        </div>
        <div className="buttons">
          <a
            className={`${noYoutube && "center-button"}`}
            href={searchLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button style={styleButton}>Google</button>
          </a>

          <a
            className={`${noYoutube && "no-youtube"}`}
            href={youtubeLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button style={styleButton}>Youtube</button>
          </a>
        </div>
      </div>
    </div>
  );
}
