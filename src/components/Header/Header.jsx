import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <img src="/logoOrtflix.jpg" alt="Logo de la empresa" className="logo" />
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link className="nav-link" to="/">
                Peliculas
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/favoritos">
                Favoritos
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
