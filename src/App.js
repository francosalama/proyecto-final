import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ListaPeliculas from './components/ListaPeliculas/ListaPeliculas';
import DetallePelicula from './components/DetallePelicula/DetallePelicula';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ListaPeliculas />} />
          <Route path='/pelicula/:id' element={<DetallePelicula />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
