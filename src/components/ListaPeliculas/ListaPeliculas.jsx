import axios from "axios";
import React, { useEffect, useState } from "react";
import Pelicula from "../Pelicula/Pelicula";
import "./ListaPeliculas.css";

export default function ListaPeliculas() {
  const apiKey = "1a12885f";
  const [movieList, setMovieList] = useState([]);
  const [nombreInput, setNombreInput] = useState("");

  const callApi = async (pelicula) => {
    const res = await axios.get("http://www.omdbapi.com", {
      params: {
        apiKey: apiKey,
        s: pelicula,
      },
    });
    setMovieList(res.data.Search);
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
        placeholder="Ingresa la pelicula"
        onKeyPress={handlePress}
        onChange={handleChange}
      />
      <div className="lista">
        {movieList.map((item, index) => (
          <div key={index} className="pelicula">
            <Pelicula item={item}/>
          </div>
        ))}
      </div>
    </>
  );
}
