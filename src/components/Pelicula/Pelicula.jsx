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
        <Link className="btn btn-primary" to={`/pelicula/${item.imdbID}`}>
          Info
        </Link>
      </div>
    </div>
  );
}
