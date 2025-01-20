
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {Book} from "../src/types/Book";




export default function BookDetails() {
    const { id } = useParams<{ id: string }>();
    const [book, setBook] = useState<Book | null>(null);
    /*const [allbooks, setBooks] = useState<Book[]>([]);*/
    const navigate = useNavigate();

    // for Update
    const [title, setTitle] = useState<string>("");
    const [author, setAuthor] = useState<string>("");
    const [image, setImage] = useState<string>("");

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const response = await axios.get<Book>(`/api/book/${id}`);
                setBook(response.data);
                setTitle(response.data.title);
                setAuthor(response.data.author);
                setImage(response.data.image);
            } catch (error) {
                console.error("Fehler beim Abrufen des Buches:", error);
                alert("Fehler beim Abrufen des Buches");
            }
        };

        fetchBook();
    }, [id]);



    const deleteBook = async (isbn: string) => {
        try {
            await axios.delete(`/api/book/${isbn}`);
            alert("Buch erfolgreich gelöscht");
            navigate("/");
        } catch (error) {
            console.error("Fehler beim Löschen des Buches:", error);
            alert("Fehler beim Löschen des Buches");
        }
    };

    const updateBook = async () => {
        const updatedBook = { title, author, image, isbn: id };
        try {
            const response = await axios.put<Book>(`/api/book/${id}`, updatedBook);
            setBook(response.data);
            alert("Buch erfolgreich aktualisiert");
        } catch (error) {
            console.error("Fehler beim Aktualisieren des Buches:", error);
            alert("Fehler beim Aktualisieren des Buches");
        }
    };

    if (!book) {
        return <div>Buch nicht gefunden!</div>;
    }

    return (
        <div>
            <h1>Buchdetails</h1>
            <h2>{book.title}</h2>
            <img src={book.image} alt={book.title} />
            <p>Author: {book.author}</p>
            <p>ISBN: {book.isbn}</p>

            <div>

                <h3>Buch bearbeiten</h3>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        updateBook();
                    }}
                >
                    <label>
                        Title:
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </label>
                    <label>
                        Autor:
                        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
                    </label>
                    <label>
                        Bild-URL:
                        <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
                    </label>
                    <button type="submit">Update</button>
                </form>
            </div>

            <button onClick={() => deleteBook(book.isbn)}>Löschen</button>
        </div>
    );
}

