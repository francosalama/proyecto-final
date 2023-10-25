import React, { useContext } from "react";
import { favoritosContext } from "../../context/FavoritosContext";
import Pelicula from "../Pelicula/Pelicula";

export default function ListaFavoritos() {
  const {favoritos} = useContext(favoritosContext);

  return (
    <div className="lista">
      {favoritos.map((item, index) => (
        <div key={index} className="pelicula">
          <Pelicula item={item} favorito={false}/>
        </div>
      ))}
    </div>
  );
}
