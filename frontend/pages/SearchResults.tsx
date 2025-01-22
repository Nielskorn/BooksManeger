import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import BookGallery from "../src/Componets/BookGallery";
import './SearchResults.css'



export default function SearchResults() {
    const [searchParams] = useSearchParams();
    const [books, setBooks] = useState([]);
    const title = searchParams.get("title");

    useEffect(() => {
        if (title) {
            axios
                .get(`/api/book/search?title=${title}`)
                .then((response) => setBooks(response.data))
                .catch((error) =>
                    console.error("Fehler beim Abrufen der Suchergebnisse:", error)
                );
        }
    }, [title]);

    return (
        <div className="" >
            <h1>Suchergebnisse für "{title}"</h1>

            {books.length > 0 ? (
                <BookGallery books={books} />
            ) : (
                <p>Keine Ergebnisse gefunden.</p>
            )}

        </div>
    );
}
