import BookForm from "../src/Componets/BookForm";
import BookGallery from "../src/Componets/BookGallery";
import { useEffect, useState } from "react";
import { Book } from "../src/types/Book.ts";
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

     const styles = {
         container: {
             padding: "2rem",
             textAlign: "center",
             backgroundColor: "white",
             minHeight: "100vh",
         },
         header: {
             backgroundColor: "lightblue",
             padding: "1rem",
             borderRadius: "8px",
             marginBottom: "2rem",
         },
         title: {
             fontSize: "2.5rem",
             color: "darkblue",
             marginBottom: "1rem",
         },
         subtitle: {
             fontSize: "1.2rem",
             color: "darkslategray",
             marginBottom: "2rem",
         },
         content: {
             display: "flex",
             flexDirection: "column",
             alignItems: "center",
             gap: "2rem",
         },
         galleryContainer: {
             width: "100%",
             maxWidth: "1200px",
             margin: "0 auto",
         },
     };

     return (
         <div>
             <div style={styles.header}>
                 <h1 style={styles.title}>Willkommen in der Book Library!</h1>
                 <p style={styles.subtitle}>
                     Hier kannst du Bücher durchsuchen und deine Favoriten speichern.
                 </p>
             </div>

             <div >
                 <div>
                     <h2 style={{color: "darkblue", marginBottom: "1rem"}}>Books</h2>
                     <BookForm fetchData={fetchData}/>
                 </div>

                 <div style={styles.galleryContainer}>
                     <BookGallery books={data}/>
                 </div>
             </div>
         </div>
     )
         ;
 }

export default HomePage;