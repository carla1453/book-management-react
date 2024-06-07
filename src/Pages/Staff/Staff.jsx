import React from "react";
import "./Staff.css";
import { useParams } from "react-router-dom";
import { books } from "../../App";

export default function Staff() {
  const params = useParams();
  const index = parseInt(params.id);

  const myBook = books[index];

  return (
    <div className="parents-cadre">
      <div className="cadre">
        <h1>{myBook.name}</h1>
        <p>{myBook.Author}</p>
        <p>{myBook.Quantity}</p>
        <p>{myBook.price}</p>
        <p>Date:Wed Apr 14 2021</p>
      </div>
    </div>
  );
}
