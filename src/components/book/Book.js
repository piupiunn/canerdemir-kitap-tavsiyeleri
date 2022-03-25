import React from "react";

//style
import "./Book.css";

export default function Book({ name, imageSource, author }) {
  return (
    <div className="book">
      <div className="book-info">
        <h4>{name}</h4>
        <h6>{author}</h6>
        <img src={imageSource} alt="" />
      </div>
    </div>
  );
}
