import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./DetallePelicula.css";

export default function DetallePelicula() {
  const apiKey = "1a12885f";
  const { id } = useParams();
  const [pelicula, setPelicula] = useState({});

  const callApi = async (id) => {
    const res = await axios.get("http://www.omdbapi.com", {
      params: {
        apiKey: apiKey,
        i: id,
        plot: "full",
      },
    });
    setPelicula(res.data);
  };

  useEffect(() => {
    callApi(id);
  }, [id]);

  return (
    <div className="detalles">
      <h2 className="title">{`${pelicula.Title} (${pelicula.Year})`}</h2>
      <div className="info">
        <img className="foto" src={pelicula.Poster} alt={pelicula.Title} />
        <div className="datos">
          <p className="sinopsis">{pelicula.Plot}</p>
          <p>Duracion: {pelicula.Runtime}</p>
          <p>Clasificacion: {pelicula.Rated}</p>
          <p>Director: {pelicula.Director}</p>
          <p>Actores: {pelicula.Actors}</p>
          <p>Valoracion IMDb: {pelicula.imdbRating}</p>
        </div>
      </div>
    </div>
  );
}
