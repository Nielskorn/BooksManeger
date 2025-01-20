import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {Book} from "../types/Book.ts";
import axios from "axios";

export default function BookCard(book: Book) {
    const navigate = useNavigate();
    const [showActions, setShowActions] = useState(false);


    function navigateToDetailspage() {
        navigate("/book/"+book.isbn );
    }

    function deleteBook()  {
        axios.delete("/api/book/"+book.isbn )
            .then(() => {alert("Buch erfolgreich gelöscht")
                window.location.reload()})
            .catch((error) => console.error("Fehler beim Löschen:", error));
    }

    return (
        <div className="BookCard">
            <div
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
                <img src={book.image} alt={book.title} style={{width: "150px", height: "auto"}}/>
                <p>Author: {book.author}</p>
                <p>ISBN: {book.isbn}</p>

                {showActions && (
                    <div style={{marginTop: "1rem"}}>
                        <button onClick={navigateToDetailspage}>Bearbeiten</button>
                        <button onClick={deleteBook} style={{backgroundColor: "red"}}>Löschen</button>
                    </div>
                )}

            </div>


        </div>
    )
        ;
}

