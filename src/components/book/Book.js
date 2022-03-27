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
}) {
  return (
    <div className="book-box">
      <div className="book">
        <h3>{name}</h3>
        <h4>{author}</h4>
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
            <button style={style}>Google</button>
          </a>

          <a
            className={`${noYoutube && "no-youtube"}`}
            href={youtubeLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button style={style}>Youtube</button>
          </a>
        </div>
      </div>
    </div>
  );
}
