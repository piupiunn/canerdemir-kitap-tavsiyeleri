import React from "react";

//style
import "./Book.css";

export default function Book({
  name,
  imageSource,
  author,
  style,
  searchLink,
  youtubeLinks,
}) {
  return (
    <div className="book-box" style={style}>
      <div className="book">
        <div className="book-info">
          <h4>{name}</h4>
          <h5>{author}</h5>
          <img src={imageSource} alt="" />
          <div className="buttons">
            <button className="search">{searchLink}</button>
            <button className="youtube">{youtubeLinks}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
