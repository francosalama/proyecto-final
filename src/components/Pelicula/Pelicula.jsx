import React, { useContext } from "react";
import "./Pelicula.css";
import { Link } from "react-router-dom";
import { favoritosContext } from "../../context/FavoritosContext";

export default function Pelicula({ item, favorito }) {
  const { agregarFavorito, eliminarFavorito } = useContext(favoritosContext);

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
        {favorito ? (
          <button
            className="btn btn-success boton"
            onClick={() => agregarFavorito(item)}
          >
            Agregar Favorito
          </button>
        ) : (
          <button
            className="btn btn-danger boton"
            onClick={() => eliminarFavorito(item.imdbID)}
          >
            Eliminar
          </button>
        )}
      </div>
    </div>
  );
}
