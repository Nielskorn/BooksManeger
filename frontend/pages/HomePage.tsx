import BookForm from "../src/Componets/BookForm";
import BookGallery from "../src/Componets/BookGallery";
import {useEffect, useState} from "react";
import {Book} from "../src/types/Book.ts";
import axios from "axios";

 function HomePage() {
     const [data, setData] = useState<Book[]>([]);

     // Funktion zum Datenholen
     function fetchData() {
         axios.get("/api/book")
             .then(response => {
                 setData(response.data);
                 console.log(response.data.title);
             })
             .catch(error => {
                 console.log(error);

             });
     }



     useEffect(() => {
         fetchData();
     }, []);


     return (
        <div>
        <div>
            <h1>Willkommen in der Book Library!</h1>
            <p>Hier kannst du Bücher durchsuchen und deine Favoriten speichern.</p>

        </div>
    <div>
        <header>
            <h1>Books</h1>
            <BookForm fetchData={fetchData}/>
        </header>
        <div>
            <BookGallery books={data}/>
        </div>
        </div>

    </div>
)
    ;
}

export default HomePage;
