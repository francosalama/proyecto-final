import React, { useContext, useState } from "react";
import "./Pelicula.css";
import { Link } from "react-router-dom";
import { favoritosContext } from "../../context/FavoritosContext";

export default function Pelicula({ item, favorito }) {
  const { agregarFavorito, eliminarFavorito, favoritos } =
    useContext(favoritosContext);

  // Verificar si la película está en favoritos
  const esFavorito = favoritos.some(
    (pelicula) => pelicula.imdbID === item.imdbID
  );

  const handleAgregarFavorito = () => {
    agregarFavorito(item);
  };

  const handleEliminarFavorito = () => {
    eliminarFavorito(item.imdbID);
  };

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
        {esFavorito ? (
          <i
            className="fas fa-heart btn btn-success boton"
            onClick={handleEliminarFavorito}
          >
            Favorito
          </i>
        ) : (
          <button
            className="btn btn-danger boton"
            onClick={handleAgregarFavorito}
          >
            Agregar Favorito
          </button>
        )}
      </div>
    </div>
  );
}
