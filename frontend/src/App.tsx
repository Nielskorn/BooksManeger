import React, { useState, useEffect } from 'react';
import './App.css';

import { Book } from "./Book.ts";
import axios from "axios";
import BookGallery from "./Componets/BookGallery.tsx";
import BookForm from "./Componets/BookForm.tsx";
import { Route, Routes } from "react-router-dom";

// Importiere die neuen Seiten
//import HomePage from "./pages/HomePage.tsx";

//import BookDetails from "../pages/BookDetails.tsx";
import HomePage from "../pages/HomePage.tsx";
import FavoritesPage from "../pages/FavoritesPages.tsx";
import BookDetails from "../pages/BookDetails.tsx";

function App() {

    return (
        <>

            {/* Routen-Setup */}
            <Routes>
                     <Route path="/" element={<HomePage/>} />

                {/* Favoriten */}
                <Route path="/favorites" element={<FavoritesPage />} />

                {/* Buchdetails */}
                 <Route path="/book/:id" element={<BookDetails  />} />
            </Routes>
        </>
    );
}

export default App;
