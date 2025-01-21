import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Book } from "../types/Book.ts";
import axios from "axios";
import './Book.css'


export default function BookCard(book: Book) {
    const navigate = useNavigate();
    const [showActions, setShowActions] = useState(false);


    function navigateToDetailspage() {
        navigate("/book/" + book.isbn);
    }

    function deleteBook() {
        axios.delete("/api/book/" + book.isbn)
            .then(() => {
                alert("Buch erfolgreich gelöscht");
                window.location.reload();
            })
            .catch((error) => console.error("Fehler beim Löschen:", error));
    }


    return (
        <>
            <div
                className="book-card"
                onMouseEnter={() => setShowActions(true)}
                onMouseLeave={() => setShowActions(false)}
            >
                <h2>{book.title}</h2>
                <img src={book.image} alt={book.title} />
                <p>Author: {book.author}</p>
                <p>ISBN: {book.isbn}</p>

                {showActions && (
                    <div className="actions">
                        <button onClick={navigateToDetailspage}>Bearbeiten</button>
                        <button onClick={deleteBook}>Löschen</button>
                    </div>
                )}



            </div>




        </>
    );
}