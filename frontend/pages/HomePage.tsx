import React, {useEffect, useState} from "react";
import BookForm from "../src/Componets/BookForm.tsx";
import BookGallery from "../src/Componets/BookGallery.tsx";
import {Book} from "../src/Book.ts";
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
                const book1: Book = {
                    author: "jim",
                    isbn: 1234,
                    image: "https://picsum.photos/50/150",
                    title: "test"
                };
                const Books: Book[] = [book1];
                setData(Books);
            });
    }

    useEffect(() => {
        fetchData();
    }, []);
    return (<>

            <div>
                <h1>Willkommen in der Book Library!</h1>
                <p>Hier kannst du Bücher durchsuchen und deine Favoriten speichern.</p>

            </div>
            <header>
                <h1>Books</h1>
                <BookForm fetchData={fetchData}/>
            </header>
            <div>
                <BookGallery books={data}/>
            </div>

        </>
    )
        ;
}

export default HomePage;
