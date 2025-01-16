import React, { useState, useEffect } from 'react';
import './App.css';

import { Book } from "./Book.ts";
import axios from "axios";
import BookGallery from "./Componets/BookGallery.tsx";
import BookForm from "./Componets/BookForm.tsx";
import { Route, Routes } from "react-router-dom";

// Importiere die neuen Seiten
import HomePage from "./pages/HomePage.tsx";
import FavoritesPage from "./pages/FavoritesPage.tsx";
import BookDetails from "./pages/BookDetails.tsx";

function App() {
    const [data, setData] = useState<Book[]>([]);

    // Funktion zum Datenholen
    function fetchData() {
        axios.get("/api/book")
            .then(response => {
                setData(response.data);
                console.log(response.data.title);
            })
            .catch(error => {
                console.log(error);
                const book1: Book = {
                    author: "jim",
                    isbn: 1234,
                    image: "https://picsum.photos/50/150",
                    title: "test"
                };
                const Books: Book[] = [book1];
                setData(Books);
            });
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <header>
                <h1>Book</h1>
                <BookForm fetchData={fetchData} />
            </header>
            <div>
                <BookGallery books={data} />
            </div>

            {/* Routen-Setup */}
            <Routes>
                {/* Startseite */}
                <Route path="/" element={<HomePage />} />

                {/* Favoriten */}
                <Route path="/favorites" element={<FavoritesPage />} />

                {/* Buchdetails */}
                <Route path="/book/:id" element={<BookDetails books={data} />} />
            </Routes>
        </>
    );
}

export default App;
