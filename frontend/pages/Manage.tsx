import {useEffect, useState} from "react";
import axios from "axios";
import {Book} from "../src/types/Book";
import BookGallery from "../src/Componets/BookGallery";
import BookForm from "../src/Componets/BookForm.tsx";





function ManagePage() {
   /* const { id } = useParams<{ id: string }>();
    const [book, setBook] = useState<Book | null>(null);
    */

    const [allbooks, setBooks] = useState<Book[]>([]);



    // for Update
   /* const [title, setTitle] = useState<string>("");
    const [author, setAuthor] = useState<string>("");
    const [image, setImage] = useState<string>("");

    */



    function fetchData() {
        axios.get("/api/book")
            .then(response => {
                setBooks(response.data);
                console.log(response.data.title);
            })
            .catch(error => {
                console.log(error);

            });
    }
    useEffect(() => {
        fetchData();
    }, []);

   /* const deleteBook = async (isbn: string) => {
        try {
            await axios.delete(`/api/book/${isbn}`);
            alert("Buch erfolgreich gelöscht");
            navigate("/");
        } catch (error) {
            console.error("Fehler beim Löschen des Buches:", error);
            alert("Fehler beim Löschen des Buches");
        }
    };
    *
    */

   /* const updateBook = async () => {
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
*/
    if (!allbooks) {
        return <div>Buch nicht gefunden!</div>;
    }

    return (
        <div>

            <div>
                <BookForm fetchData={fetchData}/>
            </div>

            <div className="book-gallery">
                <BookGallery books={allbooks}/>

            </div>


        </div>
    );
}

export default ManagePage;
