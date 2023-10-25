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
      <h2 className="title">{pelicula.Title}</h2>
      <h3 className="año">{pelicula.Year}</h3>
      <img className="peliculaDetalle" src={pelicula.Poster} alt={pelicula.Title} />
      <p className="texto">{pelicula.Plot}</p>
    </div>
  );
}
