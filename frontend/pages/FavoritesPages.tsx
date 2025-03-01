import {Book} from "../src/types/Book.ts";
import BookGallery from "../src/Componets/BookGallery.tsx";
import {useEffect, useState} from "react";
import axios from "axios";

function FavoritesPage() {
    const [data, setData] = useState<Book[]>([]);

    function handleFavoriteRemoved(isbn: string) {
        setData((prevData) => prevData.filter((book) => book.isbn !== isbn));
    }

    // Funktion zum Datenholen
    function fetchFavorite() {
        axios.get("/api/book/fav",{
          params:{favorite:true}
        })
            .then(response => {
                setData(response.data);
                console.log(response.data.title);
            })
            .catch(error => {
                console.log(error);

            });
    }

    useEffect(() => {
        fetchFavorite();
    }, []);


    return (
        <div className="index">
            <h1>Favoriten</h1>
            <p>Hier sind deine Lieblingsbücher!</p>
            <div className="book-gallery ">
                <BookGallery books={data}
                onFavoriteRemoved={handleFavoriteRemoved} // Übergib die Funktion
                    />
            </div>
        </div>
    );
}

export default FavoritesPage;
