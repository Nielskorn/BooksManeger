
import './App.css';

import HomePage from "../pages/HomePage.tsx";
import FavoritesPage from "../pages/FavoritesPages.tsx";
import BookDetails from "../pages/BookDetails.tsx";
import NavBar from "./Componets/NavBar.tsx";
import {Route, Routes} from "react-router-dom";

// Importiere die neuen Seiten

function App() {

    return (
        <>
            <header>
               <NavBar/>
            </header>

            {/* Routen-Setup */}
            <Routes>
                {/* Startseite */}
                <Route path="/" element={<HomePage />} />

                {/* Favoriten */}
                <Route path="/favorites" element={<FavoritesPage />} />

                {/* Buchdetails */}
                <Route path="/book/:id" element={<BookDetails  />} />
            </Routes>
        </>
    );
}

export default App;
