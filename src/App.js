import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ListaPeliculas from "./components/ListaPeliculas/ListaPeliculas";
import DetallePelicula from "./components/DetallePelicula/DetallePelicula";
import FavoritosComponent from "./context/FavoritosComponent";
import ListaFavoritos from "./components/ListaFavoritos/ListaFavoritos";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header.jsx";

function App() {
  return (
    <FavoritosComponent>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<ListaPeliculas />} />
            <Route path="/pelicula/:id" element={<DetallePelicula />} />
            <Route path="/favoritos" element={<ListaFavoritos />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </FavoritosComponent>
  );
}
export default App;
