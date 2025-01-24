import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Book } from "../types/Book.ts";
import axios from "axios";

type BookCardProps = {
    book: Book;
    managePage?: boolean; // Neue Prop für die Steuerung der Buttons
};

export default function BookCard({ book, managePage = false }: BookCardProps) {
    const navigate = useNavigate();
    const [isLiked, setIsLiked] = useState<boolean>(book.favorite);
    const [showActions, setShowActions] = useState<boolean>(false); // Zustand hinzugefügt

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

    function toggleLike() {
        setIsLiked(!isLiked);
        const updatedBook: Book = { ...book, favorite: !isLiked };

        axios.put(`/api/book/${book.isbn}`, updatedBook)
            .then(() => {
                alert(isLiked ? "Like entfernt" : "Buch geliked");
            })
            .catch((error) => console.error("Fehler beim Liken:", error));
    }

    return (
        <div
            className="book-card"
            onMouseEnter={() => setShowActions(true)}
            onMouseLeave={() => setShowActions(false)}
        >
            <h2>{book.title}</h2>
            <img src={book.image} alt={book.title} />
            <p>Author: {book.author}</p>
            <p>ISBN: {book.isbn}</p>

            {/* Bearbeiten und Löschen Buttons nur anzeigen, wenn managePage true ist */}
            {showActions && managePage && (
                <div className="actions">
                    <button onClick={navigateToDetailspage} className="update-btn">Bearbeiten</button>
                    <button onClick={deleteBook} className="delete-btn">Löschen</button>
                </div>
            )}

            <div className="favorite-btn-container">
                <button
                    onClick={toggleLike}
                    className={isLiked ? "liked-btn" : "unliked-btn"}
                >
                    {isLiked ? "❤️" : "🤍"}
                </button>
            </div>
        </div>
    );
}
