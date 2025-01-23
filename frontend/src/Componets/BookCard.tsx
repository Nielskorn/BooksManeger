import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Book } from "../types/Book.ts";
import axios from "axios";



export default function BookCard(book: Book) {
    const navigate = useNavigate();
    const [showActions, setShowActions] = useState(false);
    const [isLiked, setIsLiked] = useState<boolean>(book.favorite);
    const author= (book.author)
    const image = (book.image)
    const title= (book.title)
    const isbn = (book.isbn)// Annahme: `book.liked` ist ein boolean

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
        const updatedBook: Book = { isbn, title, author, image, favorite: !isLiked };

        axios.put(`/api/book/${book.isbn}`, updatedBook)
            .then(() => {
                alert(isLiked ? "Like entfernt" : "Buch geliked");
            })
            .catch((error) => console.error("Fehler beim Liken:", error));
    }

    return (
        <div
            className="book-gallery"
            onMouseEnter={() => setShowActions(true)}
            onMouseLeave={() => setShowActions(false)}
        >
            <h2>{book.title}</h2>
            <img src={book.image} alt={book.title}/>
            <p>Author: {book.author}</p>
            <p>ISBN: {book.isbn}</p>

            {showActions && (
                <div className="actions">
                    <button onClick={navigateToDetailspage}>Bearbeiten</button>
                    <button onClick={deleteBook} className="delete-btn">Löschen</button>
                </div>
            )}

            {/* Favoriten Button in einem eigenen div */}
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






