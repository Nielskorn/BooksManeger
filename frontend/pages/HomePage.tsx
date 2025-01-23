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
         < >
             <div className="index">
                 <h1>Willkommen in der Book Library!</h1>
                 <p >
                     Hier kannst du Bücher durchsuchen und deine Favoriten speichern.
                 </p>
             </div>

                 <div className="book-gallery">
                     <BookGallery books={data}/>
                 </div>
         </>
     )
         ;
 }

export default HomePage;
