import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ListaPeliculas from "./components/ListaPeliculas/ListaPeliculas";
import DetallePelicula from "./components/DetallePelicula/DetallePelicula";
import FavoritosComponent from "./context/FavoritosComponent";
import ListaFavoritos from "./components/ListaFavoritos/ListaFavoritos";
import Footer from './components/Footer/Footer';

function App() {
  return (
    <FavoritosComponent>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ListaPeliculas />} />
            <Route path="/pelicula/:id" element={<DetallePelicula />} />
            <Route path="/favoritos" element={<ListaFavoritos />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </FavoritosComponent>
  );
}

export default App;
