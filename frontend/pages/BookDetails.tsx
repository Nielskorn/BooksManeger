import {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {Book} from "../src/types/Book.ts";



function BookDetails() {
    const { id } = useParams();
    const [data ,setData]=useState<Book>();
    function getBook(){
        axios.get("/api/book/"+id)
            .then(response => {
                setData(response.data);
                // console.log(response.data.title);
            })
            .catch(error => {
                console.log(error);
            })

    }

    useEffect(() => {
        getBook();
    }, []);

    const book=data;
    if (!book) {
        return <div>Buch nicht gefunden!</div>;
    }

    return (
        <div>
            <h1>{book.title}</h1>
            <img src={book.image} alt={book.title} />
            <p>Autor: {book.author}</p>
            <p>ISBN: {book.isbn}</p>
        </div>
    );
}

export default BookDetails;