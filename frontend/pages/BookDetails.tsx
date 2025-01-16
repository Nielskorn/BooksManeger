import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { Book } from "../Book.ts";
import axios from "axios";



function BookDetails() {
    const { id } = useParams();
    const [data ,setData]=useState<Book>();
    function getBook(){
    axios.get("/api/book/"+id)
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
        });}
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
