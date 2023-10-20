import React from "react";
import "./Pelicula.css";
import { Link } from "react-router-dom";

export default function Pelicula({ item }) {
  return (
    <div className="card">
      <img className="card-img-top imagen" src={item.Poster} alt={item.Title} />
      <div className="card-body">
        <h5 className="card-title">
          {item.Title} ({item.Year})
        </h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <Link className="btn btn-primary" to={`/pelicula/${item.imdbID}`}>
          Info
        </Link>
      </div>
    </div>
  );
}
