import React, { useState } from "react";
import { favoritosContext } from "./FavoritosContext";

export default function FavoritosComponent({ children }) {
  const [favoritos, setFavoritos] = useState([]);

  const agregarFavorito = (favorito) => {
    let repetida = false;
    for (const pelicula of favoritos) {
      if (pelicula.imdbID === favorito.imdbID) {
        repetida = true;
        break;
      }
    }
    if (!repetida) {
      setFavoritos([...favoritos, favorito]);
    }
    
  };

  const eliminarFavorito = (id) => {
    setFavoritos(favoritos.filter(pelicula => pelicula.imdbID !== id));
  }

  return (
    <favoritosContext.Provider value={{ favoritos, agregarFavorito, eliminarFavorito }}>
      {children}
    </favoritosContext.Provider>
  );
}
