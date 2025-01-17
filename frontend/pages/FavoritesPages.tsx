import {Book} from "../src/types/Book.ts";
//import BookCard from "../src/Componets/BookCard.tsx";
import BookGallery from "../src/Componets/BookGallery.tsx";
import {useEffect, useState} from "react";
import axios from "axios";



function FavoritesPage() {

    const styles = {
        container: {
            padding: "2rem",
            textAlign: "center",
            backgroundColor: "white",
            minHeight: "100vh",
        },
        title: {
            fontSize: "2.5rem",
            color: "darkgreen",
            marginBottom: "1rem",
        },
        text: {
            fontSize: "1.2rem",
            color: "darkslategray",
            marginBottom: "2rem",
        },
    };

   //
    const [data, setData] = useState<Book[]>([]);

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
        <div >
            <h1 style={styles.title}>Favoriten</h1>
            <p style={styles.text}>Hier sind deine Lieblingsbücher!</p>
     <BookGallery books={data}></BookGallery>
        </div>
);
}

export default FavoritesPage;
