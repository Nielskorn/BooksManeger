import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Book } from "../types/Book.ts";
import axios from "axios";
import './Book.css'


export default function BookCard(book: Book) {
    const navigate = useNavigate();
    const [showActions, setShowActions] = useState(false);
    const [isLiked, setIsLiked] = useState<boolean>(book.favorite);
    const [author, setAuthor] = useState(book.author)
    const [image, setImage] = useState(book.image)
    const [title, setTitle] = useState(book.title)
    const [isbn, setIsbn] = useState(book.isbn)// Annahme: `book.liked` ist ein boolean

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
        const ubook: Book = {isbn: isbn, title: title, author: author, image: image, favorite: isLiked}

        axios.put(`/api/book/${book.isbn}`, ubook)
            .then(() => {


                alert(isLiked ? "Like entfernt" : "Buch geliked");
            })
            .catch((error) => console.error("Fehler beim Liken:", error));
    }

    return (
        <>
            <div
                className="book-card"
                onMouseEnter={() => setShowActions(true)}
                onMouseLeave={() => setShowActions(false)}
                style={{
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                    padding: "1rem",
                    marginBottom: "1rem",
                    position: "relative",
                }}
            >
                <h2>{book.title}</h2>
                <img src={book.image} alt={book.title}/>
                <p>Author: {book.author}</p>
                <p>ISBN: {book.isbn}</p>

                {showActions && (
                    <div style={{marginTop: "1rem"}}>
                        <div className="actions">
                            <button onClick={navigateToDetailspage}>Bearbeiten</button>
                            <button onClick={deleteBook} style={{backgroundColor: "red"}}>Löschen</button>
                            <button
                                onClick={toggleLike}
                                style={{
                                    backgroundColor: "transparent",
                                    border: "none",
                                    cursor: "pointer",
                                    color: isLiked ? "red" : "gray",
                                    fontSize: "1.5rem",
                                }}
                            >
                                {isLiked ? "❤️" : "🤍"}
                            </button>

                        </div>
                    </div>
                )}


            </div>
        </>
    );

}





