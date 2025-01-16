import React from "react";
import { useParams } from "react-router-dom";
import { Book } from "../Book.ts";

interface BookDetailsProps {
    books: Book[];
}

function BookDetails({ books }: BookDetailsProps) {
    const { id } = useParams();
    const book = books.find(b => b.isbn.toString() === id);

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
