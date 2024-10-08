import React from "react";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Accueil from "./container/Accueil.jsx";
import Services from "./container/Services.jsx";
import Réalisations from "./container/Réalisations.jsx";
import Blog from "./container/Blog.jsx";
import Mecontacter from "./container/Mecontacter.jsx";

export default function App() {
  return (
    <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">ACCUEIL</Link>
            </li>
            <li>
              <Link to="/services">SERVICES</Link>
            </li>
            <li>
              <Link to="/realisations">REALISATIONS</Link>
            </li>
            <li>
              <Link to="/blog">BLOG</Link>
            </li>
            <li>
              <Link to="/mecontacter">ME CONTACTER</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/' element={<Accueil />} />
          <Route path='/services' element={<Services />} />
          <Route path='/realisations' element={<Réalisations />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/mecontacter' element={<Mecontacter />} />
        </Routes>
    </div>
  );
}
