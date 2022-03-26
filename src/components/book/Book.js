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
        <div className="book-info">
          <h4>{name}</h4>
          <h5>{author}</h5>
          <img src={imageSource} alt="" />
        </div>
        <div className="buttons">
          <a
            className={`${noYoutube && "center-button"}`}
            href={searchLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Google</button>
          </a>

          <a
            className={`${noYoutube && "no-youtube"}`}
            href={youtubeLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Youtube</button>
          </a>
        </div>
      </div>
    </div>
  );
}
