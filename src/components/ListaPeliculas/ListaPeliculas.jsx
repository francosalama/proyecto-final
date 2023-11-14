import axios from "axios";
import React, { useEffect, useState } from "react";
import Pelicula from "../Pelicula/Pelicula";
import "./ListaPeliculas.css";

export default function ListaPeliculas() {
  const apiKey = "1a12885f";
  const [movieList, setMovieList] = useState([]);
  const [nombreInput, setNombreInput] = useState("");
  const [noResults, setNoResults] = useState(false);

  const callApi = async (pelicula) => {
    try {
      const res = await axios.get("http://www.omdbapi.com", {
        params: {
          apiKey: apiKey,
          s: pelicula,
        },
      });

      if (res.data.Search) {
        setMovieList(res.data.Search);
        setNoResults(false);
      } else {
        setMovieList([]);
        setNoResults(true);
      }
    } catch (error) {
      console.error("Error al realizar la búsqueda:", error);
    }
  };

  const handlePress = (e) => {
    if (e.key === "Enter") {
      callApi(e.target.value);
      setNombreInput("");
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setNombreInput(e.target.value);
  };

  useEffect(() => {
    callApi("batman");
  }, []);

  return (
    <>
      <input
        value={nombreInput}
        placeholder="Ingresa la película"
        onKeyPress={handlePress}
        onChange={handleChange}
        className="busqueda"
      />
      <span className="span">Presiona enter para buscar la película 🔍</span>

      {noResults && (
        <p className="no-results-message">No se encontraron películas.</p>
      )}

      <div className="lista">
        {movieList.map((item, index) => (
          <div key={index} className="pelicula">
            <Pelicula item={item} favorito={true} />
          </div>
        ))}
      </div>
    </>
  );
}
