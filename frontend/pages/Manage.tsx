import { useEffect, useState } from "react";
import axios from "axios";
import { Book } from "../src/types/Book";
import BookGallery from "../src/Componets/BookGallery";
import BookForm from "../src/Componets/BookForm.tsx";

function ManagePage() {
    const [allbooks, setBooks] = useState<Book[]>([]);


    function fetchData() {
        axios.get("/api/book")
            .then((response) => {
                setBooks(response.data);
            })
            .catch((error) => {
                console.error("Fehler beim Laden:", error);
            });
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <div>
                <BookForm fetchData={fetchData} />
            </div>

            <div className="book-gallery">
                {/* Buttons "Bearbeiten" und "Löschen" aktivieren */}
                <BookGallery books={allbooks} managePage={true} />
            </div>
        </div>
    );
}

export default ManagePage;
