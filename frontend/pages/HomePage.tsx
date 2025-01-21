import BookGallery from "../src/Componets/BookGallery";
import {useEffect, useState} from "react";
import {Book} from "../src/types/Book.ts";
import axios from "axios";
import './MyPage.css'





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
         <div className="homepage-container">
             <div className="homepage-header">
                 <h1>Willkommen in der Book Library!</h1>
                 <p >
                     Hier kannst du Bücher durchsuchen und deine Favoriten speichern.
                 </p>
             </div>

             <div>


                 <div className="book-gallery">
                     <BookGallery books={data}/>
                 </div>
             </div>
         </div>
     )
         ;
 }

export default HomePage;
