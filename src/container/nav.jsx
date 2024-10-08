import React from "react";
import { Link } from 'react-router-dom';
import { Routes, Route} from 'react-router-dom';
import Accueil from './accueil';
import Blog from './blog';
import Services from './services';
import Réalisations from './réalisations';
import Mecontacter from './mecontacter';

const Nav = () => {
    return (
        <header>
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
                        <Link to="/Mecontacter">ME CONTACTER</Link>
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
        </header>
    );
}

export default Nav;